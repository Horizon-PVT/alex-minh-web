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

        {/* Group 1: Gói Triển Khai Ban Đầu */}
        <div className="mb-16">
          <div className="text-center md:text-left mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-white flex items-center justify-center md:justify-start space-x-2.5">
              <span className="h-2 w-2 rounded-full bg-[#00E5FF]"></span>
              <span>1. Gói Triển Khai Ban Đầu</span>
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 pl-0 md:pl-4.5 font-medium">
              Giải pháp thiết kế và xây dựng hệ thống website + chatbot AI ban đầu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
            {pricingPackages.filter(pkg => pkg.id !== "operating-optimizing").map((pkg) => {
              const isFeatured = pkg.isPopular;
              return (
                <div
                  key={pkg.id}
                  className={`rounded-3xl p-6 flex flex-col justify-between relative transition-all duration-300 transform group text-left ${
                    isFeatured
                      ? "bg-[#0e1626]/95 border-2 border-amber-500/60 shadow-[0_20px_50px_rgba(245,158,11,0.25),0_0_30px_rgba(6,182,212,0.15)] lg:scale-[1.03] lg:-translate-y-1.5 z-20 ring-1 ring-cyan-500/30"
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
                      <h4 className="text-white font-extrabold text-lg sm:text-xl tracking-tight">
                        {pkg.name}
                      </h4>
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
                      <div className="flex items-baseline space-x-1 mt-1.5 whitespace-nowrap">
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
                      {pkg.priceSub && (
                        <div className="text-[10px] text-slate-400 mt-1 font-semibold italic whitespace-nowrap">
                          {pkg.priceSub}
                        </div>
                      )}
                    </div>

                    {/* Fit Badge */}
                    <div className={`mb-4 px-3 py-1.8 rounded-xl text-[10px] font-bold tracking-wide ${
                      isFeatured 
                        ? "bg-amber-500/10 border border-amber-500/20 text-amber-300" 
                        : "bg-slate-900/60 border border-slate-805 text-slate-400"
                    }`}>
                      {pkg.fitBadge}
                    </div>

                    {/* Promo Badge & Note */}
                    {pkg.promoBadge && (
                      <div className="mb-6 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-left animate-pulse">
                        <div className="text-[11px] font-black text-amber-400 tracking-wide flex items-center gap-1.5">
                          <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                          <span>{pkg.promoBadge}</span>
                        </div>
                        {pkg.promoNote && (
                          <p className="text-[10px] text-slate-300 leading-relaxed mt-1.5 font-medium">
                            {pkg.promoNote}
                          </p>
                        )}
                      </div>
                    )}

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
                  <div className="space-y-3 w-full">
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
                </div>
              );
            })}
          </div>
        </div>

        {/* Group 2: Dịch Vụ Growth Partner Hàng Tháng */}
        {pricingPackages.filter(pkg => pkg.id === "operating-optimizing").map((pkg) => (
          <div key={pkg.id} className="mb-20 max-w-5xl mx-auto">
            <div className="text-center md:text-left mb-8">
              <h3 className="text-xl sm:text-2xl font-black text-white flex items-center justify-center md:justify-start space-x-2.5">
                <span className="h-2 w-2 rounded-full bg-[#00E5FF]"></span>
                <span>2. Dịch vụ Growth Partner hàng tháng</span>
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 pl-0 md:pl-4.5 font-medium">
                Thuê ngoài đội ngũ đồng hành xây thương hiệu, vận hành kênh và tối ưu tăng trưởng liên tục.
              </p>
            </div>

            <div className="bg-[#0b1220]/50 border border-[#00E5FF]/20 rounded-3xl p-6 md:p-8 hover:border-[#00E5FF]/40 transition-all duration-300 relative overflow-hidden group">
              {/* Decorative light glow */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#00E5FF]/5 blur-[60px] pointer-events-none group-hover:bg-[#00E5FF]/8 transition-all duration-500"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10 text-left">
                {/* Left Side: Package Info, Pricing & CTA */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-[#00E5FF] text-[9px] font-black uppercase tracking-widest mb-3">
                      GROWTH PARTNER
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {pkg.name}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed font-medium">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Pricing Info */}
                  <div className="py-4 border-y border-slate-800/50">
                    <span className="text-[9.5px] text-slate-500 uppercase font-black tracking-wider block">Chi phí đồng hành</span>
                    <div className="flex items-baseline space-x-1 mt-1.5">
                      <span className="text-slate-400 text-xs font-semibold mr-1">{pkg.pricePrefix}</span>
                      <span className="text-4xl font-black text-[#00E5FF] tracking-tight">
                        {pkg.priceVal}
                      </span>
                      <span className="text-sm font-bold text-slate-400 ml-1">
                        {pkg.priceUnit}
                      </span>
                    </div>
                    {pkg.priceSub && (
                      <div className="text-xs text-amber-400 font-extrabold mt-2 tracking-wide">
                        💡 {pkg.priceSub}
                      </div>
                    )}
                  </div>

                  {/* Fit Badge & CTA */}
                  <div className="space-y-4">
                    <div className="inline-block px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-[10px] sm:text-xs text-slate-350 font-bold">
                      {pkg.fitBadge}
                    </div>

                    <div className="space-y-3 w-full">
                      <Link
                        href={`/lien-he?package=${pkg.id}`}
                        className="w-full text-center py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider block cursor-pointer active:scale-[0.98] bg-gradient-to-r from-[#00E5FF] to-blue-600 hover:brightness-110 text-white shadow-lg shadow-[#00E5FF]/10 transition-all duration-300"
                      >
                        {pkg.ctaText}
                      </Link>
                      {pkg.promoNote && (
                        <p className="text-[10px] text-slate-500 leading-normal font-semibold italic">
                          * {pkg.promoNote}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Side: Detailed bullets */}
                <div className="lg:col-span-6 bg-[#070b13]/60 backdrop-blur-sm border border-slate-850 p-6 rounded-2xl flex flex-col justify-center">
                  <h5 className="text-white font-extrabold text-xs sm:text-sm mb-4 tracking-wide uppercase text-slate-300">
                    Phạm vi hỗ trợ trong gói:
                  </h5>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3.5">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate-350 leading-relaxed font-medium">
                        <div className="h-4.5 w-4.5 rounded-full flex items-center justify-center shrink-0 border mt-0.5 bg-[#00E5FF]/10 border-[#00E5FF]/20 text-[#00E5FF]">
                          <Check className="h-2.5 w-2.5" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Growth Partner Explanation Section */}
        <div className="mt-20 border-t border-slate-800/40 pt-16 max-w-5xl mx-auto text-center">
          <div className="mb-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-[#00E5FF] text-[9px] font-black uppercase tracking-widest mb-3">
              GIẢI THÍCH DỊCH VỤ
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Growth Partner Làm Gì Cho Doanh Nghiệp?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed font-medium">
              Không chỉ bảo trì website — chúng tôi đồng hành xây thương hiệu, xây kênh bán hàng online và tối ưu hệ thống thu lead mỗi tháng.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-[#0b1220]/40 backdrop-blur-md border border-slate-850 p-5 rounded-2xl text-left space-y-2.5">
              <div className="h-9 w-9 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF] font-black text-sm">
                01
              </div>
              <h5 className="text-white font-extrabold text-sm sm:text-base">Xây nền thương hiệu</h5>
              <p className="text-slate-400 text-xs leading-relaxed font-medium">
                Định vị, thông điệp bán hàng, phong cách nội dung và nhận diện truyền thông phù hợp với doanh nghiệp.
              </p>
            </div>

            <div className="bg-[#0b1220]/40 backdrop-blur-md border border-slate-850 p-5 rounded-2xl text-left space-y-2.5">
              <div className="h-9 w-9 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF] font-black text-sm">
                02
              </div>
              <h5 className="text-white font-extrabold text-sm sm:text-base">Xây kênh bán hàng online</h5>
              <p className="text-slate-400 text-xs leading-relaxed font-medium">
                Đồng bộ website, Fanpage, Zalo OA, TikTok/Reels và các điểm chạm khách hàng.
              </p>
            </div>

            <div className="bg-[#0b1220]/40 backdrop-blur-md border border-slate-850 p-5 rounded-2xl text-left space-y-2.5">
              <div className="h-9 w-9 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF] font-black text-sm">
                03
              </div>
              <h5 className="text-white font-extrabold text-sm sm:text-base">Vận hành nội dung & media</h5>
              <p className="text-slate-400 text-xs leading-relaxed font-medium">
                Lên kế hoạch nội dung, thiết kế banner, bài đăng hoặc video ngắn theo phạm vi từng gói.
              </p>
            </div>

            <div className="bg-[#0b1220]/40 backdrop-blur-md border border-[#00E5FF]/20 p-5 rounded-2xl text-left space-y-2.5 relative overflow-hidden group shadow-[0_0_15px_rgba(6,182,212,0.05)]">
              {/* Subtle cyan accent glow */}
              <div className="absolute right-0 bottom-0 w-20 h-20 rounded-full bg-[#00E5FF]/5 blur-xl"></div>
              <div className="h-9 w-9 rounded-xl bg-[#00E5FF]/20 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] font-black text-sm relative z-10">
                04
              </div>
              <h5 className="text-white font-extrabold text-sm sm:text-base relative z-10">Tối ưu lead & báo cáo</h5>
              <p className="text-slate-300 text-xs leading-relaxed font-medium relative z-10">
                Theo dõi chatbot, form, Google Sheet/Telegram và đề xuất cải thiện hàng tháng.
              </p>
            </div>
          </div>
        </div>

        {/* 3 levels of operations */}
        <div className="mt-20 max-w-5xl mx-auto text-center">
          <div className="mb-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[9px] font-black uppercase tracking-widest mb-3">
              CẤP ĐỘ PHẠM VI
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              3 Cấp Độ Vận Hành Theo Nhu Cầu
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed font-medium">
              Lựa chọn quy mô hỗ trợ tối ưu nhất dựa trên nguồn lực và mục tiêu chuyển đổi của doanh nghiệp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0b1220]/40 border border-slate-850 p-6 rounded-2xl text-left space-y-4 hover:border-slate-800 transition-all duration-350">
              <div>
                <h5 className="text-white font-extrabold text-base sm:text-lg">Starter Ops</h5>
                <div className="text-xs font-semibold text-[#00E5FF] mt-1">Từ 500k/tháng</div>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium border-t border-slate-800/40 pt-3">
                Bảo trì website, cập nhật nhỏ, kiểm tra chatbot/form/lead và hỗ trợ kỹ thuật cơ bản.
              </p>
            </div>

            <div className="bg-[#0b1220]/75 border-2 border-amber-500/30 p-6 rounded-2xl text-left space-y-4 hover:border-amber-500/50 transition-all duration-350 relative">
              <span className="absolute -top-3px right-6 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[8px] font-black tracking-widest uppercase">
                PHỔ BIẾN
              </span>
              <div>
                <h5 className="text-white font-extrabold text-base sm:text-lg">Growth Ops</h5>
                <div className="text-xs font-semibold text-amber-400 mt-1">Từ 2tr/tháng</div>
              </div>
              <p className="text-slate-350 text-xs sm:text-sm leading-relaxed font-medium border-t border-slate-800/40 pt-3">
                Quản trị website, tối ưu chatbot, nội dung, media và báo cáo hiệu quả hàng tháng.
              </p>
            </div>

            <div className="bg-[#0b1220]/40 border border-slate-850 p-6 rounded-2xl text-left space-y-4 hover:border-slate-800 transition-all duration-350">
              <div>
                <h5 className="text-white font-extrabold text-base sm:text-lg">Full Channel Ops</h5>
                <div className="text-xs font-semibold text-[#00E5FF] mt-1">Từ 5tr+/tháng</div>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium border-t border-slate-800/40 pt-3">
                Xây kênh, vận hành đa nền tảng, kế hoạch nội dung, media định kỳ và tối ưu chiến dịch.
              </p>
            </div>
          </div>

          <p className="text-[10px] text-slate-500 mt-5 italic leading-relaxed max-w-xl mx-auto font-medium">
            * Phạm vi công việc, số lượng nội dung/media và kênh vận hành được thống nhất theo từng gói.
          </p>
        </div>

        {/* Monthly process flow */}
        <div className="mt-20 mb-20 max-w-5xl mx-auto text-center">
          <div className="mb-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-[#00E5FF] text-[9px] font-black uppercase tracking-widest mb-3">
              CHU KỲ VẬN HÀNH
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Quy Trình Đồng Hành Hàng Tháng
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed font-medium">
              Vận hành có kế hoạch và kỷ luật giúp hệ thống luôn tối ưu và bám sát thực tế kinh doanh.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {/* Horizontal line connector for desktop grid */}
            <div className="hidden lg:block absolute top-[44px] left-[12%] right-[12%] h-[1px] bg-slate-800/40 z-0"></div>

            <div className="bg-[#0b1220]/30 border border-slate-850 p-5 rounded-2xl text-left relative z-10 space-y-3">
              <div className="h-10 w-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 text-xs font-black shadow-inner">
                T1
              </div>
              <h5 className="text-white font-extrabold text-sm sm:text-base">Tuần 1 — Kiểm tra & kế hoạch</h5>
              <p className="text-slate-400 text-xs leading-normal font-medium">
                Audit website, chatbot, form, lead và nội dung hiện tại để đưa ra lộ trình tối ưu trong tháng.
              </p>
            </div>

            <div className="bg-[#0b1220]/30 border border-slate-850 p-5 rounded-2xl text-left relative z-10 space-y-3">
              <div className="h-10 w-10 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/25 flex items-center justify-center text-[#00E5FF] text-xs font-black shadow-inner">
                T2
              </div>
              <h5 className="text-white font-extrabold text-sm sm:text-base">Tuần 2 — Triển khai nội dung/media</h5>
              <p className="text-slate-400 text-xs leading-normal font-medium">
                Cập nhật website, kịch bản chatbot, banner hình ảnh hoặc sản xuất video ngắn theo scope thỏa thuận.
              </p>
            </div>

            <div className="bg-[#0b1220]/30 border border-slate-850 p-5 rounded-2xl text-left relative z-10 space-y-3">
              <div className="h-10 w-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 text-xs font-black shadow-inner">
                T3
              </div>
              <h5 className="text-white font-extrabold text-sm sm:text-base">Tuần 3 — Theo dõi lead & tối ưu</h5>
              <p className="text-slate-400 text-xs leading-normal font-medium">
                Xem dữ liệu chatbot/form/Google Sheet/Telegram để điều chỉnh thông điệp và luồng tư vấn tăng chuyển đổi.
              </p>
            </div>

            <div className="bg-[#0b1220]/30 border border-slate-850 p-5 rounded-2xl text-left relative z-10 space-y-3">
              <div className="h-10 w-10 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/25 flex items-center justify-center text-[#00E5FF] text-xs font-black shadow-inner">
                T4
              </div>
              <h5 className="text-white font-extrabold text-sm sm:text-base">Tuần 4 — Báo cáo & đề xuất</h5>
              <p className="text-slate-400 text-xs leading-normal font-medium">
                Tổng kết hiệu quả số lượng lead, bàn giao báo cáo chi tiết và thảo luận kế hoạch tăng trưởng tháng mới.
              </p>
            </div>
          </div>
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
                  <th className="py-5 px-4 text-center w-[16%] uppercase text-[10px] tracking-wider">Vận hành Growth Partner</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feat, index) => {
                  if (feat.isHeader) {
                    return (
                      <tr key={`header-${index}`} className="bg-[#0e1526]/60 border-y border-slate-800/50">
                        <td colSpan={5} className="py-3.5 px-6 font-black text-[11px] sm:text-xs uppercase tracking-wider text-[#00E5FF] bg-gradient-to-r from-[#00E5FF]/10 via-[#00E5FF]/5 to-transparent">
                          {feat.name}
                        </td>
                      </tr>
                    );
                  }
                  return (
                    <tr key={index} className="border-b border-slate-900 hover:bg-slate-900/10 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-300">{feat.name}</td>
                      
                      {/* Web column */}
                      <td className="py-4 px-4 text-center text-slate-400">
                        {typeof feat.web === "boolean" ? (
                          feat.web ? <Check className="h-5 w-5 text-emerald-400 mx-auto" /> : <span className="text-slate-700 font-bold">—</span>
                        ) : (
                          <span className="font-bold text-[11px] text-slate-355">{feat.web}</span>
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
                  );
                })}
              </tbody>
            </table>
          </div>
          
          {/* Service levels legend */}
          <div className="mt-4 px-4 py-3 rounded-2xl bg-[#090d16]/80 border border-slate-800/40 text-center max-w-3xl mx-auto">
            <p className="text-[10px] sm:text-xs text-slate-400 font-semibold leading-relaxed">
              💡 <span className="text-[#00E5FF] font-black">Starter Ops</span>: bảo trì & cập nhật cơ bản • <span className="text-[#00E5FF] font-black">Growth Ops</span>: nội dung, media, báo cáo • <span className="text-[#00E5FF] font-black">Full Channel Ops</span>: xây kênh, vận hành đa kênh và tối ưu chiến dịch
            </p>
          </div>
        </div>

        {/* Small Notice */}
        <div className="text-center mt-12 pt-8 border-t border-slate-800/20 space-y-3">
          <p className="text-xs text-amber-400 font-extrabold tracking-wide flex items-center justify-center gap-1.5">
            <Sparkles className="h-4 w-4 text-amber-400 animate-pulse animate-duration-1000" />
            <span>🎁 Ưu đãi KODA ELITE áp dụng cho khách triển khai trong giai đoạn ra mắt.</span>
          </p>
          <p className="text-[11px] text-slate-500 max-w-xl mx-auto leading-relaxed font-medium">
            * Chi phí triển khai thực tế phụ thuộc vào độ phức tạp của kịch bản chatbot, khối lượng dữ liệu huấn luyện, số lượng trang website và các cổng tích hợp phần mềm khác.
          </p>
        </div>
      </div>
    </section>
  );
}
