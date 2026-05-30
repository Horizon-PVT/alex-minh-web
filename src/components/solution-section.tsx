import React from "react";
import { Globe, Bot, Cpu, BarChart3, Users, Zap } from "lucide-react";

export default function SolutionSection() {
  const solutions = [
    {
      icon: Globe,
      title: "Website tối ưu chuyển đổi di động",
      desc: "Giao diện hiện đại, tốc độ cực nhanh, tích hợp sẵn các nút kêu gọi hành động (Zalo, Gọi điện, Đặt lịch) ngay tầm tay người dùng mobile."
    },
    {
      icon: Bot,
      title: "Chatbot AI tư vấn tự động 24/7",
      desc: "Trực website liên tục cả ngày lẫn đêm. Trả lời ngay câu hỏi của khách hàng theo dữ liệu riêng biệt được huấn luyện cho doanh nghiệp của bạn."
    },
    {
      icon: Cpu,
      title: "Tự động hóa (Automation) quy trình",
      desc: "Tự động lưu thông tin khách hàng về Google Sheet hoặc CRM mini, đồng thời bắn tin nhắn báo có khách mới về Zalo/Telegram của chủ tiệm."
    },
    {
      icon: Users,
      title: "Thu thập & phân loại Lead thông minh",
      desc: "Phân loại khách hàng theo nhu cầu thực tế và mức ngân sách trước khi chuyển tiếp cho nhân viên tư vấn, nâng cao tỷ lệ chốt đơn."
    },
    {
      icon: BarChart3,
      title: "Báo cáo tối ưu kịch bản tư vấn",
      desc: "Theo dõi khách hàng hay hỏi gì nhất để tối ưu lại kịch bản chatbot, giúp nâng cao chất lượng tư vấn và hiểu rõ hơn tâm lý khách hàng."
    },
    {
      icon: Zap,
      title: "Chuyển giao người thật thông minh",
      desc: "Khi khách hàng có yêu cầu chuyên sâu hoặc muốn chốt hợp đồng trực tiếp, chatbot tự động gửi thông báo báo động cho nhân viên vào hỗ trợ."
    }
  ];

  return (
    <section id="giai-phap" className="scroll-mt-24 md:scroll-mt-28 py-14 md:py-20 bg-[#090d16] relative overflow-hidden">
      {/* Background decoration */}
      <div className="glow-bg bg-secondary/10 w-96 h-96 top-1/2 -right-48 transform -translate-y-1/2"></div>
      <div className="glow-bg bg-primary/10 w-96 h-96 top-1/2 -left-48 transform -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
            Giải Pháp Đột Phá
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
            Alex Minh AI Giúp Bạn Xây Dựng Hệ Thống Bán Hàng Tự Động Toàn Diện
          </p>
          <div className="h-1 w-12 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((sol, index) => {
            const Icon = sol.icon;
            return (
              <div
                key={index}
                className="bg-[#131926]/30 border border-slate-800/80 p-6 rounded-2xl flex flex-col space-y-4 hover:border-secondary/30 transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="p-3 w-12 h-12 rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary/15 transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-slate-100 font-semibold text-base sm:text-lg">
                  {sol.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {sol.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
