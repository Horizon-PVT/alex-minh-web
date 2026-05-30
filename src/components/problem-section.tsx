import React from "react";
import { MessageSquareOff, Globe2, FileX } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: MessageSquareOff,
      title: "Trả lời khách chậm trễ",
      desc: "Khách hỏi nhưng nhân viên bận đón khách trực tiếp nên không rep kịp. Sau 5 phút, họ đã sang nhắn tin cho đối thủ."
    },
    {
      icon: Globe2,
      title: "Website cũ không ra đơn",
      desc: "Chi tiền làm web nhưng giao diện lỗi thời, không chuẩn di động, thiếu các nút Zalo/Hotline nổi bật khiến khách thoát trang nhanh."
    },
    {
      icon: FileX,
      title: "Bỏ sót thông tin khách hàng",
      desc: "Số điện thoại của khách bị trôi trong tin nhắn, không được lưu trữ tập trung, dẫn đến việc bỏ lỡ cơ hội chốt hợp đồng."
    }
  ];

  return (
    <section id="van-de" className="scroll-mt-24 md:scroll-mt-28 py-14 md:py-20 bg-[#070b13]/80 border-y border-slate-800/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
            Thực Trạng Doanh Nghiệp
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
            Có Phải Bạn Đang Gặp Những Trở Ngại Này?
          </p>
          <div className="h-1 w-12 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Problems Grid - Simplified to 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((prob, index) => {
            const Icon = prob.icon;
            return (
              <div
                key={index}
                className="bg-[#131926]/20 border border-slate-800/60 p-6 rounded-2xl flex flex-col space-y-4 hover:border-rose-500/20 transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <div className="p-2.5 w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 group-hover:bg-rose-500/15 transition-colors flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-slate-100 font-bold text-sm sm:text-base">
                  {prob.title}
                </h3>
                <p className="text-slate-450 text-xs leading-relaxed">
                  {prob.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
