import React from "react";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import ProofFlowSection from "@/components/proof-flow-section";
import ServicesSection from "@/components/services-section";
import IndustryDemoSection from "@/components/industry-demo-section";
import PricingSection from "@/components/pricing-section";
import FaqSection from "@/components/faq-section";
import LeadForm from "@/components/lead-form";

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

      {/* Bottom Lead capture CTA section */}
      <section id="dang-ky" className="scroll-mt-24 md:scroll-mt-28 py-14 md:py-20 bg-[#070b13]/80 border-t border-slate-800/40 relative">
        {/* Background glow */}
        <div className="glow-bg bg-primary/10 w-96 h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
              Đăng Ký Tư Vấn
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Nhận Bản Thiết Kế Demo Chatbot Riêng Cho Ngành Của Bạn
            </h3>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">
              Điền thông tin vào form dưới đây, Alex Minh AI sẽ phân tích mô hình kinh doanh của bạn và liên hệ gửi demo miễn phí trong 24h làm việc.
            </p>
            <div className="h-1 w-12 bg-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Render the LeadForm */}
          <LeadForm />
        </div>
      </section>
    </div>
  );
}
