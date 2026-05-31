"use client";

import React from "react";
import Link from "next/link";
import { Check, Flame, Sparkles, HelpCircle } from "lucide-react";
import { pricingPackages, comparisonFeatures } from "@/lib/pricing";

export default function PricingSection() {
  return (
    <section id="bang-gia" className="scroll-mt-24 md:scroll-mt-28 py-20 md:py-28 bg-[#090d16] border-t border-slate-800/30 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#7C3AED]/3 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-[#00E5FF] text-[10px] font-black uppercase tracking-widest mb-4">
            <Sparkles className="h-3 w-3" />
            <span>BẢNG GIÁ DỊCH VỤ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Chọn Gói Phù Hợp Để Bắt Đầu Ra Lead
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Mỗi gói phù hợp với một giai đoạn phát triển khác nhau — từ website uy tín, đến chatbot thu lead và hệ thống bán hàng tự động.
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-[#00E5FF] to-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Decision Support Panel */}
        <div className="max-w-4xl mx-auto mb-16 bg-[#0b1220]/60 backdrop-blur-md border border-slate-800/60 rounded-3xl p-5 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-5">
          <div className="space-y-1.5">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <HelpCircle className="h-4.5 w-4.5 text-[#00E5FF]" />
              <h4 className="text-white font-extrabold text-sm sm:text-base">
                Chưa chắc nên chọn gói nào?
              </h4>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm pl-0 md:pl-6 font-medium">
              Alex Minh AI sẽ tư vấn theo đúng mô hình kinh doanh và ngân sách của anh/chị.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 text-[10px] sm:text-xs">
            <span className="px-3 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-350 font-bold">
              Web Uy Tín = Hiện diện chuyên nghiệp
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 font-black">
              Web + Chatbot AI = Ra lead tự động
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-355 font-bold">
              AI Sales System = Tối ưu quy trình
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-355 font-bold">
              Vận hành = Đồng hành lâu dài
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pricingPackages.map((pkg) => {
            const isFeatured = pkg.isPopular;
            return (
              <div
                key={pkg.id}
                className={`rounded-3xl p-6 flex flex-col justify-between relative transition-all duration-300 transform group text-left ${
                  isFeatured
                    ? "bg-[#0e1626]/95 border-2 border-amber-500/60 shadow-[0_20px_50px_rgba(245,158,11,0.25),0_0_30px_rgba(6,182,212,0.15)] lg:scale-[1.04] lg:-translate-y-2.5 z-20 ring-1 ring-cyan-500/30"
                    : "bg-[#0b1220]/50 border border-slate-800/40 hover:border-slate-850 hover:-translate-y-0.5 z-10"
                }`}
              >
                {/* Popular Badge */}
                {isFeatured && (
                  <span className="absolute -top-3.5 left-6 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-slate-950 text-[10px] font-black tracking-widest uppercase flex items-center space-x-1.5 shadow-[0_4px_15px_rgba(245,158,11,0.3)]">
                    <Flame className="h-3.5 w-3.5 fill-current text-slate-950 animate-pulse" />
                    <span>KHUYÊN DÙNG</span>
                  </span>
                )}

                {/* Package Info Header */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-extrabold text-lg sm:text-xl tracking-tight">
                      {pkg.name}
                    </h3>
                    {isFeatured && (
                      <span className="text-[10px] text-amber-400 font-bold tracking-wide">
                        {pkg.featuredNote}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-slate-455 text-xs leading-relaxed min-h-[32px] font-medium">
                    {pkg.description}
                  </p>

                  {/* Refined Price Typography */}
                  <div className="my-5 py-3 border-y border-slate-800/40">
                    <span className="text-[9.5px] text-slate-500 uppercase font-black tracking-wider block">Đầu tư</span>
                    <div className="flex items-baseline space-x-1 mt-1.5">
                      {pkg.pricePrefix && (
                        <span className="text-slate-400 text-xs font-semibold mr-1">{pkg.pricePrefix}</span>
                      )}
                      <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        {pkg.priceVal}
                      </span>
                      <span className="text-xs font-bold text-slate-400 ml-1">
                        {pkg.priceUnit}
                      </span>
                    </div>
                  </div>

                  {/* Fit Badge */}
                  <div className={`mb-6 px-3 py-1.8 rounded-xl text-[10px] font-bold tracking-wide ${
                    isFeatured 
                      ? "bg-amber-500/10 border border-amber-500/20 text-amber-300" 
                      : "bg-slate-900/60 border border-slate-805 text-slate-400"
                  }`}>
                    {pkg.fitBadge}
                  </div>

                  {/* Features list */}
                  <ul className="space-y-3.5 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate-300 leading-relaxed font-medium">
                        <div className={`h-4.5 w-4.5 rounded-full flex items-center justify-center shrink-0 border mt-0.5 ${
                          isFeatured 
                            ? "bg-amber-500/10 border-amber-500/20 text-amber-400" 
                            : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                        }`}>
                          <Check className="h-2.5 w-2.5" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA */}
                <Link
                  href={`/lien-he?package=${pkg.id}`}
                  className={`w-full text-center py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all block cursor-pointer active:scale-[0.98] ${
                    isFeatured
                      ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 hover:brightness-110 shadow-md shadow-amber-500/10 border border-amber-400/20"
                      : "bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white"
                  }`}
                >
                  {pkg.ctaText}
                </Link>
              </div>
            );
          })}
        </div>

        {/* SaaS Comparison Table */}
        <div className="mt-20 relative z-10 max-w-5xl mx-auto">
          {/* Header & Mobile prompt */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 px-2 gap-2 text-center sm:text-left">
            <h3 className="text-white font-extrabold text-lg sm:text-xl tracking-tight flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span>Bảng So Sánh Chi Tiết Tính Năng</span>
            </h3>
            <span className="text-slate-400 text-xs bg-slate-900/60 border border-slate-850 px-3 py-1.5 rounded-full inline-block md:hidden font-bold">
              👉 Vuốt ngang để xem chi tiết →
            </span>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-800/80 bg-[#0b1220]/45 backdrop-blur-md shadow-xl pr-1">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[760px]">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-bold bg-[#070b13]/50">
                  <th className="py-5 px-6 w-[36%] font-extrabold tracking-wide uppercase text-[10px] text-slate-400">Tính năng triển khai</th>
                  <th className="py-5 px-4 text-center w-[16%] uppercase text-[10px] tracking-wider">Web Uy Tín</th>
                  <th className="py-5 px-4 text-center w-[16%] bg-amber-500/3 border-x border-amber-500/10 text-amber-300 font-black uppercase text-[10px] tracking-wider relative">
                    <span className="inline-block relative">
                      Web + Chatbot AI
                      <span className="absolute -top-4.5 left-1/2 -translate-x-1/2 text-[7px] font-black tracking-widest text-amber-400 bg-amber-500/10 px-1 py-0.2 rounded border border-amber-500/25">RECOMMENDED</span>
                    </span>
                  </th>
                  <th className="py-5 px-4 text-center w-[16%] uppercase text-[10px] tracking-wider">AI Sales System</th>
                  <th className="py-5 px-4 text-center w-[16%] uppercase text-[10px] tracking-wider">Vận hành & Tối ưu</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feat, index) => (
                  <tr key={index} className="border-b border-slate-900 hover:bg-slate-900/10 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-300">{feat.name}</td>
                    
                    {/* Web column */}
                    <td className="py-4 px-4 text-center text-slate-400">
                      {typeof feat.web === "boolean" ? (
                        feat.web ? <Check className="h-5 w-5 text-emerald-400 mx-auto" /> : <span className="text-slate-700 font-bold">—</span>
                      ) : (
                        <span className="font-bold text-[11px] text-slate-350">{feat.web}</span>
                      )}
                    </td>

                    {/* Bot column (Recommended - Highlighted) */}
                    <td className="py-4 px-4 text-center bg-amber-500/3 border-x border-amber-500/10 text-amber-250 font-bold">
                      {typeof feat.bot === "boolean" ? (
                        feat.bot ? <Check className="h-5 w-5 text-amber-400 mx-auto drop-shadow-[0_0_6px_rgba(245,158,11,0.4)]" /> : <span className="text-slate-750 font-bold">—</span>
                      ) : (
                        <span className="font-black text-[11px] text-amber-300">{feat.bot}</span>
                      )}
                    </td>

                    {/* System column */}
                    <td className="py-4 px-4 text-center text-slate-400">
                      {typeof feat.sys === "boolean" ? (
                        feat.sys ? <Check className="h-5 w-5 text-emerald-400 mx-auto" /> : <span className="text-slate-700 font-bold">—</span>
                      ) : (
                        <span className="font-bold text-[11px] text-slate-355">{feat.sys}</span>
                      )}
                    </td>

                    {/* Operating column */}
                    <td className="py-4 px-4 text-center text-slate-400">
                      {typeof feat.opt === "boolean" ? (
                        feat.opt ? <Check className="h-5 w-5 text-emerald-400 mx-auto" /> : <span className="text-slate-700 font-bold">—</span>
                      ) : (
                        <span className="font-bold text-[11px] text-slate-355">{feat.opt}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Small Notice */}
        <div className="text-center mt-12 pt-8 border-t border-slate-800/20">
          <p className="text-[11px] text-slate-500 max-w-xl mx-auto leading-relaxed font-medium">
            * Chi phí triển khai thực tế phụ thuộc vào độ phức tạp của kịch bản chatbot, khối lượng dữ liệu huấn luyện, số lượng trang website và các cổng tích hợp phần mềm khác.
          </p>
        </div>
      </div>
    </section>
  );
}
