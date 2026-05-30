import React from "react";
import PricingSection from "@/components/pricing-section";
import { Check, X, ShieldCheck, Clock, Zap } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Bảng Giá Dịch Vụ Website & Chatbot AI",
  description: "Bảng báo giá chi tiết dịch vụ thiết kế website, lập trình chatbot AI và tự động hóa quy trình bán hàng tại Thanh Hóa."
};

export default function PricingPage() {
  const tableFeatures = [
    { name: "Thiết kế chuẩn di động (Mobile-first)", web: true, bot: true, sys: true },
    { name: "Số lượng trang thiết kế", web: "1 – 5 trang", bot: "5 – 10 trang", sys: "Không giới hạn" },
    { name: "Nút Call/Zalo/Messenger tích hợp", web: true, bot: true, sys: true },
    { name: "Bảo mật chứng chỉ SSL miễn phí", web: true, bot: true, sys: true },
    { name: "Tối ưu hóa SEO Local cơ bản", web: true, bot: true, sys: true },
    { name: "Chatbot kịch bản phân nhánh cơ bản", web: false, bot: true, sys: true },
    { name: "Chatbot AI huấn luyện dữ liệu riêng", web: false, bot: true, sys: true },
    { name: "Tự động thu thập SĐT & phân loại khách", web: false, bot: true, sys: true },
    { name: "Đồng bộ lead tự động về Google Sheet", web: false, bot: true, sys: true },
    { name: "Bắn tin nhắn thông báo lead mới qua Zalo/Tele", web: false, bot: true, sys: true },
    { name: "CRM mini lưu trữ và quản lý trạng thái lead", web: false, webInfo: "Bàn giao mã nguồn", bot: "Google Sheet", sys: "CRM nội bộ chuyên sâu" },
    { name: "Dashboard báo cáo hiệu quả số lượng lead", web: false, bot: false, sys: true },
    { name: "AI Content Generator viết bài cho nhân viên", web: false, bot: false, sys: true },
    { name: "Bảo hành & bảo trì lỗi kỹ thuật", web: "12 tháng", bot: "Trọn đời", sys: "Trọn đời" },
    { name: "Thời gian bàn giao dự kiến", web: "5 – 7 ngày", bot: "7 – 12 ngày", sys: "15 – 25 ngày" }
  ];

  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="glow-bg bg-primary/10 w-[40rem] h-[40rem] -top-40 -right-40"></div>
      <div className="glow-bg bg-secondary/5 w-[30rem] h-[30rem] bottom-10 -left-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Bảng Giá Dịch Vụ & So Sánh Tính Năng
          </h1>
          <p className="text-slate-400 text-sm mt-4">
            So sánh chi tiết các gói dịch vụ giúp bạn lựa chọn giải pháp tối ưu nhất cho hoạt động kinh doanh của mình.
          </p>
          <div className="h-1 w-12 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Pricing Cards Grid (Reused Component) */}
        <PricingSection />

        {/* Detailed Comparison Table Section */}
        <div className="mt-16 bg-[#131926]/20 border border-slate-800 p-6 md:p-8 rounded-3xl overflow-hidden max-w-5xl mx-auto">
          <h2 className="text-white font-bold text-lg mb-6 text-center md:text-left">
            Bảng So Sánh Chi Tiết Tính Năng
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-semibold">
                  <th className="py-4 pr-4 w-[40%]">Tính năng triển khai</th>
                  <th className="py-4 px-4 text-center">Web Uy Tín</th>
                  <th className="py-4 px-4 text-center">Web + Chatbot AI</th>
                  <th className="py-4 px-4 text-center">AI Sales System</th>
                </tr>
              </thead>
              <tbody>
                {tableFeatures.map((feat, index) => (
                  <tr key={index} className="border-b border-slate-850 hover:bg-slate-900/20">
                    <td className="py-4 pr-4 font-medium text-slate-300">{feat.name}</td>
                    
                    {/* Web column */}
                    <td className="py-4 px-4 text-center text-slate-450">
                      {typeof feat.web === "boolean" ? (
                        feat.web ? <Check className="h-5 w-5 text-emerald-450 mx-auto" /> : <X className="h-4.5 w-4.5 text-slate-700 mx-auto" />
                      ) : (
                        feat.web
                      )}
                    </td>

                    {/* Bot column */}
                    <td className="py-4 px-4 text-center text-slate-450">
                      {typeof feat.bot === "boolean" ? (
                        feat.bot ? <Check className="h-5 w-5 text-emerald-450 mx-auto" /> : <X className="h-4.5 w-4.5 text-slate-700 mx-auto" />
                      ) : (
                        feat.bot
                      )}
                    </td>

                    {/* System column */}
                    <td className="py-4 px-4 text-center text-slate-450 font-medium">
                      {typeof feat.sys === "boolean" ? (
                        feat.sys ? <Check className="h-5 w-5 text-secondary mx-auto" /> : <X className="h-4.5 w-4.5 text-slate-700 mx-auto" />
                      ) : (
                        feat.sys
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Core Promises */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
          <div className="bg-[#131926]/30 border border-slate-800 p-5 rounded-2xl flex items-start space-x-3.5">
            <ShieldCheck className="h-6 w-6 text-secondary shrink-0" />
            <div>
              <h4 className="text-white font-bold text-sm mb-1">Giá cả minh bạch</h4>
              <p className="text-xs text-slate-400 leading-normal">
                Báo giá chi tiết từng hạng mục trước khi làm. Không phát sinh chi phí ẩn ngoài hợp đồng.
              </p>
            </div>
          </div>
          <div className="bg-[#131926]/30 border border-slate-800 p-5 rounded-2xl flex items-start space-x-3.5">
            <Clock className="h-6 w-6 text-secondary shrink-0" />
            <div>
              <h4 className="text-white font-bold text-sm mb-1">Hỗ trợ nhanh chóng</h4>
              <p className="text-xs text-slate-400 leading-normal">
                Kỹ thuật viên tại Thanh Hóa hỗ trợ trực tiếp, xử lý sự cố trong vòng 2h nhận thông báo.
              </p>
            </div>
          </div>
          <div className="bg-[#131926]/30 border border-slate-800 p-5 rounded-2xl flex items-start space-x-3.5">
            <Zap className="h-6 w-6 text-secondary shrink-0" />
            <div>
              <h4 className="text-white font-bold text-sm mb-1">Công nghệ tối tân</h4>
              <p className="text-xs text-slate-400 leading-normal">
                Ứng dụng mã nguồn nhẹ, chuẩn SEO di động và các mô hình chatbot AI ổn định, chính xác nhất.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 bg-[#131926]/20 border border-slate-800 p-8 rounded-3xl max-w-3xl mx-auto relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-white font-bold text-lg mb-2">Bạn cần một gói giải pháp được tùy chỉnh riêng?</h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6 max-w-xl mx-auto leading-relaxed">
              Hãy đặt lịch tư vấn nhanh 15 phút, Alex Minh AI sẽ lắng nghe bài toán kinh doanh của bạn và đề xuất giải pháp tiết kiệm và hiệu quả nhất.
            </p>
            <Link
              href="/lien-he"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold shadow-md shadow-primary/10 hover:from-primary-hover hover:to-secondary-hover transition-all"
            >
              Liên hệ trao đổi trực tiếp
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
