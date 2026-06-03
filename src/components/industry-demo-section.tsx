"use client";

import React from "react";
import Image from "next/image";
import { 
  Hotel, 
  Home, 
  Sparkles, 
  GraduationCap, 
  ShoppingBag, 
  MessageSquare, 
  Bot, 
  ArrowRight 
} from "lucide-react";

export default function IndustryDemoSection() {
  const handleTriggerDemo = (industryId: string) => {
    const event = new CustomEvent("trigger-chatbot-demo", { detail: { industryId } });
    window.dispatchEvent(event);
  };

  return (
    <section id="demo-nganh" className="scroll-mt-24 md:scroll-mt-28 py-20 md:py-28 bg-[#090d16] border-b border-slate-800/30 relative overflow-hidden">
      {/* Background radial glows for depth */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#00E5FF]/3 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] rounded-full bg-[#7C3AED]/3 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-[#00E5FF] text-[10px] font-black uppercase tracking-widest mb-4">
            <Sparkles className="h-3 w-3" />
            <span>SHOWCASE CHATBOT AI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Demo Chatbot AI Theo Từng Ngành Kinh Doanh
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Chọn ngành của anh/chị để xem cách chatbot tư vấn, lọc nhu cầu và thu lead tự động.
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-[#00E5FF] to-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Showcase Layout: 50/50 Desktop split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Featured Card (Tourism/Hotel) - 6 Columns */}
          <div className="lg:col-span-6 bg-[#0b1220]/75 backdrop-blur-md border border-[#00E5FF]/20 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-[#00E5FF]/40 hover:shadow-[0_0_35px_rgba(6,182,212,0.12)] transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden text-left h-full">
            <div className="absolute -inset-px bg-gradient-to-br from-[#00E5FF]/0 via-[#00E5FF]/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="space-y-6 relative z-10">
              {/* Industry Image */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-slate-800/40 mb-1">
                <Image
                  src="/images/industries/hotel-homestay-samson.jpg"
                  alt="Lễ tân khách sạn tại Sầm Sơn Thanh Hóa sử dụng chatbot AI để tư vấn khách"
                  width={800}
                  height={450}
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0b1220] to-transparent pointer-events-none"></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-rose-500/10 to-orange-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-black uppercase tracking-widest">
                  Case nổi bật
                </span>
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#00E5FF]/10 to-blue-500/10 flex items-center justify-center text-[#00E5FF] border border-[#00E5FF]/20 shrink-0">
                  <Hotel className="h-5 w-5" />
                </div>
              </div>

              <div>
                <h3 className="text-white font-extrabold text-2xl tracking-tight mb-5">
                  Khách sạn / Homestay / Du lịch Sầm Sơn
                </h3>
                
                {/* Three structured rows */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="text-[9.5px] text-rose-400 uppercase font-black tracking-wider flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]"></span>
                      <span>Khó khăn</span>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed pl-3.5 border-l border-rose-500/30">
                      Khách hỏi giá phòng, combo, vị trí và ngày trống liên tục vào mùa cao điểm.
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-[9.5px] text-cyan-400 uppercase font-black tracking-wider flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></span>
                      <span>Chatbot xử lý</span>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed pl-3.5 border-l border-cyan-500/30">
                      Chatbot tự động hỏi ngày đi, số người, loại phòng và xin SĐT/Zalo để gửi báo giá.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="text-[9.5px] text-emerald-400 uppercase font-black tracking-wider flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
                      <span>Lead thu về</span>
                    </div>
                    <p className="text-emerald-300 text-xs sm:text-[13px] font-semibold leading-relaxed pl-3.5 border-l border-emerald-500/30">
                      Họ tên • SĐT/Zalo • Ngày nhận/trả phòng • Số lượng khách
                    </p>
                  </div>
                </div>
              </div>

              {/* Proof mini timeline */}
              <div className="bg-[#070b13]/50 rounded-xl p-3 border border-slate-800/40 space-y-2">
                <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider block">Kịch bản tự động hóa</span>
                <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-slate-400">
                  <div className="flex flex-col items-center space-y-1 flex-1">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold text-[9px]">1</span>
                    <span className="text-center font-medium scale-90 whitespace-nowrap">Hỏi giá phòng</span>
                  </div>
                  <ArrowRight className="h-3 w-3 text-slate-600 shrink-0" />
                  <div className="flex flex-col items-center space-y-1 flex-1">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold text-[9px]">2</span>
                    <span className="text-center font-medium scale-90 whitespace-nowrap">Lấy ngày đi</span>
                  </div>
                  <ArrowRight className="h-3 w-3 text-slate-600 shrink-0" />
                  <div className="flex flex-col items-center space-y-1 flex-1">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold text-[9px]">3</span>
                    <span className="text-center font-medium scale-90 whitespace-nowrap">Xin SĐT/Zalo</span>
                  </div>
                  <ArrowRight className="h-3 w-3 text-slate-600 shrink-0" />
                  <div className="flex flex-col items-center space-y-1 flex-1">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold text-[9px]">4</span>
                    <span className="text-center font-bold text-emerald-450 scale-90 whitespace-nowrap">Lưu lead</span>
                  </div>
                </div>
              </div>

              {/* Mini chat phone mockup */}
              <div className="rounded-2xl bg-[#070b13] border border-slate-800/80 p-4 space-y-3 font-sans text-xs flex flex-col justify-end text-left shadow-inner">
                {/* Mini Header */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/40 text-[10px] text-slate-400 font-medium">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-semibold text-slate-300">Khách sạn / Homestay Demo</span>
                  </div>
                  <span className="text-[9px] text-[#00E5FF]/70 font-semibold uppercase">Live preview</span>
                </div>
                
                {/* Chat bubbles */}
                <div className="space-y-2.5">
                  <div className="flex items-start justify-end">
                    <div className="bg-[#0068ff] text-white px-3 py-2 rounded-2xl rounded-tr-none max-w-[85%] leading-relaxed font-medium">
                      Cuối tuần này còn phòng view biển không?
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 border border-slate-700">
                      <Bot className="h-3 w-3 text-cyan-400" />
                    </div>
                    <div className="bg-[#18222f] text-slate-200 px-3 py-2 rounded-2xl rounded-tl-none max-w-[85%] leading-relaxed border border-slate-800">
                      Dạ có ạ. Anh/chị đi mấy người và muốn nhận báo giá qua Zalo nào?
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/60 relative z-10">
              <button
                onClick={() => handleTriggerDemo("tourism")}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:brightness-110 text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-cyan-500/10 active:scale-[0.98]"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Chạy thử demo ngành này</span>
              </button>
            </div>
          </div>

          {/* Secondary Cards Grid (4 Cards - 6 Columns) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            
            {/* Card 1: Spa / Nha khoa / Phòng khám */}
            <div className="h-full bg-[#0b1220]/50 border border-slate-800/40 rounded-3xl p-5 flex flex-col justify-between hover:border-[#00E5FF]/20 hover:shadow-[0_0_25px_rgba(6,182,212,0.06)] transition-all duration-300 transform hover:-translate-y-0.5 group text-left relative overflow-hidden">
              <div className="space-y-4">
                {/* Industry Image */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-slate-800/40 -mx-1 -mt-1 mb-1">
                  <Image
                    src="/images/industries/spa-dental-clinic.jpg"
                    alt="Phòng khám nha khoa tại Thanh Hóa tiếp đón khách hàng với chatbot AI"
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0b1220] to-transparent pointer-events-none"></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 shrink-0">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <h4 className="text-white font-extrabold text-sm tracking-tight">Spa / Nha khoa / Phòng khám</h4>
                  </div>
                </div>
                
                {/* 3 mini areas */}
                <div className="space-y-3.5">
                  <div className="space-y-1">
                    <div className="text-[9px] text-rose-450 uppercase font-black tracking-wider flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]"></span>
                      <span>Khó khăn</span>
                    </div>
                    <p className="text-slate-300 text-xs leading-normal pl-3 border-l border-rose-500/20">
                      Khách hỏi giá dịch vụ, liệu trình, đặt lịch nhưng nhân viên đang bận.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[9px] text-cyan-400 uppercase font-black tracking-wider flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></span>
                      <span>Chatbot xử lý</span>
                    </div>
                    <p className="text-slate-300 text-xs leading-normal pl-3 border-l border-cyan-500/20">
                      Chatbot tư vấn dịch vụ, hỏi khung giờ và ghi nhận lịch hẹn.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[9px] text-emerald-450 uppercase font-black tracking-wider flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
                      <span>Lead thu về</span>
                    </div>
                    <p className="text-emerald-300 text-xs font-semibold leading-normal pl-3 border-l border-emerald-500/20">
                      Dịch vụ quan tâm • Thời gian hẹn • SĐT
                    </p>
                  </div>
                </div>

                {/* Mini Chat */}
                <div className="rounded-2xl bg-[#070b13] border border-slate-800/80 p-3 space-y-2.5 font-sans text-[11px] leading-relaxed flex flex-col justify-end text-left shadow-inner">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-800/40 text-[9px] text-slate-400 font-medium">
                    <div className="flex items-center space-x-1">
                      <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                      <span className="font-semibold text-slate-400 tracking-wide uppercase">Spa &amp; Phòng khám Demo</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-end">
                      <span className="bg-[#0068ff] text-white px-2.5 py-1.5 rounded-xl rounded-tr-none max-w-[85%] font-medium">
                        Làm răng sứ trọn gói bao nhiêu?
                      </span>
                    </div>
                    <div className="flex items-start space-x-1.5">
                      <div className="w-[18px] h-[18px] rounded-full bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 border border-slate-700 text-[8px]">
                        <Bot className="h-2.5 w-2.5 text-cyan-400" />
                      </div>
                      <span className="bg-[#18222f] text-slate-200 px-2.5 py-1.5 rounded-xl rounded-tl-none max-w-[85%] border border-slate-800">
                        Anh/chị muốn tư vấn loại răng nào và đặt lịch lúc nào ạ?
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => handleTriggerDemo("spa")}
                className="mt-5 pt-4 border-t border-slate-800/60 w-full text-slate-300 hover:text-white hover:bg-cyan-500/10 border-slate-800/60 text-xs font-bold py-2 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center space-x-1.5"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Chạy thử demo</span>
              </button>
            </div>

            {/* Card 2: Bất động sản / Cho thuê */}
            <div className="h-full bg-[#0b1220]/50 border border-slate-800/40 rounded-3xl p-5 flex flex-col justify-between hover:border-[#00E5FF]/20 hover:shadow-[0_0_25px_rgba(6,182,212,0.06)] transition-all duration-300 transform hover:-translate-y-0.5 group text-left relative overflow-hidden">
              <div className="space-y-4">
                {/* Industry Image */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-slate-800/40 -mx-1 -mt-1 mb-1">
                  <Image
                    src="/images/industries/real-estate-rental.jpg"
                    alt="Môi giới bất động sản tại Thanh Hóa giới thiệu dự án cho khách hàng"
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0b1220] to-transparent pointer-events-none"></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 shrink-0">
                      <Home className="h-4 w-4" />
                    </div>
                    <h4 className="text-white font-extrabold text-sm tracking-tight">Bất động sản / Cho thuê</h4>
                  </div>
                </div>
                
                {/* 3 mini areas */}
                <div className="space-y-3.5">
                  <div className="space-y-1">
                    <div className="text-[9px] text-rose-450 uppercase font-black tracking-wider flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]"></span>
                      <span>Khó khăn</span>
                    </div>
                    <p className="text-slate-300 text-xs leading-normal pl-3 border-l border-rose-500/20">
                      Khách hỏi vị trí, giá, pháp lý, tài chính nhưng sale phản hồi không kịp.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[9px] text-cyan-400 uppercase font-black tracking-wider flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></span>
                      <span>Chatbot xử lý</span>
                    </div>
                    <p className="text-slate-300 text-xs leading-normal pl-3 border-l border-cyan-500/20">
                      Chatbot lọc khu vực, ngân sách, nhu cầu mua/thuê trước khi chuyển sale.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[9px] text-emerald-450 uppercase font-black tracking-wider flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
                      <span>Lead thu về</span>
                    </div>
                    <p className="text-emerald-300 text-xs font-semibold leading-normal pl-3 border-l border-emerald-500/20">
                      Khu vực • Ngân sách • Nhu cầu • SĐT
                    </p>
                  </div>
                </div>

                {/* Mini Chat */}
                <div className="rounded-2xl bg-[#070b13] border border-slate-800/80 p-3 space-y-2.5 font-sans text-[11px] leading-relaxed flex flex-col justify-end text-left shadow-inner">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-800/40 text-[9px] text-slate-400 font-medium">
                    <div className="flex items-center space-x-1">
                      <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                      <span className="font-semibold text-slate-400 tracking-wide uppercase">Bất động sản Demo</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-end">
                      <span className="bg-[#0068ff] text-white px-2.5 py-1.5 rounded-xl rounded-tr-none max-w-[85%] font-medium">
                        Có căn nào dưới 2 tỷ ở TP Thanh Hóa không?
                      </span>
                    </div>
                    <div className="flex items-start space-x-1.5">
                      <div className="w-[18px] h-[18px] rounded-full bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 border border-slate-700 text-[8px]">
                        <Bot className="h-2.5 w-2.5 text-cyan-400" />
                      </div>
                      <span className="bg-[#18222f] text-slate-200 px-2.5 py-1.5 rounded-xl rounded-tl-none max-w-[85%] border border-slate-800">
                        Anh/chị quan tâm nhà ở hay đầu tư ạ?
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => handleTriggerDemo("realestate")}
                className="mt-5 pt-4 border-t border-slate-800/60 w-full text-slate-300 hover:text-white hover:bg-cyan-500/10 border-slate-800/60 text-xs font-bold py-2 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center space-x-1.5"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Chạy thử demo</span>
              </button>
            </div>

            {/* Card 3: Trung tâm giáo dục / Tiếng Anh */}
            <div className="h-full bg-[#0b1220]/50 border border-slate-800/40 rounded-3xl p-5 flex flex-col justify-between hover:border-[#00E5FF]/20 hover:shadow-[0_0_25px_rgba(6,182,212,0.06)] transition-all duration-300 transform hover:-translate-y-0.5 group text-left relative overflow-hidden">
              <div className="space-y-4">
                {/* Industry Image */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-slate-800/40 -mx-1 -mt-1 mb-1">
                  <Image
                    src="/images/industries/education-center.jpg"
                    alt="Trung tâm giáo dục tiếng Anh tại Thanh Hóa tư vấn phụ huynh bằng chatbot AI"
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0b1220] to-transparent pointer-events-none"></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 shrink-0">
                      <GraduationCap className="h-[18px] w-[18px]" />
                    </div>
                    <h4 className="text-white font-extrabold text-sm tracking-tight">Trung tâm giáo dục / Tiếng Anh</h4>
                  </div>
                </div>
                
                {/* 3 mini areas */}
                <div className="space-y-3.5">
                  <div className="space-y-1">
                    <div className="text-[9px] text-rose-455 uppercase font-black tracking-wider flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]"></span>
                      <span>Khó khăn</span>
                    </div>
                    <p className="text-slate-300 text-xs leading-normal pl-3 border-l border-rose-500/20">
                      Phụ huynh hỏi lớp, học phí, lịch học ngoài giờ hành chính.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[9px] text-cyan-400 uppercase font-black tracking-wider flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></span>
                      <span>Chatbot xử lý</span>
                    </div>
                    <p className="text-slate-300 text-xs leading-normal pl-3 border-l border-cyan-500/20">
                      Chatbot giới thiệu khóa học, hỏi độ tuổi/trình độ và hẹn test đầu vào.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[9px] text-emerald-450 uppercase font-black tracking-wider flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
                      <span>Lead thu về</span>
                    </div>
                    <p className="text-emerald-300 text-xs font-semibold leading-normal pl-3 border-l border-emerald-500/20">
                      Độ tuổi • Trình độ • Mục tiêu học • SĐT
                    </p>
                  </div>
                </div>

                {/* Mini Chat */}
                <div className="rounded-2xl bg-[#070b13] border border-slate-800/80 p-3 space-y-2.5 font-sans text-[11px] leading-relaxed flex flex-col justify-end text-left shadow-inner">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-800/40 text-[9px] text-slate-400 font-medium">
                    <div className="flex items-center space-x-1">
                      <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                      <span className="font-semibold text-slate-400 tracking-wide uppercase">Trung tâm đào tạo Demo</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-end">
                      <span className="bg-[#0068ff] text-white px-2.5 py-1.5 rounded-xl rounded-tr-none max-w-[85%] font-medium">
                        Có lớp tiếng Anh cho bé 6 tuổi không?
                      </span>
                    </div>
                    <div className="flex items-start space-x-1.5">
                      <div className="w-[18px] h-[18px] rounded-full bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 border border-slate-700 text-[8px]">
                        <Bot className="h-2.5 w-2.5 text-cyan-400" />
                      </div>
                      <span className="bg-[#18222f] text-slate-200 px-2.5 py-1.5 rounded-xl rounded-tl-none max-w-[85%] border border-slate-800">
                        Dạ có ạ. Bé đang học lớp mấy và anh/chị muốn học buổi nào?
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => handleTriggerDemo("education")}
                className="mt-5 pt-4 border-t border-slate-800/60 w-full text-slate-300 hover:text-white hover:bg-cyan-500/10 border-slate-800/60 text-xs font-bold py-2 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center space-x-1.5"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Chạy thử demo</span>
              </button>
            </div>

            {/* Card 4: OCOP / Đặc sản địa phương */}
            <div className="h-full bg-[#0b1220]/50 border border-slate-800/40 rounded-3xl p-5 flex flex-col justify-between hover:border-[#00E5FF]/20 hover:shadow-[0_0_25px_rgba(6,182,212,0.06)] transition-all duration-300 transform hover:-translate-y-0.5 group text-left relative overflow-hidden">
              <div className="space-y-4">
                {/* Industry Image */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-slate-800/40 -mx-1 -mt-1 mb-1">
                  <Image
                    src="/images/industries/ocop-local-products.jpg"
                    alt="Sản phẩm OCOP đặc sản Thanh Hóa nem chua và đặc sản địa phương"
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0b1220] to-transparent pointer-events-none"></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 shrink-0">
                      <ShoppingBag className="h-4 w-4" />
                    </div>
                    <h4 className="text-white font-extrabold text-sm tracking-tight">OCOP / Đặc sản địa phương</h4>
                  </div>
                </div>
                
                {/* 3 mini areas */}
                <div className="space-y-3.5">
                  <div className="space-y-1">
                    <div className="text-[9px] text-rose-450 uppercase font-black tracking-wider flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]"></span>
                      <span>Khó khăn</span>
                    </div>
                    <p className="text-slate-300 text-xs leading-normal pl-3 border-l border-rose-500/20">
                      Khách hỏi sỉ/lẻ, giá, số lượng, vận chuyển nhưng dễ bị trôi tin.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[9px] text-cyan-400 uppercase font-black tracking-wider flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></span>
                      <span>Chatbot xử lý</span>
                    </div>
                    <p className="text-slate-300 text-xs leading-normal pl-3 border-l border-cyan-500/20">
                      Chatbot báo giá sơ bộ, hỏi số lượng và lưu thông tin khách mua.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[9px] text-emerald-450 uppercase font-black tracking-wider flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
                      <span>Lead thu về</span>
                    </div>
                    <p className="text-emerald-300 text-xs font-semibold leading-normal pl-3 border-l border-emerald-500/20">
                      Sản phẩm • Số lượng • Hình thức mua • SĐT
                    </p>
                  </div>
                </div>

                {/* Mini Chat */}
                <div className="rounded-2xl bg-[#070b13] border border-slate-800/80 p-3 space-y-2.5 font-sans text-[11px] leading-relaxed flex flex-col justify-end text-left shadow-inner">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-800/40 text-[9px] text-slate-400 font-medium">
                    <div className="flex items-center space-x-1">
                      <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                      <span className="font-semibold text-slate-400 tracking-wide uppercase">Cơ sở OCOP Demo</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-end">
                      <span className="bg-[#0068ff] text-white px-2.5 py-1.5 rounded-xl rounded-tr-none max-w-[85%] font-medium">
                        Nem chua lấy sỉ bao nhiêu hộp?
                      </span>
                    </div>
                    <div className="flex items-start space-x-1.5">
                      <div className="w-[18px] h-[18px] rounded-full bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 border border-slate-700 text-[8px]">
                        <Bot className="h-2.5 w-2.5 text-cyan-400" />
                      </div>
                      <span className="bg-[#18222f] text-slate-200 px-2.5 py-1.5 rounded-xl rounded-tl-none max-w-[85%] border border-slate-800">
                        Anh/chị cần khoảng bao nhiêu hộp và muốn giao khu vực nào ạ?
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => handleTriggerDemo("ocop")}
                className="mt-5 pt-4 border-t border-slate-800/60 w-full text-slate-300 hover:text-white hover:bg-cyan-500/10 border-slate-800/60 text-xs font-bold py-2 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center space-x-1.5"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Chạy thử demo</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
