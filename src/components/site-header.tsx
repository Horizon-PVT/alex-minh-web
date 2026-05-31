"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";
import BrandLogo from "./brand-logo";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Trang chủ", href: "/" },
    { label: "Dịch vụ", href: "/dich-vu" },
    { label: "Demo Chatbot", href: "/demo-chatbot-ai" },
    { label: "Dự án mẫu", href: "/du-an-mau" },
    { label: "Bảng giá", href: "/bang-gia" },
    { label: "Blog", href: "/blog" },
    { label: "Liên hệ", href: "/lien-he" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 ${
        scrolled
          ? "bg-[#090d16]/90 backdrop-blur-md shadow-xl shadow-black/35 border-b border-slate-800/80 py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group transition-transform duration-300 hover:scale-[1.02] block">
            <BrandLogo variant="full" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? "text-secondary bg-secondary/10 border border-secondary/15 shadow-sm"
                      : "text-slate-350 hover:text-white hover:bg-slate-800/40 border border-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={`tel:${siteConfig.hotline.replace(/\./g, "")}`}
              onClick={() => trackEvent("phone_click", { location: "header_desktop" })}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-900/50 border border-slate-800 hover:border-secondary/40 text-slate-300 hover:text-white transition-all text-xs font-bold shadow-inner"
            >
              <PhoneCall className="h-3.5 w-3.5 text-secondary animate-pulse" />
              <span>{siteConfig.hotline}</span>
            </a>
            <Link
              href="/lien-he"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-xs font-extrabold shadow-lg shadow-primary/20 hover:shadow-secondary/30 transition-all duration-300 transform hover:-translate-y-0.5 hover:brightness-110"
            >
              Tư vấn ngay
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#090d16]/95 backdrop-blur-lg border-t border-slate-800/60 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-3 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-secondary bg-secondary/10 border border-secondary/15"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 pb-2 px-3 border-t border-slate-800/60 flex flex-col space-y-3">
              <a
                href={`tel:${siteConfig.hotline.replace(/\./g, "")}`}
                onClick={() => trackEvent("phone_click", { location: "header_mobile" })}
                className="flex items-center space-x-2 text-slate-300 hover:text-white text-sm font-semibold py-2"
              >
                <PhoneCall className="h-4.5 w-4.5 text-secondary" />
                <span>{siteConfig.hotline}</span>
              </a>
              <Link
                href="/lien-he"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold shadow-md shadow-primary/10 hover:brightness-110 transition-all"
              >
                Tư vấn ngay
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
