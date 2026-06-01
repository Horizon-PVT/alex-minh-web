"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";


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
            className="object-cover object-center opacity-[0.85] md:opacity-[0.98]"
            style={{ filter: "brightness(1.08) contrast(1.06) saturate(1.08)" }}
            priority
          />
        </div>
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-center md:object-[65%_50%] opacity-[0.88] md:opacity-[1.0] pointer-events-none z-0 hero-video-element"
          style={{ filter: "brightness(1.08) contrast(1.06) saturate(1.08)" }}
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
      {/* 1. Gradient overlay targeting left text area only */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050b16]/96 via-[#050b16]/62 to-transparent w-full md:w-[58%] pointer-events-none z-5"></div>
      
      {/* 2. Light bottom gradient to blend into adjacent sections (max 20%) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050b16]/20 pointer-events-none z-5"></div>

      {/* Ambient background glows */}
      <div className="absolute top-1/6 left-1/6 w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none animate-drift-glow z-2"></div>
      <div className="absolute bottom-1/6 right-1/6 w-[350px] h-[350px] rounded-full bg-primary/8 blur-[100px] pointer-events-none animate-drift-glow z-2" style={{ animationDelay: "-7s" }}></div>

      {/* Foreground Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Clean text placement direct on gradient background with text shadows */}
          <div className="lg:col-span-7 max-w-[620px] mx-auto lg:mx-0 flex flex-col space-y-6 text-center lg:text-left relative z-10">
            <div className="inline-flex items-center self-center lg:self-start space-x-1.5 px-3 py-1.5 rounded-full bg-slate-950/90 border border-cyan-500/30 md:border-amber-500/30 text-[#00E5FF] md:text-amber-300 text-[11px] font-bold shadow-[0_0_10px_rgba(0,229,255,0.05)]">
              <Sparkles className="h-3 w-3 text-cyan-400 md:text-amber-400 animate-pulse shrink-0" />
              <span>Thiết kế Website • Chatbot AI • Tự động hóa bán hàng</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight" style={{ textShadow: "0 2px 10px rgba(5, 11, 22, 0.9)" }}>
              <span className="bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                Website & <span className="whitespace-nowrap">Chatbot AI</span>
              </span>{" "}
              <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-primary via-secondary to-cyan-400 bg-clip-text text-transparent">
                Cho Doanh Nghiệp Thanh Hóa
              </span>
            </h1>

            <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-semibold" style={{ textShadow: "0 2px 6px rgba(5, 11, 22, 0.95)" }}>
              Tự động tư vấn khách, thu lead về Google Sheet/Telegram và giúp doanh nghiệp không bỏ lỡ khách hàng.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-slate-300 text-xs font-semibold max-w-md mx-auto lg:mx-0" style={{ textShadow: "0 1px 4px rgba(5, 11, 22, 0.9)" }}>
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <CheckCircle2 className="h-4 w-4 text-[#00E5FF] shrink-0" />
                <span>Trả lời tự động &lt; 2s</span>
              </div>
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <CheckCircle2 className="h-4 w-4 text-[#00E5FF] shrink-0" />
                <span>Đồng bộ Google Sheets</span>
              </div>
              <div className="flex items-center space-x-2 justify-center lg:justify-start">
                <CheckCircle2 className="h-4 w-4 text-[#00E5FF] shrink-0" />
                <span>Báo lead qua Telegram</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              <Link
                href="/lien-he"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:brightness-110 text-xs font-bold shadow-lg shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-1.5 whitespace-nowrap shrink-0"
              >
                <span>Nhận tư vấn miễn phí</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/demo-chatbot-ai"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-950/40 backdrop-blur-sm border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-white text-xs font-bold transition-all flex items-center justify-center space-x-1.5 whitespace-nowrap shrink-0"
              >
                <MessageSquare className="h-3.5 w-3.5 text-[#00E5FF]" />
                <span>Xem Demo Chatbot</span>
              </Link>
              <Link
                href="/#bang-gia"
                className="text-[#00E5FF] hover:text-white text-xs font-bold transition-all hover:underline flex items-center space-x-1 px-4 py-2 group whitespace-nowrap shrink-0"
                style={{ textShadow: "0 1px 4px rgba(5, 11, 22, 0.9)" }}
              >
                <span>Xem bảng giá dịch vụ</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Empty breathing space to let the background video elements play visually */}
          <div className="hidden lg:block lg:col-span-5"></div>

        </div>
      </div>
    </section>
  );
}
