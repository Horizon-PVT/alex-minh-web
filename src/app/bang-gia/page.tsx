import React from "react";
import PricingSection from "@/components/pricing-section";
import { ShieldCheck, Clock, Zap } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Bảng Giá Dịch Vụ Website & Chatbot AI",
  description: "Bảng báo giá chi tiết dịch vụ thiết kế website, lập trình chatbot AI và tự động hóa quy trình bán hàng tại Thanh Hóa."
};

export default function PricingPage() {
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
