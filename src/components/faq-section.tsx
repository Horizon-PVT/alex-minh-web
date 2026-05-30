"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "Website tích hợp chatbot AI khác gì so với website thông thường?",
      answer: "Website thông thường chủ yếu để hiển thị thông tin tĩnh. Website tích hợp chatbot AI hoạt động như một cỗ máy bán hàng chủ động: tự động chào hỏi, tư vấn sản phẩm, báo giá, thuyết phục khách hàng đặt lịch và lưu thông tin liên hệ ngay lập tức về Google Sheet/Zalo của bạn 24/7 mà không cần nhân viên trực page."
    },
    {
      question: "Chatbot AI trả lời khách có chuẩn xác không? Có bịa đặt thông tin lung tung không?",
      answer: "Alex Minh AI thiết lập Chatbot AI dựa trên bộ dữ liệu chuẩn (Knowledge Base) do chính doanh nghiệp cung cấp (bảng giá, chính sách, mô tả dịch vụ...). Chatbot được giới hạn phạm vi trả lời, chỉ phản hồi thông tin có trong tài liệu huấn luyện. Đối với câu hỏi nằm ngoài phạm vi hoặc khi khách yêu cầu gặp tư vấn viên, bot sẽ tự động hiển thị nút chuyển tiếp sang Zalo/Hotline của bạn để người thật hỗ trợ."
    },
    {
      question: "Chi phí vận hành hàng tháng của hệ thống này là bao nhiêu?",
      answer: "Với website thường, chi phí duy trì tên miền + hosting chỉ khoảng 1.2M - 2M/năm. Với Chatbot AI, bản demo chạy bằng kịch bản hoặc chatbot cơ bản thì hoàn toàn không mất phí duy trì. Nếu sử dụng chatbot AI nâng cao học dữ liệu động, phí API sẽ tính theo lưu lượng tin nhắn thực tế của khách hàng (thường cực kỳ rẻ, chỉ khoảng vài chục đồng cho một cuộc hội thoại)."
    },
    {
      question: "Tôi không am hiểu công nghệ thì có tự quản lý hệ thống được không?",
      answer: "Hoàn toàn được. Alex Minh AI xây dựng hệ thống theo tiêu chí tối giản và bàn giao chìa khóa trao tay. Khi có khách hàng điền form hoặc chat để lại số điện thoại, hệ thống sẽ tự động gửi tin nhắn báo động thẳng về Zalo/Telegram cá nhân của bạn và tự động ghi vào Google Sheet. Bạn chỉ cần mở điện thoại ra và gọi điện chốt đơn, không cần động vào code hay thao tác kỹ thuật phức tạp nào."
    },
    {
      question: "Thời gian triển khai hoàn thiện dự án là bao lâu?",
      answer: "Quy trình triển khai của Alex Minh AI gồm 6 bước rõ ràng từ khảo sát nhu cầu, lên demo thiết kế, lập trình, kiểm thử và bàn giao. Thông thường, một dự án Website + Chatbot AI cơ bản được hoàn thành và đi vào hoạt động sau 7 - 14 ngày làm việc."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-24 md:scroll-mt-28 py-14 md:py-20 bg-[#090d16] relative overflow-hidden">
      {/* Background decoration */}
      <div className="glow-bg bg-primary/10 w-96 h-96 bottom-10 left-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
            Giải Đáp Thắc Mắc
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
            Câu Hỏi Thường Gặp Của Các Chủ Doanh Nghiệp
          </p>
          <div className="h-1 w-12 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#131926]/30 border border-slate-800/80 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left text-slate-100 hover:text-white font-medium text-sm sm:text-base transition-colors"
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <HelpCircle className="h-5 w-5 text-secondary shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <div className="shrink-0 p-1.5 rounded-lg bg-slate-800/50 border border-slate-800 text-slate-400">
                    {isOpen ? <Minus className="h-4.5 w-4.5" /> : <Plus className="h-4.5 w-4.5" />}
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-slate-800/50" : "max-h-0"
                  }`}
                >
                  <p className="p-5 text-slate-400 text-xs sm:text-sm leading-relaxed bg-[#0d1321]/30">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
