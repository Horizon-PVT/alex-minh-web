"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Bot, 
  ShieldCheck, 
  Wallet, 
  Sliders, 
  ChevronDown, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2 
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "Website tích hợp chatbot AI khác gì so với website thông thường?",
      answer: "Khác biệt lớn nhất là website không chỉ để giới thiệu mà còn biết hỗ trợ bán hàng. Chatbot AI có thể tự trả lời khách 24/7, lọc nhu cầu, thu số điện thoại và báo lead ngay cho anh/chị thay vì để khách tự tìm thông tin rồi rời đi.",
      icon: <Bot className="h-5 w-5" />
    },
    {
      question: "Chatbot AI trả lời khách có chuẩn xác không? Có bị đặt thông tin lung tung không?",
      answer: "Chatbot được cấu hình dựa trên thông tin thật của doanh nghiệp như dịch vụ, bảng giá, quy trình tư vấn và câu hỏi thường gặp. Nội dung trả lời được kiểm soát theo dữ liệu anh/chị cung cấp, không phải để bot tự nói lung tung.",
      icon: <ShieldCheck className="h-5 w-5" />
    },
    {
      question: "Chi phí vận hành hàng tháng của hệ thống này là bao nhiêu?",
      answer: "Chi phí vận hành phụ thuộc vào quy mô website, số lượng khách truy cập, mức độ sử dụng chatbot và nhu cầu tối ưu thêm. Với đa số doanh nghiệp nhỏ và vừa, chi phí thường ở mức dễ bắt đầu và có thể tối ưu dần theo giai đoạn.",
      icon: <Wallet className="h-5 w-5" />
    },
    {
      question: "Tôi không am hiểu công nghệ thì có tự quản lý hệ thống được không?",
      answer: "Được. Alex Minh AI thiết kế theo hướng dễ dùng, có hướng dẫn bàn giao rõ ràng và hỗ trợ trong quá trình vận hành. Anh/chị không cần biết code vẫn có thể sử dụng, theo dõi lead và nhận thông báo khách hàng mới.",
      icon: <Sliders className="h-5 w-5" />
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-24 md:scroll-mt-28 py-20 md:py-28 bg-[#090d16] border-t border-slate-800/30 relative overflow-hidden">
      {/* Background decoration glows */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#00E5FF]/3 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-[#7C3AED]/3 blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-[#00E5FF] text-[10px] font-black uppercase tracking-widest mb-4">
            <Sparkles className="h-3 w-3" />
            <span>GIẢI ĐÁP TRƯỚC KHI TRIỂN KHAI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Những Câu Hỏi Khách Hàng Hay Hỏi Trước Khi Bắt Đầu
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Alex Minh AI thiết kế hệ thống theo nhu cầu thực tế của từng doanh nghiệp, nên anh/chị không cần am hiểu kỹ thuật vẫn có thể triển khai dễ dàng.
          </p>
          <div className="h-1 w-12 bg-gradient-to-r from-[#00E5FF] to-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* 2 Column Layout on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Accordion FAQ - 7 Columns */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "bg-[#0b1220]/75 border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.04)]"
                      : "bg-[#0b1220]/40 border-slate-800/40 hover:border-slate-800"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center space-x-3.5 pr-4">
                      <div className={`p-2 rounded-xl transition-all border ${
                        isOpen 
                          ? "bg-cyan-500/10 border-cyan-500/20 text-[#00E5FF]" 
                          : "bg-slate-900 border-slate-800 text-slate-400 group-hover:text-white"
                      }`}>
                        {faq.icon}
                      </div>
                      <span className={`font-bold text-sm sm:text-base tracking-tight transition-colors ${
                        isOpen ? "text-white" : "text-slate-200 group-hover:text-white"
                      }`}>
                        {faq.question}
                      </span>
                    </div>
                    
                    <div className={`shrink-0 p-1.5 rounded-lg border transition-all ${
                      isOpen 
                        ? "bg-cyan-500/10 border-cyan-500/25 text-[#00E5FF]" 
                        : "bg-slate-900 border-slate-800 text-slate-400"
                    }`}>
                      <ChevronDown className={`h-4 w-4 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen 
                        ? "max-h-[300px] opacity-100 border-t border-slate-800/40" 
                        : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <p className="p-5 text-slate-300 text-xs sm:text-[13px] leading-relaxed bg-[#070b13]/40">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Support / Trust Panel - 5 Columns */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6">
            
            {/* Support Box */}
            <div className="bg-[#0b1220]/75 backdrop-blur-md border border-slate-800/60 rounded-3xl p-6 relative overflow-hidden group hover:border-[#00E5FF]/20 transition-all duration-300 text-left">
              {/* Glow backdrop */}
              <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-[#00E5FF]/5 blur-[45px] pointer-events-none group-hover:bg-[#00E5FF]/10 transition-all duration-300"></div>

              <div className="space-y-4 relative z-10">
                <h3 className="text-white font-extrabold text-lg sm:text-xl tracking-tight">
                  Anh/chị vẫn còn băn khoăn?
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Nếu chưa chắc nên chọn giải pháp nào, Alex Minh AI có thể tư vấn theo đúng ngành nghề, ngân sách và mục tiêu thực tế của anh/chị.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 pt-2">
                  <Link
                    href="/lien-he"
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:brightness-110 text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5 shadow-lg shadow-cyan-500/10 cursor-pointer text-center active:scale-[0.98]"
                  >
                    <span>Tư vấn ngay</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                  </Link>
                  <Link
                    href="#bang-gia"
                    className="flex-1 py-3 px-4 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/40 hover:bg-slate-900 text-slate-300 hover:text-white text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center cursor-pointer text-center active:scale-[0.98]"
                  >
                    Xem bảng giá
                  </Link>
                </div>
              </div>
            </div>

            {/* Trust List */}
            <div className="bg-[#0b1220]/40 border border-slate-800/40 rounded-3xl p-6 text-left space-y-4">
              <h4 className="text-white font-extrabold text-xs uppercase tracking-widest text-[#00E5FF]">
                Cam kết từ Alex Minh AI
              </h4>
              <ul className="space-y-3.5 text-xs text-slate-300 font-medium">
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="h-[18px] w-[18px] text-cyan-400 shrink-0 mt-0.5 shadow-[0_0_6px_rgba(34,211,238,0.2)]" />
                  <span>Không cần biết code - Bàn giao chìa khóa trao tay</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="h-[18px] w-[18px] text-cyan-400 shrink-0 mt-0.5 shadow-[0_0_6px_rgba(34,211,238,0.2)]" />
                  <span>Có hướng dẫn sử dụng và hỗ trợ chu đáo</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="h-[18px] w-[18px] text-cyan-400 shrink-0 mt-0.5 shadow-[0_0_6px_rgba(34,211,238,0.2)]" />
                  <span>Có hỗ trợ kỹ thuật và vận hành sau triển khai</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="h-[18px] w-[18px] text-cyan-400 shrink-0 mt-0.5 shadow-[0_0_6px_rgba(34,211,238,0.2)]" />
                  <span>Tùy chỉnh kịch bản theo đúng đặc thù ngành nghề</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Ref Link */}
        <div className="text-center mt-16 pt-8 border-t border-slate-800/20 text-xs sm:text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>Chưa thấy đúng câu hỏi của anh/chị? Liên hệ trực tiếp để được tư vấn nhanh.</span>
          <Link
            href="/lien-he?ref=faq"
            className="text-[#00E5FF] hover:text-[#00E5FF]/80 font-bold transition-all underline decoration-cyan-500/30 underline-offset-4 flex items-center space-x-1"
          >
            <span>Gửi câu hỏi cho Alex Minh AI</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
