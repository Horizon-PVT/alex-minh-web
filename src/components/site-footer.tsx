"use client";

import React from "react";
import Link from "next/link";
import { Bot, Mail, MapPin, Phone, ShieldCheck, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

export default function SiteFooter() {
  const quickLinks = [
    { label: "Giới thiệu", href: "/" },
    { label: "Dịch vụ chi tiết", href: "/dich-vu" },
    { label: "Demo Chatbot AI", href: "/demo-chatbot-ai" },
    { label: "Dự án mẫu", href: "/du-an-mau" },
    { label: "Bảng giá", href: "/bang-gia" }
  ];

  const resources = [
    { label: "Bài viết chia sẻ", href: "/blog" },
    { label: "Liên hệ tư vấn", href: "/lien-he" },
    { label: "Chính sách bảo mật", href: "#" },
    { label: "Điều khoản dịch vụ", href: "#" }
  ];

  return (
    <footer className="bg-[#060910] border-t border-slate-800/60 pt-16 pb-8 relative overflow-hidden z-10">
      {/* Background glow */}
      <div className="glow-bg bg-primary/10 w-96 h-96 -bottom-48 -left-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-primary to-secondary text-white shadow-md">
                <Bot className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex flex-col space-y-2.5 pt-2 text-sm text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary shrink-0" />
                <a
                  href={`tel:${siteConfig.hotline.replace(/\./g, "")}`}
                  onClick={() => trackEvent("phone_click", { location: "footer" })}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.hotline}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-secondary pt-1">
              Liên kết nhanh
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center space-x-1"
                  >
                    <span>&bull;</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-secondary pt-1">
              Tài nguyên & Hỗ trợ
            </h3>
            <ul className="space-y-2.5">
              {resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center space-x-1"
                  >
                    <span>&bull;</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust badges */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-semibold text-base mb-4 tracking-wide relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-secondary pt-1">
              Cam kết dịch vụ
            </h3>
            <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-2xl flex flex-col space-y-3">
              <div className="flex items-start space-x-3">
                <ShieldCheck className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-white font-medium text-xs">Bảo hành trọn đời</h4>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    Bảo hành lỗi kỹ thuật website & chatbot trong suốt thời gian vận hành.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-white font-medium text-xs">Hỗ trợ 24/7</h4>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    Kênh liên hệ trực tiếp qua Zalo ưu tiên xử lý trong vòng 2h làm việc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex flex-col space-y-1 text-center md:text-left">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.name}. Tất cả quyền được bảo lưu.
            </p>
            <p className="text-[10px] text-slate-600 font-normal">
              Alex Minh AI là thương hiệu tư vấn & triển khai Web, Chatbot AI và Automation, vận hành bởi KodaFlow.
            </p>
          </div>
          <p className="flex items-center space-x-1 text-slate-500">
            <span>Thiết kế bởi</span>
            <span className="text-slate-300 font-medium">{siteConfig.name}</span>
            <span>- Đồng hành cùng DN Thanh Hóa.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
