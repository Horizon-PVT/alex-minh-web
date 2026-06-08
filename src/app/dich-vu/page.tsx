import React from "react";
import { services } from "@/lib/services";
import { CheckCircle2, Bot, Cpu, Globe, PenTool, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Dịch Vụ Website & Chatbot AI - Alex Minh AI",
  description: "Thiết kế Website chuyên nghiệp, tích hợp Chatbot AI trực chiến 24/7 và hệ thống tự động hóa bán hàng (Automation) cho doanh nghiệp Thanh Hóa."
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe: Globe,
  MessageSquareCode: Bot,
  Cpu: Cpu,
  PenTool: PenTool,
};

const imageMap: Record<string, string> = {
  "website-landing": "/images/services/website-landing-page.png",
  "chatbot-ai": "/images/services/chatbot-ai-smart.png",
  "automation-sales": "/images/services/automation-sales.png",
  "ai-content": "/images/services/ai-content-creation.png",
};

export default function ServicesPage() {
  return (
    <div className="relative pt-32 pb-24 overflow-hidden bg-background">
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

      {/* Background glow decors */}
      <div className="glow-bg bg-primary/10 w-[40rem] h-[40rem] -top-40 -right-40 animate-pulse" style={{ animationDuration: "12s" }}></div>
      <div className="glow-bg bg-secondary/5 w-[30rem] h-[30rem] bottom-10 -left-40 animate-pulse" style={{ animationDuration: "8s" }}></div>
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[35rem] h-[20rem] bg-gradient-to-br from-primary/10 to-secondary/5 rounded-full blur-[120px] pointer-events-none opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header / Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-24 relative">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-xs font-semibold mb-6 tracking-wide uppercase">
            <Sparkles className="h-3.5 w-3.5 text-secondary animate-pulse" />
            Dịch vụ chuyên nghiệp
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Giải Pháp Đột Phá Bán Hàng <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-primary via-secondary to-cyan-300 bg-clip-text text-transparent">
              Bằng Website & Chatbot AI
            </span>
          </h1>
          
          <p className="text-slate-400 text-sm sm:text-base mt-6 leading-relaxed max-w-2xl mx-auto">
            Alex Minh AI đồng hành cùng doanh nghiệp Thanh Hóa số hóa quy trình kinh doanh, xây dựng hệ thống website chuyên nghiệp kết hợp trợ lý chatbot AI thông minh và tự động hóa xử lý lead.
          </p>

          {/* Glowing divider */}
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mt-8 rounded-full shadow-[0_0_10px_rgba(0,229,255,0.4)]"></div>

          {/* Trust chips */}
          <div className="mt-10 flex flex-wrap justify-center gap-3.5 max-w-2xl mx-auto">
            {[
              "Website chuẩn chuyển đổi",
              "Chatbot AI trực chiến 24/7",
              "Tự động lưu trữ lead",
              "Đồng bộ Telegram & Sheet"
            ].map((chip, idx) => (
              <div key={idx} className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#0e1626]/80 border border-slate-800/80 text-slate-300 text-[11px] sm:text-xs font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 text-secondary shrink-0" />
                <span>{chip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Services Content (Alternating Showcase Layout) */}
        <div className="space-y-28 md:space-y-36">
          {services.map((svc, index) => {
            const Icon = iconMap[svc.icon] || Globe;
            const isEven = index % 2 === 0;
            const isChatbot = svc.id === "chatbot-ai";

            return (
              <React.Fragment key={svc.id}>
                <div
                  id={svc.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center scroll-mt-24 md:scroll-mt-28"
                >
                  {/* Visual Block (Visual Card) */}
                  <div
                    className={`lg:col-span-6 flex justify-center ${
                      isEven ? "lg:order-first" : "lg:order-last"
                    }`}
                  >
                    <div className={`w-full max-w-[520px] aspect-[4/3] rounded-2xl bg-[#0e1626]/70 border p-2 flex flex-col justify-between shadow-2xl relative group overflow-hidden transition-all duration-300 ${
                      isChatbot 
                        ? "border-amber-500/20 hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]" 
                        : "border-slate-800 hover:border-[#00e5ff]/30 hover:shadow-[0_0_30px_rgba(0,229,255,0.15)]"
                    }`}>
                      
                      {/* Glowing background flow inside border */}
                      <div className={`absolute -inset-px opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl pointer-events-none ${
                        isChatbot 
                          ? "bg-gradient-to-br from-amber-500/10 via-amber-600/5 to-transparent" 
                          : "bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent"
                      }`}></div>

                      {/* Image box container */}
                      <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-950">
                        <Image
                          src={imageMap[svc.id] || "/images/services/website-landing-page.png"}
                          alt={svc.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={index === 0}
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] brightness-[1.06] contrast-[1.01]"
                        />
                        
                        {/* Dark gradient overlay at bottom to increase contrast and readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/20 to-transparent"></div>
                        
                        {/* Inner border line */}
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none"></div>

                        {/* Top floating module glass badge */}
                        <div className="absolute top-4 left-4 glass px-3 py-1.5 rounded-lg flex items-center gap-2 border border-white/10 shadow-lg pointer-events-none">
                          <Icon className={`h-4 w-4 ${isChatbot ? "text-amber-400" : "text-secondary"}`} />
                          <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                            Module 0{index + 1}
                          </span>
                        </div>

                        {/* Bottom floating application tag badge */}
                        <div className={`absolute bottom-4 left-4 glass px-3 py-1.5 rounded-lg border shadow-md pointer-events-none ${
                          isChatbot ? "border-amber-500/30 text-amber-400" : "border-secondary/25 text-secondary"
                        }`}>
                          <span className="text-[10px] font-bold uppercase tracking-wider">
                            {svc.id === "website-landing" ? "Tăng Chuyển Đổi" : 
                             svc.id === "chatbot-ai" ? "Tự Động Hóa 24/7" : 
                             svc.id === "automation-sales" ? "Tối Ưu Vận Hành" : "Sáng Tạo Nội Dung"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className="lg:col-span-6 flex flex-col space-y-6 justify-center">
                    <div>
                      {/* Eyebrow Label */}
                      <span className={`text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-md inline-block mb-3 border ${
                        isChatbot 
                          ? "text-amber-400 bg-amber-500/5 border-amber-500/20" 
                          : "text-secondary bg-secondary/5 border-secondary/20"
                      }`}>
                        {svc.id === "website-landing" ? "Giải Pháp Website" : 
                         svc.id === "chatbot-ai" ? "Giải Pháp AI" : 
                         svc.id === "automation-sales" ? "Giải Pháp Quy Trình" : "Giải Pháp Truyền Thông"}
                      </span>
                      
                      <h3 className="text-3xl font-extrabold text-white tracking-tight mb-4">
                        {svc.title}
                      </h3>
                      
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {svc.shortDesc}
                      </p>
                      
                      <p className="text-slate-400 text-xs sm:text-sm mt-4 leading-relaxed border-l-2 border-primary/30 pl-4 py-1 italic bg-primary/2 rounded-r-lg">
                        {svc.description}
                      </p>
                    </div>

                    {/* Bullet Benefits list */}
                    <div className="space-y-4 pt-2">
                      <h4 className="text-slate-200 font-bold text-xs sm:text-sm tracking-wide uppercase flex items-center gap-2">
                        <span className={`h-1.5 w-2.5 rounded-full ${isChatbot ? "bg-amber-400" : "bg-secondary"}`}></span>
                        Hạng mục triển khai chính:
                      </h4>
                      <div className="grid grid-cols-1 gap-3.5 pl-1">
                        {svc.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300 group/item">
                            <div className={`p-1 rounded-full border shrink-0 mt-0.5 transition-all ${
                              isChatbot 
                                ? "bg-amber-500/10 border-amber-500/30 text-amber-400 group-hover/item:bg-amber-500/20" 
                                : "bg-secondary/10 border-secondary/30 text-secondary group-hover/item:bg-secondary/20"
                            }`}>
                              <CheckCircle2 className="h-3.5 w-3.5" />
                            </div>
                            <span className="leading-relaxed">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="pt-6 flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/lien-he"
                        className={`px-6 py-3.5 rounded-xl text-white text-xs font-bold tracking-wide shadow-lg transition-all hover:-translate-y-0.5 text-center flex items-center justify-center gap-1.5 ${
                          isChatbot
                            ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-amber-500/10"
                            : "bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover shadow-primary/10"
                        }`}
                      >
                        Nhận demo chatbot AI theo ngành
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <Link
                        href="/demo-chatbot-ai"
                        className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white text-xs font-bold tracking-wide transition-all hover:-translate-y-0.5 text-center flex items-center justify-center gap-1.5"
                      >
                        Trải nghiệm chatbot mẫu
                      </Link>
                    </div>
                  </div>
                </div>

                {/* KODA ELITE Promotional Card */}
                {svc.id === "chatbot-ai" && (
                  <div className="rounded-3xl border border-purple-500/20 bg-[#0e1626]/80 p-8 md:p-12 shadow-[0_0_30px_rgba(168,85,247,0.06)] relative overflow-hidden group mt-16 md:mt-24 text-left">
                    {/* Ambient Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-purple-500/5 blur-[90px] pointer-events-none"></div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                      
                      {/* Left: Info Content */}
                      <div className="lg:col-span-7 space-y-6">
                        <div className="space-y-3">
                          <span className="text-[11px] font-black tracking-wider uppercase px-3 py-1 rounded-md inline-block border text-purple-400 bg-purple-500/5 border-purple-500/20">
                            Quà tặng tháng 6
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                            🎁 Tặng 7 ngày KODA ELITE cho gói Web + Chatbot AI trở lên
                          </h3>
                          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                            KODA ELITE chỉ là quà tặng hỗ trợ chủ doanh nghiệp trong ưu đãi tháng 6. Sản phẩm chính vẫn là Website AI tích hợp chatbot tư vấn theo dữ liệu doanh nghiệp, form nhận khách và thông báo lead tự động.
                          </p>
                        </div>

                        {/* Bullets grid */}
                        <div className="space-y-4 pt-2">
                          <h4 className="text-slate-200 font-bold text-xs tracking-wide uppercase flex items-center gap-2">
                            <span className="h-1.5 w-2.5 rounded-full bg-purple-400"></span>
                            Năng lực hỗ trợ chính:
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-1">
                            {[
                              "Lên lịch, nhắc việc và gợi ý kế hoạch làm việc trong ngày",
                              "Phân tích sản phẩm / dịch vụ để gợi ý hướng bán hàng phù hợp",
                              "Soạn tin nhắn chăm khách, follow-up khách chưa chốt",
                              "Gợi ý nội dung quảng bá Facebook, Zalo, website",
                              "Học dần phong cách làm việc và ưu tiên của chủ doanh nghiệp",
                              "Tóm tắt vấn đề khách hay hỏi để tối ưu chatbot và tư vấn",
                              "Gợi ý chương trình khuyến mại theo mùa, dịp và tệp khách hàng",
                              "Hỗ trợ chủ doanh nghiệp ra quyết định marketing nhanh hơn mỗi ngày"
                            ].map((bullet, idx) => (
                              <div key={idx} className="flex items-start space-x-2 text-[11px] sm:text-xs text-slate-300 group/item">
                                <div className="p-0.5 rounded-full border shrink-0 mt-0.5 bg-purple-500/10 border-purple-500/30 text-purple-400 group-hover/item:bg-purple-500/20 transition-all">
                                  <Sparkles className="h-3 w-3" />
                                </div>
                                <span className="leading-relaxed">{bullet}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA & Safety Note */}
                        <div className="pt-4 space-y-4">
                          <Link
                            href="/lien-he?source=june-offer"
                            className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-xs font-bold tracking-wide shadow-lg shadow-purple-500/10 transition-all hover:-translate-y-0.5"
                          >
                            Nhận demo chatbot AI theo ngành
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                          <p className="text-[10px] text-slate-500 font-medium">
                            * KODA ELITE đóng vai trò trợ lý hỗ trợ và gợi ý. Chủ doanh nghiệp vẫn là người quyết định cuối cùng.
                          </p>
                        </div>
                      </div>

                      {/* Right: Visual Avatar */}
                      <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-3">
                        <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl p-1 bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center animate-[pulse_6s_infinite]">
                          <div className="w-full h-full rounded-2xl overflow-hidden relative bg-slate-950">
                            <Image
                              src="/images/brand/koda-elite-avatar.jpg"
                              alt="KODA ELITE - Trợ lý AI riêng cho chủ doanh nghiệp"
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                              sizes="(max-width: 768px) 250px, 350px"
                            />
                          </div>
                        </div>
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                          Trợ lý AI riêng bởi KODA ELITE
                        </span>
                      </div>

                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Bottom Call to Action Section */}
        <div className="mt-32 relative rounded-3xl overflow-hidden border border-slate-800/80 bg-[#0e1626]/40 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50"></div>
          
          {/* Tech lines background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.04] pointer-events-none"></div>

          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Sẵn Sàng Nâng Tầm Doanh Nghiệp Của Bạn?
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              Bắt đầu với Website AI rõ phạm vi: website chuyên nghiệp, chatbot AI theo dữ liệu doanh nghiệp, form nhận khách và thông báo lead để đội ngũ xử lý kịp thời.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/lien-he?source=services-demo"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:from-primary-hover hover:to-secondary-hover text-sm font-bold tracking-wide shadow-[0_4px_15px_rgba(0,229,255,0.25)] transition-all hover:-translate-y-0.5 text-center"
              >
                Nhận demo chatbot AI theo ngành
              </Link>
              <Link
                href="/bang-gia#bang-gia"
                className="px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white text-sm font-bold tracking-wide transition-all hover:-translate-y-0.5 text-center"
              >
                Xem gói Web từ 4.9 triệu
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
