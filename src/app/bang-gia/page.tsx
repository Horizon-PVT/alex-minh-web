import React from "react";
import Link from "next/link";
import PricingSection from "@/components/pricing-section";
import { Bell, FileText, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Bảng giá Website AI cho doanh nghiệp địa phương",
  description:
    "Bảng giá Web Uy Tín, Web + Chatbot AI và AI Sales System của Alex Minh AI cho doanh nghiệp địa phương."
};

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden pb-20 pt-32">
      <div className="glow-bg -right-40 -top-40 h-[40rem] w-[40rem] bg-primary/10" />
      <div className="glow-bg -left-40 bottom-10 h-[30rem] w-[30rem] bg-secondary/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-cyan-200">
            Direction Lock tháng 6
          </div>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            Bảng giá Website AI cho doanh nghiệp địa phương
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Chọn đúng gói theo giai đoạn: website nền tảng, Web + Chatbot AI mũi nhọn tháng 6 hoặc AI Sales System cho nhu cầu phức tạp hơn.
          </p>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-secondary" />
        </div>

        <PricingSection />

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex items-start space-x-3.5 rounded-2xl border border-slate-800 bg-[#131926]/30 p-5">
            <FileText className="h-6 w-6 shrink-0 text-secondary" />
            <div>
              <h4 className="mb-1 text-sm font-bold text-white">Phạm vi rõ ràng</h4>
              <p className="text-xs leading-normal text-slate-400">
                Mỗi gói tách rõ website, chatbot AI, form nhận lead và phần tích hợp cần báo giá thêm.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3.5 rounded-2xl border border-slate-800 bg-[#131926]/30 p-5">
            <Bell className="h-6 w-6 shrink-0 text-secondary" />
            <div>
              <h4 className="mb-1 text-sm font-bold text-white">Nhận lead gọn hơn</h4>
              <p className="text-xs leading-normal text-slate-400">
                Form, Google Sheet và Telegram/email alert giúp đội ngũ biết có khách mới để xử lý kịp thời.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3.5 rounded-2xl border border-slate-800 bg-[#131926]/30 p-5">
            <ShieldCheck className="h-6 w-6 shrink-0 text-secondary" />
            <div>
              <h4 className="mb-1 text-sm font-bold text-white">Không hứa kết quả tuyệt đối</h4>
              <p className="text-xs leading-normal text-slate-400">
                Hiệu quả còn phụ thuộc vào sản phẩm, traffic, quảng cáo, đội sale và cách doanh nghiệp xử lý khách hàng.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl overflow-hidden rounded-3xl border border-slate-800 bg-[#131926]/20 p-8 text-center">
          <div className="relative z-10">
            <h3 className="mb-2 text-lg font-bold text-white">
              Chưa chắc nên bắt đầu từ gói nào?
            </h3>
            <p className="mx-auto mb-6 max-w-xl text-xs leading-relaxed text-slate-400 sm:text-sm">
              Gửi ngành kinh doanh và SĐT/Zalo, Alex Minh AI sẽ đề xuất demo chatbot AI theo ngành và gói triển khai phù hợp.
            </p>
            <Link
              href="/lien-he?source=pricing-demo"
              className="rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3 text-xs font-semibold text-white shadow-md shadow-primary/10 transition-all hover:from-primary-hover hover:to-secondary-hover"
            >
              Nhận demo chatbot AI theo ngành
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
