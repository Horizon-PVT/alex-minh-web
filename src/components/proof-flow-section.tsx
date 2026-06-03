import Image from "next/image";
import { Database, Send, Shield, Sparkles } from "lucide-react";

export default function ProofFlowSection() {
  const flowSteps = [
    {
      step: "01",
      title: "Chatbot AI tư vấn tự động",
      desc: "Trực website 24/7, lập tức trả lời nhanh khách dưới 2s theo kịch bản huấn luyện riêng biệt, tự động hỏi nhu cầu và thu thập SĐT/Zalo.",
      badge: "Tương tác",
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
    },
    {
      step: "02",
      title: "Google Sheets lưu lead",
      desc: "Thông tin liên hệ và nhu cầu được tự động chèn vào bảng tính Google Sheets tập trung tức thì, không sợ trôi hay thất lạc số khách.",
      badge: "Lưu trữ",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      step: "03",
      title: "Telegram báo ngay",
      desc: "Gửi tin nhắn cảnh báo lead mới tức thời kèm theo nhu cầu chi tiết về điện thoại cá nhân hoặc nhóm chat của doanh nghiệp.",
      badge: "Cảnh báo",
      color: "text-sky-400 bg-sky-500/10 border-sky-500/20"
    },
    {
      step: "04",
      title: "Đội ngũ chốt đơn nhanh hơn",
      desc: "Chủ doanh nghiệp hoặc nhân viên click gọi điện chốt khách trong 5 phút đầu tiên - tỷ lệ chuyển đổi đơn hàng tăng vượt trội.",
      badge: "Chốt sales",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    }
  ];

  return (
    <section id="proof-flow" className="scroll-mt-24 md:scroll-mt-28 py-16 md:py-24 bg-[#090d16] border-b border-slate-800/30 relative overflow-hidden">
      {/* Self-contained styling for flow connector animations */}
      <style>{`
        @keyframes flowPulse {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        .animate-flow-pulse {
          animation: flowPulse 4s linear infinite;
        }
        .bg-tech-grid-soft {
          background-image: radial-gradient(rgba(0, 229, 255, 0.02) 1px, transparent 0);
          background-size: 20px 20px;
        }
      `}</style>

      {/* Background visual depth */}
      <div className="absolute inset-0 bg-tech-grid-soft pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] rounded-full bg-[#7C3AED]/5 blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-black uppercase tracking-widest text-[#00E5FF] mb-2 flex items-center justify-center space-x-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Hệ Thống Vận Hành</span>
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Quy trình AI bán hàng tự động trên website của bạn
          </h3>
          <p className="text-slate-400 text-sm mt-3.5 max-w-2xl mx-auto leading-relaxed">
            Khách nhắn tin &rarr; hệ thống tự hỏi đáp &rarr; tự lưu lead &rarr; báo ngay về Google Sheet & Telegram.
          </p>
          <div className="h-1 w-12 bg-[#00E5FF]/60 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Split Flow Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Steps Timeline Column */}
          <div className="lg:col-span-5 space-y-4">
            {flowSteps.map((item, index) => (
              <div
                key={index}
                className="bg-[#0b1220]/60 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-4 sm:p-5 flex space-x-3.5 items-start hover:border-[#00E5FF]/20 hover:shadow-[0_10px_20px_rgba(0,229,255,0.02)] transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute -inset-px bg-gradient-to-r from-[#00E5FF]/0 via-[#00E5FF]/3 to-[#00E5FF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Step badge/number */}
                <div className="flex flex-col items-center shrink-0 mt-0.5">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs border ${item.color} font-mono`}>
                    {item.step}
                  </div>
                </div>
                
                <div className="flex-1 space-y-1.5 text-left">
                  <div className="flex flex-wrap items-center justify-between gap-1.5">
                    <h4 className="text-slate-100 font-extrabold text-sm sm:text-base tracking-tight group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                    <span className={`text-[8.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded border ${item.color}`}>
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-7 flex justify-center relative group w-full">
            {/* Ambient Glow */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-emerald-500/10 to-sky-500/20 opacity-20 blur-2xl group-hover:opacity-45 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 bg-[#050b16] shadow-2xl transition-transform duration-500 group-hover:scale-[1.01] p-1.5">
              <Image
                src="/images/hero/hero-banner-03-solution-flow.png"
                alt="Hệ thống Chatbot AI Google Sheets Telegram khép kín"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
                priority={false}
              />
            </div>
          </div>

        </div>

        {/* Proof Strip under Section 2 */}
        <div className="mt-16 bg-[#0b1220]/45 border border-slate-800/40 rounded-2xl p-[18px] flex flex-col md:flex-row items-center justify-around gap-4 max-w-5xl mx-auto text-left shadow-lg">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 shrink-0">
              <Shield className="h-4 w-4 text-cyan-455" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-extrabold text-white leading-normal">Hệ thống đang chạy thật</span>
              <span className="text-[9.5px] text-slate-500 leading-none mt-0.5 font-medium">Trực tiếp trên trang web này</span>
            </div>
          </div>
          <div className="h-6 w-[1px] bg-slate-800/60 hidden md:block"></div>
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 shrink-0">
              <Database className="h-4 w-4 text-emerald-455" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-extrabold text-white leading-normal">Đồng bộ Google Sheets</span>
              <span className="text-[9.5px] text-slate-500 leading-none mt-0.5 font-medium">Tự động ghi nhận tức thì</span>
            </div>
          </div>
          <div className="h-6 w-[1px] bg-slate-800/60 hidden md:block"></div>
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400 border border-sky-500/20 shrink-0">
              <Send className="h-4 w-4 text-sky-455 transform rotate-[-30deg]" fill="none" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-extrabold text-white leading-normal">Cảnh báo Telegram</span>
              <span className="text-[9.5px] text-slate-500 leading-none mt-0.5 font-medium">Chủ shop nhận thông báo ngay</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
