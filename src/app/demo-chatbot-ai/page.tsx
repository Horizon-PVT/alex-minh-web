"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { industries, IndustryDemo } from "@/lib/industries";
import { chatbotScript } from "@/lib/chatbot-script";
import { Bot, User, Send, RotateCcw, CheckCircle, Sparkles, MessageSquare, AlertTriangle } from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
}

// Simulated FAQ response dictionary for high fidelity demo
const simulatedResponses: Record<string, string> = {
  // Tourism FAQ
  "giá phòng đôi cuối tuần này bao nhiêu?": "Dạ phòng đôi Deluxe bên em cuối tuần này có giá ưu đãi là 850.000đ/đêm đã bao gồm bữa sáng buffet và nước uống chào mừng ạ. Anh/chị muốn nhận phòng ngày nào ạ?",
  "khách sạn có gần bãi tắm a không?": "Dạ khách sạn nằm ngay trên đường Hồ Xuân Hương, đối diện bãi tắm A Sầm Sơn luôn ạ! Anh/chị chỉ mất khoảng 1 phút đi bộ là ra đến bãi biển rồi ạ.",
  "có chỗ đỗ xe 29 chỗ không em?": "Dạ có ạ! Khách sạn bên em sở hữu khuôn viên đỗ xe rộng rãi, đỗ được các dòng xe du lịch từ 16 đến 45 chỗ hoàn toàn miễn phí và có bảo vệ trực 24/24 ạ.",
  "cho anh xem ảnh phòng vip với.": "Dạ vâng, ảnh thực tế phòng VIP hướng trực diện biển em sẽ gửi ngay qua Zalo để anh/chị tiện theo dõi nhé. Anh/chị vui lòng để lại số điện thoại nha!",

  // Real estate FAQ
  "dự án này bao giờ bàn giao nhà?": "Dạ dự án dự kiến sẽ cất nóc vào cuối năm nay và bàn giao căn hộ hoàn thiện cho cư dân vào Quý II năm sau ạ. Anh/chị có muốn đăng ký tham quan thực tế không?",
  "căn 2 phòng ngủ giá bao nhiêu?": "Dạ căn 2 phòng ngủ diện tích 68m² hướng ban công Đông Nam có giá khoảng 1.8 tỷ đến 2.1 tỷ tùy tầng ạ. Đang có chính sách chiết khấu 5% đó ạ.",
  "có hỗ trợ vay ngân hàng 70% không?": "Dạ có ạ! Dự án liên kết với ngân hàng hỗ trợ vay tới 70% giá trị hợp đồng, ân hạn nợ gốc và miễn lãi suất 0% trong vòng 18 tháng đầu tiên ạ.",
  "anh muốn đi xem nhà mẫu cuối tuần này.": "Dạ tuyệt vời quá! Anh/chị vui lòng để lại số điện thoại/Zalo để em đăng ký lịch hẹn và chuẩn bị xe đưa đón anh/chị tham quan nhà mẫu vào cuối tuần này nhé ạ.",

  // Spa FAQ
  "bên mình có những gói triệt lông nào?": "Dạ bên em đang có liệu trình triệt lông nách, triệt tay chân và triệt toàn thân bằng công nghệ Diode Laser không đau rát. Hiện gói triệt nách đang có thử buổi đầu chỉ 99k ạ!",
  "giá làm răng sứ trọn gói là bao nhiêu?": "Dạ làm răng sứ tại nha khoa có dòng sứ titan từ 1.5 triệu/răng và dòng toàn sứ cao cấp Zirconia/Cercon từ 3.5 triệu/răng ạ. Trọn gói từ 10 răng sẽ được giảm thêm 15% ạ.",
  "chiều nay 4h có trống lịch làm mặt không em?": "Dạ chiều nay lúc 16h00 bên em vẫn còn trống lịch của kỹ thuật viên tay nghề cao ạ. Anh/chị cho em xin tên và SĐT để em giữ lịch hẹn chăm sóc da cho mình nhé!",
  "địa chỉ spa mình ở đường nào vậy?": "Dạ spa của bên em nằm tại số 128 đường Triệu Quốc Đạt, Phường Điện Biên, TP. Thanh Hóa (đối diện cổng công viên Hội An) ạ.",

  // Education FAQ
  "có khóa tiếng anh cho bé 6 tuổi không?": "Dạ có ạ! Bên em có khóa học tiếng Anh chuẩn Cambridge dành riêng cho các bé từ 4-6 tuổi, học qua trò chơi và tương tác trực tiếp với giáo viên bản xứ để kích hoạt phản xạ tự nhiên ạ.",
  "học phí lớp giao tiếp bao nhiêu một tháng?": "Dạ lớp giao tiếp cho người đi làm học phí dao động khoảng 1.2 triệu đến 1.5 triệu/tháng tùy theo lộ trình 3 tháng hay 6 tháng ạ. Đăng ký nhóm 2 người được giảm thêm 10% học phí.",
  "lịch khai giảng lớp ielts gần nhất là khi nào?": "Dạ lớp IELTS mục tiêu 6.5 dự kiến sẽ khai giảng vào tối thứ Ba tuần tới (lớp học 2-4-6 từ 18h30 đến 20h30) ạ. Hiện chỉ còn 3 suất cuối cùng thôi ạ.",
  "cho chị đăng ký cho con test trình độ thử.": "Dạ vâng, bên em tổ chức kiểm tra trình độ 4 kỹ năng hoàn toàn miễn phí kèm tư vấn lộ trình học. Chị vui lòng cho em xin SĐT/Zalo để chuyên viên liên hệ xếp lịch kiểm tra nhé!",

  // Ocop FAQ
  "nem chua thanh hóa lấy sỉ từ bao nhiêu hộp?": "Dạ nem chua Thanh Hóa lấy sỉ bên em tính từ 100 cái (10 chục) trở lên là có giá sỉ đại lý rồi ạ. Nem được sản xuất mới mỗi ngày tại xưởng, bảo đảm vệ sinh an toàn thực phẩm.",
  "phí ship ra hà nội tính thế nào?": "Dạ gửi xe khách ra Hà Nội phí ship khoảng 50k - 80k tùy nhà xe, nhận hàng sau 3 tiếng. Nếu gửi chuyển phát nhanh phí khoảng 30k-40k và nhận hàng sau 1 ngày ạ.",
  "có chính sách đại lý cho tỉnh ngoài không?": "Dạ có chính sách chiết khấu rất tốt lên tới 35% cho đại lý tỉnh ngoài lấy số lượng đều đặn, kèm hỗ trợ hình ảnh và giấy chứng nhận OCOP 4 sao để làm truyền thông ạ.",
  "bảng giá các loại chè lam bên mình thế nào?": "Dạ chè lam phủ gừng bên em có gói nhỏ 250g giá sỉ là 15k (bán lẻ 25k) và hộp giấy cao cấp làm quà biếu giá sỉ 35k (bán lẻ 55k) ạ. Anh/chị lấy sỉ số lượng bao nhiêu ạ?"
};

export default function DemoChatbotPage() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: "start-bot",
      sender: "bot",
      text: `Xin chào! Em là trợ lý AI giả lập của thương hiệu ${industries[0].name}. Em có thể giúp gì cho anh/chị hôm nay ạ?`
    }
  ]);
  const [currentStepId, setCurrentStepId] = useState<string>("has_website");
  const [answers, setAnswers] = useState<Record<string, string>>(() => ({ industry: industries[0].id }));
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasSubmittedLead, setHasSubmittedLead] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const triggerBotResponse = useCallback((stepId: string, customAnswers?: Record<string, string>) => {
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const step = chatbotScript[stepId];
      if (!step) return;

      const activeAnswers = customAnswers || answers;
      let text = step.text;

      // Placeholders interpolation
      if (text.includes("{userName}")) {
        text = text.replace("{userName}", activeAnswers.userName || "");
      }
      if (text.includes("{userPhone}")) {
        text = text.replace("{userPhone}", activeAnswers.userPhone || "");
      }
      if (text.includes("{industryName}")) {
        text = text.replace("{industryName}", selectedIndustry.name);
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: "bot",
          text: text,
        },
      ]);
      setCurrentStepId(stepId);
    }, 700);
  }, [answers, selectedIndustry.name]);

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
          fullName: formData.userName || "Khách ẩn danh (Trang Demo)",
          phone: formData.userPhone || "",
          industry: industryName,
          serviceInterest: "Dùng thử Chatbot Demo",
          budget: "Chưa khảo sát",
          message: `Website: ${formData.has_website === "yes" ? "Đã có" : "Chưa có"}. Kênh chính: ${formData.main_channel}. Mong muốn bot: ${formData.bot_need}.`,
          source: "chatbot",
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      if (!response.ok) {
        throw new Error("Lỗi lưu lead chatbot");
      }
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
          setTimeout(() => {
            setSelectedIndustry(found);
            setAnswers({ industry: found.id });
            setMessages([
              {
                id: "start-bot",
                sender: "bot",
                text: `Xin chào! Em là trợ lý AI giả lập của thương hiệu ${found.name}. Em có thể giúp gì cho anh/chị hôm nay ạ?`
              }
            ]);
            setCurrentStepId("has_website");
          }, 0);
        }
      }
    }
  }, []);

  const handleReset = useCallback(() => {
    setAnswers({ industry: selectedIndustry.id });
    setInputValue("");
    setHasSubmittedLead(false);
    
    // Set initial custom welcome based on selected industry
    setMessages([
      {
        id: "start-bot",
        sender: "bot",
        text: `Xin chào! Em là trợ lý AI giả lập của thương hiệu ${selectedIndustry.name}. Em có thể giúp gì cho anh/chị hôm nay ạ?`
      }
    ]);
    setCurrentStepId("has_website");
  }, [selectedIndustry.id, selectedIndustry.name]);

  const handleIndustryChange = (ind: IndustryDemo) => {
    setSelectedIndustry(ind);
    setAnswers({ industry: ind.id });
    setInputValue("");
    setHasSubmittedLead(false);
    setMessages([
      {
        id: "start-bot",
        sender: "bot",
        text: `Xin chào! Em là trợ lý AI giả lập của thương hiệu ${ind.name}. Em có thể giúp gì cho anh/chị hôm nay ạ?`
      }
    ]);
    setCurrentStepId("has_website");
  };

  const processUserMessage = useCallback((text: string) => {
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
      
      // Normalize search text
      const cleanText = text.trim().toLowerCase();
      
      // 1. Check if the message is in simulated responses dictionary
      if (simulatedResponses[cleanText]) {
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            sender: "bot",
            text: simulatedResponses[cleanText],
          },
        ]);
        return;
      }

      // 2. Check if we are in input steps (userName or userPhone)
      const step = chatbotScript[currentStepId];
      if (step && step.type === "input") {
        let error = "";
        if (step.inputType === "tel") {
          const phoneRegex = /^(03|05|07|08|09)\d{8}$/;
          if (!phoneRegex.test(text.trim().replace(/\s/g, ""))) {
            error = "Vui lòng nhập số điện thoại hợp lệ (10 chữ số)!";
          }
        }

        if (error) {
          setMessages((prev) => [
            ...prev,
            {
              id: Math.random().toString(),
              sender: "bot",
              text: `⚠️ ${error} Xin vui lòng thử lại ạ.`,
            },
          ]);
          return;
        }

        const key = step.inputKey || "unknown";
        const updatedAnswers = { ...answers, [key]: text.trim() };
        setAnswers(updatedAnswers);

        if (step.nextStepId) {
          triggerBotResponse(step.nextStepId, updatedAnswers);
          if (step.nextStepId === "success") {
            submitChatbotLead(updatedAnswers);
          }
        }
        return;
      }

      // 3. Fallback default response if not matching and not in forms
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: "bot",
          text: `Dạ câu hỏi này chuyên sâu quá, em chưa được huấn luyện kịch bản trả lời chi tiết. Anh/chị có thể để lại số điện thoại/Zalo để chuyên viên của Alex Minh AI trực tiếp hỗ trợ mình được không ạ?`,
        },
      ]);
    }, 800);
  }, [answers, currentStepId, triggerBotResponse, submitChatbotLead]);

  const handleOptionClick = useCallback((label: string, value: string, nextStepId: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        sender: "user",
        text: label,
      },
    ]);

    const key = chatbotScript[currentStepId].inputKey || currentStepId;
    const updatedAnswers = { ...answers, [key]: value };
    setAnswers(updatedAnswers);

    triggerBotResponse(nextStepId, updatedAnswers);
    if (nextStepId === "success") {
      submitChatbotLead(updatedAnswers);
    }
  }, [answers, currentStepId, triggerBotResponse, submitChatbotLead]);

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const text = inputValue.trim();
    setInputValue("");
    processUserMessage(text);
  };

  // Scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const activeStep = chatbotScript[currentStepId];

  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="glow-bg bg-primary/10 w-[40rem] h-[40rem] -top-40 -right-40"></div>
      <div className="glow-bg bg-secondary/5 w-[30rem] h-[30rem] bottom-10 -left-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-200 text-xs font-semibold mb-4">
            <Sparkles className="h-3.5 w-3.5 text-secondary" />
            <span>Phòng Thử Nghiệm Chatbot</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Trải Nghiệm Thực Tế Chatbot AI
          </h1>
          <p className="text-slate-400 text-sm mt-3">
            Chọn lĩnh vực kinh doanh của bạn bên dưới, xem các câu hỏi mẫu khách hàng hay hỏi, và bắt đầu nhắn tin với trợ lý giả lập của Alex Minh AI ngay trên màn hình.
          </p>
          <div className="h-1 w-12 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Caution banner */}
        <div className="mb-10 max-w-4xl mx-auto p-4 bg-slate-900/60 border border-slate-800 rounded-2xl flex items-start space-x-3 text-slate-355 font-medium">
          <AlertTriangle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
          <p className="text-xs leading-relaxed">
            <strong className="text-white">Lưu ý:</strong> Bản thử nghiệm này mô phỏng luồng tư vấn và thu thập lead tự động theo kịch bản mẫu (scripted) kết hợp với công nghệ khớp câu hỏi để bạn dễ hình dung. Hệ thống chatbot AI thật khi bàn giao sẽ được kết nối với cơ sở dữ liệu huấn luyện riêng của doanh nghiệp và tự động xử lý các tình huống phức tạp.
          </p>
        </div>

        {/* Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left panel: Selector & Info */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Industry Selector */}
            <div className="bg-[#131926]/40 border border-slate-800 p-5 rounded-3xl flex flex-col space-y-4">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider">
                1. Chọn ngành kinh doanh
              </h3>
              <div className="flex flex-col gap-2">
                {industries.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => handleIndustryChange(ind)}
                    className={`text-left w-full px-4 py-3 rounded-xl text-xs font-semibold transition-all border flex items-center justify-between cursor-pointer ${
                      selectedIndustry.id === ind.id
                        ? "bg-secondary/15 border-secondary text-white"
                        : "bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300"
                    }`}
                  >
                    <span>{ind.name}</span>
                    {selectedIndustry.id === ind.id && (
                      <span className="h-2 w-2 rounded-full bg-secondary"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Suggested FAQ / Sample Questions */}
            <div className="bg-[#131926]/40 border border-slate-800 p-5 rounded-3xl flex flex-col space-y-3 flex-1">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider">
                2. Click để hỏi bot câu hỏi mẫu
              </h3>
              <p className="text-[11px] text-slate-500">
                Hãy click thử một trong những câu hỏi thực tế của khách hàng ngành này để xem bot trả lời thế nào:
              </p>
              <div className="flex flex-col gap-2">
                {selectedIndustry.exampleQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => processUserMessage(q)}
                    className="text-left w-full px-3.5 py-2.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-secondary/40 text-slate-300 hover:text-white rounded-xl text-xs leading-normal transition-all cursor-pointer"
                  >
                    👉 &quot;{q}&quot;
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right panel: Chat Container */}
          <div className="lg:col-span-7 flex flex-col h-[520px] rounded-3xl glass border border-slate-700/50 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/80 to-secondary/80 px-5 py-4 flex items-center justify-between border-b border-slate-700/50">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-white/10 text-white">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold leading-tight">
                    Trợ lý AI - {selectedIndustry.name}
                  </h4>
                  <span className="text-[10px] text-emerald-200 flex items-center space-x-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse inline-block mr-1"></span>
                    <span>Hoạt động 24/7</span>
                  </span>
                </div>
              </div>
              <button
                onClick={handleReset}
                className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors flex items-center space-x-1.5 text-xs font-semibold"
                title="Khởi động lại cuộc chat"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset</span>
              </button>
            </div>

            {/* Messages body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#0d1321]/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 ${
                    msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border ${
                      msg.sender === "user"
                        ? "bg-secondary text-white border-secondary/20"
                        : "bg-slate-800 text-slate-300 border-slate-700"
                    }`}
                  >
                    {msg.sender === "user" ? <User className="w-4.5 h-4.5" /> : <Bot className="w-4.5 h-4.5" />}
                  </div>
                  <div className={`rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed max-w-[80%] ${
                    msg.sender === "user"
                      ? "bg-primary text-white rounded-tr-none"
                      : "bg-slate-800/90 text-slate-100 border border-slate-700/20 rounded-tl-none"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 flex items-center justify-center shrink-0">
                    <Bot className="w-4.5 h-4.5" />
                  </div>
                  <div className="bg-slate-800/90 border border-slate-700/20 rounded-2xl rounded-tl-none px-4 py-3 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-450 animate-bounce"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-450 animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-450 animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <div className="p-4 border-t border-slate-800 bg-[#090d16]">
              {/* Option Selector inside Chat */}
              {!isTyping && activeStep && activeStep.type === "question" && activeStep.options && (
                <div className="flex flex-col gap-2 mb-3 max-h-36 overflow-y-auto">
                  {activeStep.options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleOptionClick(opt.label, opt.value, opt.nextStepId)}
                      className="text-left w-full px-4 py-2.5 bg-slate-900 hover:bg-slate-855 border border-slate-855 hover:border-secondary/40 text-slate-200 hover:text-white rounded-xl text-xs font-semibold transition-all cursor-pointer"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Text Send Form */}
              <form onSubmit={handleInputSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={
                    activeStep && activeStep.type === "input"
                      ? activeStep.inputPlaceholder
                      : "Nhập tin nhắn hoặc click câu hỏi mẫu..."
                  }
                  className="flex-1 bg-slate-900 border border-slate-850 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-100 placeholder-slate-550 outline-none focus:border-secondary/50"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="px-5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-xs transition-all disabled:opacity-50 flex items-center justify-center shrink-0 cursor-pointer"
                >
                  <Send className="h-4.5 w-4.5" />
                </button>
              </form>

              {/* Reset link at bottom */}
              {activeStep && activeStep.type === "message" && (
                <div className="flex items-center justify-center py-2 text-center text-xs font-semibold text-emerald-400 space-x-1.5 mt-2">
                  <CheckCircle className="h-4.5 w-4.5" />
                  <span>Đăng ký nhận demo thành công!</span>
                  <button
                    onClick={handleReset}
                    className="text-secondary hover:underline ml-2"
                  >
                    Thử lại cuộc chat
                  </button>
                </div>
              )}
            </div>

          </div>
          
        </div>

        {/* Next step prompt */}
        <div className="text-center mt-16">
          <h3 className="text-white font-bold text-lg mb-4">Bạn muốn có một trợ lý AI chatbot hoạt động thực tế thế này?</h3>
          <Link
            href="/lien-he"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:from-primary-hover hover:to-secondary-hover text-sm font-semibold shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-0.5"
          >
            <MessageSquare className="h-4.5 w-4.5" />
            <span>Đăng ký thiết kế riêng cho doanh nghiệp</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
