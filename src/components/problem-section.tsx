import React from "react";
import Image from "next/image";
import { MessageSquareOff, Globe2, FileX } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: MessageSquareOff,
      title: "Khách nhắn nhưng phản hồi chậm",
      desc: "Tin nhắn hỏi giá/dịch vụ đến liên tục nhưng không trả lời kịp.",
      consequence: "Hậu quả: khách chuyển sang đối thủ.",
      badge: "Phản hồi chậm"
    },
    {
      icon: Globe2,
      title: "Website có người xem nhưng không ra đơn",
      desc: "Giao diện cũ, thiếu CTA, thiếu luồng tư vấn khiến khách rời đi nhanh.",
      consequence: "Hậu quả: mất tiền quảng cáo vô ích.",
      badge: "Chuyển đổi thấp"
    },
    {
      icon: FileX,
      title: "Lead bị trôi, không ai chăm lại",
      desc: "Số điện thoại khách rơi trong inbox, không được lưu tập trung.",
      consequence: "Hậu quả: bỏ lỡ cơ hội chốt đơn.",
      badge: "Mất lead"
    }
  ];

  return (
    <section id="van-de" className="scroll-mt-28 md:scroll-mt-32 py-16 md:py-24 bg-[#090d16]/90 border-b border-slate-800/30 relative overflow-hidden">
      {/* Background glow node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-rose-500/5 blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-black uppercase tracking-widest text-rose-450 mb-2">
            Thách Thức Bán Hàng
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            3 nút thắt đang làm doanh nghiệp mất khách mỗi ngày
          </h3>
          <p className="text-slate-400 text-sm mt-3.5 max-w-2xl mx-auto leading-relaxed">
            Đây là những vấn đề phổ biến khiến website, inbox và nhân viên bán hàng không khai thác hết khách tiềm năng.
          </p>
          <div className="h-1 w-12 bg-rose-500/60 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Stacked Problems Column */}
          <div className="lg:col-span-6 space-y-5">
            {problems.map((prob, index) => {
              const Icon = prob.icon;
              return (
                <div
                  key={index}
                  className="bg-[#0b1220]/60 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-5 sm:p-6 flex space-x-4 items-start hover:border-rose-500/20 hover:shadow-[0_10px_20px_rgba(239,68,68,0.03)] transition-all duration-300 transform hover:-translate-x-1 group overflow-hidden relative"
                >
                  <div className="absolute -inset-px bg-gradient-to-r from-rose-500/0 via-rose-500/3 to-rose-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 group-hover:bg-rose-500/15 transition-colors border border-rose-500/15 shrink-0 mt-0.5">
                    <Icon className="h-5 w-5" />
                  </div>
                  
                  <div className="flex-1 space-y-2 text-left">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-slate-100 font-extrabold text-base tracking-tight group-hover:text-white transition-colors">
                        {prob.title}
                      </h4>
                      <span className="text-[9px] font-black uppercase tracking-wider bg-rose-500/10 text-rose-455 border border-rose-500/20 px-2.5 py-0.5 rounded-md">
                        {prob.badge}
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed font-medium">
                      {prob.desc}
                    </p>
                    <div className="text-rose-450 text-xs font-bold border-l-2 border-rose-500/30 pl-2 leading-relaxed pt-0.5">
                      {prob.consequence}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-6 flex justify-center relative group w-full">
            {/* Soft background glow */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-rose-500/20 to-orange-500/10 opacity-20 blur-xl group-hover:opacity-45 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 bg-[#050b16] shadow-2xl transition-transform duration-500 group-hover:scale-[1.01] p-1.5">
              <Image
                src="/images/hero/hero-banner-02-pain-points.png"
                alt="Ba nút thắt khiến doanh nghiệp mất khách mỗi ngày"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
                priority={false}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
