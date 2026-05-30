"use client";

import React from "react";
import { Hotel, Home, Sparkles, GraduationCap, ShoppingBag, MessageSquare, AlertCircle, Bot, CheckSquare } from "lucide-react";
import { industries } from "@/lib/industries";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Hotel: Hotel,
  Home: Home,
  Sparkles: Sparkles,
  GraduationCap: GraduationCap,
  ShoppingBag: ShoppingBag,
};

export default function IndustryDemoSection() {
  const handleTriggerDemo = (industryId: string) => {
    const event = new CustomEvent("trigger-chatbot-demo", { detail: { industryId } });
    window.dispatchEvent(event);
  };

  return (
    <section id="demo-nganh" className="scroll-mt-24 md:scroll-mt-28 py-14 md:py-20 bg-[#090d16] relative overflow-hidden">
      {/* Background Glow */}
      <div className="glow-bg bg-primary/10 w-[30rem] h-[30rem] top-20 right-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
            Giải Pháp Theo Ngành
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
            Kịch Bản Chatbot Tối Ưu Cho Từng Ngành Nghề Kinh Doanh
          </p>
          <p className="text-slate-400 text-sm mt-3 max-w-2xl mx-auto">
            Bấm nút &quot;Chạy thử demo chatbot&quot; để trải nghiệm thực tế cách trợ lý AI của Alex Minh AI tư vấn và thu thập thông tin khách hàng tiềm năng.
          </p>
          <div className="h-1 w-12 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((ind) => {
            const Icon = iconMap[ind.icon] || Sparkles;

            return (
              <div
                key={ind.id}
                className="glass-card p-6 rounded-3xl border border-slate-800/50 flex flex-col space-y-5"
              >
                {/* Card Title Header */}
                <div className="flex items-center space-x-3.5">
                  <div className="p-3 rounded-2xl bg-secondary/10 text-secondary border border-secondary/10 shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-slate-100 font-bold text-base leading-snug">
                    {ind.name}
                  </h3>
                </div>

                {/* Card Body - Problem & Solution Details */}
                <div className="flex-1 flex flex-col space-y-4 text-xs sm:text-sm">
                  {/* Pain point */}
                  <div className="flex space-x-2.5 items-start bg-rose-500/5 border border-rose-950/20 p-3 rounded-xl">
                    <AlertCircle className="h-4.5 w-4.5 text-rose-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-rose-300 block text-[11px] uppercase tracking-wider mb-0.5">
                        Khó khăn của chủ tiệm
                      </span>
                      <p className="text-slate-350 leading-relaxed text-[12px] sm:text-xs">
                        {ind.painPoint}
                      </p>
                    </div>
                  </div>

                  {/* Bot capability */}
                  <div className="flex space-x-2.5 items-start bg-primary/5 border border-primary/10 p-3 rounded-xl">
                    <Bot className="h-4.5 w-4.5 text-primary-hover mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-primary-hover block text-[11px] uppercase tracking-wider mb-0.5">
                        Vai trò của AI Chatbot
                      </span>
                      <p className="text-slate-350 leading-relaxed text-[12px] sm:text-xs">
                        {ind.botCapability}
                      </p>
                    </div>
                  </div>

                  {/* Lead captured info */}
                  <div className="flex space-x-2.5 items-start bg-emerald-500/5 border border-emerald-950/20 p-3 rounded-xl">
                    <CheckSquare className="h-4.5 w-4.5 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-emerald-400 block text-[11px] uppercase tracking-wider mb-0.5">
                        Thông tin thu thập (Lead)
                      </span>
                      <p className="text-slate-350 leading-relaxed text-[12px] sm:text-xs">
                        {ind.leadCaptured}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <button
                  onClick={() => handleTriggerDemo(ind.id)}
                  className="w-full py-3 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-secondary text-slate-200 hover:text-white text-xs font-semibold shadow-inner transition-all flex items-center justify-center space-x-2 cursor-pointer group"
                >
                  <MessageSquare className="h-4 w-4 text-secondary group-hover:animate-bounce" />
                  <span>Chạy thử demo chatbot</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
