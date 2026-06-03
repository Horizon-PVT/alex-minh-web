import React from "react";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import ProofFlowSection from "@/components/proof-flow-section";
import ServicesSection from "@/components/services-section";
import IndustryDemoSection from "@/components/industry-demo-section";
import PricingSection from "@/components/pricing-section";
import LaunchOfferSection from "@/components/launch-offer-section";
import FaqSection from "@/components/faq-section";
import LeadForm from "@/components/lead-form";
import { Phone, MessageSquare, CheckCircle2, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Intro - Premium first view */}
      <HeroSection />

      {/* Launch Promo Banner - KODA ELITE */}
      <section className="py-12 bg-[#090d16] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-3xl overflow-hidden border border-amber-500/20 bg-gradient-to-r from-amber-500/5 via-slate-900/90 to-indigo-950/20 p-8 sm:p-10 shadow-[0_0_30px_rgba(245,158,11,0.08)] flex flex-col md:flex-row items-center gap-8 group">
            {/* Ambient decorative glows */}
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-amber-500/10 blur-2xl group-hover:bg-amber-500/20 transition-all pointer-events-none"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-indigo-500/5 blur-2xl pointer-events-none"></div>

            {/* Left Column: Promo Content */}
            <div className="flex-1 space-y-4 text-left relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-black uppercase tracking-wider">
                <Sparkles className="h-3 w-3 animate-spin [animation-duration:3s]" />
                <span>QUÀ TẶNG RA MẮT</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                🎁 Tặng Trợ Lý AI Riêng Cho Chủ Doanh Nghiệp
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                Không chỉ là chatbot cho website — anh/chị còn được tặng thêm <span className="text-amber-400 font-extrabold">KODA ELITE</span>, một trợ lý AI riêng có thể hỗ trợ bán hàng, nhắc việc, lên lịch, phân tích sản phẩm, gợi ý nội dung và đồng hành cùng chủ doanh nghiệp mỗi ngày.
              </p>

              <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed italic">
                “Như có thêm một trợ lý kinh doanh AI bên cạnh — luôn sẵn sàng hỗ trợ anh/chị suy nghĩ, sắp xếp và bán hàng tốt hơn.”
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="#dang-ky"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 text-slate-950 text-xs font-black uppercase tracking-wider transition-all shadow-md shadow-amber-500/10"
                >
                  Nhận trợ lý AI riêng
                </a>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider border-l border-slate-800 pl-4 py-1">
                  Powered by KODA ELITE
                </span>
              </div>

              <div className="text-[10px] text-slate-500 font-medium">
                * Áp dụng cho khách triển khai Web + Chatbot AI trong giai đoạn ra mắt.
              </div>
            </div>

            {/* Right Column: Visual Avatar */}
            <div className="w-28 h-28 sm:w-36 sm:h-36 shrink-0 relative rounded-full p-1.5 bg-gradient-to-br from-amber-500 via-purple-500 to-cyan-400 shadow-2xl flex items-center justify-center animate-[pulse_6s_infinite]">
              <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-950">
                <Image
                  src="/images/brand/koda-elite-avatar.jpg"
                  alt="KODA ELITE - Trợ lý AI riêng cho chủ doanh nghiệp"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 150px, 200px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain points of local businesses (3 core items) */}
      <ProblemSection />

      {/* Flagship Proof-of-work: Visual flow of the system */}
      <ProofFlowSection />

      {/* Details of main services (3 bullet points per service) */}
      <ServicesSection />

      {/* Industry verticals dynamic chatbot showcase */}
      <IndustryDemoSection />

      {/* Launch Offer Promo Details */}
      <LaunchOfferSection />

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
            <div className="lg:col-span-5 bg-[#0b1220]/75 border border-slate-700 rounded-3xl p-6 sm:p-8 space-y-6 text-left relative overflow-hidden group hover:border-[#00E5FF]/20 transition-all duration-300">
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
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="h-5 w-5 text-amber-400 shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
                    <span className="text-amber-300 font-extrabold">🎁 Khách triển khai giai đoạn đầu được tặng KODA ELITE — trợ lý AI riêng cho chủ doanh nghiệp.</span>
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
                <span className="text-[9.5px] text-slate-500 uppercase font-black tracking-wider block">Kênh kết nối nhanh</span>
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
