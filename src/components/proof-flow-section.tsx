import React from "react";
import { MessageSquare, Database, Bell, User, Bot, Check, Shield } from "lucide-react";

export default function ProofFlowSection() {
  return (
    <section id="proof-flow" className="scroll-mt-24 md:scroll-mt-28 py-14 md:py-20 bg-[#090d16] relative overflow-hidden">
      {/* Background Glows */}
      <div className="glow-bg bg-primary/10 w-96 h-96 top-10 left-10"></div>
      <div className="glow-bg bg-secondary/5 w-96 h-96 bottom-10 right-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
            Quy Trình Tự Động Hóa
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
            Alex Minh AI Hoạt Động Thế Nào Trên Website Của Bạn?
          </p>
          <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto">
            Hệ thống khép kín từ lúc khách hàng tương tác cho đến khi thông tin đổ về quản lý chỉ trong vòng 5 giây.
          </p>
          <div className="h-1 w-12 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Visual Columns (3 Blocks of Flow) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Block 1: Web & Chatbot */}
          <div className="glass-card p-6 rounded-3xl border border-slate-800/80 flex flex-col justify-between relative group hover:border-primary/20">
            <div className="flex justify-between items-center mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">
                Bước 1: Tương Tác
              </span>
              <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <MessageSquare className="h-4.5 w-4.5" />
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-white font-bold text-base mb-2">
                Website & Chatbot AI 24/7
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                Khách truy cập website, chatbot tự động chào hỏi và tư vấn báo giá ngay lập tức.
              </p>
            </div>

            {/* Visual Chat Mockup */}
            <div className="rounded-2xl bg-[#090d16]/90 border border-slate-850 p-4 space-y-3 font-sans text-[11px] sm:text-xs">
              <div className="flex items-center space-x-1.5 border-b border-slate-850 pb-2 mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] text-slate-500 font-semibold uppercase">Trợ lý ảo Khách Sạn</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-5 h-5 rounded-md bg-secondary text-white flex items-center justify-center text-[10px]">
                  <User className="h-3 w-3" />
                </div>
                <div className="bg-primary text-white px-2.5 py-1.5 rounded-xl rounded-tl-none max-w-[85%] leading-normal">
                  Giá phòng Deluxe cuối tuần này bao nhiêu em?
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-5 h-5 rounded-md bg-slate-800 text-slate-300 flex items-center justify-center text-[10px] border border-slate-750">
                  <Bot className="h-3 w-3" />
                </div>
                <div className="bg-slate-800/80 text-slate-200 px-2.5 py-1.5 rounded-xl rounded-tl-none max-w-[85%] leading-normal border border-slate-750">
                  Dạ phòng Deluxe cuối tuần này có giá ưu đãi là 850.000đ/đêm ạ. Anh/chị cho em xin số điện thoại để giữ phòng nhé!
                </div>
              </div>
            </div>
          </div>

          {/* Block 2: Google Sheets */}
          <div className="glass-card p-6 rounded-3xl border border-slate-800/80 flex flex-col justify-between relative group hover:border-secondary/20">
            <div className="flex justify-between items-center mb-6">
              <span className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-bold uppercase tracking-wider">
                Bước 2: Đồng Bộ
              </span>
              <div className="h-8 w-8 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <Database className="h-4.5 w-4.5" />
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-white font-bold text-base mb-2">
                Lưu trữ Google Sheets
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                Số điện thoại và nhu cầu khách hàng được ghi nhận và đồng bộ trực tiếp về Google Sheets.
              </p>
            </div>

            {/* Visual Sheet Mockup */}
            <div className="rounded-2xl bg-[#090d16]/90 border border-slate-850 p-3 overflow-hidden text-[9px] sm:text-[10px] font-mono select-none">
              <div className="grid grid-cols-4 border-b border-slate-800 pb-1.5 mb-1.5 text-slate-500 font-semibold">
                <div>Thời gian</div>
                <div>Họ & Tên</div>
                <div>Điện thoại</div>
                <div>Lĩnh vực</div>
              </div>
              <div className="grid grid-cols-4 py-1 border-b border-slate-850/50 text-slate-300">
                <div className="text-slate-550">14:02</div>
                <div className="truncate">Nguyễn Văn A</div>
                <div className="text-secondary font-medium">0987.xxx.321</div>
                <div className="truncate text-slate-400">Khách sạn</div>
              </div>
              <div className="grid grid-cols-4 py-1 text-slate-400 opacity-60">
                <div className="text-slate-550">14:05</div>
                <div className="truncate">Trần Thị B</div>
                <div className="text-secondary font-medium">0912.xxx.678</div>
                <div className="truncate">Spa</div>
              </div>
            </div>
          </div>

          {/* Block 3: Telegram Alert */}
          <div className="glass-card p-6 rounded-3xl border border-slate-800/80 flex flex-col justify-between relative group hover:border-emerald-500/20">
            <div className="flex justify-between items-center mb-6">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                Bước 3: Chốt Đơn
              </span>
              <div className="h-8 w-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Bell className="h-4.5 w-4.5" />
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-white font-bold text-base mb-2">
                Thông Báo Telegram Hot
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                Bắn tin nhắn báo lead mới về Telegram lập tức. Chủ doanh nghiệp bấm gọi lại chốt đơn ngay.
              </p>
            </div>

            {/* Visual Telegram Mockup */}
            <div className="rounded-2xl bg-[#1e293b]/50 border border-slate-800 p-4 space-y-2.5 text-[11px] sm:text-xs">
              <div className="flex items-center space-x-2 text-[10px] text-sky-400 font-semibold border-b border-slate-800/60 pb-1.5">
                <div className="w-4 h-4 rounded-full bg-sky-500 flex items-center justify-center text-white text-[8px] font-bold">T</div>
                <span>Telegram Bot Alert</span>
              </div>
              <div className="text-slate-200 space-y-1 font-sans leading-normal">
                <div>🔔 <span className="font-bold text-white">LEAD MỚI TỪ WEBSITE</span></div>
                <div>👤 Họ tên: Nguyễn Văn A</div>
                <div>📞 SĐT: <span className="text-secondary font-medium">0987.xxx.321</span></div>
                <div>🏢 Nhu cầu: Đặt phòng Khách sạn</div>
              </div>
              <div className="mt-1 flex justify-center py-1 rounded-lg bg-emerald-650/15 border border-emerald-650/30 text-emerald-400 text-[10px] font-bold uppercase tracking-wider space-x-1 items-center">
                <Check className="h-3 w-3" />
                <span>Hotline Gọi Lại Ngay</span>
              </div>
            </div>
          </div>

        </div>

        {/* Tiny Verification badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-[11px] sm:text-xs text-slate-550 font-medium">
          <div className="flex items-center space-x-1.5">
            <Shield className="h-4.5 w-4.5 text-secondary" />
            <span>Hệ thống đang chạy thật trên trang này</span>
          </div>
          <div className="h-1.5 w-1.5 rounded-full bg-slate-700 hidden sm:block"></div>
          <div className="flex items-center space-x-1.5">
            <Check className="h-4.5 w-4.5 text-emerald-400" />
            <span>Kết nối Google Sheet + Telegram thành công</span>
          </div>
        </div>
      </div>
    </section>
  );
}
