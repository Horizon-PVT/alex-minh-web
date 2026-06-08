"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, ArrowRight, CheckCircle2 } from "lucide-react";


export default function HeroSection() {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Force autoplay trigger programmatically on mount
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay check (silent fallback):", err);
      });
    }
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#050b16] py-16 md:py-24 z-10">
      <style>{`
        @keyframes driftGlow { 
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.15; } 
          50% { transform: translate(25px, -15px) scale(1.12); opacity: 0.25; } 
        }
        .animate-drift-glow { animation: driftGlow 14s ease-in-out infinite; }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-drift-glow {
            animation: none !important;
          }
          .hero-video-element {
            display: none !important;
          }
          .hero-fallback-element {
            opacity: 100 !important;
            pointer-events: auto !important;
            display: block !important;
          }
        }
      `}</style>

      {/* Cinematic Background Video / Fallback */}
      {videoError ? (
        <div className="absolute inset-0 w-full h-full bg-[#050b16] pointer-events-none hero-fallback-element z-0">
          <Image
            src="/images/hero/hero-banner-01-main-overview.png"
            alt="Website và Chatbot AI cho doanh nghiệp Thanh Hóa"
            fill
            sizes="100vw"
            className="object-cover object-center md:object-[82%_50%] opacity-[0.85] md:opacity-[0.98]"
            style={{ filter: "brightness(1.02) contrast(1.02) saturate(1.02)" }}
            priority
          />
        </div>
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-center md:object-[82%_50%] opacity-[1.0] pointer-events-none z-0 hero-video-element"
          style={{ filter: "brightness(1.02) contrast(1.02) saturate(1.02)" }}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero/hero-banner-01-main-overview.png"
          controls={false}
          disablePictureInPicture
          controlsList="nodownload noplaybackrate noremoteplayback"
          onError={() => setVideoError(true)}
          aria-hidden="true"
        >
          <source src="/videos/hero/alexminh-ai-hero.mp4" type="video/mp4" />
        </video>
      )}

      {/* Overlays to blend background video and text */}
      {/* 1. Sleek left-side gradient overlay targeting left text area only, matching the exact darkness and fade of the target image */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050b16] via-[#050b16]/92 via-[#050b16]/60 via-[#050b16]/15 to-transparent w-full md:w-[64%] pointer-events-none z-[5]"></div>
      
      {/* 2. Light bottom gradient to blend into adjacent sections (max 20%) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050b16]/20 pointer-events-none z-[5]"></div>

      {/* Ambient background glows */}
      <div className="absolute top-1/6 left-1/6 w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none animate-drift-glow z-[2]"></div>
      <div className="absolute bottom-1/6 right-1/6 w-[350px] h-[350px] rounded-full bg-primary/8 blur-[100px] pointer-events-none animate-drift-glow z-[2]" style={{ animationDelay: "-7s" }}></div>

      {/* Foreground Content */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Aligned to the left matching header logo, wide enough to sit on single line, full screen layout */}
          <div className="lg:col-span-8 max-w-[780px] mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left relative z-10">
            
            <div 
              style={{ fontFamily: "var(--font-sans)", fontWeight: 500, letterSpacing: "-0.01em" }} 
              className="inline-flex items-center self-center lg:self-start space-x-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-[11px] sm:text-xs shadow-[0_0_15px_rgba(245,158,11,0.08)] mb-5 select-none"
            >
              <span>✨</span>
              <span>Website AI cho doanh nghiệp địa phương</span>
            </div>
            
            <h1 
              style={{ 
                fontFamily: "var(--font-display)", 
                fontWeight: 800, 
                letterSpacing: "-0.02em", 
                lineHeight: 0.98, 
                fontSize: "clamp(32px, 3.4vw, 54px)", 
                filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.95))" 
              }} 
              className="tracking-tight text-white mb-6 text-center lg:text-left"
            >
              <span className="block lg:inline-block lg:whitespace-nowrap">
                Website AI
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#0088FF] to-[#00E5FF] bg-clip-text text-transparent block lg:inline-block lg:whitespace-nowrap">
                cho doanh nghiệp địa phương
              </span>
            </h1>

            <p 
              style={{ 
                fontFamily: "var(--font-display)", 
                fontWeight: 500, 
                fontSize: "clamp(15px, 1vw, 18px)", 
                lineHeight: 1.55, 
                letterSpacing: "-0.01em", 
                filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.9))" 
              }} 
              className="text-slate-200 max-w-xl leading-relaxed mb-6"
            >
              Thiết kế website chuyên nghiệp tích hợp chatbot AI tư vấn khách, form nhận thông tin và thông báo lead tự động.
            </p>

            <div 
              style={{ 
                fontFamily: "var(--font-display)", 
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.9)" 
              }} 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 mb-8 text-white text-xs sm:text-sm font-bold"
            >
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="h-[18px] w-[18px] text-[#00E5FF] shrink-0" style={{ filter: "drop-shadow(0 2px 4px rgba(0, 229, 255, 0.25))" }} />
                <span>Website chuẩn mobile</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="h-[18px] w-[18px] text-[#00E5FF] shrink-0" style={{ filter: "drop-shadow(0 2px 4px rgba(0, 229, 255, 0.25))" }} />
                <span>Chatbot AI theo dữ liệu doanh nghiệp</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="h-[18px] w-[18px] text-[#00E5FF] shrink-0" style={{ filter: "drop-shadow(0 2px 4px rgba(0, 229, 255, 0.25))" }} />
                <span>Google Sheet • Telegram/email alert</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6 w-full sm:w-auto">
              <Link
                href="/lien-he?source=hero-demo"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px", letterSpacing: "-0.01em" }}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00E5FF] text-white hover:brightness-110 shadow-lg shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 whitespace-nowrap shrink-0"
              >
                <span>Nhận demo chatbot AI theo ngành</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#bang-gia"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px", letterSpacing: "-0.01em" }}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#050b16]/40 backdrop-blur-sm border border-white/20 hover:border-cyan-500/50 text-slate-100 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 whitespace-nowrap shrink-0"
              >
                <Play className="h-3.5 w-3.5 text-[#00E5FF] fill-[#00E5FF] stroke-2" />
                <span>Xem gói Web từ 4.9 triệu</span>
              </Link>
            </div>

            <div className="inline-flex items-center justify-center lg:justify-start gap-2 rounded-full border border-cyan-400/25 bg-[#050b16]/45 px-4 py-2 text-xs sm:text-sm font-semibold text-cyan-100 shadow-[0_0_18px_rgba(0,229,255,0.08)] backdrop-blur-sm mb-4">
              <CheckCircle2 className="h-4 w-4 text-[#00E5FF] shrink-0" />
              <span>Phù hợp cho Spa, Nha khoa, Thẩm mỹ, Khách sạn/Homestay, BĐS, Nhà hàng/Cafe, Phòng khám và Trung tâm đào tạo.</span>
            </div>

            {/* Launch Offer Promo Line */}
            <div 
              style={{ fontFamily: "var(--font-sans)", fontWeight: 500, letterSpacing: "-0.01em" }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-slate-900/40 to-cyan-500/15 border border-amber-500/25 text-[11px] sm:text-xs text-amber-400 mb-2 select-none"
            >
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="leading-none text-left">
                <strong className="text-amber-400 font-bold">Có demo trước khi triển khai:</strong>{" "}
                <span className="text-slate-200">Demo chatbot AI theo ngành nếu phù hợp với dữ liệu doanh nghiệp.</span>
              </span>
            </div>

            {/* Direction Lock trust line */}
            <div 
              style={{ fontFamily: "var(--font-sans)", fontWeight: 550, letterSpacing: "-0.015em" }}
              className="text-[10px] sm:text-xs text-cyan-400/90 mb-6 text-center lg:text-left pl-1"
            >
              Website chuẩn mobile • Chatbot AI tư vấn theo dữ liệu doanh nghiệp • Form nhận khách • Google Sheet • Telegram/email alert
            </div>

            {/* Trust section (Stars and customers avatars) */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/5 max-w-md mx-auto lg:mx-0 w-full justify-center lg:justify-start">
              <div className="flex -space-x-2.5 shrink-0">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80",
                  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=80&h=80&q=80",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&h=80&q=80"
                ].map((url, i) => (
                  <div key={i} className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#050b16] shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={url} alt="Customer Avatar" className="object-cover w-full h-full" />
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col items-start" style={{ fontFamily: "var(--font-sans)" }}>
                <div className="flex items-center text-amber-400 gap-0.5 leading-none">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-300 mt-1">Tập trung vào Web + Chatbot AI cho doanh nghiệp địa phương</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visually preserves room for the background video elements (col-span-4) */}
          <div className="hidden lg:block lg:col-span-4"></div>

        </div>
      </div>
    </section>
  );
}
