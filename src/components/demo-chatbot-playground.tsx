"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import BrandLogo from "@/components/brand-logo";
import { industries, IndustryDemo } from "@/lib/industries";
import { Bot, User, Send, RotateCcw, CheckCircle, Sparkles, MessageSquare, AlertTriangle, Play, Pause, ArrowRight, Hotel, Home, GraduationCap, ShoppingBag } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
}

const industryIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Hotel: Hotel,
  Home: Home,
  Sparkles: Sparkles,
  GraduationCap: GraduationCap,
  ShoppingBag: ShoppingBag,
};

// Simulated FAQ response dictionary for direct user messages (punctuation stripped during lookup)
const simulatedResponses: Record<string, string> = {
  // Quick Actions Responses
  "gia dich vu nay nhu the nao": "Dạ gói giải pháp Website & Chatbot AI bên em có giá từ 8–18 triệu tùy quy mô và tính năng tích hợp ạ. Anh/chị có thể để lại số điện thoại/Zalo để em gửi bảng báo giá chi tiết nhé ạ!",
  "toi muon dat lich tu van trien khai": "Dạ rất vinh dự ạ! Anh/chị vui lòng nhập Họ tên và số điện thoại/Zalo, chuyên viên của Alex Minh AI sẽ chủ động liên hệ hỗ trợ mình ngay lập tức ạ!",
  "nhan qua zalo cho toi nhe": "Dạ vâng ạ, anh/chị vui lòng nhập số điện thoại đăng ký Zalo để bên em kết nối và gửi tài liệu dự án ngay nhé ạ!",

  // Tourism FAQ
  "gia phong doi cuoi tuan nay bao nhieu": "Dạ phòng đôi Deluxe bên em cuối tuần này có giá ưu đãi là 850.000đ/đêm đã bao gồm bữa sáng buffet và nước uống chào mừng ạ. Anh/chị muốn nhận phòng ngày nào ạ?",
  "khach san co gan bai tam a khong": "Dạ khách sạn nằm ngay trên đường Hồ Xuân Hương, đối diện bãi tắm A Sầm Sơn luôn ạ! Anh/chị chỉ mất khoảng 1 phút đi bộ là ra đến bãi biển rồi ạ.",
  "co cho do xe 29 cho khong em": "Dạ có ạ! Khách sạn bên em sở hữu khuôn viên đỗ xe rộng rãi, đỗ được các dòng xe du lịch từ 16 đến 45 chỗ hoàn toàn miễn phí và có bảo vệ trực 24/24 ạ.",
  "cho anh xem anh phong vip voi": "Dạ vâng, ảnh thực tế phòng VIP hướng trực diện biển em sẽ gửi ngay qua Zalo để anh/chị tiện theo dõi nhé. Anh/chị vui lòng để lại số điện thoại nha!",

  // Real estate FAQ
  "du an nay bao gio ban giao nha": "Dạ dự án dự kiến sẽ cất nóc vào cuối năm nay và bàn giao căn hộ hoàn thiện cho cư dân vào Quý II năm sau ạ. Anh/chị có muốn đăng ký tham quan thực tế không?",
  "can 2 phong ngu gia bao nhieu": "Dạ căn 2 phòng ngủ diện tích 68m² hướng ban công Đông Nam có giá khoảng 1.8 tỷ đến 2.1 tỷ tùy tầng ạ. Đang có chính sách chiết khấu 5% đó ạ.",
  "co ho tro vay ngan hang 70 khong": "Dạ có ạ! Dự án liên kết với ngân hàng hỗ trợ vay tới 70% giá trị hợp đồng, ân hạn nợ gốc và miễn lãi suất 0% trong vòng 18 tháng đầu tiên ạ.",
  "anh muon di xem nha mau cuoi tuan nay": "Dạ tuyệt vời quá! Anh/chị vui lòng để lại số điện thoại/Zalo để em đăng ký lịch hẹn và chuẩn bị xe đưa đón anh/chị tham quan nhà mẫu vào cuối tuần này nhé ạ.",

  // Spa FAQ
  "ben minh co nhung goi triet long nao": "Dạ bên em đang có liệu trình triệt lông nách, triệt tay chân và triệt toàn thân bằng công nghệ Diode Laser không đau rát. Hiện gói triệt nách đang có thử buổi đầu chỉ 99k ạ!",
  "gia lam rang su tron goi la bao nhieu": "Dạ làm răng sứ tại nha khoa có dòng sứ titan từ 1.5 triệu/răng và dòng toàn sứ cao cấp Zirconia/Cercon từ 3.5 triệu/răng ạ. Trọn gói từ 10 răng sẽ được giảm thêm 15% ạ.",
  "chieu nay 4h co trong lich lam mat khong em": "Dạ chiều nay lúc 16h00 bên em vẫn còn trống lịch của kỹ thuật viên tay nghề cao ạ. Anh/chị cho em xin tên và SĐT để em giữ lịch hẹn chăm sóc da cho mình nhé!",
  "dia chi spa minh o duong nao vay": "Dạ spa của bên em nằm tại số 128 đường Triệu Quốc Đạt, Phường Điện Biên, TP. Thanh Hóa (đối diện cổng công viên Hội An) ạ.",

  // Education FAQ
  "co khoa tieng anh cho be 6 tuoi khong": "Dạ có ạ! Bên em có khóa học tiếng Anh chuẩn Cambridge dành riêng cho các bé từ 4-6 tuổi, học qua trò chơi và tương tác trực tiếp với giáo viên bản xứ để kích hoạt phản xạ tự nhiên ạ.",
  "hoc phi lop giao tiep bao nhieu mot thang": "Dạ lớp giao tiếp cho người đi làm học phí dao động khoảng 1.2 triệu đến 1.5 triệu/tháng tùy theo lộ trình 3 tháng hay 6 tháng ạ. Đăng ký nhóm 2 người được giảm thêm 10% học phí.",
  "lich khai giang lop ielts gan nhat la khi nao": "Dạ lớp IELTS mục tiêu 6.5 dự kiến sẽ khai giảng vào tối thứ Ba tuần tới (lớp học 2-4-6 từ 18h30 đến 20h30) ạ. Hiện chỉ còn 3 suất cuối cùng thôi ạ.",
  "cho chi dang ky cho con test trinh do thu": "Dạ vâng, bên em tổ chức kiểm tra trình độ 4 kỹ năng hoàn toàn miễn phí kèm tư vấn lộ trình học. Chị vui lòng cho em xin SĐT/Zalo để chuyên viên liên hệ xếp lịch kiểm tra nhé!",

  // Ocop FAQ
  "nem chua thanh hoa lay si tu bao nhieu hop": "Dạ nem chua Thanh Hóa lấy sỉ bên em tính từ 100 cái (10 chục) trở lên là có giá sỉ đại lý rồi ạ. Nem được sản xuất mới mỗi ngày tại xưởng, bảo đảm vệ sinh an toàn thực phẩm.",
  "nem chua si bao nhieu 1 chuc": "Dạ nem chua sỉ bên em tính từ 100 cái (10 chục) là có giá sỉ tại xưởng. Anh/chị lấy nem chua dài, nem vuông hay nem thính để em báo giá tốt nhất ạ?",
  "nem chua dai lay 300 cai": "Dạ 300 cái giá sỉ cực tốt và hỗ trợ gửi xe khách giao nhanh trong ngày. Anh/chị cho em xin số điện thoại/Zalo để bộ phận sỉ gửi bảng chiết khấu nhé!",
  "phi ship ra ha noi tinh the nao": "Dạ gửi xe khách ra Hà Nội phí ship khoảng 50k - 80k tùy nhà xe, nhận hàng sau 3 tiếng. Nếu gửi chuyển phát nhanh phí khoảng 30k-40k và nhận hàng sau 1 ngày ạ.",
  "co chinh sach dai ly cho tinh nao khong": "Dạ có chính sách chiết khấu rất tốt lên tới 35% cho đại lý tỉnh ngoài lấy số lượng đều đặn, kèm hỗ trợ hình ảnh và giấy chứng nhận OCOP 4 sao để làm truyền thông ạ.",
  "bang gia cac loai che lam ben minh the nao": "Dạ chè lam phủ gừng bên em có gói nhỏ 250g giá sỉ là 15k (bán lẻ 25k) và hộp giấy cao cấp làm quà biếu giá sỉ 35k (bán lẻ 55k) ạ. Anh/chị lấy sỉ số lượng bao nhiêu ạ?"
};

export default function DemoChatbotPlayground() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasSubmittedLead, setHasSubmittedLead] = useState(false);

  // Auto-play control states
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentScriptIndex, setCurrentScriptIndex] = useState(0);
  const [showCrmAlerts, setShowCrmAlerts] = useState(false);

  const chatBodyRef = useRef<HTMLDivElement>(null);

  const [heroTypingText, setHeroTypingText] = useState("");
  const fullHeroText = "Xin chào, em là chatbot AI tư vấn khách hàng của Alex Minh AI. Anh/chị hãy chọn ngành nghề và trải nghiệm em ngay bên dưới nhé. 👇";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setHeroTypingText(fullHeroText.slice(0, index + 1));
      index++;
      if (index >= fullHeroText.length) {
        clearInterval(interval);
      }
    }, 35);
    return () => clearInterval(interval);
  }, []);

  const scrollToDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("demo-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const submitChatbotLead = useCallback(async (formData: Record<string, string>) => {
    if (hasSubmittedLead) return;
    setHasSubmittedLead(true);

    try {
      const industryObj = industries.find(i => i.id === formData.industry) || { name: "Lĩnh vực khác" };
      const industryName = formData.industry === "other" ? "Lĩnh vực khác" : industryObj.name;
      
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.userName || "Khách Xem Demo",
          phone: formData.userPhone || "0789284078",
          industry: industryName,
          serviceInterest: "Dùng thử Chatbot Demo",
          budget: "Chưa khảo sát",
          message: `Mô phỏng tự động chatbot theo ngành.`,
          source: "chatbot",
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      if (!response.ok) {
        throw new Error("Lỗi lưu lead chatbot");
      }

      trackEvent("chatbot_lead_submit_success", {
        industry: industryName,
        source: "page",
      });
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("Lỗi gửi chatbot lead:", error);
      }
    }
  }, [hasSubmittedLead]);

  // Load initial industry from query parameter if present
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const industryParam = params.get("industry");
      if (industryParam) {
        const found = industries.find((i) => i.id === industryParam);
        if (found) {
          const initTimer = setTimeout(() => {
            setSelectedIndustry(found);
            setMessages([]);
            setCurrentScriptIndex(0);
            setIsAutoPlaying(true);
            setShowCrmAlerts(false);
          }, 0);
          return () => clearTimeout(initTimer);
        }
      }
    }
  }, []);

  const handleReset = useCallback(() => {
    setInputValue("");
    setHasSubmittedLead(false);
    setShowCrmAlerts(false);
    setMessages([]);
    setCurrentScriptIndex(0);
    setIsAutoPlaying(true);
  }, []);

  const handleIndustryChange = (ind: IndustryDemo) => {
    setSelectedIndustry(ind);
    setInputValue("");
    setHasSubmittedLead(false);
    setShowCrmAlerts(false);
    setMessages([]);
    setCurrentScriptIndex(0);
    setIsAutoPlaying(true);
  };

  // Auto-play state machine engine
  useEffect(() => {
    if (!isAutoPlaying) return;

    const script = selectedIndustry.conversationScript;
    if (currentScriptIndex >= script.length) {
      const finishTimer = setTimeout(() => {
        setIsAutoPlaying(false);
      }, 0);
      return () => clearTimeout(finishTimer);
    }

    const currentMsg = script[currentScriptIndex];

    if (currentMsg.sender === "user") {
      // User script response: wait 1500ms before sending
      const timer = setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            sender: "user",
            text: currentMsg.text,
          },
        ]);
        setCurrentScriptIndex((prev) => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      // Bot script response: show typing indicator first
      const typingTimer = setTimeout(() => {
        setIsTyping(true);
      }, 0);

      if (currentScriptIndex === 0) {
        // First greeting message of bot, send almost immediately (500ms) with typing delay
        const timer1 = setTimeout(() => {
          setIsTyping(false);
          setMessages([
            {
              id: "start-bot",
              sender: "bot",
              text: currentMsg.text,
            },
          ]);
          setCurrentScriptIndex((prev) => prev + 1);
        }, 650);
        return () => {
          clearTimeout(typingTimer);
          clearTimeout(timer1);
        };
      } else {
        // Subsequent bot messages: show typing for 800ms
        const timer2 = setTimeout(() => {
          setIsTyping(false);
          setMessages((prev) => [
            ...prev,
            {
              id: Math.random().toString(),
              sender: "bot",
              text: currentMsg.text,
            },
          ]);
          // Check if this was the final bot message (which captures phone/lead)
          if (currentScriptIndex === script.length - 1) {
            setIsAutoPlaying(false);
            // Trigger CRM simulated toast syncing alerts!
            setShowCrmAlerts(true);
            // Also submit mock lead under the hood
            submitChatbotLead({
              industry: selectedIndustry.id,
              userName: "Khách Xem Demo (" + selectedIndustry.name + ")",
              userPhone: "0789 284 078",
            });
          } else {
            setCurrentScriptIndex((prev) => prev + 1);
          }
        }, 900);
        return () => {
          clearTimeout(typingTimer);
          clearTimeout(timer2);
        };
      }
    }
  }, [isAutoPlaying, currentScriptIndex, selectedIndustry, submitChatbotLead]);

  const processUserMessage = useCallback((text: string) => {
    setIsAutoPlaying(false); // Stop autoplay when user takes action

    setMessages((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        sender: "user",
        text: text,
      },
    ]);

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      
      // Normalize search text (remove punctuation & convert to unsigned/simple representation)
      const cleanText = text
        .trim()
        .toLowerCase()
        .replace(/[?.,!]/g, "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove Vietnamese accents for high tolerance matching
        .replace(/d/g, "d");

      // 1. Check if the message is in simulated responses dictionary
      let matchedResponse = "";
      for (const key in simulatedResponses) {
        const cleanKey = key
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        if (cleanText === cleanKey || cleanText.includes(cleanKey)) {
          matchedResponse = simulatedResponses[key];
          break;
        }
      }

      if (matchedResponse) {
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            sender: "bot",
            text: matchedResponse,
          },
        ]);
        return;
      }

      // 2. Check if the user is typing a phone number
      const phoneRegex = /^(0|84|\+84)(3|5|7|8|9)\d{8}$/;
      const cleanedPhone = text.trim().replace(/[\s\.\-\(\)]/g, "");
      if (phoneRegex.test(cleanedPhone) || (cleanedPhone.length >= 10 && !isNaN(Number(cleanedPhone)))) {
        // Trigger lead submission under the hood
        submitChatbotLead({
          industry: selectedIndustry.id,
          userName: "Khách Chat Trực Tiếp",
          userPhone: text.trim(),
        });

        // Trigger CRM toast sync alerts
        setShowCrmAlerts(true);

        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            sender: "bot",
            text: `Dạ em đã nhận được số điện thoại của anh/chị. Đội ngũ Alex Minh AI sẽ chủ động liên hệ gửi tài liệu chi tiết qua Zalo và hỗ trợ mình ngay nhé!`,
          },
        ]);
        return;
      }

      // 3. Fallback default response if not matching
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: "bot",
          text: `Dạ câu hỏi này chuyên sâu quá, em chưa được huấn luyện kịch bản trả lời chi tiết. Anh/chị có thể để lại số điện thoại/Zalo để chuyên viên của Alex Minh AI trực tiếp hỗ trợ mình được không ạ?`,
        },
      ]);
    }, 850);
  }, [selectedIndustry, submitChatbotLead]);

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const text = inputValue.trim();
    setInputValue("");
    processUserMessage(text);
  };

  // Scroll to bottom of chat body only (internal scroll)
  useEffect(() => {
    requestAnimationFrame(() => {
      if (chatBodyRef.current) {
        chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
      }
    });
  }, [messages, isTyping]);

  return (
    <div className="relative pt-32 pb-24 overflow-hidden bg-background">
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

      {/* Background Decor */}
      <div className="glow-bg bg-primary/10 w-[40rem] h-[40rem] -top-40 -right-40 animate-pulse" style={{ animationDuration: "10s" }}></div>
      <div className="glow-bg bg-secondary/5 w-[30rem] h-[30rem] bottom-10 -left-40 animate-pulse" style={{ animationDuration: "8s" }}></div>

      {/* Styled slideUp keyframes for real chat animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .message-bubble {
          animation: slideUp 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        
        {/* Page Header / Hero Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 relative z-10 text-left">
          
          {/* Left Column: Headline & Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Eyebrow badge */}
            <div className="self-start inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="h-3.5 w-3.5 text-secondary animate-pulse" />
              <span>Trải nghiệm trực quan</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Xin chào, em là <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-cyan-300 bg-clip-text text-transparent">
                Chatbot AI Tư Vấn
              </span>
            </h1>
            
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Em là chatbot AI tư vấn khách hàng của Alex Minh AI. Anh/chị hãy chọn ngành nghề và trải nghiệm năng lực phản hồi 24/7, tự động thu lead và gửi thông tin qua Zalo của em ngay bên dưới nhé.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToDemo}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:from-primary-hover hover:to-secondary-hover text-sm font-bold tracking-wide shadow-[0_4px_15px_rgba(0,229,255,0.25)] transition-all hover:-translate-y-0.5 text-center flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Trải nghiệm ngay bên dưới
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={scrollToDemo}
                className="px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white text-sm font-bold tracking-wide transition-all hover:-translate-y-0.5 text-center cursor-pointer"
              >
                Chọn ngành & bắt đầu chat
              </button>
            </div>

            {/* Benefit chips */}
            <div className="pt-6 flex flex-wrap gap-4 border-t border-slate-900/40">
              {[
                "⚡ Phản hồi tự động 24/7",
                "🎯 Thu lead khách hàng tự động",
                "💬 Tư vấn theo kịch bản ngành"
              ].map((chip, idx) => (
                <div key={idx} className="flex items-center gap-1.5 px-3 py-1 text-slate-350 text-xs font-semibold">
                  <span>{chip}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Speaking Logo Visual */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Ambient glows behind the speaking character */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[24rem] h-[24rem] bg-gradient-to-br from-primary/10 to-secondary/5 rounded-full blur-[80px] pointer-events-none opacity-80"></div>
            
            {/* Character Block */}
            <div className="relative z-10 flex flex-col items-center gap-6 max-w-sm w-full">
              
              {/* Speech Bubble */}
              <div className="relative w-full glass p-5 rounded-2xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)] animate-[slideUp_0.4s_ease-out_0.2s_both] before:content-[''] before:absolute before:-bottom-3 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-6 before:bg-[#0c1224] before:border-r before:border-b before:border-white/10 before:rotate-45 before:-z-10 bg-[#0c1224]/90">
                
                {/* Header of speech bubble */}
                <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-white/5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">AI Đang nói</span>
                </div>

                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-semibold min-h-[64px] transition-all">
                  {heroTypingText}
                  <span className="inline-block w-1.5 h-3.5 ml-1 bg-secondary animate-pulse"></span>
                </p>
              </div>

              {/* Character Base (The pulsing logo) */}
              <div className="relative group mt-3">
                {/* Pulse waves */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-md animate-pulse"></div>
                
                <div className="relative p-5 rounded-2xl bg-[#0b1220]/90 border border-slate-800 shadow-2xl flex items-center justify-center transition-all duration-300 hover:border-secondary/30">
                  <BrandLogo variant="full" />
                </div>

                {/* Status indicator badge */}
                <div className="absolute -top-1.5 -right-1.5 h-4 w-4 bg-emerald-500 rounded-full border-2 border-slate-950 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 bg-emerald-200 rounded-full animate-ping"></div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Playground Main Content (3-Column Workspace) */}
        <div id="demo-section" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[320px_1fr_340px] gap-8 items-start max-w-[1720px] mx-auto scroll-mt-28 w-full">
          
          {/* Column 1: Chọn ngành kinh doanh */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 order-1 lg:order-1 lg:sticky lg:top-28 flex flex-col space-y-4 w-full">
            <h3 className="text-white font-bold text-sm sm:text-base uppercase tracking-wider flex items-center gap-2 px-1">
              <span className="h-5 w-5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary flex items-center justify-center text-[10px] font-extrabold shadow-sm">1</span>
              Chọn ngành kinh doanh
            </h3>
            
            {/* Industry selector tab cards */}
            <div className="bg-[#0e1626]/60 border border-slate-800/80 p-4.5 rounded-3xl flex flex-col space-y-4 shadow-xl">
              <div className="flex flex-col gap-3">
                {industries.map((ind) => {
                  const IndIcon = industryIconMap[ind.icon] || Sparkles;
                  const isActive = selectedIndustry.id === ind.id;
                  
                  return (
                    <button
                      key={ind.id}
                      onClick={() => handleIndustryChange(ind)}
                      className={`text-left w-full p-3.5 rounded-2xl text-xs transition-all border flex items-start gap-3.5 cursor-pointer relative group ${
                        isActive
                          ? "bg-secondary/10 border-secondary/50 text-white shadow-[0_0_15px_rgba(0,229,255,0.08)]"
                          : "bg-slate-900/50 border-slate-850 hover:border-slate-700 text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <div className={`p-2.5 rounded-xl border shrink-0 mt-0.5 transition-all ${
                        isActive 
                          ? "bg-secondary/20 border-secondary/30 text-secondary" 
                          : "bg-slate-800/60 border-slate-750 text-slate-455 group-hover:text-slate-300"
                      }`}>
                        <IndIcon className="h-4.5 w-4.5" />
                      </div>
                      
                      <div className="flex-grow">
                        <div className="font-bold text-slate-100 flex items-center justify-between">
                          <span>{ind.name.split(" / ")[0]}</span>
                          {isActive && (
                            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
                          )}
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1 leading-normal line-clamp-1 group-hover:text-slate-300">
                          {ind.botCapability}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Note card / Disclaimer */}
            <div className="p-4 bg-slate-900/40 border border-slate-850 rounded-2xl text-slate-400 font-medium shadow-md">
              <div className="flex items-center gap-2 mb-1.5 text-slate-300 text-xs font-bold">
                <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0" />
                <span>Lưu ý về bản giả lập</span>
              </div>
              <p className="text-[10px] leading-relaxed text-slate-450">
                Trình giả lập mô phỏng quy trình hoạt động của chatbot theo kịch bản mẫu. Chatbot AI thực tế khi bàn giao sẽ được huấn luyện sâu theo dữ liệu riêng biệt của doanh nghiệp và tự xử lý các tình huống phức tạp.
              </p>
            </div>
          </div>

          {/* Column 3: Bấm thử câu hỏi mẫu */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 order-2 lg:order-3 lg:sticky lg:top-28 flex flex-col space-y-4 w-full">
            <h3 className="text-white font-bold text-sm sm:text-base uppercase tracking-wider flex items-center gap-2 px-1">
              <span className="h-5 w-5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary flex items-center justify-center text-[10px] font-extrabold shadow-sm">3</span>
              Bấm thử câu hỏi mẫu
            </h3>
            
            <div className="bg-[#0e1626]/60 border border-slate-800/80 p-5 rounded-3xl flex flex-col space-y-5 shadow-xl">
              <p className="text-[11px] text-slate-400 leading-normal mb-1">
                Click câu hỏi để thử khả năng giải đáp hoặc tự động lấy thông tin liên hệ của trợ lý AI:
              </p>
              
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">💬 Câu hỏi phổ biến</span>
                <div className="flex flex-col gap-2">
                  {selectedIndustry.exampleQuestions.slice(0, 2).map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => processUserMessage(q)}
                      className="text-left w-full px-4 py-3 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-850 hover:border-secondary/40 text-slate-300 hover:text-white rounded-xl text-xs leading-normal transition-all cursor-pointer flex items-center justify-between group"
                    >
                      <span className="pr-2">“{q}”</span>
                      <ArrowRight className="h-3 w-3 text-slate-650 group-hover:text-secondary transition-colors shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-800/40">
                <span className="text-[10px] font-bold text-amber-400/90 uppercase tracking-widest block mb-1">🎯 Kịch bản chốt Lead</span>
                <div className="flex flex-col gap-2">
                  {selectedIndustry.exampleQuestions.slice(2).map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => processUserMessage(q)}
                      className="text-left w-full px-4 py-3 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-850 hover:border-amber-500/40 text-slate-300 hover:text-white rounded-xl text-xs leading-normal transition-all cursor-pointer flex items-center justify-between group"
                    >
                      <span className="pr-2">“{q}”</span>
                      <ArrowRight className="h-3 w-3 text-slate-650 group-hover:text-amber-400 transition-colors shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Trò chuyện với trợ lý AI */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 order-3 lg:order-2 flex flex-col space-y-4 w-full">
            <h3 className="text-white font-bold text-sm sm:text-base uppercase tracking-wider flex items-center gap-2 px-1">
              <span className="h-5 w-5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary flex items-center justify-center text-[10px] font-extrabold shadow-sm">2</span>
              Trò chuyện với trợ lý AI
            </h3>
            
            {/* Main Chat Simulator Workspace */}
            <div className="w-full flex flex-col h-[590px] rounded-3xl bg-[#0a0f1d] border border-slate-800 shadow-2xl relative overflow-hidden">
              
              {/* Simulated Sync Alerts (CRM Popups) */}
              {showCrmAlerts && (
                <div className="absolute bottom-28 right-4 z-20 flex flex-col gap-2 max-w-[280px] pointer-events-none">
                  <div className="glass px-3.5 py-2.5 rounded-xl border border-emerald-500/30 bg-emerald-950/60 text-emerald-300 text-[10px] font-bold flex items-center gap-2 shadow-[0_4px_12px_rgba(16,185,129,0.15)] animate-[slideUp_0.3s_ease-out]">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></div>
                    <span>✓ Lead saved to Google Sheets!</span>
                  </div>
                  <div className="glass px-3.5 py-2.5 rounded-xl border border-cyan-500/30 bg-cyan-950/60 text-cyan-300 text-[10px] font-bold flex items-center gap-2 shadow-[0_4px_12px_rgba(6,182,212,0.15)] animate-[slideUp_0.3s_ease-out_0.2s_both]">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping"></div>
                    <span>⚡ Telegram notification sent to Admin!</span>
                  </div>
                </div>
              )}

              {/* Chat Simulator Header */}
              <div className="bg-[#0c1224] px-5 py-4 flex items-center justify-between border-b border-slate-800/80">
                <div className="flex items-center space-x-3.5">
                  <div className="relative">
                    <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary border border-secondary/20">
                      <Bot className="h-5 w-5" />
                    </div>
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-[#0a0f1d] animate-pulse"></span>
                  </div>
                  
                  <div>
                    <h4 className="text-white text-sm font-bold leading-tight">
                      Trợ lý AI - {selectedIndustry.name.split(" / ")[0]}
                    </h4>
                    <span className="text-[10px] text-emerald-400/90 font-medium flex items-center gap-1.5">
                      <span>• Trực tuyến 24/7</span>
                      {isAutoPlaying && (
                        <span className="text-amber-400/90 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20 text-[9px] font-bold uppercase tracking-wider animate-pulse">
                          Auto Demo
                        </span>
                      )}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {/* Auto Play / Pause Toggle */}
                  <button
                    onClick={() => {
                      setIsAutoPlaying(!isAutoPlaying);
                      if (!isAutoPlaying) {
                        setShowCrmAlerts(false);
                      }
                    }}
                    className={`p-2 rounded-xl transition-all flex items-center gap-1 text-[11px] font-bold border cursor-pointer ${
                      isAutoPlaying 
                        ? "text-amber-400 bg-amber-500/10 border-amber-500/20 hover:bg-amber-500/20" 
                        : "text-slate-400 bg-slate-900 border-slate-800 hover:text-white hover:border-slate-700"
                    }`}
                    title={isAutoPlaying ? "Dừng chạy demo tự động" : "Bắt đầu chạy demo tự động"}
                  >
                    {isAutoPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                    <span className="hidden sm:inline">{isAutoPlaying ? "Dừng chạy" : "Chạy tự động"}</span>
                  </button>

                  {/* Reset Button */}
                  <button
                    onClick={handleReset}
                    className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-855 border border-slate-800 transition-all flex items-center gap-1 text-[11px] font-bold cursor-pointer"
                    title="Khởi động lại cuộc hội thoại"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Reset</span>
                  </button>
                </div>
              </div>

              {/* Real-time Status Indicator Bar */}
              <div className="bg-[#0b1325]/85 px-5 py-2.5 border-b border-slate-800/40 flex items-center justify-between text-[11px] font-medium transition-all">
                <div className="flex items-center gap-2">
                  {isTyping ? (
                    <>
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                      </span>
                      <span className="text-amber-400 font-bold">Trợ lý AI đang phản hồi...</span>
                    </>
                  ) : showCrmAlerts ? (
                    <>
                      <span className="relative flex h-2 w-2">
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-emerald-400 font-bold">Đã lưu Lead & Báo Telegram thành công!</span>
                    </>
                  ) : (
                    <>
                      <span className="relative flex h-2 w-2">
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-slate-400 font-bold">Trợ lý AI đang Online</span>
                    </>
                  )}
                </div>

                {/* Sync badges */}
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-bold border transition-all ${
                    showCrmAlerts 
                      ? "bg-emerald-950/50 border-emerald-500/30 text-emerald-400" 
                      : "bg-slate-900 border-slate-850 text-slate-500"
                  }`}>
                    Sheets Synced
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[9px] font-bold border transition-all ${
                    showCrmAlerts 
                      ? "bg-cyan-950/50 border-cyan-500/30 text-cyan-400" 
                      : "bg-slate-900 border-slate-850 text-slate-500"
                  }`}>
                    Telegram Sent
                  </span>
                </div>
              </div>

              {/* Live Chat Message Area */}
              <div ref={chatBodyRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-[#0a0f1d] to-[#080c18] no-scrollbar">
                {messages.length === 0 && !isTyping && (
                  <div className="text-center py-12 text-slate-500 text-xs">
                    Chưa có tin nhắn nào. Đang chuẩn bị kịch bản...
                  </div>
                )}
                
                {messages.map((msg) => {
                  const isBot = msg.sender === "bot";
                  return (
                    <div
                      key={msg.id}
                      className={`flex items-start gap-3 message-bubble ${
                        isBot ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      {/* Message Sender Icon Bubble */}
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border text-[11px] ${
                          isBot
                            ? "bg-slate-900 text-slate-350 border-slate-800"
                            : "bg-secondary text-white border-secondary/20"
                        }`}
                      >
                        {isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                      </div>
                      
                      {/* Message Bubble Content */}
                      <div className={`rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed max-w-[80%] shadow-md ${
                        isBot
                          ? "bg-[#11192e] text-slate-100 border border-slate-800/80 rounded-tl-none"
                          : "bg-gradient-to-r from-primary to-blue-600 text-white rounded-tr-none"
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  );
                })}

                {/* Real-time Typing indicator dot sequence */}
                {isTyping && (
                  <div className="flex items-start gap-3 message-bubble">
                    <div className="w-8 h-8 rounded-xl bg-slate-900 text-slate-350 border border-slate-800 flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-[#11192e] border border-slate-800/80 rounded-2xl rounded-tl-none px-4 py-3 flex items-center space-x-1 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0s" }}></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0.4s" }}></span>
                    </div>
                  </div>
                )}
              </div>

              {/* Input & Action Footer Block */}
              <div className="border-t border-slate-800/80 bg-[#070b14] pt-3 pb-4">
                
                {/* Quick Actions floating above input */}
                <div className="flex gap-2 pb-3 px-4 overflow-x-auto no-scrollbar scroll-smooth">
                  {[
                    { label: "💰 Báo giá dịch vụ", text: "Giá dịch vụ này như thế nào?" },
                    { label: "📅 Đặt lịch tư vấn", text: "Tôi muốn đặt lịch tư vấn triển khai." },
                    { label: "📞 Gửi số Zalo", text: "Nhắn qua Zalo cho tôi nhé." }
                  ].map((pill, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        processUserMessage(pill.text);
                      }}
                      className="shrink-0 px-3.5 py-1.5 bg-[#0e1626]/80 hover:bg-slate-800 border border-slate-800 hover:border-secondary/30 text-slate-300 hover:text-white rounded-full text-[10px] sm:text-[11px] font-semibold transition-all cursor-pointer shadow-sm"
                    >
                      {pill.label}
                    </button>
                  ))}
                </div>

                {/* Text Area Form */}
                <form onSubmit={handleInputSubmit} className="flex gap-2 px-4">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Nhập câu trả lời hoặc bấm câu hỏi mẫu bên phải..."
                    className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-secondary/40 focus:ring-1 focus:ring-secondary/15 transition-all"
                  />
                  
                  <button
                    type="submit"
                    disabled={!inputValue.trim()}
                    className="px-5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-xs transition-all disabled:opacity-50 flex items-center justify-center shrink-0 cursor-pointer shadow-md hover:shadow-primary/10 shadow-primary/5"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>

                {/* Simulated capture alert confirmation state */}
                {showCrmAlerts && (
                  <div className="flex items-center justify-center py-2 text-center text-[10px] sm:text-xs font-semibold text-emerald-400 space-x-1.5 mt-2 animate-pulse">
                    <CheckCircle className="h-4 w-4" />
                    <span>Hệ thống AI đã lưu thông tin và báo Telegram thành công!</span>
                    <button
                      onClick={handleReset}
                      className="text-secondary hover:underline ml-2 font-bold"
                    >
                      Thử lại
                    </button>
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>

        {/* Next Step Consult Prompt */}
        <div className="text-center mt-20 relative max-w-2xl mx-auto p-8 rounded-3xl border border-slate-800/80 bg-[#0e1626]/40 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-55"></div>
          
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Bạn muốn sở hữu trợ lý AI thông minh thế này?
            </h3>
            
            <p className="text-slate-400 text-xs sm:text-sm mb-8 leading-relaxed">
              Alex Minh AI cung cấp dịch vụ huấn luyện Chatbot AI thông minh chuyên sâu cho từng doanh nghiệp, kết nối API đồng bộ CRM, Telegram, Google Sheets mượt mà.
            </p>
            
            <Link
              href="/lien-he"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:from-primary-hover hover:to-secondary-hover text-xs font-bold tracking-wide shadow-[0_4px_15px_rgba(0,229,255,0.2)] transition-all hover:-translate-y-0.5"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Đăng ký thiết kế chatbot riêng</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
