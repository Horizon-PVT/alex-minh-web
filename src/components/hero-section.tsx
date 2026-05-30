import React from "react";
import Link from "next/link";
import { MessageSquare, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
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
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
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
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {siteConfig.description} Tối ưu hóa quy trình tư vấn, không bỏ lỡ khách hàng tiềm năng và xây dựng thương hiệu số vững chắc tại Thanh Hóa.
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-slate-300 text-xs sm:text-sm max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                <span>Tư vấn tự động 24/7</span>
              </div>
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                <span>Thu lead tự động</span>
              </div>
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                <span>Không bỏ sót tin nhắn</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/#dang-ky"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:from-primary-hover hover:to-secondary-hover text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <span>Nhận tư vấn miễn phí</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/demo-chatbot-ai"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-secondary/40 text-slate-200 hover:text-white text-sm font-semibold transition-all flex items-center justify-center space-x-2"
              >
                <MessageSquare className="h-4 w-4 text-secondary" />
                <span>Xem Demo Chatbot</span>
              </Link>
            </div>
          </div>

          {/* Visual Mockup */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-[340px] sm:max-w-[400px] h-[340px] sm:h-[400px] rounded-3xl overflow-hidden glass border border-slate-700/50 p-4 shadow-2xl flex flex-col justify-between">
              {/* Fake web header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/85"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/85"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/85"></span>
                </div>
                <div className="bg-slate-900 px-4 py-0.5 rounded-md text-[10px] text-slate-500 w-1/2 text-center truncate">
                  alexminh.com/demo-hotel
                </div>
                <div className="w-6"></div>
              </div>

              {/* Fake page content */}
              <div className="flex-1 py-4 flex flex-col justify-start space-y-4">
                <div className="h-3 w-1/3 bg-slate-800 rounded-md"></div>
                <div className="h-6 w-3/4 bg-gradient-to-r from-slate-700 to-slate-800 rounded-md"></div>
                <div className="h-16 bg-slate-800/40 rounded-xl border border-slate-800/60 p-3 flex flex-col justify-between">
                  <div className="h-2 w-full bg-slate-800 rounded-md"></div>
                  <div className="h-2 w-5/6 bg-slate-800 rounded-md"></div>
                </div>
                
                {/* Mock Chatbot popup inside preview */}
                <div className="mt-auto self-end bg-gradient-to-r from-primary/95 to-secondary/95 text-white text-[11px] p-3 rounded-2xl rounded-tr-none shadow-md max-w-[85%] border border-white/5 animate-bounce">
                  🏨 Giá phòng Suite hướng biển cuối tuần này đang ưu đãi giảm 20% ạ. Em có thể gửi hình ảnh phòng qua Zalo cho anh/chị xem được không ạ?
                </div>
              </div>

              {/* Fake footer call/chat trigger bar */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500">
                <span>⚡ Phản hồi trong 2 giây</span>
                <span className="text-secondary font-medium">Bản quyền của Alex Minh AI</span>
              </div>
            </div>

            {/* Interactive badge */}
            <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-slate-900/90 border border-slate-800 p-3.5 rounded-2xl shadow-xl flex items-center space-x-2.5 z-20 max-w-[200px]">
              <div className="p-2 rounded-xl bg-secondary/15 text-secondary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-slate-400">Cam kết</span>
                <span className="text-xs font-semibold text-white">Không spam - Bảo mật</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
