import React from "react";
import { MessageSquareOff, Globe2, Clock8, FileX, ShieldAlert, BrainCircuit } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: MessageSquareOff,
      title: "Trả lời khách chậm trễ",
      desc: "Khách hàng nhắn tin qua Fanpage/Zalo hỏi giá nhưng nhân viên bận không rep ngay. Chỉ sau 5 phút họ đã chuyển sang đối thủ cạnh tranh."
    },
    {
      icon: Globe2,
      title: "Website cũ không ra khách",
      desc: "Đã chi tiền làm web nhưng giao diện lỗi thời, không tối ưu di động, thiếu các nút kêu gọi hành động dẫn tới tỷ lệ thoát trang cao."
    },
    {
      icon: Clock8,
      title: "Lặp lại tư vấn nhàm chán",
      desc: "Nhân viên của bạn phải copy-paste trả lời lặp đi lặp lại hàng trăm câu hỏi giống nhau mỗi ngày: 'Giá bao nhiêu?', 'Vị trí ở đâu?'..."
    },
    {
      icon: FileX,
      title: "Mất mát và bỏ sót Lead",
      desc: "Thông tin số điện thoại khách hàng bị trôi trong tin nhắn, không lưu trữ tập trung, dẫn tới bỏ sót và không thể chăm sóc lại."
    },
    {
      icon: ShieldAlert,
      title: "Quảng cáo lãng phí tiền",
      desc: "Đổ ngân sách chạy quảng cáo Facebook/Google nhưng không có phễu tự động giữ chân khách hàng, tỷ lệ chuyển đổi đơn hàng cực thấp."
    },
    {
      icon: BrainCircuit,
      title: "Muốn dùng AI nhưng sợ khó",
      desc: "Nghe nói nhiều về AI ChatGPT nhưng không biết ứng dụng thế nào vào cửa hàng, doanh nghiệp của mình vì không có chuyên môn IT."
    }
  ];

  return (
    <section id="van-de" className="scroll-mt-24 md:scroll-mt-28 py-14 md:py-20 bg-[#070b13]/80 border-y border-slate-800/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
            Vấn Đề Của Doanh Nghiệp
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
            Có Phải Bạn Đang Gặp Những Trở Ngại Này Trong Bán Hàng Online?
          </p>
          <div className="h-1 w-12 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((prob, index) => {
            const Icon = prob.icon;
            return (
              <div
                key={index}
                className="bg-[#131926]/20 border border-slate-800/60 p-6 rounded-2xl flex flex-col space-y-4 hover:border-rose-500/25 transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="p-3 w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 group-hover:bg-rose-500/15 transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-slate-100 font-semibold text-base sm:text-lg">
                  {prob.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed flex-1">
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
