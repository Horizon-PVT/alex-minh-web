import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

// In-memory rate limiting map for serverless instances (basic spam protection)
const rateLimitMap = new Map<string, { count: number; lastTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5; // Allow max 5 submissions per minute per IP

export async function POST(request: Request) {
  try {
    // 1. Rate Limiting Check
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown-ip";
    const now = Date.now();
    const clientLimit = rateLimitMap.get(ip);

    if (clientLimit) {
      if (now - clientLimit.lastTime < RATE_LIMIT_WINDOW) {
        if (clientLimit.count >= MAX_REQUESTS_PER_WINDOW) {
          return NextResponse.json(
            {
              success: false,
              message: "Bạn đang gửi yêu cầu quá nhanh. Vui lòng thử lại sau 1 phút.",
            },
            { status: 429 }
          );
        }
        clientLimit.count += 1;
      } else {
        clientLimit.count = 1;
        clientLimit.lastTime = now;
      }
    } else {
      rateLimitMap.set(ip, { count: 1, lastTime: now });
    }

    // 2. Parse request body
    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { success: false, message: "Dữ liệu yêu cầu không hợp lệ." },
        { status: 400 }
      );
    }

    const {
      fullName,
      phone,
      industry,
      serviceInterest,
      budget,
      message,
      source,
      pageUrl,
      email_confirm, // Honeypot field
    } = body;

    // 3. Honeypot Check (Spam Bot Protection)
    if (email_confirm) {
      if (process.env.NODE_ENV === "development") {
        console.warn("Honeypot field triggered. Silently ignoring submission.");
      }
      // Silently return success to make the bot think it succeeded
      return NextResponse.json({
        success: true,
        message: "Thông tin đăng ký đã được ghi nhận.",
      });
    }

    // 4. Server-side Validation
    const cleanFullName = String(fullName || "").trim();
    const cleanPhone = String(phone || "").trim().replace(/[\s\.\-\(\)]/g, "");
    const cleanIndustry = String(industry || "Không xác định").trim();
    const cleanService = String(serviceInterest || "Tư vấn chung").trim();
    const cleanBudget = String(budget || "Chưa khảo sát").trim();
    const cleanMessage = String(message || "Không có").trim();
    const cleanSource = String(source || "lead-form").trim();
    const cleanPageUrl = String(pageUrl || siteConfig.domain).trim();

    if (!cleanFullName) {
      return NextResponse.json(
        { success: false, message: "Họ và tên không được để trống." },
        { status: 400 }
      );
    }
    if (cleanFullName.length > 100) {
      return NextResponse.json(
        { success: false, message: "Họ và tên vượt quá độ dài tối đa." },
        { status: 400 }
      );
    }

    const phoneRegex = /^(0|84|\+84)(3|5|7|8|9)\d{8}$/;
    if (!cleanPhone) {
      return NextResponse.json(
        { success: false, message: "Số điện thoại không được để trống." },
        { status: 400 }
      );
    }
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { success: false, message: "Số điện thoại không đúng định dạng Việt Nam." },
        { status: 400 }
      );
    }

    if (cleanSource !== "lead-form" && cleanSource !== "chatbot") {
      return NextResponse.json(
        { success: false, message: "Nguồn dữ liệu không hợp lệ." },
        { status: 400 }
      );
    }

    if (cleanMessage.length > 1000) {
      return NextResponse.json(
        { success: false, message: "Ghi chú vượt quá độ dài tối đa." },
        { status: 400 }
      );
    }

    const createdAt = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
    const userAgent = request.headers.get("user-agent") || "unknown";

    // 5. Google Sheet Integration
    const sheetWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
    const sheetSecret = process.env.GOOGLE_SHEET_WEBHOOK_SECRET || "";
    let sheetSuccess = false;
    let sheetErrorMsg = "";

    if (sheetWebhookUrl) {
      try {
        // Build query params to support Apps Scripts using e.parameter (URL params/form-urlencoded fallback)
        const queryParams = new URLSearchParams({
          secret: sheetSecret,
          fullName: cleanFullName,
          phone: cleanPhone,
          industry: cleanIndustry,
          serviceInterest: cleanService,
          budget: cleanBudget,
          message: cleanMessage,
          source: cleanSource,
          pageUrl: cleanPageUrl,
          ip: ip,
          userAgent: userAgent,
          createdAt: createdAt,
        });

        const targetUrl = `${sheetWebhookUrl}?${queryParams.toString()}`;

        const sheetResponse = await fetch(targetUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            secret: sheetSecret,
            fullName: cleanFullName,
            phone: cleanPhone,
            industry: cleanIndustry,
            serviceInterest: cleanService,
            budget: cleanBudget,
            message: cleanMessage,
            source: cleanSource,
            pageUrl: cleanPageUrl,
            ip: ip,
            userAgent: userAgent,
            createdAt: createdAt,
            // Add lead wrapper to satisfy user's active Apps Script deployment
            lead: {
              secret: sheetSecret,
              fullName: cleanFullName,
              phone: cleanPhone,
              industry: cleanIndustry,
              serviceInterest: cleanService,
              budget: cleanBudget,
              message: cleanMessage,
              source: cleanSource,
              pageUrl: cleanPageUrl,
              ip: ip,
              userAgent: userAgent,
              createdAt: createdAt,
            }
          }),
        });

        if (sheetResponse.ok) {
          const sheetResult = await sheetResponse.json().catch(() => null);
          if (sheetResult) {
            // Check for various common success patterns from different Apps Script templates
            const isSuccess = 
              sheetResult.status === "success" || 
              sheetResult.result === "success" || 
              sheetResult.status === "Lead saved" ||
              sheetResult.message === "Lead saved" ||
              sheetResult.message === "Lead appended successfully." ||
              String(sheetResult.message || "").toLowerCase().includes("success") ||
              String(sheetResult.status || "").toLowerCase().includes("success") ||
              String(sheetResult.result || "").toLowerCase().includes("success");

            if (isSuccess) {
              sheetSuccess = true;
            } else {
              sheetErrorMsg = sheetResult.message || sheetResult.error || "Apps Script rejected submission";
            }
          } else {
            // If response is ok but JSON parsing failed (e.g. plain text response like "Lead saved"), treat as success
            sheetSuccess = true;
          }
        } else {
          sheetErrorMsg = `HTTP error ${sheetResponse.status}`;
        }
      } catch (err) {
        sheetErrorMsg = err instanceof Error ? err.message : "Failed to fetch Apps Script";
      }
    } else {
      // If we are in development, simulate success but log a warning
      if (process.env.NODE_ENV === "development") {
        console.warn("WARNING: GOOGLE_SHEET_WEBHOOK_URL environment variable is missing. Simulating success in development mode.");
        sheetSuccess = true;
      } else {
        return NextResponse.json(
          {
            success: false,
            message: "Hệ thống ghi nhận thông tin gặp sự cố cấu hình (Thiếu Sheet Webhook). Vui lòng liên hệ trực tiếp hotline.",
          },
          { status: 500 }
        );
      }
    }

    if (!sheetSuccess && process.env.NODE_ENV !== "development") {
      return NextResponse.json(
        {
          success: false,
          message: `Lưu trữ thông tin thất bại: ${sheetErrorMsg}. Vui lòng thử lại sau.`,
        },
        { status: 502 }
      );
    }

    // 6. Telegram Alert Integration
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (telegramToken && telegramChatId) {
      try {
        // Compile plain text alert message to avoid markdown entity parsing crashes
        const alertMessage = 
`🔔 LEAD MỚI TỪ ALEX MINH AI 🔔
────────────────────────
👤 Họ tên: ${cleanFullName}
📞 SĐT/Zalo: ${cleanPhone}
🏢 Ngành: ${cleanIndustry}
💡 Dịch vụ: ${cleanService}
💰 Ngân sách: ${cleanBudget}
💬 Ghi chú: ${cleanMessage}
📢 Nguồn: ${cleanSource === "lead-form" ? "Form Đăng Ký Website" : "Chatbot AI Demo"}
🔗 Trang: ${cleanPageUrl}
⏰ Thời gian: ${createdAt}
────────────────────────`;

        await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: alertMessage,
          }),
        });
      } catch (err) {
        // Log warning on server, do not fail client response if Google Sheet saved successfully
        console.error("Telegram alert failed to send:", err);
      }
    } else {
      if (process.env.NODE_ENV === "development") {
        console.warn("WARNING: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID environment variable is missing.");
      }
    }

    // 7. Success Response
    return NextResponse.json({
      success: true,
      message: "Alex Minh AI đã nhận thông tin và sẽ liên hệ lại sớm.",
    });

  } catch (error) {
    console.error("Fatal error inside API route:", error);
    return NextResponse.json(
      { success: false, message: "Đã xảy ra lỗi hệ thống nghiêm trọng." },
      { status: 500 }
    );
  }
}

// Handle other methods
export async function GET() {
  return NextResponse.json({ success: false, message: "Phương thức không được hỗ trợ." }, { status: 405 });
}
export async function PUT() {
  return NextResponse.json({ success: false, message: "Phương thức không được hỗ trợ." }, { status: 405 });
}
export async function DELETE() {
  return NextResponse.json({ success: false, message: "Phương thức không được hỗ trợ." }, { status: 405 });
}
export async function PATCH() {
  return NextResponse.json({ success: false, message: "Phương thức không được hỗ trợ." }, { status: 405 });
}
export async function OPTIONS() {
  return NextResponse.json({ success: false, message: "Phương thức không được hỗ trợ." }, { status: 405 });
}
