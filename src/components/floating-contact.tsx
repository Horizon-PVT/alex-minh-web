"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

export default function FloatingContact() {
  const formattedPhone = siteConfig.hotline.replace(/\./g, "");

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col space-y-3 md:space-y-4">
      {/* Hotline Button */}
      <a
        href={`tel:${formattedPhone}`}
        onClick={() => trackEvent("phone_click", { location: "floating" })}
        className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-green-600 text-white shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-110 relative group"
        title="Gọi hotline tư vấn"
      >
        <span className="absolute left-14 bg-slate-900 text-white text-xs px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md border border-slate-800">
          Gọi điện: {siteConfig.hotline}
        </span>
        {/* Ringing effect animation */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping opacity-75"></span>
        <Phone className="w-[18px] h-[18px] md:w-6 md:h-6 relative z-10 animate-bounce" />
      </a>

      {/* Zalo Button */}
      <a
        href={siteConfig.zalo}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("zalo_click", { location: "floating" })}
        className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#0068ff] text-white shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-110 relative group"
        title="Chat Zalo ngay"
      >
        <span className="absolute left-14 bg-slate-900 text-white text-xs px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md border border-slate-800">
          Nhắn tin Zalo
        </span>
        <MessageCircle className="w-5 h-5 md:w-7 md:h-7" />
      </a>
    </div>
  );
}
