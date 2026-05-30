"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall, Bot } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-primary to-secondary text-white shadow-md shadow-primary/20 transition-transform duration-300 group-hover:scale-105">
              <Bot className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-white via-slate-100 to-secondary bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
              <span className="text-[10px] text-muted tracking-wider uppercase hidden sm:inline-block">
                Web & Chatbot AI Thanh Hóa
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-secondary bg-secondary/10"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
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
              className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors text-sm font-medium pr-2"
            >
              <PhoneCall className="h-4 w-4 text-secondary" />
              <span>{siteConfig.hotline}</span>
            </a>
            <Link
              href="/lien-he"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:from-primary-hover hover:to-secondary-hover text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all transform hover:-translate-y-0.5"
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
        <div className="md:hidden glass border-t border-white/5 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-3 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "text-secondary bg-secondary/10"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 pb-2 px-3 border-t border-white/5 flex flex-col space-y-3">
              <a
                href={`tel:${siteConfig.hotline.replace(/\./g, "")}`}
                className="flex items-center space-x-2 text-slate-300 hover:text-white text-base font-medium py-2"
              >
                <PhoneCall className="h-5 w-5 text-secondary" />
                <span>{siteConfig.hotline}</span>
              </a>
              <Link
                href="/lien-he"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-base font-semibold shadow-md shadow-primary/10"
              >
                Tư vấn miễn phí
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
