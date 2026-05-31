import { Database, Send, Bot, Check, Shield, Sparkles } from "lucide-react";

export default function ProofFlowSection() {
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

        {/* Visual Columns (3 Steps of Flow) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Desktop Laser Connector Line */}
          <div className="hidden lg:block absolute top-[220px] left-[12%] right-[12%] h-[1.5px] bg-gradient-to-r from-cyan-500/20 via-emerald-500/20 to-sky-500/20 z-0 pointer-events-none">
            <div className="absolute top-0 bottom-0 w-28 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-flow-pulse"></div>
          </div>

          {/* Step 1: Chatbot AI */}
          <div className="bg-[#0b1220]/60 backdrop-blur-md border border-slate-800/60 p-6 md:p-7 rounded-3xl flex flex-col justify-between hover:border-[#00E5FF]/20 hover:shadow-[0_15px_30px_rgba(0,229,255,0.03)] transition-all duration-300 transform hover:-translate-y-1 relative group overflow-hidden z-10">
            {/* Step Number Backdrop */}
            <div className="absolute top-2 right-4 text-6xl font-black text-slate-850/30 select-none group-hover:text-cyan-500/5 transition-colors pointer-events-none font-mono">01</div>
            
            <div className="mb-6 relative z-10 text-left">
              <span className="px-2.5 py-0.8 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[9px] font-black uppercase tracking-wider">
                Bước 1: Tương Tác
              </span>
              <h4 className="text-white font-extrabold text-lg mt-3 mb-2">
                Chatbot tư vấn 24/7
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed font-medium">
                Tự động trả lời nhanh dưới 2s, khai thác đúng nhu cầu đặt phòng/dịch vụ của khách.
              </p>
            </div>
            
            {/* Mini Chat UI Mockup */}
            <div className="rounded-2xl bg-[#070b13] border border-slate-850 p-4 space-y-3 font-sans text-[10px] sm:text-[11px] h-[155px] overflow-hidden flex flex-col justify-between text-left relative z-10">
              <div className="flex items-center space-x-1.5 border-b border-slate-900 pb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">AI Trợ lý Khách Sạn</span>
              </div>
              <div className="space-y-2 flex-1 pt-1.5">
                <div className="flex justify-end">
                  <div className="bg-[#0068ff] text-white px-2.5 py-1 rounded-xl rounded-tr-none max-w-[85%] leading-normal font-semibold">
                    Giá phòng cuối tuần ở Sầm Sơn còn không?
                  </div>
                </div>
                <div className="flex items-start space-x-1.5">
                  <div className="w-4 h-4 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-[9px] border border-slate-750 shrink-0">
                    <Bot className="h-2.5 w-2.5" />
                  </div>
                  <div className="bg-[#18222f] text-slate-200 px-2.5 py-1.5 rounded-xl rounded-tl-none max-w-[80%] leading-normal border border-slate-855">
                    Dạ còn ạ. Anh/chị đi ngày nào và mấy người?
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-[#0068ff] text-white px-2.5 py-1 rounded-xl rounded-tr-none max-w-[85%] leading-normal font-semibold">
                    Thứ 7, 2 người.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5.5 pt-3 border-t border-slate-850/40 text-left relative z-10 flex items-center space-x-1.5">
              <Check className="h-4 w-4 text-cyan-400 shrink-0" />
              <span className="text-slate-450 text-[10.5px] font-bold">✓ Bot đang thu nhu cầu khách</span>
            </div>
          </div>

          {/* Step 2: Google Sheets */}
          <div className="bg-[#0b1220]/60 backdrop-blur-md border border-slate-800/60 p-6 md:p-7 rounded-3xl flex flex-col justify-between hover:border-emerald-500/20 hover:shadow-[0_15px_30px_rgba(16,185,129,0.03)] transition-all duration-300 transform hover:-translate-y-1 relative group overflow-hidden z-10">
            {/* Step Number Backdrop */}
            <div className="absolute top-2 right-4 text-6xl font-black text-slate-850/30 select-none group-hover:text-emerald-500/5 transition-colors pointer-events-none font-mono">02</div>

            <div className="mb-6 relative z-10 text-left">
              <span className="px-2.5 py-0.8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-450 text-[9px] font-black uppercase tracking-wider">
                Bước 2: Đồng Bộ
              </span>
              <h4 className="text-white font-extrabold text-lg mt-3 mb-2">
                Lead lưu về Google Sheet
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed font-medium">
                Ngay khi khách cung cấp SĐT, thông tin được tự động điền vào spreadsheet không cần nhập tay.
              </p>
            </div>

            {/* Mini Sheet Table Mockup */}
            <div className="rounded-2xl bg-[#070b13] border border-slate-850 p-3 h-[155px] overflow-hidden flex flex-col justify-between text-[9.5px] font-mono relative z-10">
              <div className="flex items-center space-x-1.5 border-b border-slate-900 pb-1.5 mb-1 text-left">
                <Database className="h-3 w-3 text-emerald-500" />
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Google Sheets Database</span>
              </div>
              <div className="rounded border border-slate-850 overflow-hidden flex-1 flex flex-col">
                <div className="grid grid-cols-3 bg-slate-900 border-b border-slate-850 text-slate-500 font-bold p-1 text-left">
                  <div>Họ tên</div>
                  <div>Điện thoại</div>
                  <div>Nhu cầu</div>
                </div>
                <div className="grid grid-cols-3 p-1 text-slate-350 bg-emerald-500/5 border-b border-emerald-500/10 text-left items-center font-bold">
                  <div className="truncate">Nguyễn Văn A</div>
                  <div className="font-mono text-amber-500">0912345678</div>
                  <div className="truncate text-emerald-400">KS Sầm Sơn</div>
                </div>
                <div className="grid grid-cols-3 p-1 text-slate-655 opacity-40 text-left items-center">
                  <div className="truncate">Trần Thị B</div>
                  <div className="font-mono">0987xxx321</div>
                  <div className="truncate">Spa Tắm Trắng</div>
                </div>
              </div>
            </div>

            <div className="mt-5.5 pt-3 border-t border-slate-850/40 text-left relative z-10 flex items-center space-x-1.5">
              <Check className="h-4 w-4 text-emerald-400 shrink-0" />
              <span className="text-slate-450 text-[10.5px] font-bold">✓ Dữ liệu lưu tập trung</span>
            </div>
          </div>

          {/* Step 3: Telegram Alert */}
          <div className="bg-[#0b1220]/60 backdrop-blur-md border border-slate-800/60 p-6 md:p-7 rounded-3xl flex flex-col justify-between hover:border-sky-500/20 hover:shadow-[0_15px_30px_rgba(14,165,233,0.03)] transition-all duration-300 transform hover:-translate-y-1 relative group overflow-hidden z-10">
            {/* Step Number Backdrop */}
            <div className="absolute top-2 right-4 text-6xl font-black text-slate-850/30 select-none group-hover:text-sky-500/5 transition-colors pointer-events-none font-mono">03</div>

            <div className="mb-6 relative z-10 text-left">
              <span className="px-2.5 py-0.8 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[9px] font-black uppercase tracking-wider">
                Bước 3: Chốt Nhanh
              </span>
              <h4 className="text-white font-extrabold text-lg mt-3 mb-2">
                Thông báo Telegram về ngay
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed font-medium">
                Bắn cảnh báo lead mới tức thời vào điện thoại của bạn, giúp liên hệ lại ngay trong 5 phút.
              </p>
            </div>

            {/* Mini Telegram Mockup */}
            <div className="rounded-2xl bg-[#17212b] border border-sky-500/20 p-3 h-[155px] overflow-hidden flex flex-col justify-between text-[9.5px] text-left relative z-10 font-sans">
              <div className="flex items-center space-x-1.5 border-b border-slate-800 pb-1.5">
                <div className="w-4 h-4 rounded-full bg-[#24a1de] flex items-center justify-center text-white text-[8px] font-black shrink-0">
                  <Send className="h-2 w-2 transform rotate-[-30deg]" fill="white" />
                </div>
                <span className="text-[9px] text-sky-400 font-bold uppercase tracking-wider">Telegram Alert</span>
              </div>
              <div className="font-mono text-[9px] text-slate-200 space-y-0.5 flex-1 pt-1.5 leading-normal">
                <div className="font-extrabold text-sky-400">🔔 Lead mới từ alexminh.com</div>
                <div className="pl-1.5 border-l border-sky-500/30 font-sans text-[8.5px] space-y-0.2 mt-1">
                  <div><span className="text-slate-450">Khách:</span> <span className="font-bold text-white">Nguyễn Văn A</span></div>
                  <div><span className="text-slate-450">SĐT:</span> <span className="font-bold text-amber-400">0912345678</span></div>
                  <div><span className="text-slate-450">Nhu cầu:</span> <span className="text-slate-300">Khách sạn Sầm Sơn</span></div>
                </div>
              </div>
              <div className="py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[8.5px] font-black uppercase text-center flex items-center justify-center space-x-1">
                <Check className="h-2.5 w-2.5 shrink-0" />
                <span>Gọi lại chốt ngay</span>
              </div>
            </div>

            <div className="mt-5.5 pt-3 border-t border-slate-850/40 text-left relative z-10 flex items-center space-x-1.5">
              <Check className="h-4 w-4 text-emerald-400 shrink-0" />
              <span className="text-slate-450 text-[10.5px] font-bold">✓ Chốt nhanh hơn</span>
            </div>
          </div>

        </div>

        {/* Proof Strip under Section 2 */}
        <div className="mt-16 bg-[#0b1220]/45 border border-slate-800/40 rounded-2xl p-4.5 flex flex-col md:flex-row items-center justify-around gap-4 max-w-5xl mx-auto text-left shadow-lg">
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
