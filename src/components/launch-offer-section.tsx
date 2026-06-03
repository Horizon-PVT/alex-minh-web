"use client";

import React from "react";
import { Gift, ShieldCheck, Globe, Bot, Send } from "lucide-react";

export default function LaunchOfferSection() {
  const offers = [
    {
      icon: <Globe className="h-6 w-6 text-cyan-400" />,
      title: "Tặng tên miền năm đầu",
      description: "Khởi tạo thương hiệu internet chuyên nghiệp với tên miền quốc tế (.com, .net, .vn) miễn phí năm đầu tiên."
    },
    {
      icon: <Bot className="h-6 w-6 text-[#00E5FF]" />,
      title: "Chatbot AI tư vấn & xin thông tin khách",
      description: "Kịch bản chatbot AI thiết kế theo ngành dọc, hoạt động 24/7 trả lời tư vấn và ghi nhận thông tin khách hàng mẫu."
    },
    {
      icon: <Send className="h-6 w-6 text-indigo-400" />,
      title: "Lead tự động về Google Sheet/Telegram",
      description: "Thông tin liên hệ của khách ngay lập tức đồng bộ về bảng tính Google Sheet và nhắn tin thông báo qua Telegram của bạn."
    }
  ];

  return (
    <section className="py-20 bg-[#070b13] relative overflow-hidden border-t border-slate-900">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/3 blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-black uppercase tracking-widest mb-4">
            <Gift className="h-3.5 w-3.5 animate-bounce" />
            <span>CHƯƠNG TRÌNH ƯU ĐÃI RA MẮT (20 DOANH NGHIỆP ĐẦU TIÊN)</span>
          </div>
          
          <h2 
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.03em" }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Gói Khởi Động AI Bán Hàng
          </h2>
          
          <p 
            style={{ fontFamily: "var(--font-sans)", fontWeight: 450 }}
            className="text-slate-350 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed"
          >
            Dành cho doanh nghiệp muốn có website chuyên nghiệp, chatbot tư vấn 24/7 và hệ thống lưu khách hàng tự động.
          </p>
        </div>

        {/* Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {offers.map((item, index) => (
            <div 
              key={index}
              className="bg-[#0b1220]/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card top border glow line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent group-hover:via-cyan-500/60 transition-all duration-500"></div>
              
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:border-cyan-500/20 transition-colors">
                {item.icon}
              </div>

              {/* Offer Details */}
              <h3 
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                className="text-white text-lg sm:text-xl font-bold tracking-tight mb-3"
              >
                {item.title}
              </h3>
              
              <p 
                style={{ fontFamily: "var(--font-sans)" }}
                className="text-slate-400 text-xs sm:text-sm leading-relaxed"
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Special Terms & Domain Alternatives Info Box */}
        <div className="max-w-4xl mx-auto mt-12 bg-slate-950/40 border border-slate-800/60 rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-4 text-left">
          <div className="w-10 h-10 shrink-0 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
            <ShieldCheck className="h-5 w-5" />
          </div>
          
          <div style={{ fontFamily: "var(--font-sans)" }} className="flex-1 space-y-2">
            <p className="text-slate-350 text-xs sm:text-sm leading-relaxed">
              <strong className="text-slate-200">Điều khoản ưu đãi:</strong> Áp dụng cho gói website + chatbot AI. Không áp dụng tên miền premium hoặc tên miền đã có chủ sở hữu.
            </p>
            
            <p className="text-slate-350 text-xs sm:text-sm leading-relaxed border-t border-slate-900 pt-2.5">
              <strong className="text-cyan-400">Nếu doanh nghiệp đã có tên miền:</strong> Có thể đổi sang 1 tháng chăm sóc kỹ thuật hoặc tối ưu chatbot.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
