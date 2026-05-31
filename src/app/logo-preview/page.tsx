import React from "react";
import BrandLogo from "@/components/brand-logo";
import { siteConfig } from "@/lib/site-config";
import { Sparkles, Info } from "lucide-react";

export default function LogoPreviewPage() {
  return (
    <div className="bg-[#0b1220] min-h-screen text-slate-100 font-sans pb-20 relative">
      {/* Dynamic background glow */}
      <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-[#1677FF]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-[25rem] h-[25rem] bg-[#7C3AED]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 pt-32 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Brand Board Preview</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Concept 02 Brand Identity System
          </h1>
          <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto">
            Review page for local evaluation. Includes vector logo variants, color tokens, slogans, and site integration mocks.
          </p>
          <div className="h-1 w-12 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Column 1: Logo Lockup Variants */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#131d30]/60 border border-slate-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur">
              <h2 className="text-white font-bold text-lg mb-6 border-b border-slate-800 pb-3 flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-secondary"></span>
                <span>Logo Lockup Variants (SVG)</span>
              </h2>

              <div className="space-y-8">
                {/* Full Horizontal */}
                <div className="space-y-2">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">1. Full Horizontal Logo (Desktop Header)</span>
                  <div className="p-6 rounded-2xl bg-[#090d16] border border-slate-850 flex items-center justify-center">
                    <BrandLogo variant="full" />
                  </div>
                </div>

                {/* Compact */}
                <div className="space-y-2">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">2. Compact Logo (Mobile Header / App Tiles)</span>
                  <div className="p-6 rounded-2xl bg-[#090d16] border border-slate-850 flex items-center justify-center">
                    <BrandLogo variant="compact" />
                  </div>
                </div>

                {/* Footer lockup */}
                <div className="space-y-2">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">3. Footer Logo (Includes Tagline Subtext)</span>
                  <div className="p-6 rounded-2xl bg-[#090d16] border border-slate-850 flex items-center justify-center">
                    <BrandLogo variant="footer" />
                  </div>
                </div>

                {/* Icon-only */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">4. Icon Only</span>
                    <div className="p-6 rounded-2xl bg-[#090d16] border border-slate-850 flex items-center justify-center">
                      <BrandLogo variant="icon" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">5. Favicon App Style</span>
                    <div className="p-6 rounded-2xl bg-[#090d16] border border-slate-850 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-2xl bg-[#0b1220] border-2 border-primary/25 p-1 flex items-center justify-center shadow-lg">
                        <BrandLogo variant="icon" className="scale-110" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Brand Slogans & Color Tokens */}
          <div className="space-y-6">
            
            {/* Slogans */}
            <div className="bg-[#131d30]/60 border border-slate-800/80 rounded-3xl p-6 backdrop-blur">
              <h2 className="text-white font-bold text-lg mb-4 border-b border-slate-800 pb-3 flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-accent"></span>
                <span>Taglines & Slogans</span>
              </h2>

              <ul className="space-y-4 text-xs sm:text-sm">
                <li className="space-y-1">
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Primary Slogan</span>
                  <p className="text-white font-semibold italic bg-[#090d16] p-2.5 rounded-lg border border-slate-850">
                    &quot;{siteConfig.tagline}&quot;
                  </p>
                </li>
                <li className="space-y-1">
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Brand Positioning / Description</span>
                  <p className="text-slate-300 leading-relaxed bg-[#090d16] p-2.5 rounded-lg border border-slate-850">
                    {siteConfig.description}
                  </p>
                </li>
              </ul>
            </div>

            {/* Colors */}
            <div className="bg-[#131d30]/60 border border-slate-800/80 rounded-3xl p-6 backdrop-blur">
              <h2 className="text-white font-bold text-lg mb-4 border-b border-slate-800 pb-3 flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                <span>Concept 02 Tokens</span>
              </h2>

              <div className="grid grid-cols-2 gap-3 text-[10px] font-bold">
                <div className="flex items-center space-x-2 p-2 rounded bg-slate-900 border border-slate-850">
                  <span className="w-5 h-5 rounded bg-[#0b1220] border border-slate-750 shrink-0"></span>
                  <div>
                    <span className="text-white block font-mono">#0B1220</span>
                    <span className="text-slate-500 text-[8px]">Deep Navy</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded bg-slate-900 border border-slate-850">
                  <span className="w-5 h-5 rounded bg-[#1677FF] shrink-0"></span>
                  <div>
                    <span className="text-white block font-mono">#1677FF</span>
                    <span className="text-slate-500 text-[8px]">Electric Blue</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded bg-slate-900 border border-slate-850">
                  <span className="w-5 h-5 rounded bg-[#00E5FF] shrink-0"></span>
                  <div>
                    <span className="text-white block font-mono">#00E5FF</span>
                    <span className="text-slate-500 text-[8px]">Cyan</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded bg-slate-900 border border-slate-850">
                  <span className="w-5 h-5 rounded bg-[#7C3AED] shrink-0"></span>
                  <div>
                    <span className="text-white block font-mono">#7C3AED</span>
                    <span className="text-slate-500 text-[8px]">Violet</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded bg-slate-900 border border-slate-850 col-span-2">
                  <span className="w-5 h-5 rounded bg-[#FFB020] shrink-0"></span>
                  <div>
                    <span className="text-white block font-mono">#FFB020</span>
                    <span className="text-slate-500 text-[8px]">Amber Accent (Alert / Hot Lead)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Local Verification Notice */}
        <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-2xl flex items-start space-x-3 mb-10 max-w-2xl mx-auto">
          <Info className="h-5 w-5 text-amber-400 mt-0.5 shrink-0" />
          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <span className="font-bold text-white block mb-0.5">Môi trường thử nghiệm an toàn</span>
            Mọi thay đổi hiển thị ở trang này và trang chủ hiện mới chỉ chạy trên local. Không ảnh hưởng đến các API lead, GA4, hay các module blog sitemap có sẵn.
          </div>
        </div>

      </div>
    </div>
  );
}
