import React from "react";
import LeadForm from "@/components/lead-form";
import { siteConfig } from "@/lib/site-config";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Liên Hệ Tư Vấn & Nhận Demo",
  description: "Liên hệ Alex Minh AI để được tư vấn thiết kế website, tích hợp chatbot và tự động hóa bán hàng cho doanh nghiệp của bạn tại Thanh Hóa."
};

export default function ContactPage() {
  const formattedPhone = siteConfig.hotline.replace(/\./g, "");

  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="glow-bg bg-primary/10 w-[40rem] h-[40rem] -top-40 -right-40"></div>
      <div className="glow-bg bg-secondary/5 w-[30rem] h-[30rem] bottom-10 -left-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Liên Hệ Hợp Tác & Nhận Bản Demo
          </h1>
          <p className="text-slate-400 text-sm mt-4">
            Để lại thông tin yêu cầu tư vấn bên dưới hoặc liên hệ trực tiếp với Alex Minh AI qua các kênh Hotline/Zalo trực tuyến phục vụ 24/7.
          </p>
          <div className="h-1 w-12 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="bg-[#131926]/40 border border-slate-800 p-6 rounded-3xl flex-1 flex flex-col justify-between space-y-6">
              
              <div className="space-y-6">
                <h3 className="text-white font-bold text-base border-b border-slate-850 pb-3">
                  Thông tin liên hệ
                </h3>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300">
                    <div className="p-2 rounded-xl bg-secondary/10 text-secondary border border-secondary/5 shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-slate-500 font-semibold block text-[10px] uppercase tracking-wider mb-0.5">Địa chỉ</span>
                      <span>{siteConfig.address}</span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300">
                    <div className="p-2 rounded-xl bg-secondary/10 text-secondary border border-secondary/5 shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-slate-500 font-semibold block text-[10px] uppercase tracking-wider mb-0.5">Số điện thoại / Hotline</span>
                      <a href={`tel:${formattedPhone}`} className="hover:text-white transition-colors">
                        {siteConfig.hotline}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300">
                    <div className="p-2 rounded-xl bg-secondary/10 text-secondary border border-secondary/5 shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-slate-500 font-semibold block text-[10px] uppercase tracking-wider mb-0.5">Email</span>
                      <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  {/* Work hours */}
                  <div className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300">
                    <div className="p-2 rounded-xl bg-secondary/10 text-secondary border border-secondary/5 shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-slate-500 font-semibold block text-[10px] uppercase tracking-wider mb-0.5">Phạm vi phục vụ</span>
                      <span>Ưu tiên tỉnh Thanh Hóa và tư vấn triển khai online toàn quốc.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant Social Chat buttons */}
              <div className="pt-6 border-t border-slate-850 space-y-3">
                <a
                  href={siteConfig.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-2xl bg-[#0068ff] text-white text-xs font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="h-4.5 w-4.5" />
                  <span>Nhắn tin Zalo tư vấn trực tiếp</span>
                </a>
                <a
                  href={`tel:${formattedPhone}`}
                  className="w-full py-3 rounded-2xl bg-emerald-600 text-white text-xs font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5"
                >
                  <Phone className="h-4.5 w-4.5" />
                  <span>Gọi Hotline: {siteConfig.hotline}</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right: Lead Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#131926]/20 border border-slate-800 p-6 sm:p-8 rounded-3xl h-full flex flex-col justify-center">
              <h3 className="text-white font-bold text-base mb-6 border-b border-slate-850 pb-3">
                Gửi nhu cầu tư vấn thiết kế
              </h3>
              <LeadForm />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
