import React from "react";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import ProofFlowSection from "@/components/proof-flow-section";
import ServicesSection from "@/components/services-section";
import IndustryDemoSection from "@/components/industry-demo-section";
import PricingSection from "@/components/pricing-section";
import FaqSection from "@/components/faq-section";
import LeadForm from "@/components/lead-form";
import { Phone, MessageSquare, CheckCircle2, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Intro - Premium first view */}
      <HeroSection />

      {/* Pain points of local businesses (3 core items) */}
      <ProblemSection />

      {/* Flagship Proof-of-work: Visual flow of the system */}
      <ProofFlowSection />

      {/* Details of main services (3 bullet points per service) */}
      <ServicesSection />

      {/* Industry verticals dynamic chatbot showcase */}
      <IndustryDemoSection />

      {/* Pricing packages section (Simplified) */}
      <PricingSection />

      {/* Shortened FAQ Section (4 items) */}
      <FaqSection />

      {/* Bottom Lead capture CTA section - High contrast dark conversion zone */}
      <section id="dang-ky" className="scroll-mt-24 md:scroll-mt-28 py-20 md:py-28 bg-[#04070d] border-t border-slate-800/80 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-[#00E5FF]/4 blur-[130px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-[#00E5FF] text-[10px] font-black uppercase tracking-widest mb-4">
              <Sparkles className="h-3 w-3" />
              <span>ĐĂNG KÝ TƯ VẤN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Nhận Bản Gợi Ý Web + Chatbot AI Riêng Cho Ngành Của Anh/Chị
            </h2>
            <p className="text-slate-400 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              Điền thông tin bên dưới, Alex Minh AI sẽ phân tích nhanh mô hình kinh doanh và gợi ý cách xây website, chatbot và hệ thống thu lead phù hợp.
            </p>
            
            {/* 3 Conversion Trust Badges */}
            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 mt-6">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-[#00E5FF] text-[11px] font-bold tracking-wide">
                Tư vấn theo ngành
              </span>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[11px] font-bold tracking-wide">
                Demo miễn phí nếu phù hợp
              </span>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-[#00E5FF] text-[11px] font-bold tracking-wide">
                Không cần biết kỹ thuật
              </span>
            </div>
            
            <div className="h-1 w-12 bg-gradient-to-r from-[#00E5FF] to-blue-600 mx-auto mt-8 rounded-full"></div>
          </div>

          {/* 2-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto mt-12">
            
            {/* Left Column: Conversion / Trust Panel - 5 columns */}
            <div className="lg:col-span-5 bg-[#0b1220]/75 border border-slate-750 rounded-3xl p-6 sm:p-8 space-y-6 text-left relative overflow-hidden group hover:border-[#00E5FF]/20 transition-all duration-300">
              <div className="absolute -inset-px bg-gradient-to-br from-cyan-500/0 via-cyan-500/4 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="space-y-4">
                <h4 className="text-white font-extrabold text-lg sm:text-xl tracking-tight leading-snug">
                  Sau khi gửi form, anh/chị sẽ nhận được:
                </h4>
                
                {/* Checklist */}
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200 font-medium">
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
                    <span>Gợi ý mô hình website phù hợp với ngành nghề</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
                    <span>Kịch bản chatbot tư vấn khách hàng mẫu</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
                    <span>Ước tính gói triển khai phù hợp ngân sách</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
                    <span>Tư vấn cách thu lead về Google Sheet/Telegram</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
                    <span>Demo miễn phí trong 24h làm việc nếu phù hợp</span>
                  </li>
                </ul>

                {/* Trust Note */}
                <div className="pt-2">
                  <p className="text-[11px] text-amber-300 font-black bg-amber-500/10 border border-amber-500/20 px-4 py-2.5 rounded-xl inline-block shadow-[0_0_15px_rgba(245,158,11,0.05)]">
                    🔒 Không spam • Không ép mua • Tư vấn theo nhu cầu thực tế
                  </p>
                </div>
              </div>

              {/* Mini Process Steps */}
              <div className="pt-5 border-t border-slate-800/40 space-y-3">
                <span className="text-[9.5px] text-slate-500 uppercase font-black tracking-wider block">Quy trình xử lý</span>
                <div className="grid grid-cols-3 gap-2 text-center text-[10px] sm:text-xs">
                  <div className="bg-[#070b13]/60 rounded-xl p-2.5 border border-slate-800/30">
                    <span className="font-bold text-[#00E5FF] block mb-0.5">Bước 1</span>
                    <span className="text-slate-400 font-bold">Gửi thông tin</span>
                  </div>
                  <div className="bg-[#070b13]/60 rounded-xl p-2.5 border border-slate-800/30">
                    <span className="font-bold text-[#00E5FF] block mb-0.5">Bước 2</span>
                    <span className="text-slate-400 font-bold">Phân tích</span>
                  </div>
                  <div className="bg-[#070b13]/60 rounded-xl p-2.5 border border-slate-800/30">
                    <span className="font-bold text-amber-400 block mb-0.5">Bước 3</span>
                    <span className="text-slate-200 font-bold">Gửi demo</span>
                  </div>
                </div>
              </div>

              {/* Contact shortcuts */}
              <div className="pt-5 border-t border-slate-800/40 space-y-3">
                <span className="text-[9.5px] text-slate-550 uppercase font-black tracking-wider block">Kênh kết nối nhanh</span>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:0789284078"
                    className="flex-1 py-3.5 rounded-xl border border-slate-700 hover:border-slate-600 bg-[#070b13] hover:bg-slate-900 text-slate-200 hover:text-white text-xs font-black uppercase tracking-widest flex items-center justify-center space-x-2 transition-all active:scale-[0.97]"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Hotline: 0789.284.078</span>
                  </a>
                  <a
                    href="https://zalo.me/0789284078"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 rounded-xl bg-[#0068ff] text-white hover:bg-blue-600 text-xs font-black uppercase tracking-widest flex items-center justify-center space-x-2 transition-all shadow-[0_4px_15px_rgba(0,104,255,0.4)] hover:shadow-[0_6px_20px_rgba(0,104,255,0.5)] active:scale-[0.97]"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>Nhắn Zalo nhanh</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Form Card - 7 columns */}
            <div className="lg:col-span-7 w-full">
              <LeadForm />
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
