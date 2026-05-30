import React from "react";
import Link from "next/link";
import { MessageSquare, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Server } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden z-10">
      {/* Background glow effects */}
      <div className="glow-bg bg-primary/20 w-[40rem] h-[40rem] -top-40 -right-40 animate-pulse-glow"></div>
      <div className="glow-bg bg-secondary/15 w-[30rem] h-[30rem] top-60 -left-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col space-y-5 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center self-center lg:self-start space-x-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-200 text-xs font-semibold">
              <Sparkles className="h-3.5 w-3.5 text-secondary animate-pulse" />
              <span>{siteConfig.tagline}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                Website & Chatbot AI
              </span>{" "}
              <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-primary via-secondary to-cyan-400 bg-clip-text text-transparent">
                Cho Doanh Nghiệp Thanh Hóa
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Tư vấn khách 24/7, thu lead tự động, tăng chuyển đổi online bằng website chuyên nghiệp kết hợp chatbot AI và tự động hóa vận hành.
            </p>

            {/* Value bullets - Simplified */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-slate-400 text-xs font-medium max-w-md mx-auto lg:mx-0">
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                <span>Trả lời tự động &lt; 2s</span>
              </div>
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                <span>Đồng bộ Google Sheets</span>
              </div>
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                <span>Báo lead qua Telegram</span>
              </div>
            </div>

            {/* Consolidated CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <Link
                href="/#dang-ky"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:from-primary-hover hover:to-secondary-hover text-xs font-semibold shadow-md shadow-primary/20 transition-all flex items-center justify-center space-x-1.5"
              >
                <span>Nhận tư vấn miễn phí</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/demo-chatbot-ai"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-secondary/40 text-slate-200 hover:text-white text-xs font-semibold transition-all flex items-center justify-center space-x-1.5"
              >
                <MessageSquare className="h-3.5 w-3.5 text-secondary" />
                <span>Xem Demo Chatbot</span>
              </Link>
              <Link
                href="/#bang-gia"
                className="text-slate-400 hover:text-white text-xs font-semibold transition-colors hover:underline px-4 py-2"
              >
                Xem bảng giá &rarr;
              </Link>
            </div>
          </div>

          {/* Visual Mockup */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Background glowing frame */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-primary to-secondary opacity-30 blur-lg"></div>
            
            <div className="relative mx-auto max-w-[340px] sm:max-w-[380px] h-[360px] rounded-3xl overflow-hidden bg-[#0b101d] border border-slate-800 p-4 shadow-2xl flex flex-col justify-between">
              {/* Fake web header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-850">
                <div className="flex space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/85"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/85"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/85"></span>
                </div>
                <div className="bg-[#070b13] px-4 py-0.5 rounded-md text-[9px] text-slate-500 w-1/2 text-center truncate font-mono">
                  alexminh.com/sam-son-hotel
                </div>
                <div className="w-6"></div>
              </div>

              {/* Fake page content */}
              <div className="flex-1 py-4 flex flex-col justify-start space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="h-2.5 w-12 bg-slate-800 rounded-md"></div>
                  <span className="text-[10px] text-slate-650">|</span>
                  <div className="h-2.5 w-20 bg-slate-800 rounded-md"></div>
                </div>
                
                <div className="h-5 w-4/5 bg-gradient-to-r from-slate-800 to-slate-850 rounded-md"></div>
                
                {/* Mock Phone Layout inside laptop */}
                <div className="rounded-xl border border-slate-800 bg-[#070b13]/55 p-3 space-y-2">
                  <div className="flex items-center space-x-1.5 text-[8px] text-emerald-400 font-semibold mb-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    <span>AI CHATBOT ACTIVE (24/7)</span>
                  </div>
                  <div className="h-1.5 w-4/5 bg-slate-800 rounded-md"></div>
                  <div className="h-1.5 w-2/3 bg-slate-800 rounded-md"></div>
                </div>
                
                {/* Mock Chatbot popup inside preview */}
                <div className="mt-auto self-end bg-gradient-to-r from-primary to-secondary text-white text-[10px] p-2.5 rounded-2xl rounded-tr-none shadow-lg max-w-[85%] border border-white/5 animate-pulse leading-normal">
                  🏨 Giá phòng đôi Sầm Sơn cuối tuần này chỉ 850k đã bao gồm buffet sáng ạ. Anh/chị có muốn đặt giữ phòng không ạ?
                </div>
              </div>

              {/* Fake footer call/chat trigger bar */}
              <div className="pt-3 border-t border-slate-850 flex items-center justify-between text-[9px] text-slate-500 font-medium">
                <span className="flex items-center space-x-1 text-secondary">
                  <Server className="h-3 w-3" />
                  <span>Lead capture: ACTIVE</span>
                </span>
                <span>Phản hồi trong &lt; 2s</span>
              </div>
            </div>

            {/* Interactive badge */}
            <div className="absolute -bottom-6 -right-2 sm:-right-4 bg-[#131926]/95 border border-slate-800 p-3 rounded-xl shadow-xl flex items-center space-x-2 z-20 max-w-[190px]">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/10">
                <ShieldCheck className="h-4.5 w-4.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 font-semibold uppercase">Chứng thực</span>
                <span className="text-[11px] font-bold text-white whitespace-nowrap">Hệ thống đang chạy thật</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
