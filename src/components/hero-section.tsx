"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MessageSquare, ArrowRight, CheckCircle2, Sparkles, Bot, Database, Send, User } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

// Simulated chat typing indicator
const TypingIndicator = () => (
  <div className="flex space-x-1 py-1.5 px-2 bg-slate-850 border border-slate-750 rounded-xl rounded-tl-none w-11 items-center justify-center animate-pulse">
    <span className="h-1 w-1 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
    <span className="h-1 w-1 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
    <span className="h-1 w-1 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
  </div>
);

export default function HeroSection() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // 11-stage conversation/automation flow - Accelerated for high contrast & instant understanding
    // 0: Guest question 1
    // 1: Bot typing 1
    // 2: Bot reply 1
    // 3: Guest answer 2
    // 4: Bot typing 2
    // 5: Bot reply 2
    // 6: Guest phone
    // 7: Bot typing 3
    // 8: Bot confirm / CRM active (Status: "Đang ghi nhận lead...")
    // 9: Google Sheet row sync (Status: "Lead đã lưu")
    // 10: Telegram Alert card
    const stepTimes = [
      800,  // Step 0: Guest question 1 (appears quickly)
      200,  // Step 1: Bot typing 1
      800,  // Step 2: Bot reply 1
      800,  // Step 3: Guest reply 2
      200,  // Step 4: Bot typing 2
      800,  // Step 5: Bot reply 2
      800,  // Step 6: Guest phone number
      200,  // Step 7: Bot typing 3
      1000, // Step 8: Bot confirmation / CRM active
      1000, // Step 9: Sheets database sync
      3500, // Step 10: Telegram notification alert
    ];

    let isMounted = true;
    const runSequence = async () => {
      let currentStep = 0;
      while (isMounted) {
        setStep(currentStep);
        await new Promise((resolve) => setTimeout(resolve, stepTimes[currentStep]));
        currentStep = (currentStep + 1) % 11;
      }
    };

    runSequence();
    return () => {
      isMounted = false;
    };
  }, []);

  const renderSmartphone = () => {
    return (
      <div className="w-full max-w-[270px] md:w-[280px] flex flex-col justify-between bg-[#05080e] rounded-[32px] border-[5px] border-slate-800 p-3.5 relative overflow-hidden h-[415px] shadow-[0_30px_80px_-15px_rgba(0,0,0,1),0_0_60px_rgba(0,229,255,0.25)] z-20 transition-all duration-300 hover:scale-[1.03] ring-2 ring-cyan-550/30">
        {/* iPhone Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-3 bg-slate-900 rounded-b-xl border-x border-b border-slate-850/60 z-30"></div>
        
        {/* Phone Chat Header */}
        <div className="flex items-center justify-between border-b border-slate-850 pb-2 mb-2 pt-1">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 shrink-0">
                <Bot className="h-4.5 w-4.5" />
              </div>
              <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-500 border border-[#070b13] animate-pulse"></span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[11.5px] text-white font-extrabold leading-none">AI Trợ Lý Tư Vấn</span>
              <span className="text-[8.5px] text-emerald-400 leading-none mt-1 font-bold">HOẠT ĐỘNG 24/7</span>
            </div>
          </div>
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping"></div>
        </div>

        {/* Message Dialog Area */}
        <div className="flex-1 flex flex-col space-y-2.5 justify-start overflow-y-auto max-h-[300px] pr-0.5 scrollbar-none text-left">
          {/* Message 1: Guest asks */}
          {step >= 0 && (
            <div className="flex items-start space-x-1.5 justify-end">
              <div className="bg-[#0068ff] text-white text-[11px] px-3 py-1.8 rounded-2xl rounded-tr-none max-w-[85%] leading-normal font-semibold shadow-sm animate-fade-in">
                Giá phòng cuối tuần ở Sầm Sơn còn không?
              </div>
            </div>
          )}

          {/* Message 2: Bot typing */}
          {step === 1 && (
            <div className="flex items-start space-x-1.5">
              <div className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center shrink-0">
                <Bot className="h-3 w-3" />
              </div>
              <TypingIndicator />
            </div>
          )}
          {step >= 2 && (
            <div className="flex items-start space-x-1.5 animate-fade-in">
              <div className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center shrink-0">
                <Bot className="h-3 w-3" />
              </div>
              <div className="bg-[#18222f] border border-slate-855 text-slate-100 text-[11px] px-3 py-1.8 rounded-2xl rounded-tl-none max-w-[85%] leading-normal">
                Dạ còn ạ. Anh/chị đi ngày nào và mấy người?
              </div>
            </div>
          )}

          {/* Message 3: Guest answers 2 */}
          {step >= 3 && (
            <div className="flex items-start space-x-1.5 justify-end">
              <div className="bg-[#0068ff] text-white text-[11px] px-3 py-1.8 rounded-2xl rounded-tr-none max-w-[85%] leading-normal font-semibold shadow-sm animate-fade-in">
                Thứ 7, 2 người.
              </div>
            </div>
          )}

          {/* Message 4: Bot typing 2 */}
          {step === 4 && (
            <div className="flex items-start space-x-1.5">
              <div className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center shrink-0">
                <Bot className="h-3 w-3" />
              </div>
              <TypingIndicator />
            </div>
          )}
          {step >= 5 && (
            <div className="flex items-start space-x-1.5 animate-fade-in">
              <div className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center shrink-0">
                <Bot className="h-3 w-3" />
              </div>
              <div className="bg-[#18222f] border border-slate-855 text-slate-100 text-[11px] px-3 py-1.8 rounded-2xl rounded-tl-none max-w-[85%] leading-normal">
                Anh/chị để lại số Zalo, em gửi báo giá ngay ạ.
              </div>
            </div>
          )}

          {/* Message 5: Guest enters phone */}
          {step >= 6 && (
            <div className="flex items-start space-x-1.5 justify-end">
              <div className="bg-[#0068ff] text-white text-[11px] px-3 py-1.8 rounded-2xl rounded-tr-none max-w-[85%] leading-normal font-bold font-mono tracking-wider shadow-sm animate-fade-in">
                0912 345 678
              </div>
            </div>
          )}

          {/* Message 6: Bot confirms */}
          {step === 7 && (
            <div className="flex items-start space-x-1.5">
              <div className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center shrink-0">
                <Bot className="h-3 w-3" />
              </div>
              <TypingIndicator />
            </div>
          )}
          {step >= 8 && (
            <div className="flex items-start space-x-1.5 animate-fade-in">
              <div className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center shrink-0">
                <Bot className="h-3 w-3" />
              </div>
              <div className="bg-[#18222f] border border-slate-855 text-slate-100 text-[11px] px-3 py-1.8 rounded-2xl rounded-tl-none max-w-[85%] leading-normal">
                Em đã ghi nhận. Chủ khách sạn sẽ gọi lại trong vài phút.
              </div>
            </div>
          )}
        </div>

        {/* Sync Status area */}
        <div className="border-t border-slate-850 pt-2.5 mt-2 flex items-center justify-between text-[9px]">
          <span className="text-slate-500 font-bold uppercase tracking-wider">Hệ thống:</span>
          {step >= 9 ? (
            <span className="text-emerald-400 font-extrabold flex items-center space-x-1 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
              <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Lead đã lưu</span>
            </span>
          ) : step === 8 ? (
            <span className="text-amber-400 font-extrabold flex items-center space-x-1 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
              <span className="h-1 w-1 rounded-full bg-amber-400 animate-ping"></span>
              <span>Đang lưu...</span>
            </span>
          ) : step === 1 || step === 4 || step === 7 ? (
            <span className="text-blue-400 font-extrabold animate-pulse">Bot đang trả lời...</span>
          ) : (
            <span className="text-slate-500">Chờ tương tác...</span>
          )}
        </div>
      </div>
    );
  };

  const renderGoogleSheet = () => {
    return (
      <div className={`w-[270px] p-[1px] rounded-2xl md:absolute left-[305px] top-[15px] transition-all duration-500 z-10 hover:scale-[1.01] float-card-right opacity-90 hover:opacity-100 ${
        step >= 9 
          ? "bg-gradient-to-r from-emerald-500/40 via-emerald-500/20 to-emerald-500/40 ring-2 ring-emerald-500/35 shadow-[0_15px_30px_rgba(16,185,129,0.2)]" 
          : "bg-[#0b1220]/75 border border-slate-800/60 shadow-lg"
      }`}>
        <div className="bg-[#0b1220]/85 backdrop-blur-sm p-3.5 rounded-[15px] text-left">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-900 pb-1.5 mb-1.5">
            <div className="flex items-center space-x-1.5">
              <Database className="h-3 w-3 text-emerald-500/70" />
              <span className="text-[8.5px] text-slate-400 font-bold uppercase tracking-wider">Google Sheets</span>
            </div>
            {step >= 9 ? (
              <span className="text-[7.5px] text-emerald-450 font-extrabold uppercase bg-emerald-500/5 px-1.5 py-0.5 rounded border border-emerald-500/10">
                ĐỒNG BỘ
              </span>
            ) : (
              <span className="text-[7.5px] text-slate-700 font-bold uppercase">CHỜ</span>
            )}
          </div>

          {/* Table row design */}
          <div className="space-y-1 font-mono text-[9.5px]">
            <div className="text-[8.5px] text-emerald-450 font-extrabold tracking-wider">DÒNG 142</div>
            <div className="flex justify-between py-0.5 border-b border-slate-800/50">
              <span className="text-slate-500 font-sans text-[9px]">Họ tên:</span>
              <span className={`transition-all duration-300 font-bold ${step >= 9 ? "text-white" : "text-slate-850 blur-[2px] opacity-10"}`}>Nguyễn Văn A</span>
            </div>
            <div className="flex justify-between py-0.5 border-b border-slate-800/50">
              <span className="text-slate-500 font-sans text-[9px]">Số ĐT:</span>
              <span className={`font-mono transition-all duration-300 font-bold ${step >= 9 ? "text-amber-400" : "text-slate-850 blur-[2px] opacity-10"}`}>0912 345 678</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="text-slate-500 font-sans text-[9px]">Nhu cầu:</span>
              <span className={`transition-all duration-300 font-bold ${step >= 9 ? "text-emerald-450" : "text-slate-855 blur-[2px] opacity-10"}`}>Khách sạn Sầm Sơn</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderLeadCRM = () => {
    return (
      <div className={`w-[250px] p-[1.5px] rounded-2xl md:absolute left-[20px] top-[320px] shadow-2xl transition-all duration-500 z-35 hover:scale-[1.02] float-card-left ${
        step >= 8 
          ? "bg-gradient-to-r from-amber-500/40 via-cyan-500/30 to-blue-500/40 ring-2 ring-amber-500/40 shadow-[0_20px_45px_rgba(245,158,11,0.35)]" 
          : "bg-[#0b1220]/80 border border-slate-800 shadow-lg"
      }`}>
        <div className="bg-[#0b1220]/95 backdrop-blur-md p-4 rounded-[15px] text-left">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2.5">
            <div className="flex items-center space-x-1.5">
              <User className="h-3.5 w-3.5 text-cyan-400" />
              <span className="text-[9.5px] text-slate-300 font-black uppercase tracking-wider">CRM Lead Capture</span>
            </div>
            {step >= 8 ? (
              <span className="text-[8px] text-[#00E5FF] font-extrabold uppercase bg-[#00E5FF]/10 px-1.5 py-0.5 rounded border border-[#00E5FF]/25 animate-pulse">
                ĐÃ GHI NHẬN
              </span>
            ) : (
              <span className="text-[8px] text-slate-655 font-bold uppercase">CHỜ...</span>
            )}
          </div>

          {/* Lead Details */}
          <div className="space-y-1.5 text-[10.5px]">
            {step >= 8 && (
              <div className="text-[9.5px] text-amber-450 font-extrabold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30 w-fit mb-2 flex items-center space-x-1 animate-pulse">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-ping"></span>
                <span>Lead mới đã ghi nhận</span>
              </div>
            )}
            <div className="flex justify-between py-0.5 border-b border-slate-800/50">
              <span className="text-slate-400 font-bold text-[9.5px]">Khách hàng:</span>
              <span className={`font-bold transition-all duration-300 ${step >= 8 ? "text-white" : "text-slate-850 blur-[2px] opacity-20"}`}>Nguyễn Văn A</span>
            </div>
            <div className="flex justify-between py-0.5 border-b border-slate-800/50">
              <span className="text-slate-400 font-bold text-[9.5px]">Số Zalo:</span>
              <span className={`font-bold font-mono transition-all duration-300 ${step >= 8 ? "text-amber-400" : "text-slate-850 blur-[2px] opacity-20"}`}>0912 345 678</span>
            </div>
            <div className="flex justify-between py-0.5 border-b border-slate-800/50">
              <span className="text-slate-400 font-bold text-[9.5px]">Quan tâm:</span>
              <span className={`font-bold transition-all duration-300 ${step >= 8 ? "text-slate-200" : "text-slate-855 opacity-20"}`}>Khách sạn Sầm Sơn</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span className="text-slate-400 font-bold text-[9.5px]">Nguồn:</span>
              <span className={`font-bold transition-all duration-300 ${step >= 8 ? "text-cyan-400" : "text-slate-855 opacity-20"}`}>AI Chatbot</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTelegram = () => {
    return (
      <div className={`w-[260px] md:absolute left-[310px] top-[350px] shadow-2xl transition-all duration-500 z-35 hover:scale-[1.02] float-card-right ${
        step >= 10 
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" 
          : "opacity-0 translate-y-3 scale-95 pointer-events-none"
      }`}>
        <div className="bg-[#17212b] border-2 border-amber-500/45 rounded-2xl p-4 shadow-[0_20px_45px_rgba(245,158,11,0.4)] text-left ring-1 ring-amber-500/25">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 mb-2">
            <div className="flex items-center space-x-1.5">
              <div className="w-5 h-5 rounded-full bg-[#24a1de] flex items-center justify-center text-white text-[9px] shadow-inner font-black">
                <Send className="h-2.5 w-2.5 transform rotate-[-30deg] translate-x-[-0.2px] translate-y-[-0.2px]" fill="white" />
              </div>
              <span className="text-[9.5px] text-[#24a1de] font-black uppercase tracking-wider">Telegram Alert</span>
            </div>
            <span className="text-[8.5px] text-slate-550 font-bold">vừa xong</span>
          </div>

          {/* Content */}
          <div className="font-mono text-[10.5px] text-slate-200 space-y-1">
            <div className="font-black text-amber-400 tracking-wide text-[11px] mb-1.5 flex items-center space-x-1">
              <span>🔔 LEAD MỚI ĐÃ GHI NHẬN</span>
            </div>
            <div className="space-y-1 pl-1.5 border-l-2 border-amber-500/80 font-sans text-[10.5px]">
              <div>
                <span className="text-slate-400">Khách:</span>{" "}
                <span className="font-bold text-white">Nguyễn Văn A</span>
              </div>
              <div>
                <span className="text-slate-400">SĐT:</span>{" "}
                <span className="font-mono font-bold text-amber-300">0912 345 678</span>
              </div>
              <div>
                <span className="text-slate-400">Quan tâm:</span>{" "}
                <span className="font-medium text-slate-300">Khách sạn Sầm Sơn</span>
              </div>
              <div>
                <span className="text-slate-400">Nguồn:</span>{" "}
                <span className="font-bold text-sky-400">AI Chatbot</span>
              </div>
            </div>
            <div className="mt-3.5 text-slate-950 font-black text-[10px] bg-gradient-to-r from-amber-400 to-yellow-500 px-3 py-1.5 rounded-xl w-full flex items-center justify-center space-x-1.5 shadow-md shadow-amber-500/10 cursor-pointer active:scale-98">
              <CheckCircle2 className="h-3.5 w-3.5 text-slate-950 shrink-0" />
              <span>👉 GỌI LẠI TRONG 5 PHÚT!</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative pt-28 pb-14 md:pt-36 md:pb-24 overflow-hidden z-10">
      <style>{`
        @keyframes flowDash { to { stroke-dashoffset: -20; } }
        .flow-line-anim { stroke-dasharray: 6 4; animation: flowDash 1.5s linear infinite; }
        @keyframes floatSlowPhone { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes floatSlowCardLeft { 0%, 100% { transform: translateY(0px) rotate(-1.5deg); } 50% { transform: translateY(8px) rotate(-1.5deg); } }
        @keyframes floatSlowCardRight { 0%, 100% { transform: translateY(0px) rotate(1deg); } 50% { transform: translateY(-8px) rotate(1deg); } }
        @keyframes driftGlow { 
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.15; } 
          50% { transform: translate(25px, -15px) scale(1.12); opacity: 0.25; } 
        }
        .animate-drift-glow { animation: driftGlow 14s ease-in-out infinite; }
        @media (min-width: 768px) {
          .float-phone { animation: floatSlowPhone 8s ease-in-out infinite; }
          .float-card-left { animation: floatSlowCardLeft 10s ease-in-out infinite; }
          .float-card-right { animation: floatSlowCardRight 12s ease-in-out infinite; }
        }
        .bg-tech-grid { background-image: radial-gradient(rgba(0, 229, 255, 0.03) 1px, transparent 0); background-size: 24px 24px; }
      `}</style>

      <div className="glow-bg bg-primary/20 w-[40rem] h-[40rem] -top-40 -right-40 animate-pulse-glow"></div>
      <div className="glow-bg bg-secondary/15 w-[30rem] h-[30rem] top-60 -left-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-5 flex flex-col space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center self-center lg:self-start space-x-2 px-3.5 py-2 rounded-full bg-gradient-to-r from-slate-900 via-[#221a0f] to-slate-900 border border-amber-500/35 text-amber-300 text-xs font-bold shadow-[0_0_15px_rgba(245,158,11,0.08)]">
              <Sparkles className="h-3.5 w-3.5 text-amber-450 animate-pulse shrink-0" />
              <span>{siteConfig.tagline}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                Website & <span className="whitespace-nowrap">Chatbot AI</span>
              </span>{" "}
              <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-primary via-secondary to-cyan-400 bg-clip-text text-transparent">
                Cho Doanh Nghiệp Thanh Hóa
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Thiết kế website chuyên nghiệp, tích hợp chatbot AI tư vấn tự động và tự động lưu khách hàng về Google Sheet/Telegram.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-slate-400 text-xs font-medium max-w-md mx-auto lg:mx-0">
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <CheckCircle2 className="h-4 w-4 text-[#00E5FF] shrink-0" />
                <span>Trả lời tự động &lt; 2s</span>
              </div>
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <CheckCircle2 className="h-4 w-4 text-[#00E5FF] shrink-0" />
                <span>Đồng bộ Google Sheets</span>
              </div>
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <CheckCircle2 className="h-4 w-4 text-[#00E5FF] shrink-0" />
                <span>Báo lead qua Telegram</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              <Link
                href="/lien-he"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:brightness-110 text-xs font-bold shadow-lg shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-1.5 whitespace-nowrap shrink-0"
              >
                <span>Nhận tư vấn miễn phí</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/demo-chatbot-ai"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-secondary/40 text-slate-200 hover:text-white text-xs font-bold transition-all flex items-center justify-center space-x-1.5 whitespace-nowrap shrink-0"
              >
                <MessageSquare className="h-3.5 w-3.5 text-[#00E5FF]" />
                <span>Xem Demo Chatbot</span>
              </Link>
              <Link
                href="/#bang-gia"
                className="text-[#00E5FF] hover:text-white text-xs font-bold transition-all hover:underline flex items-center space-x-1 px-4 py-2 group whitespace-nowrap shrink-0"
              >
                <span>Xem bảng giá dịch vụ</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 flex justify-center items-center w-full">
            <div className="hidden md:block relative w-[590px] h-[520px] bg-tech-grid border border-slate-800/30 rounded-3xl p-4 shadow-inner overflow-hidden select-none bg-[#090d16]/30">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-primary/5 via-cyan-500/5 to-secondary/10 opacity-30 blur-3xl pointer-events-none"></div>
              
              <div className="absolute top-1/6 left-1/6 w-[280px] h-[280px] rounded-full bg-cyan-500/12 blur-[80px] pointer-events-none animate-drift-glow"></div>
              <div className="absolute bottom-1/6 right-1/6 w-[240px] h-[240px] rounded-full bg-amber-500/8 blur-[80px] pointer-events-none animate-drift-glow" style={{ animationDelay: "-9s" }}></div>

              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 590 520" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1677FF" />
                    <stop offset="100%" stopColor="#00E5FF" />
                  </linearGradient>
                  <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00E5FF" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                  <linearGradient id="lineGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#24A1DE" />
                  </linearGradient>
                </defs>
                <path d="M 155 380 C 145 350 120 330 130 320" stroke="url(#lineGrad1)" strokeWidth="1.5" className={`transition-opacity duration-300 ${step >= 8 ? "flow-line-anim opacity-100" : "opacity-10"}`} />
                <path d="M 190 320 C 170 200 260 140 315 105" stroke="url(#lineGrad2)" strokeWidth="1.5" className={`transition-opacity duration-300 ${step >= 9 ? "flow-line-anim opacity-100" : "opacity-10"}`} />
                <path d="M 480 105 C 510 190 500 270 440 350" stroke="url(#lineGrad3)" strokeWidth="1.5" className={`transition-opacity duration-300 ${step >= 10 ? "flow-line-anim opacity-100" : "opacity-10"}`} />
              </svg>

              <div className="absolute top-4 left-4 z-40 flex items-center space-x-2 animate-fade-in">
                <div className="bg-amber-500/10 text-amber-400 border border-amber-500/30 text-[8.5px] font-black px-2.5 py-1 rounded-full flex items-center space-x-1.5 uppercase tracking-wider shadow-[0_0_12px_rgba(245,158,11,0.12)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse shrink-0"></span>
                  <span>LIVE AUTOMATION FLOW</span>
                </div>
              </div>

              <div className="absolute left-[155px] top-[70px] w-[280px] float-phone z-20">
                {renderSmartphone()}
              </div>

              {renderGoogleSheet()}
              {renderLeadCRM()}
              {renderTelegram()}
            </div>

            <div className="md:hidden w-full max-w-[320px] flex flex-col items-center space-y-4">
              {renderSmartphone()}
              <div className="w-full bg-[#0b1220]/90 border border-slate-800/80 p-4.5 rounded-2xl text-left shadow-lg">
                <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider">Hệ Thống Tự Động</span>
                <p className="text-[11.5px] font-bold text-slate-200 mt-1.5 leading-relaxed">
                  Khi khách gửi SĐT:
                </p>
                <div className="mt-3 space-y-2 text-[11px] text-slate-355 font-medium">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold border border-cyan-500/10 text-[10px]">1</div>
                    <span>Ghi nhận Lead &rarr; Google Sheets</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold border border-emerald-500/10 text-[10px]">2</div>
                    <span>Báo ngay về Telegram của bạn</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
