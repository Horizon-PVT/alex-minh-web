"use client";

import React from "react";
import { Hotel, Home, Sparkles, GraduationCap, ShoppingBag, MessageSquare, AlertCircle, Bot, User } from "lucide-react";
import { industries } from "@/lib/industries";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Hotel: Hotel,
  Home: Home,
  Sparkles: Sparkles,
  GraduationCap: GraduationCap,
  ShoppingBag: ShoppingBag,
};

// Simulated quick dialogue for the visual mockups
const simulatedChats: Record<string, { q: string; a: string }> = {
  tourism: {
    q: "Giá phòng đôi cuối tuần này bao nhiêu?",
    a: "Dạ phòng Deluxe hướng biển cuối tuần này chỉ 850k/đêm ạ. Em gửi hình ảnh phòng qua Zalo nhé!"
  },
  realestate: {
    q: "Căn 2 phòng ngủ giá bao nhiêu?",
    a: "Dạ căn 2 phòng ngủ trung tâm giá từ 1.8 tỷ ạ. Anh/chị có muốn nhận bảng tính lãi suất trả góp không?"
  },
  spa: {
    q: "Giá làm răng sứ trọn gói là bao nhiêu?",
    a: "Dạ sứ Zirconia cao cấp chỉ từ 3.5 triệu/răng, giảm 15% trọn gói. Chị muốn đặt lịch khám thử miễn phí không?"
  },
  education: {
    q: "Có khóa tiếng Anh cho bé 6 tuổi không?",
    a: "Dạ có ạ, lớp phản xạ với giáo viên bản xứ cho trẻ 4-6 tuổi. Chị đăng ký cho bé test trình độ miễn phí nhé?"
  },
  ocop: {
    q: "Nem chua lấy sỉ từ bao nhiêu hộp?",
    a: "Dạ nem chua sỉ từ 100 cái có giá sỉ tại xưởng cực tốt ạ. Anh/chị cho em xin SĐT Zalo để gửi bảng giá nhé!"
  }
};

export default function IndustryDemoSection() {
  const handleTriggerDemo = (industryId: string) => {
    const event = new CustomEvent("trigger-chatbot-demo", { detail: { industryId } });
    window.dispatchEvent(event);
  };

  return (
    <section id="demo-nganh" className="scroll-mt-24 md:scroll-mt-28 py-14 md:py-20 bg-[#090d16] relative overflow-hidden">
      {/* Background Glow */}
      <div className="glow-bg bg-primary/10 w-[30rem] h-[30rem] top-20 right-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
            Showcase Chatbot AI
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
            Kịch Bản Trải Nghiệm Chatbot Thực Tế Theo Ngành
          </p>
          <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto">
            Bấm nút chạy thử chatbot ở mỗi ngành để xem cách trợ lý ảo hoạt động thực tế trên giao diện điện thoại.
          </p>
          <div className="h-1 w-12 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((ind) => {
            const Icon = iconMap[ind.icon] || Sparkles;
            const chat = simulatedChats[ind.id] || { q: "Xin chào!", a: "Chào bạn ạ!" };

            return (
              <div
                key={ind.id}
                className="glass-card p-6 rounded-3xl border border-slate-800/80 flex flex-col justify-between hover:border-secondary/20 transition-all duration-300"
              >
                
                {/* Title Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary border border-secondary/15 shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-slate-100 font-bold text-sm sm:text-base leading-snug">
                    {ind.name}
                  </h3>
                </div>

                {/* Brief Info */}
                <div className="space-y-2.5 text-xs text-slate-450 mb-5">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-4 w-4 text-rose-450 mt-0.5 shrink-0" />
                    <p className="leading-relaxed">
                      <strong className="text-slate-300">Khó khăn:</strong> {ind.painPoint.split("nhưng")[0]} trôi tin nhắn.
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Bot className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                    <p className="leading-relaxed">
                      <strong className="text-slate-300">Giải pháp AI:</strong> Chatbot tự động tư vấn báo giá, thu thập số điện thoại lưu về Google Sheet.
                    </p>
                  </div>
                </div>

                {/* Mini UI Chat Mockup */}
                <div className="rounded-2xl bg-[#070b13]/85 border border-slate-850 p-3.5 space-y-2.5 font-sans text-[10px] sm:text-[11px] mb-5">
                  <div className="flex items-start space-x-2 justify-end">
                    <div className="bg-primary text-white px-2.5 py-1.5 rounded-xl rounded-tr-none max-w-[85%] leading-normal">
                      {chat.q}
                    </div>
                    <div className="w-4 h-4 rounded-md bg-secondary text-white flex items-center justify-center shrink-0">
                      <User className="h-2.5 w-2.5" />
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-4 h-4 rounded-md bg-slate-800 text-slate-300 flex items-center justify-center border border-slate-750 shrink-0">
                      <Bot className="h-2.5 w-2.5" />
                    </div>
                    <div className="bg-slate-800/80 text-slate-200 px-2.5 py-1.5 rounded-xl rounded-tl-none max-w-[85%] leading-normal border border-slate-750">
                      {chat.a}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <button
                  onClick={() => handleTriggerDemo(ind.id)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-850 hover:border-secondary text-slate-200 hover:text-white text-xs font-semibold shadow-inner transition-all flex items-center justify-center space-x-1.5 cursor-pointer group"
                >
                  <MessageSquare className="h-4.5 w-4.5 text-secondary" />
                  <span>Chạy thử chatbot demo</span>
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
