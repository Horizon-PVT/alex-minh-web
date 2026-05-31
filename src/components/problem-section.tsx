import React from "react";
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
    <section id="van-de" className="scroll-mt-24 md:scroll-mt-28 py-16 md:py-24 bg-[#090d16]/90 border-b border-slate-800/30 relative overflow-hidden">
      {/* Background glow node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-rose-500/5 blur-[90px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((prob, index) => {
            const Icon = prob.icon;
            return (
              <div
                key={index}
                className="bg-[#0b1220]/60 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 md:p-7 flex flex-col justify-between hover:border-rose-500/25 hover:shadow-[0_15px_30px_rgba(239,68,68,0.04)] transition-all duration-300 transform hover:-translate-y-1 relative group overflow-hidden"
              >
                {/* Glow accent in card hover */}
                <div className="absolute -inset-px bg-gradient-to-r from-rose-500/0 via-rose-500/5 to-rose-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="space-y-4 relative z-10">
                  <div className="p-2.5 w-11 h-11 rounded-xl bg-rose-500/10 text-rose-400 group-hover:bg-rose-500/15 transition-colors flex items-center justify-center shrink-0 border border-rose-500/15">
                    <Icon className="h-5 w-5" />
                  </div>
                  
                  <div className="space-y-2 text-left">
                    <h4 className="text-slate-100 font-extrabold text-base sm:text-lg tracking-tight group-hover:text-white transition-colors">
                      {prob.title}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed font-medium line-clamp-2">
                      {prob.desc}
                    </p>
                  </div>

                  <div className="text-rose-400 text-xs font-bold border-l-2 border-rose-500/40 pl-2 leading-relaxed text-left">
                    {prob.consequence}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-850/40 text-left relative z-10">
                  <span className="text-[9px] font-black uppercase tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/20 px-2.5 py-1 rounded-md">
                    {prob.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
