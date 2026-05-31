"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, MessageSquare, Zap, Users, Wrench } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";
import BrandLogo from "./brand-logo";

export default function SiteFooter() {
  const serviceLinks = [
    { label: "Thiết kế Website", href: "/dich-vu#website-landing" },
    { label: "Chatbot AI", href: "/dich-vu#chatbot-ai" },
    { label: "Automation bán hàng", href: "/dich-vu#automation-sales" },
    { label: "Bảng giá", href: "/bang-gia" },
  ];

  const exploreLinks = [
    { label: "Demo Chatbot", href: "/demo-chatbot-ai" },
    { label: "Dự án mẫu", href: "/du-an-mau" },
    { label: "Bài viết chia sẻ", href: "/blog" },
    { label: "Liên hệ tư vấn", href: "/lien-he" },
  ];

  return (
    <footer className="bg-[#060910] border-t border-slate-800/40 relative overflow-hidden z-10">
      {/* Background depth */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#00E5FF]/2 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-[#7C3AED]/2 blur-[100px] pointer-events-none"></div>

      {/* ===== Tier 1: Main Footer Content ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 md:pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Column 1: Brand Block — 5 columns */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <Link href="/" className="block">
              <BrandLogo variant="footer" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Thiết kế website, chatbot AI và hệ thống tự động hóa giúp doanh nghiệp Thanh Hóa tăng lead và chốt khách tốt hơn.
            </p>

            {/* Contact Info */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-center space-x-2.5 text-sm text-slate-300">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/15 text-[#00E5FF] shrink-0">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center space-x-2.5 text-sm text-slate-300">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/15 text-[#00E5FF] shrink-0">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <a
                  href="tel:0789284078"
                  onClick={() => trackEvent("phone_click", { location: "footer" })}
                  className="hover:text-white transition-colors font-medium"
                >
                  {siteConfig.hotline}
                </a>
              </div>
              <div className="flex items-center space-x-2.5 text-sm text-slate-300">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/15 text-[#00E5FF] shrink-0">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>

            {/* Mini Zalo CTA */}
            <a
              href="https://zalo.me/0789284078"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("zalo_click", { location: "footer" })}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-[#0068ff] text-white text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all shadow-md shadow-blue-500/10 active:scale-[0.98]"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Nhắn Zalo ngay</span>
            </a>
          </div>

          {/* Column 2: Navigation Links — 3 columns */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-6 text-left">
            {/* Group 1: Dịch vụ */}
            <div>
              <h4 className="text-white font-extrabold text-xs uppercase tracking-widest mb-4 pb-2 border-b border-slate-800/40">
                Dịch vụ
              </h4>
              <ul className="space-y-2.5">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-[13px] leading-relaxed block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Group 2: Khám phá */}
            <div>
              <h4 className="text-white font-extrabold text-xs uppercase tracking-widest mb-4 pb-2 border-b border-slate-800/40">
                Khám phá
              </h4>
              <ul className="space-y-2.5">
                {exploreLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-[13px] leading-relaxed block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Trust / Support Panel — 4 columns */}
          <div className="lg:col-span-4 text-left">
            <div className="bg-[#0b1220]/60 border border-slate-800/50 rounded-3xl p-5 sm:p-6 space-y-4 relative overflow-hidden group hover:border-[#00E5FF]/15 transition-all duration-300">
              <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-[#00E5FF]/4 blur-[40px] pointer-events-none group-hover:bg-[#00E5FF]/8 transition-all duration-300"></div>

              <h4 className="text-white font-extrabold text-sm sm:text-base tracking-tight relative z-10">
                Cam kết đồng hành
              </h4>

              <div className="space-y-3.5 relative z-10">
                {/* Trust Item 1 */}
                <div className="flex items-start space-x-3">
                  <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/15 text-[#00E5FF] shrink-0 mt-0.5">
                    <Zap className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-xs">Hỗ trợ nhanh</h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                      Trao đổi qua Zalo, phản hồi ưu tiên trong giờ làm việc.
                    </p>
                  </div>
                </div>

                {/* Trust Item 2 */}
                <div className="flex items-start space-x-3">
                  <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/15 text-[#00E5FF] shrink-0 mt-0.5">
                    <Users className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-xs">Tư vấn theo ngành</h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                      Gợi ý mô hình web + chatbot phù hợp với lĩnh vực của anh/chị.
                    </p>
                  </div>
                </div>

                {/* Trust Item 3 */}
                <div className="flex items-start space-x-3">
                  <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/15 text-[#00E5FF] shrink-0 mt-0.5">
                    <Wrench className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-xs">Đồng hành kỹ thuật</h5>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                      Hỗ trợ tinh chỉnh và vận hành sau triển khai.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2 relative z-10">
                <Link
                  href="/lien-he"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:brightness-110 text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5 shadow-lg shadow-cyan-500/10 active:scale-[0.98]"
                >
                  <span>Tư vấn ngay</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ===== Tier 2: Bottom Bar ===== */}
      <div className="border-t border-slate-800/40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          {/* Left */}
          <div className="flex flex-col space-y-1 text-center md:text-left">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.name}. Tất cả quyền được bảo lưu.
            </p>
            <p className="text-[10px] text-slate-600">
              Alex Minh AI là thương hiệu tư vấn &amp; triển khai Web, Chatbot AI và Automation cho doanh nghiệp tại Thanh Hóa.
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center space-x-4 text-slate-500">
            <Link href="#" className="hover:text-slate-300 transition-colors">Chính sách bảo mật</Link>
            <span className="text-slate-700">·</span>
            <Link href="#" className="hover:text-slate-300 transition-colors">Điều khoản dịch vụ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
