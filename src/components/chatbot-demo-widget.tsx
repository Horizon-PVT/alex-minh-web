"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { MessageSquare, X, Send, RotateCcw, Bot, User, CheckCircle, AlertTriangle } from "lucide-react";
import { chatbotScript } from "@/lib/chatbot-script";
import { industries } from "@/lib/industries";
import { trackEvent } from "@/lib/analytics";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  isCustomComponent?: boolean;
  stepId?: string;
}

export default function ChatbotDemoWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: "initial-welcome",
      sender: "bot",
      text: chatbotScript.welcome.text,
      stepId: "welcome",
    },
  ]);
  const [currentStepId, setCurrentStepId] = useState<string>("welcome");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isTyping, setIsTyping] = useState(false);
  const [hasSubmittedLead, setHasSubmittedLead] = useState(false);

  // AI Chat Mode states for widget
  const [chatMode, setChatMode] = useState<"scripted" | "ai">("scripted");
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [showPhoneCta, setShowPhoneCta] = useState(false);
  const [detectedPhone, setDetectedPhone] = useState("");

  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const triggerBotResponse = useCallback((stepId: string, customAnswers?: Record<string, string>) => {
    setIsTyping(true);
    setInputError("");
    
    // Simulate natural typing delay
    setTimeout(() => {
      setIsTyping(false);
      const step = chatbotScript[stepId];
      if (!step) return;

      const activeAnswers = customAnswers || answers;
      let text = step.text;
      
      // Interpolate placeholders
      if (text.includes("{userName}")) {
        text = text.replace("{userName}", activeAnswers.userName || "");
      }
      if (text.includes("{userPhone}")) {
        text = text.replace("{userPhone}", activeAnswers.userPhone || "");
      }
      if (text.includes("{industryName}")) {
        const industryObj = industries.find(i => i.id === activeAnswers.industry) || { name: "khác" };
        const industryName = activeAnswers.industry === "other" ? "của anh/chị" : industryObj.name;
        text = text.replace("{industryName}", industryName);
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: "bot",
          text: text,
          stepId: stepId,
        },
      ]);

      setCurrentStepId(stepId);
    }, 700);
  }, [answers]);

  const submitChatbotLead = async (formData: Record<string, string>) => {
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
          fullName: formData.userName || "Khách ẩn danh (Widget)",
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

      trackEvent("chatbot_lead_submit_success", {
        industry: industryName,
        source: "widget",
      });
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("Lỗi gửi chatbot lead:", error);
      }
    }
  };

  // Scroll to bottom on new messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);



  // Listen for external trigger events
  useEffect(() => {
    const handleTrigger = (e: Event) => {
      const customEvent = e as CustomEvent<{ industryId: string }>;
      const industryId = customEvent.detail.industryId;

      const industryObj = industries.find((i) => i.id === industryId) || { name: "Lĩnh vực khác" };
      
      // Open chatbot window
      setIsOpen(true);
      
      // Initialize with specific industry selected
      const initialAnswers = { industry: industryId };
      setAnswers(initialAnswers);
      
      // Set messages history to show greeting and industry choice
      setMessages([
        {
          id: "welcome-msg",
          sender: "bot",
          text: chatbotScript.welcome.text,
          stepId: "welcome"
        },
        {
          id: "user-select-industry",
          sender: "user",
          text: industryObj.name
        }
      ]);
      
      // Go straight to 'has_website' response
      triggerBotResponse("has_website", initialAnswers);
    };

    window.addEventListener("trigger-chatbot-demo", handleTrigger);
    return () => window.removeEventListener("trigger-chatbot-demo", handleTrigger);
  }, [triggerBotResponse]);

  const handleOptionClick = (label: string, value: string, nextStepId: string) => {
    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        sender: "user",
        text: label,
      },
    ]);

    const updatedAnswers = { ...answers, [chatbotScript[currentStepId].inputKey || currentStepId]: value };
    setAnswers(updatedAnswers);

    triggerBotResponse(nextStepId, updatedAnswers);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const step = chatbotScript[currentStepId];
    if (!step) return;

    // Validation
    if (step.inputType === "tel") {
      const phoneRegex = /^(0|84|\+84)(3|5|7|8|9)\d{8}$/;
      if (!phoneRegex.test(inputValue.trim().replace(/[\s\.\-\(\)]/g, ""))) {
        setInputError("Vui lòng nhập số điện thoại hợp lệ (ví dụ: 0912345678)!");
        return;
      }
    }

    const value = inputValue.trim();
    setInputValue("");
    setInputError("");

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        sender: "user",
        text: value,
      },
    ]);

    const key = step.inputKey || "unknown";
    const updatedAnswers = { ...answers, [key]: value };
    setAnswers(updatedAnswers);

    if (step.nextStepId) {
      triggerBotResponse(step.nextStepId, updatedAnswers);
      if (step.nextStepId === "success") {
        submitChatbotLead(updatedAnswers);
      }
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: "initial-welcome",
        sender: "bot",
        text: chatbotScript.welcome.text,
        stepId: "welcome",
      },
    ]);
    setAnswers({});
    setInputValue("");
    setInputError("");
    setHasSubmittedLead(false);
    setCurrentStepId("welcome");
    setChatMode("scripted");
    setShowPhoneCta(false);
    setDetectedPhone("");
    setIsAiLoading(false);
    setIsTyping(false);
  };

  const handleModeToggle = (mode: "scripted" | "ai") => {
    setChatMode(mode);
    setInputValue("");
    setInputError("");
    setHasSubmittedLead(false);
    setShowPhoneCta(false);
    setDetectedPhone("");
    setIsAiLoading(false);
    setIsTyping(false);

    if (mode === "ai") {
      setMessages([
        {
          id: "ai-welcome",
          sender: "bot",
          text: "Xin chào! Em là trợ lý AI tư vấn dịch vụ của Alex Minh AI. Anh/chị có câu hỏi nào về thiết kế website, chatbot hay tự động hóa bán hàng không ạ?"
        }
      ]);
    } else {
      setMessages([
        {
          id: "initial-welcome",
          sender: "bot",
          text: chatbotScript.welcome.text,
          stepId: "welcome",
        },
      ]);
      setAnswers({});
      setCurrentStepId("welcome");
    }
  };

  const handleCtaClick = async () => {
    if (!detectedPhone) return;
    try {
      setShowPhoneCta(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: "bot",
          text: "Dạ, em đang gửi yêu cầu tư vấn..."
        }
      ]);

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: "Khách Chat AI (Widget)",
          phone: detectedPhone,
          industry: "Không xác định",
          serviceInterest: "Thiết kế Website + Chatbot AI",
          budget: "Chưa khảo sát",
          message: "Khách gửi SĐT từ Widget Chatbot AI.",
          source: "chatbot",
          pageUrl: typeof window !== "undefined" ? window.location.href : ""
        })
      });

      if (response.ok) {
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            sender: "bot",
            text: "Dạ thông tin đã gửi đi thành công! Chuyên viên sẽ gọi/Zalo hỗ trợ anh/chị ngay nhé ạ!"
          }
        ]);
      } else {
        throw new Error("Lưu lead thất bại");
      }
    } catch (error) {
      console.error("Lỗi gửi lead widget:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: "bot",
          text: "Dạ hệ thống bận, anh/chị liên hệ Hotline 0789.284.078 giúp em nhé ạ!"
        }
      ]);
    }
  };

  const handleAiInputSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isAiLoading) return;

    const text = inputValue.trim();
    setInputValue("");

    const newUserMsg: Message = {
      id: Math.random().toString(),
      sender: "user",
      text: text,
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setIsTyping(true);
    setIsAiLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          history: messages.map(m => ({ sender: m.sender, text: m.text })).slice(-8),
          source: "widget"
        })
      });

      const data = await response.json();
      setIsTyping(false);
      setIsAiLoading(false);

      if (data.success) {
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            sender: "bot",
            text: data.reply
          }
        ]);
        if (data.hasPhone) {
          setShowPhoneCta(true);
          setDetectedPhone(text);
        }
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: Math.random().toString(),
            sender: "bot",
            text: data.reply || "Dạ em gặp lỗi gián đoạn. Anh/chị thử lại giúp em nhé!"
          }
        ]);
      }
    } catch (error) {
      console.error("Lỗi AI chat widget:", error);
      setIsTyping(false);
      setIsAiLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          sender: "bot",
          text: "Dạ kết nối của em đang bị gián đoạn. Chị kết bạn Zalo hoặc gọi Hotline 0789.284.078 giúp em nhé ạ!"
        }
      ]);
    }
  };

  const activeStep = chatbotScript[currentStepId];

  return (
    <>
      {/* Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-45 flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-primary to-secondary text-white shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:scale-110"
          title="Thử Chatbot AI"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 md:w-6 md:h-6 animate-pulse" />
            <span className="absolute -top-2 -right-2 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-rose-500 text-[9px] font-bold text-white border border-[#090d16]">
              1
            </span>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[380px] h-[500px] rounded-3xl glass border border-slate-700/50 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary/80 to-secondary/80 px-4 py-4 flex items-center justify-between border-b border-slate-700/50">
            <div className="flex items-center space-x-3">
              <div className="p-1.5 rounded-lg bg-white/10 text-white">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold leading-tight">Trợ lý AI Demo</h4>
                <div className="flex items-center space-x-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px] text-emerald-200">Online | Phản hồi ngay</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={handleReset}
                className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                title="Khởi động lại cuộc chat"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                title="Đóng chat"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>

          {/* Mode Toggle Switch Bar */}
          <div className="flex bg-[#0b0f19] p-1 border-b border-slate-800/80 justify-center gap-2">
            <button
              onClick={() => handleModeToggle("scripted")}
              className={`flex-1 py-1.5 rounded-lg text-[10px] font-extrabold transition-all cursor-pointer text-center border ${
                chatMode === "scripted"
                  ? "bg-primary/20 border-primary/30 text-white"
                  : "bg-slate-950/40 border-slate-850/60 text-slate-400 hover:text-slate-200"
              }`}
            >
              📋 Trải Nghiệm Demo
            </button>
            <button
              onClick={() => handleModeToggle("ai")}
              className={`flex-1 py-1.5 rounded-lg text-[10px] font-extrabold transition-all cursor-pointer flex items-center justify-center gap-1 border ${
                chatMode === "ai"
                  ? "bg-secondary/20 border-secondary/30 text-white"
                  : "bg-slate-950/40 border-slate-850/60 text-slate-400 hover:text-slate-200"
              }`}
            >
              ✨ Hỏi Tư Vấn AI
              <span className="text-[7px] bg-secondary text-white px-1 py-0.2 rounded font-black uppercase tracking-wider animate-pulse">Live</span>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#0d1321]/60">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-2.5 ${
                  msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0 ${
                    msg.sender === "user"
                      ? "bg-secondary text-white"
                      : "bg-slate-800 text-slate-300 border border-slate-700"
                  }`}
                >
                  {msg.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                {/* Bubble */}
                <div className="flex flex-col max-w-[75%]">
                  <div
                    className={`rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-primary text-white rounded-tr-none"
                        : "bg-slate-800/80 text-slate-100 border border-slate-700/30 rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-slate-800/80 border border-slate-700/30 rounded-2xl rounded-tl-none px-4 py-3 flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Actions / Inputs Area */}
          <div className="p-3 border-t border-slate-800/80 bg-[#090d16]">
            {chatMode === "ai" ? (
              <div className="space-y-2">
                {showPhoneCta && (
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-left space-y-2 animate-[slideUp_0.3s_ease-out] flex gap-2 items-start">
                    <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <div className="flex-1 space-y-2">
                      <p className="text-[10px] text-slate-350 leading-normal">
                        Em phát hiện số điện thoại của anh/chị ({detectedPhone}). Anh/chị có muốn gửi thông tin cho chuyên viên của Alex Minh AI liên hệ tư vấn không ạ?
                      </p>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={handleCtaClick}
                          className="px-3 py-1.5 rounded-lg bg-amber-500 hover:brightness-110 text-slate-950 text-[10px] font-black transition-all cursor-pointer shadow"
                        >
                          Gửi thông tin tư vấn
                        </button>
                        <button
                          onClick={() => {
                            setShowPhoneCta(false);
                            setDetectedPhone("");
                          }}
                          className="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 text-[10px] font-bold cursor-pointer"
                        >
                          Bỏ qua
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleAiInputSubmit} className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1.5 focus-within:border-secondary/50">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    disabled={isAiLoading}
                    placeholder="Hỏi em tự do..."
                    className="flex-grow bg-transparent border-0 outline-none text-slate-100 text-xs py-1"
                    autoFocus
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim() || isAiLoading}
                    className="p-1.5 rounded-lg bg-secondary hover:bg-secondary-hover text-white disabled:opacity-55 disabled:hover:bg-secondary transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            ) : (
              !isTyping && activeStep && (
                <>
                  {/* Option Buttons */}
                  {activeStep.type === "question" && activeStep.options && (
                    <div className="flex flex-col gap-2 max-h-36 overflow-y-auto mb-2 pr-1">
                      {activeStep.options.map((option) => (
                        <button
                          key={option.value}
                          onClick={() =>
                            handleOptionClick(option.label, option.value, option.nextStepId)
                          }
                          className="text-left w-full px-3.5 py-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-secondary/40 text-slate-200 hover:text-white rounded-xl text-xs font-medium transition-all"
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Text Form Input */}
                  {activeStep.type === "input" && (
                    <form onSubmit={handleInputSubmit} className="space-y-1.5">
                      {inputError && (
                        <p className="text-[10px] text-rose-500 font-medium px-1">
                          {inputError}
                        </p>
                      )}
                      <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1.5 focus-within:border-secondary/50">
                        <input
                          type={activeStep.inputType || "text"}
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          placeholder={activeStep.inputPlaceholder}
                          className="flex-1 bg-transparent border-0 outline-none text-slate-100 text-xs py-1"
                          autoFocus
                        />
                        <button
                          type="submit"
                          disabled={!inputValue.trim()}
                          className="p-1.5 rounded-lg bg-primary hover:bg-primary-hover text-white disabled:opacity-55 disabled:hover:bg-primary transition-colors"
                        >
                          <Send className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </form>
                  )}

                  {/* Success Finished State */}
                  {activeStep.type === "message" && (
                    <div className="flex items-center justify-center py-2 text-center text-xs font-medium text-emerald-400 space-x-1.5">
                      <CheckCircle className="h-4 w-4" />
                      <span>Gửi đăng ký demo thành công!</span>
                    </div>
                  )}
                </>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}
