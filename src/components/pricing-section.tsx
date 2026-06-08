"use client";

import Link from "next/link";
import { AlertTriangle, Check, Flame, ShieldCheck, Sparkles, X } from "lucide-react";
import { implementationScope, outOfScopeItems, pricingPackages } from "@/lib/pricing";

export default function PricingSection() {
  return (
    <section id="bang-gia" className="scroll-mt-24 md:scroll-mt-28 py-20 md:py-28 bg-[#090d16] border-t border-slate-800/30 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-[#00E5FF] text-[10px] font-black uppercase tracking-widest mb-4">
            <Sparkles className="h-3 w-3" />
            <span>Gói triển khai tháng 6</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Website AI cho doanh nghiệp địa phương
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Website là sản phẩm chính. Chatbot AI tư vấn theo dữ liệu doanh nghiệp là điểm khác biệt. Form, Google Sheet và Telegram/email alert giúp đội ngũ nhận khách rõ hơn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
          {pricingPackages.map((pkg) => {
            const isFeatured = pkg.isPopular;

            return (
              <article
                key={pkg.id}
                className={`rounded-3xl p-6 flex flex-col justify-between relative text-left transition-all duration-300 ${
                  isFeatured
                    ? "bg-[#0e1626]/95 border-2 border-amber-500/60 shadow-[0_20px_50px_rgba(245,158,11,0.22),0_0_30px_rgba(6,182,212,0.12)] lg:scale-[1.04] lg:-translate-y-2 z-20"
                    : "bg-[#0b1220]/55 border border-slate-800/60 z-10"
                }`}
              >
                {isFeatured && (
                  <span className="absolute -top-3.5 left-6 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-slate-950 text-[10px] font-black tracking-widest uppercase flex items-center space-x-1.5 shadow-[0_4px_15px_rgba(245,158,11,0.3)]">
                    <Flame className="h-3.5 w-3.5 fill-current text-slate-950" />
                    <span>{pkg.featuredNote}</span>
                  </span>
                )}

                <div>
                  <h3 className="text-white font-extrabold text-xl tracking-tight">{pkg.name}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mt-3 min-h-[48px] font-medium">
                    {pkg.description}
                  </p>

                  <div className="my-5 py-4 border-y border-slate-800/50">
                    <span className="text-[9.5px] text-slate-500 uppercase font-black tracking-wider block">Đầu tư</span>
                    <div className="mt-1.5">
                      <span className={`text-3xl sm:text-4xl font-black tracking-tight ${isFeatured ? "text-amber-300" : "text-white"}`}>
                        {pkg.price}
                      </span>
                    </div>
                    {pkg.priceSub && (
                      <div className="text-[10px] text-amber-400 mt-2 font-semibold italic">
                        {pkg.priceSub}
                      </div>
                    )}
                  </div>

                  <div className={`mb-5 px-3 py-2 rounded-xl text-[10px] font-bold tracking-wide ${
                    isFeatured
                      ? "bg-amber-500/10 border border-amber-500/20 text-amber-300"
                      : "bg-slate-900/70 border border-slate-800 text-slate-400"
                  }`}>
                    {pkg.fitBadge}
                  </div>

                  {pkg.promoBadge && (
                    <div className="mb-5 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/25 text-left">
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

                  <ul className="space-y-3.5 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-2.5 text-xs text-slate-300 leading-relaxed font-medium">
                        <span className={`h-[18px] w-[18px] rounded-full flex items-center justify-center shrink-0 border mt-0.5 ${
                          isFeatured
                            ? "bg-amber-500/10 border-amber-500/20 text-amber-400"
                            : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                        }`}>
                          <Check className="h-2.5 w-2.5" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/lien-he?package=${pkg.id}`}
                  className={`w-full text-center py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all block cursor-pointer active:scale-[0.98] ${
                    isFeatured
                      ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 hover:brightness-110 shadow-md shadow-amber-500/10 border border-amber-400/20"
                      : "bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white"
                  }`}
                >
                  {pkg.ctaText}
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6 sm:p-8 text-left">
            <div className="flex items-center gap-2 text-cyan-200 text-xs font-black uppercase tracking-widest mb-5">
              <ShieldCheck className="h-4 w-4" />
              <span>Phạm vi triển khai</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {implementationScope.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                  <Check className="h-4 w-4 text-cyan-300 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/50 p-6 sm:p-8 text-left">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-black uppercase tracking-widest mb-5">
              <AlertTriangle className="h-4 w-4" />
              <span>Không bao gồm nếu chưa báo giá thêm</span>
            </div>
            <ul className="grid grid-cols-1 gap-2.5">
              {outOfScopeItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
                  <X className="h-3.5 w-3.5 text-slate-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 max-w-5xl mx-auto rounded-2xl border border-amber-500/20 bg-amber-500/8 px-5 py-4 text-center">
          <p className="text-xs sm:text-sm text-amber-100 leading-relaxed font-semibold">
            Alex Minh AI triển khai hệ thống website, chatbot AI và công cụ nhận lead. Hiệu quả kinh doanh còn phụ thuộc vào sản phẩm, traffic, quảng cáo, đội sale và cách doanh nghiệp xử lý khách hàng.
          </p>
        </div>
      </div>
    </section>
  );
}
