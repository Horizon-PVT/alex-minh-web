"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe, Database, Send, Cpu, Pen, Check, ArrowRight, Sparkles } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="dich-vu-chinh" className="scroll-mt-24 md:scroll-mt-28 py-16 md:py-24 bg-[#070b13]/85 border-t border-slate-800/40 relative overflow-hidden">
      {/* Background glow node */}
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-black uppercase tracking-widest text-[#00E5FF] mb-2 flex items-center justify-center space-x-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            <span>GIẢI PHÁP CHỦ LỰC</span>
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Giải pháp giúp doanh nghiệp Thanh Hóa bán hàng tốt hơn mỗi ngày
          </h3>
          <p className="text-slate-400 text-sm mt-3.5 max-w-2xl mx-auto leading-relaxed">
            Không chỉ làm website đẹp, Alex Minh AI xây hệ thống tư vấn – thu lead – theo dõi – báo khách tự động.
          </p>
          <div className="h-1 w-12 bg-[#00E5FF]/60 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Featured Card — Web + Chatbot AI (7 Columns on Desktop) */}
          <div className="lg:col-span-7 bg-[#0b1220]/70 backdrop-blur-md border border-[#00E5FF]/20 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(0,229,255,0.04)] hover:border-[#00E5FF]/30 transition-all duration-300 transform hover:-translate-y-1 relative group overflow-hidden text-left">
            {/* Ambient subtle glow inside card */}
            <div className="absolute -inset-px bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-widest">
                  Giải pháp chủ lực
                </span>
                <div className="h-9 w-9 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 shrink-0">
                  <Globe className="h-[18px] w-[18px]" />
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-extrabold text-xl sm:text-2xl tracking-tight">
                  Web + Chatbot AI
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                  Website chuyên nghiệp kết hợp chatbot AI tư vấn 24/7 và tự động lưu khách về Google Sheet/Telegram.
                </p>
              </div>

              {/* Bullets */}
              <ul className="space-y-2 pt-2">
                <li className="flex items-center space-x-2 text-xs sm:text-sm text-slate-400">
                  <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>Website chuẩn chuyển đổi, mobile-first</span>
                </li>
                <li className="flex items-center space-x-2 text-xs sm:text-sm text-slate-400">
                  <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>Chatbot hỏi đáp và thu lead tự động</span>
                </li>
                <li className="flex items-center space-x-2 text-xs sm:text-sm text-slate-400">
                  <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>Báo lead tức thì qua Google Sheet + Telegram</span>
                </li>
              </ul>

              {/* Service Image */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-slate-800/40">
                <Image
                  src="/images/services/chatbot-ai-smart.png"
                  alt="Chatbot AI tư vấn khách hàng tự động cho doanh nghiệp Thanh Hóa"
                  width={700}
                  height={394}
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0b1220] to-transparent pointer-events-none"></div>
              </div>

              {/* Mini Website Mockup / Preview flow */}
              <div className="rounded-2xl bg-[#070b13]/90 border border-slate-800 p-4 relative overflow-hidden h-[180px] flex flex-col justify-between text-left font-sans text-[10.5px]">
                <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                  <div className="flex items-center space-x-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500/80"></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500/80"></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-[8px] text-slate-500 font-bold uppercase tracking-wider">demo-preview.alexminh.com</span>
                  <div className="w-4"></div>
                </div>
                
                <div className="flex-1 flex items-center justify-around space-x-2 py-1">
                  <div className="bg-[#0b1220] border border-slate-800 p-2 rounded-xl text-center flex-1">
                    <Globe className="h-[18px] w-[18px] text-cyan-400 mx-auto mb-1 animate-pulse" />
                    <span className="text-[8px] text-slate-300 font-bold block">1. Web &amp; Chatbot</span>
                  </div>
                  <div className="text-slate-600 text-xs font-bold animate-pulse">&rarr;</div>
                  <div className="bg-[#0b1220] border border-slate-800 p-2 rounded-xl text-center flex-1">
                    <Database className="h-[18px] w-[18px] text-emerald-400 mx-auto mb-1" />
                    <span className="text-[8px] text-slate-300 font-bold block">2. Google Sheet</span>
                  </div>
                  <div className="text-slate-600 text-xs font-bold animate-pulse">&rarr;</div>
                  <div className="bg-[#0b1220] border border-[#24a1de]/20 p-2 rounded-xl text-center flex-1">
                    <Send className="h-[18px] w-[18px] text-[#24a1de] mx-auto mb-1" />
                    <span className="text-[8px] text-slate-300 font-bold block">3. Telegram Alert</span>
                  </div>
                </div>
                
                <div className="mt-2 text-center text-emerald-400 text-[8px] font-black tracking-widest uppercase bg-emerald-500/10 py-1 rounded border border-emerald-500/15">
                  ✓ Hệ thống tích hợp đồng bộ tự động khép kín
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/40 relative z-10">
              <Link
                href="/demo-chatbot-ai"
                className="inline-flex items-center space-x-1.5 px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:brightness-110 text-xs font-extrabold transition-all duration-300 shadow-md shadow-primary/10"
              >
                <span>Xem demo giải pháp</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Secondary Services (5 Columns on Desktop, Stacked Vertically) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Card 1: Website & Landing Page */}
            <div className="bg-[#0b1220]/40 border border-slate-800/40 rounded-3xl p-6 flex flex-col justify-between hover:border-slate-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 group text-left">
              <div className="space-y-4">
                {/* Service Image */}
                <div className="relative aspect-[2.5/1] overflow-hidden rounded-xl border border-slate-800/40 -mx-1 -mt-1 mb-1">
                  <Image
                    src="/images/services/website-landing-page.png"
                    alt="Thiết kế website chuyên nghiệp cho doanh nghiệp Thanh Hóa"
                    width={500}
                    height={200}
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 42vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0b1220] to-transparent pointer-events-none"></div>
                </div>

                <div className="flex items-center justify-between">
                  <h4 className="text-white font-extrabold text-base sm:text-lg tracking-tight">
                    Website &amp; Landing Page
                  </h4>
                  <div className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400">
                    <Globe className="h-4 w-4" />
                  </div>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">
                  Thiết kế website bán hàng và landing page tối ưu chuyển đổi cho doanh nghiệp địa phương.
                </p>
                {/* Bullets */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1.5">
                  <li className="flex items-center space-x-1.5 text-[10.5px] text-slate-400">
                    <Check className="h-3.5 w-3.5 text-secondary shrink-0" />
                    <span>Giao diện chuẩn UI/UX</span>
                  </li>
                  <li className="flex items-center space-x-1.5 text-[10.5px] text-slate-400">
                    <Check className="h-3.5 w-3.5 text-secondary shrink-0" />
                    <span>CTA rõ ràng, mobile</span>
                  </li>
                  <li className="flex items-center space-x-1.5 text-[10.5px] text-slate-400 col-span-1 sm:col-span-2">
                    <Check className="h-3.5 w-3.5 text-secondary shrink-0" />
                    <span>Tối ưu tốc độ và SEO local</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-800/40">
                <Link
                  href="/dich-vu#website-landing"
                  className="inline-flex items-center space-x-1.5 text-slate-300 hover:text-white text-xs font-bold transition-colors group"
                >
                  <span>Tìm hiểu dịch vụ</span>
                  <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Card 2: Automation Bán Hàng */}
            <div className="bg-[#0b1220]/40 border border-slate-800/40 rounded-3xl p-6 flex flex-col justify-between hover:border-slate-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 group text-left">
              <div className="space-y-4">
                {/* Service Image */}
                <div className="relative aspect-[2.5/1] overflow-hidden rounded-xl border border-slate-800/40 -mx-1 -mt-1 mb-1">
                  <Image
                    src="/images/services/automation-sales.png"
                    alt="Hệ thống automation bán hàng và quản lý lead tự động"
                    width={500}
                    height={200}
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 42vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0b1220] to-transparent pointer-events-none"></div>
                </div>

                <div className="flex items-center justify-between">
                  <h4 className="text-white font-extrabold text-base sm:text-lg tracking-tight">
                    Automation Bán Hàng
                  </h4>
                  <div className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400">
                    <Cpu className="h-4 w-4" />
                  </div>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">
                  Tự động hóa quy trình tiếp nhận, lưu trữ và theo dõi khách hàng tiềm năng.
                </p>
                {/* Bullets */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1.5">
                  <li className="flex items-center space-x-1.5 text-[10.5px] text-slate-400">
                    <Check className="h-3.5 w-3.5 text-secondary shrink-0" />
                    <span>Form &rarr; Sheet &rarr; Tele</span>
                  </li>
                  <li className="flex items-center space-x-1.5 text-[10.5px] text-slate-400">
                    <Check className="h-3.5 w-3.5 text-secondary shrink-0" />
                    <span>Nhắc lịch &amp; xử lý lead</span>
                  </li>
                  <li className="flex items-center space-x-1.5 text-[10.5px] text-slate-400 col-span-1 sm:col-span-2">
                    <Check className="h-3.5 w-3.5 text-secondary shrink-0" />
                    <span>Giảm bỏ sót khách hàng</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-800/40">
                <Link
                  href="/dich-vu#automation-sales"
                  className="inline-flex items-center space-x-1.5 text-slate-300 hover:text-white text-xs font-bold transition-colors group"
                >
                  <span>Tìm hiểu dịch vụ</span>
                  <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Card 3: Nội dung bán hàng bằng AI */}
            <div className="bg-[#0b1220]/40 border border-slate-800/40 rounded-3xl p-6 flex flex-col justify-between hover:border-slate-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 group text-left">
              <div className="space-y-4">
                {/* Service Image */}
                <div className="relative aspect-[2.5/1] overflow-hidden rounded-xl border border-slate-800/40 -mx-1 -mt-1 mb-1">
                  <Image
                    src="/images/services/ai-content-creation.png"
                    alt="Tạo nội dung marketing bán hàng bằng AI"
                    width={500}
                    height={200}
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 42vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0b1220] to-transparent pointer-events-none"></div>
                </div>

                <div className="flex items-center justify-between">
                  <h4 className="text-white font-extrabold text-base sm:text-lg tracking-tight">
                    Nội dung bán hàng bằng AI
                  </h4>
                  <div className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400">
                    <Pen className="h-4 w-4" />
                  </div>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">
                  Hỗ trợ xây dựng nội dung bán hàng, FAQ và kịch bản tư vấn bằng AI.
                </p>
                {/* Bullets */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1.5">
                  <li className="flex items-center space-x-1.5 text-[10.5px] text-slate-400">
                    <Check className="h-3.5 w-3.5 text-secondary shrink-0" />
                    <span>Viết bài giới thiệu web</span>
                  </li>
                  <li className="flex items-center space-x-1.5 text-[10.5px] text-slate-400">
                    <Check className="h-3.5 w-3.5 text-secondary shrink-0" />
                    <span>Nội dung social / FAQ</span>
                  </li>
                  <li className="flex items-center space-x-1.5 text-[10.5px] text-slate-400 col-span-1 sm:col-span-2">
                    <Check className="h-3.5 w-3.5 text-secondary shrink-0" />
                    <span>Tối ưu chatbot học hỏi</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-800/40">
                <Link
                  href="/dich-vu#ai-content"
                  className="inline-flex items-center space-x-1.5 text-slate-300 hover:text-white text-xs font-bold transition-colors group"
                >
                  <span>Tìm hiểu dịch vụ</span>
                  <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
