"use client";

import React from "react";
import Link from "next/link";
import { Check, Flame } from "lucide-react";
import { pricingPackages } from "@/lib/pricing";

export default function PricingSection() {
  return (
    <section id="bang-gia" className="scroll-mt-24 md:scroll-mt-28 py-14 md:py-20 bg-[#070b13]/80 border-t border-slate-800/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
            Bảng Giá Dịch Vụ
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
            Chi Phí Đầu Tư Linh Hoạt & Hiệu Quả
          </p>
          <p className="text-slate-400 text-sm mt-3 max-w-2xl mx-auto">
            Lựa chọn gói dịch vụ phù hợp nhất với quy mô kinh doanh của bạn. Giá hiển thị ở dạng &quot;Từ...&quot; và sẽ được báo chi tiết sau khi khảo sát nhu cầu thực tế.
          </p>
          <div className="h-1 w-12 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {pricingPackages.map((pkg) => {
            return (
              <div
                key={pkg.id}
                className={`rounded-3xl p-6 flex flex-col relative transition-all duration-300 ${
                  pkg.isPopular
                    ? "bg-[#161c2c]/80 border-2 border-secondary shadow-xl shadow-secondary/10 transform lg:-translate-y-4"
                    : "bg-[#131926]/40 border border-slate-800/80 hover:border-slate-800"
                }`}
              >
                {/* Popular Ribbon badge */}
                {pkg.isPopular && (
                  <span className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-secondary text-white text-[10px] font-bold tracking-wider uppercase flex items-center space-x-1">
                    <Flame className="h-3 w-3 fill-current" />
                    <span>Gói Chủ Lực</span>
                  </span>
                )}

                {/* Package Info Header */}
                <div className="mb-6">
                  <h3 className="text-slate-100 font-bold text-lg mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-2xl sm:text-2xl xl:text-3xl font-black text-white whitespace-nowrap">{pkg.price}</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">{pkg.description}</p>
                </div>

                <div className="h-px bg-slate-800/80 mb-6"></div>

                {/* Features list */}
                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                      <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action CTA */}
                <Link
                  href="/lien-he"
                  className={`w-full text-center py-3 rounded-2xl font-semibold text-xs transition-all ${
                    pkg.isPopular
                      ? "bg-gradient-to-r from-primary to-secondary text-white hover:from-primary-hover hover:to-secondary-hover shadow-md shadow-primary/20"
                      : "bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white"
                  }`}
                >
                  {pkg.ctaText}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Small Notice */}
        <div className="text-center mt-10">
          <p className="text-xs text-slate-500 max-w-xl mx-auto leading-relaxed">
            * Chi phí triển khai thực tế phụ thuộc vào độ phức tạp của kịch bản chatbot, khối lượng dữ liệu huấn luyện, số lượng trang website và các cổng tích hợp phần mềm khác.
          </p>
        </div>
      </div>
    </section>
  );
}
