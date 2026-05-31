import { NextResponse } from "next/server";
import { generateChatResponse } from "@/lib/ai-chat/provider";
import { SYSTEM_INSTRUCTION } from "@/lib/ai-chat/prompts";

// Basic in-memory rate limiting map for chat requests
const rateLimitMap = new Map<string, { count: number; lastTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 12; // Max 12 requests per minute per IP

function detectVietnamesePhoneNumber(text: string): boolean {
  const normalized = text.replace(/[\s\.\-\(\)]/g, "");
  // Match standard Vietnamese mobile formats
  const phoneRegex = /(?:0|84|\+84)(3|5|7|8|9)\d{8}/;
  return phoneRegex.test(normalized);
}

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
              reply: "Dạ anh/chị đang nhắn tin quá nhanh. Em xin phép tạm ngưng nhận câu hỏi khoảng 1 phút để tránh nghẽn luồng ạ.",
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
    if (!body || !body.message) {
      return NextResponse.json(
        { success: false, reply: "Dữ liệu yêu cầu không hợp lệ." },
        { status: 400 }
      );
    }

    const { message, history = [], industry = "general" } = body;

    // 3. Message Length Check
    if (message.length > 1000) {
      return NextResponse.json(
        { success: false, reply: "Dạ câu hỏi của anh/chị dài quá. Vui lòng rút ngắn nội dung lại dưới 1000 ký tự giúp em nhé ạ!" },
        { status: 400 }
      );
    }

    // 4. Phone Number Detection
    const hasPhone = detectVietnamesePhoneNumber(message);

    // 5. Constrain History (Limit to last 8 messages)
    const sanitizedHistory = Array.isArray(history) ? history : [];
    const cappedHistory = sanitizedHistory.slice(-8); // Keep last 8 messages

    interface ChatHistoryItem {
      sender: "bot" | "user";
      text: string;
    }

    // Add current message to the list to feed the AI
    const apiMessages = [
      ...cappedHistory.map((msg: ChatHistoryItem) => ({
        sender: msg.sender,
        text: String(msg.text || "")
      })),
      { sender: "user" as const, text: message }
    ];

    // 6. Generate Response using Provider
    // We can customize the system instruction slightly if they selected an industry in tab
    let industryInstruction = SYSTEM_INSTRUCTION;
    if (industry && industry !== "general") {
      industryInstruction += `\nLƯU Ý: Khách hàng đang xem tab Demo của ngành "${industry}". Hãy cố gắng đưa ra ví dụ thực tế liên quan đến ngành này nếu phù hợp.`;
    }

    const reply = await generateChatResponse(apiMessages, industryInstruction);

    return NextResponse.json({
      success: true,
      reply: reply,
      hasPhone: hasPhone
    });

  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error in API route chat:", error);
    }
    return NextResponse.json(
      { 
        success: false, 
        reply: "Dạ hệ thống kết nối AI của em gặp sự cố ngoài ý muốn. Anh/chị có thể để lại số điện thoại/Zalo để em liên hệ hỗ trợ trực tiếp được không ạ?" 
      },
      { status: 500 }
    );
  }
}
