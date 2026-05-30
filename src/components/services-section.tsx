"use client";

import React from "react";
import Link from "next/link";
import { Globe, MessageSquareCode, Cpu, Pen, Check, ArrowRight } from "lucide-react";
import { services } from "@/lib/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe: Globe,
  MessageSquareCode: MessageSquareCode,
  Cpu: Cpu,
  PenTool: Pen,
};

export default function ServicesSection() {
  return (
    <section id="dich-vu-chinh" className="scroll-mt-24 md:scroll-mt-28 py-14 md:py-20 bg-[#070b13]/80 border-t border-slate-800/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
            Danh Mục Dịch Vụ
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
            Dịch Vụ Thiết Kế Website, Tích Hợp Chatbot & Automation Chuyên Sâu
          </p>
          <p className="text-slate-400 text-sm mt-3 max-w-2xl mx-auto">
            Không chỉ làm website, Alex Minh AI cung cấp giải pháp bán hàng tự động giúp tối ưu hóa nhân sự và gia tăng doanh số trực tuyến của bạn.
          </p>
          <div className="h-1 w-12 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Services Detail List */}
        <div className="space-y-12">
          {services.map((svc, index) => {
            const IconComponent = iconMap[svc.icon] || Globe;
            const isEven = index % 2 === 0;

            return (
              <div
                key={svc.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#131926]/10 p-6 md:p-8 rounded-3xl border border-slate-800/60 transition-all hover:border-slate-800`}
              >
                {/* Visual / Icon Box */}
                <div
                  className={`lg:col-span-4 flex justify-center ${
                    isEven ? "lg:order-first" : "lg:order-last"
                  }`}
                >
                  <div className="p-8 md:p-12 rounded-3xl bg-slate-900/60 border border-slate-800/40 text-secondary shadow-inner flex items-center justify-center relative group">
                    {/* Pulsing ring background */}
                    <div className="absolute inset-0 rounded-3xl bg-secondary/5 scale-90 group-hover:scale-100 transition-all duration-300"></div>
                    <IconComponent className="h-16 w-16 md:h-20 md:w-20 relative z-10 transition-transform duration-300 group-hover:scale-105" />
                  </div>
                </div>

                {/* Content Box */}
                <div className="lg:col-span-8 flex flex-col space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {svc.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {svc.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {svc.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-400">
                        <Check className="h-4.5 w-4.5 text-secondary shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Link */}
                  <div className="pt-4 flex">
                    <Link
                      href={`/dich-vu#${svc.id}`}
                      className="inline-flex items-center space-x-1.5 text-secondary hover:text-white text-sm font-semibold transition-colors group"
                    >
                      <span>Tìm hiểu chi tiết dịch vụ</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
