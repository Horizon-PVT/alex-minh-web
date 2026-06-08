"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";
import { industries } from "@/lib/industries";
import { services } from "@/lib/services";
import { trackEvent } from "@/lib/analytics";

interface FormData {
  name: string;
  phone: string;
  industry: string;
  serviceInterest: string;
  budget: string;
  message: string;
  packageSlug: string;
  selectedPackage: string;
  source: string;
  email_confirm: string; // Honeypot
}

interface FormErrors {
  name?: string;
  phone?: string;
  industry?: string;
}

const packageIntentMap: Record<string, string> = {
  "web-uy-tin": "Web Uy Tín",
  "web-chatbot-ai": "Web + Chatbot AI",
  "ai-sales-system": "AI Sales System",
  "growth-partner": "Vận hành Growth Partner",
  "operating-optimizing": "Vận hành Growth Partner"
};

const packageOptions = [
  { slug: "web-uy-tin", label: packageIntentMap["web-uy-tin"] },
  { slug: "web-chatbot-ai", label: packageIntentMap["web-chatbot-ai"] },
  { slug: "ai-sales-system", label: packageIntentMap["ai-sales-system"] }
];

const leadSourceMap: Record<string, string> = {
  profile: "profile",
  catalog: "catalog",
  "sales-docs": "sales-docs"
};

export default function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    industry: "",
    serviceInterest: "",
    budget: "",
    message: "",
    packageSlug: "",
    selectedPackage: "",
    source: "lead-form",
    email_confirm: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const budgetOptions = [
    { label: "Dưới 5 triệu", value: "under-5m" },
    { label: "Từ 5 – 10 triệu", value: "5m-10m" },
    { label: "Từ 10 – 20 triệu", value: "10m-20m" },
    { label: "Trên 20 triệu", value: "above-20m" }
  ];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const packageSlug = params.get("package")?.trim() || "";
    const selectedPackage = packageIntentMap[packageSlug];
    const sourceParam = params.get("source")?.trim() || "";
    const source = leadSourceMap[sourceParam] || "lead-form";

    if (!selectedPackage && source === "lead-form") return;

    const normalizedSlug = packageSlug === "operating-optimizing" ? "growth-partner" : packageSlug;
    const prefillTimer = window.setTimeout(() => {
      setFormData((prev) => ({
        ...prev,
        source,
        ...(selectedPackage
          ? {
              serviceInterest: normalizedSlug,
              packageSlug: normalizedSlug,
              selectedPackage
            }
          : {})
      }));
    }, 0);

    return () => window.clearTimeout(prefillTimer);
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Vui lòng nhập họ và tên";
    }

    const phoneTrimmed = formData.phone.trim().replace(/[\s\.\-\(\)]/g, "");
    if (!phoneTrimmed) {
      newErrors.phone = "Vui lòng nhập số điện thoại / Zalo";
    } else {
      const phoneRegex = /^(0|84|\+84)(3|5|7|8|9)\d{8}$/;
      if (!phoneRegex.test(phoneTrimmed)) {
        newErrors.phone = "Số điện thoại không đúng định dạng (ví dụ: 0912345678)";
      }
    }

    if (!formData.industry) {
      newErrors.industry = "Vui lòng chọn lĩnh vực kinh doanh";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "serviceInterest"
        ? {
            packageSlug: packageIntentMap[value] ? value : "",
            selectedPackage: packageIntentMap[value] || ""
          }
        : {})
    }));
    // Clear error when editing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.name,
          phone: formData.phone,
          industry: formData.industry,
          serviceInterest: formData.serviceInterest,
          budget: formData.budget,
          message: formData.message,
          package: formData.packageSlug,
          selectedPackage: formData.selectedPackage,
          source: formData.source,
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
          email_confirm: formData.email_confirm,
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setSubmitStatus("success");
        trackEvent("lead_submit_success", {
          industry: formData.industry,
          serviceInterest: formData.serviceInterest,
          budget: formData.budget,
          source: formData.source,
        });
        setFormData({
          name: "",
          phone: "",
          industry: "",
          serviceInterest: "",
          budget: "",
          message: "",
          packageSlug: "",
          selectedPackage: "",
          source: formData.source,
          email_confirm: "",
        });
      } else {
        throw new Error(result?.message || "Gửi yêu cầu thất bại.");
      }
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("Lỗi gửi form:", error);
      }
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0f192b]/95 border border-slate-700 p-6 sm:p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(6,182,212,0.06)] w-full text-left relative overflow-hidden group hover:border-[#00E5FF]/30 transition-all duration-300">
      <div className="absolute -inset-px bg-gradient-to-br from-cyan-500/0 via-cyan-500/4 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-start space-x-3 text-emerald-355 animate-fade-in relative z-10">
          <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-extrabold text-sm text-white">Đã nhận thông tin của anh/chị!</h4>
            <p className="text-xs text-slate-300 leading-relaxed mt-1">
              Alex Minh AI sẽ xem nhanh nhu cầu và liên hệ lại qua số điện thoại/Zalo trong thời gian sớm nhất.
            </p>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-rose-500/10 border border-rose-500/30 rounded-2xl flex items-start space-x-3 text-rose-350 animate-fade-in relative z-10">
          <AlertCircle className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-extrabold text-sm text-white">Chưa gửi được thông tin!</h4>
            <p className="text-xs text-slate-300 leading-relaxed mt-1">
              Anh/chị vui lòng thử lại hoặc nhắn Zalo trực tiếp qua <a href="https://zalo.me/0789284078" target="_blank" rel="noopener noreferrer" className="text-[#00E5FF] underline font-bold">0789.284.078</a>.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/8 px-4 py-3 text-xs text-cyan-100 leading-relaxed">
          Chỉ cần 3 thông tin chính để nhận demo chatbot AI theo ngành: tên, SĐT/Zalo và ngành kinh doanh. Các mục còn lại là tùy chọn để tư vấn sát hơn.
        </div>

        {/* Row 1: Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="name" className="text-slate-200 text-xs font-bold tracking-wide flex items-center justify-between">
              <span>Họ và tên</span>
              <span className="text-rose-400 text-[10px] font-bold">* bắt buộc</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Ví dụ: Nguyễn Văn A"
              className={`bg-[#080d16] border ${
                errors.name ? "border-rose-500/60" : "border-slate-800 focus:border-[#00E5FF]/50"
              } rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-400 outline-none transition-colors shadow-inner`}
            />
            {errors.name && <span className="text-[10px] text-rose-400 font-medium pl-1">{errors.name}</span>}
          </div>

          <div className="flex flex-col space-y-1.5">
            <label htmlFor="phone" className="text-slate-200 text-xs font-bold tracking-wide flex items-center justify-between">
              <span>Số điện thoại / Zalo</span>
              <span className="text-rose-400 text-[10px] font-bold">* bắt buộc</span>
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Ví dụ: 0912345678"
              className={`bg-[#080d16] border ${
                errors.phone ? "border-rose-500/60" : "border-slate-800 focus:border-[#00E5FF]/50"
              } rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-400 outline-none transition-colors shadow-inner`}
            />
            {errors.phone && <span className="text-[10px] text-rose-400 font-medium pl-1">{errors.phone}</span>}
          </div>
        </div>

        {/* Row 2: Industry & Service Interest */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="industry" className="text-slate-200 text-xs font-bold tracking-wide flex items-center justify-between">
              <span>Lĩnh vực kinh doanh</span>
              <span className="text-rose-400 text-[10px] font-bold">*</span>
            </label>
            <select
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
              className={`bg-[#080d16] border ${
                errors.industry ? "border-rose-500/60" : "border-slate-800 focus:border-[#00E5FF]/50"
              } rounded-xl px-3.5 py-3 text-sm text-slate-100 outline-none transition-colors shadow-inner cursor-pointer`}
            >
              <option value="" disabled className="text-slate-500 bg-slate-950">Chọn ngành nghề...</option>
              {industries.map((ind) => (
                <option key={ind.id} value={ind.id} className="bg-slate-950 text-slate-200 font-medium">
                  {ind.name}
                </option>
              ))}
              <option value="other" className="bg-slate-950 text-slate-200 font-medium">Ngành nghề khác</option>
            </select>
            {errors.industry && <span className="text-[10px] text-rose-400 font-medium pl-1">{errors.industry}</span>}
          </div>

          <div className="flex flex-col space-y-1.5">
            <label htmlFor="serviceInterest" className="text-slate-200 text-xs font-bold tracking-wide flex items-center justify-between">
              <span>Giải pháp quan tâm</span>
              <span className="text-slate-500 text-[10px] font-bold">tùy chọn</span>
            </label>
            <select
              id="serviceInterest"
              name="serviceInterest"
              value={formData.serviceInterest}
              onChange={handleInputChange}
              className="bg-[#080d16] border border-slate-800 focus:border-[#00E5FF]/50 rounded-xl px-3.5 py-3 text-sm text-slate-100 outline-none transition-colors shadow-inner cursor-pointer"
            >
              <option value="" disabled className="text-slate-500 bg-slate-950">Chọn giải pháp...</option>
              {services.map((svc) => (
                <option key={svc.id} value={svc.id} className="bg-slate-950 text-slate-200 font-medium">
                  {svc.title}
                </option>
              ))}
              <optgroup label="Gói dịch vụ theo link đã chọn" className="bg-slate-950 text-slate-400">
                {packageOptions.map((pkg) => (
                  <option key={pkg.slug} value={pkg.slug} className="bg-slate-950 text-slate-200 font-medium">
                    {pkg.label}
                  </option>
                ))}
              </optgroup>
              <option value="all-in-one" className="bg-slate-950 text-slate-200 font-medium">Tất cả giải pháp (Hệ thống AI)</option>
            </select>
          </div>
        </div>

        {/* Row 3: Budget */}
        <div className="flex flex-col space-y-1.5">
          <label htmlFor="budget" className="text-slate-200 text-xs font-bold tracking-wide flex items-center justify-between">
            <span>Mức ngân sách dự kiến</span>
            <span className="text-slate-500 text-[10px] font-bold">tùy chọn</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            className="bg-[#080d16] border border-slate-800 focus:border-[#00E5FF]/50 rounded-xl px-3.5 py-3 text-sm text-slate-100 outline-none transition-colors shadow-inner cursor-pointer"
          >
            <option value="" disabled className="text-slate-500 bg-slate-950">Chọn khoảng ngân sách...</option>
            {budgetOptions.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-slate-950 text-slate-200 font-medium">
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Row 4: Message */}
        <div className="flex flex-col space-y-1.5">
          <label htmlFor="message" className="text-slate-200 text-xs font-bold tracking-wide">
            Mô tả thêm nhu cầu (Nếu có)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Ví dụ: Tôi muốn tích hợp chatbot hỏi đáp tự động cho khách sạn 30 phòng ở Sầm Sơn..."
            className="bg-[#080d16] border border-slate-800 focus:border-[#00E5FF]/50 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-400 outline-none resize-none h-[110px] transition-colors shadow-inner"
          />
        </div>

        {/* Honeypot field (hidden from users) */}
        <input
          type="text"
          name="email_confirm"
          value={formData.email_confirm}
          onChange={handleInputChange}
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Submit button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center space-x-2.5 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-black text-xs uppercase tracking-widest shadow-[0_10px_25px_rgba(6,182,212,0.3)] hover:shadow-[0_15px_30px_rgba(6,182,212,0.4)] hover:brightness-110 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 cursor-pointer active:scale-[0.97]"
          >
            {isSubmitting ? (
              <span>Đang gửi thông tin...</span>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Nhận demo chatbot AI theo ngành</span>
              </>
            )}
          </button>
          
          <p className="text-center text-[10px] text-slate-500 mt-3 leading-relaxed font-semibold">
            Thông tin sẽ được gửi về hệ thống của Alex Minh AI để liên hệ lại nhanh nhất.
          </p>
        </div>
      </form>
    </div>
  );
}
