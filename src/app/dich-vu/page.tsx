import React from "react";
import { services } from "@/lib/services";
import { CheckCircle2, Bot, Cpu, Globe, PenTool } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Dịch Vụ Website & Chatbot AI",
  description: "Thiết kế Website chuyên nghiệp, tích hợp Chatbot AI trực chiến 24/7 và hệ thống tự động hóa bán hàng (Automation) cho doanh nghiệp Thanh Hóa."
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe: Globe,
  MessageSquareCode: Bot,
  Cpu: Cpu,
  PenTool: PenTool,
};

export default function ServicesPage() {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Background decor */}
      <div className="glow-bg bg-primary/10 w-[40rem] h-[40rem] -top-40 -right-40"></div>
      <div className="glow-bg bg-secondary/5 w-[30rem] h-[30rem] bottom-10 -left-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Giải Pháp Đột Phá Bán Hàng Trực Tuyến
          </h1>
          <p className="text-slate-400 text-sm sm:text-base mt-4">
            Alex Minh AI đồng hành cùng doanh nghiệp Thanh Hóa số hóa quy trình kinh doanh, xây dựng hệ thống website chuyên nghiệp kết hợp trợ lý chatbot AI thông minh và tự động hóa xử lý lead.
          </p>
          <div className="h-1 w-12 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Detailed Services Content */}
        <div className="space-y-16">
          {services.map((svc, index) => {
            const Icon = iconMap[svc.icon] || Globe;
            const isEven = index % 2 === 0;

            return (
              <div
                key={svc.id}
                id={svc.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center scroll-mt-24 md:scroll-mt-28"
              >
                {/* Visual block */}
                <div
                  className={`lg:col-span-5 flex justify-center ${
                    isEven ? "lg:order-first" : "lg:order-last"
                  }`}
                >
                  <div className="w-full max-w-[400px] aspect-square rounded-3xl bg-[#131926]/30 border border-slate-800/80 p-8 flex flex-col justify-between shadow-xl relative group">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50"></div>
                    <div className="flex justify-between items-start">
                      <div className="p-4 rounded-2xl bg-secondary/15 text-secondary">
                        <Icon className="h-8 w-8" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                        Module 0{index + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-slate-100 font-bold text-lg mb-2">
                        {svc.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-normal">
                        Giải pháp được tinh chỉnh riêng theo nhu cầu doanh nghiệp địa phương Thanh Hóa.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content block */}
                <div className="lg:col-span-7 flex flex-col space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {svc.title}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {svc.shortDesc} {svc.description}
                    </p>
                  </div>

                  <div className="space-y-3.5">
                    <h4 className="text-white font-semibold text-sm">Các hạng mục triển khai chính:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {svc.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-400">
                          <CheckCircle2 className="h-4.5 w-4.5 text-secondary shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/lien-he"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:from-primary-hover hover:to-secondary-hover text-xs font-semibold shadow-md transition-all text-center"
                    >
                      Nhận tư vấn triển khai
                    </Link>
                    <Link
                      href="/demo-chatbot-ai"
                      className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white text-xs font-semibold transition-all text-center"
                    >
                      Trải nghiệm chatbot mẫu
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
