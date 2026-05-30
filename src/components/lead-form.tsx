"use client";

import React, { useState } from "react";
import { CheckCircle, AlertTriangle, Send } from "lucide-react";
import { industries } from "@/lib/industries";
import { services } from "@/lib/services";

interface FormData {
  name: string;
  phone: string;
  industry: string;
  serviceInterest: string;
  budget: string;
  message: string;
  email_confirm: string; // Honeypot
}

interface FormErrors {
  name?: string;
  phone?: string;
  industry?: string;
  serviceInterest?: string;
  budget?: string;
}

export default function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    industry: "",
    serviceInterest: "",
    budget: "",
    message: "",
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

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Vui lòng nhập họ và tên";
    }

    const phoneTrimmed = formData.phone.trim().replace(/\s/g, "");
    if (!phoneTrimmed) {
      newErrors.phone = "Vui lòng nhập số điện thoại / Zalo";
    } else {
      const phoneRegex = /^(03|05|07|08|09)\d{8}$/;
      if (!phoneRegex.test(phoneTrimmed)) {
        newErrors.phone = "Số điện thoại không đúng định dạng (ví dụ: 0912345678)";
      }
    }

    if (!formData.industry) {
      newErrors.industry = "Vui lòng chọn lĩnh vực kinh doanh";
    }

    if (!formData.serviceInterest) {
      newErrors.serviceInterest = "Vui lòng chọn giải pháp quan tâm";
    }

    if (!formData.budget) {
      newErrors.budget = "Vui lòng chọn mức ngân sách dự kiến";
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
      [name]: value
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
          source: "lead-form",
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
          email_confirm: formData.email_confirm,
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          industry: "",
          serviceInterest: "",
          budget: "",
          message: "",
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
    <div className="bg-[#131926]/40 backdrop-blur-md border border-slate-800 p-6 md:p-8 rounded-3xl shadow-xl max-w-xl mx-auto">
      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-start space-x-3 text-emerald-300">
          <CheckCircle className="h-6 w-6 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-sm">Gửi thông tin thành công!</h4>
            <p className="text-xs text-emerald-400/90 leading-relaxed mt-1">
              Cảm ơn anh/chị. Đội ngũ Alex Minh AI đã nhận được thông tin đăng ký tư vấn. Alex Minh AI sẽ phân tích mô hình kinh doanh của anh/chị và liên hệ lại qua số điện thoại/Zalo trong vòng 24 giờ.
            </p>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-rose-500/10 border border-rose-500/30 rounded-2xl flex items-start space-x-3 text-rose-300">
          <AlertTriangle className="h-6 w-6 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-sm">Gửi yêu cầu thất bại!</h4>
            <p className="text-xs text-rose-400/90 leading-relaxed mt-1">
              Đã có lỗi xảy ra trong quá trình gửi thông tin. Vui lòng liên hệ trực tiếp số Hotline hoặc nhắn Zalo để được hỗ trợ nhanh nhất.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Row 1: Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1">
            <label htmlFor="name" className="text-slate-300 text-xs font-medium">
              Họ và tên <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Ví dụ: Nguyễn Văn A"
              className={`bg-slate-900/80 border ${
                errors.name ? "border-rose-500" : "border-slate-800"
              } focus:border-secondary/50 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 outline-none transition-colors`}
            />
            {errors.name && <span className="text-[10px] text-rose-500 font-medium">{errors.name}</span>}
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="phone" className="text-slate-300 text-xs font-medium">
              Số điện thoại / Zalo <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Ví dụ: 0912345678"
              className={`bg-slate-900/80 border ${
                errors.phone ? "border-rose-500" : "border-slate-800"
              } focus:border-secondary/50 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 outline-none transition-colors`}
            />
            {errors.phone && <span className="text-[10px] text-rose-500 font-medium">{errors.phone}</span>}
          </div>
        </div>

        {/* Row 2: Industry & Service Interest */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1">
            <label htmlFor="industry" className="text-slate-300 text-xs font-medium">
              Lĩnh vực kinh doanh <span className="text-rose-500">*</span>
            </label>
            <select
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
              className={`bg-slate-900/80 border ${
                errors.industry ? "border-rose-500" : "border-slate-800"
              } focus:border-secondary/50 rounded-xl px-3 py-2.5 text-sm text-slate-100 outline-none transition-colors`}
            >
              <option value="" disabled className="text-slate-600 bg-slate-950">Chọn ngành nghề...</option>
              {industries.map((ind) => (
                <option key={ind.id} value={ind.id} className="bg-slate-950 text-slate-200">
                  {ind.name}
                </option>
              ))}
              <option value="other" className="bg-slate-950 text-slate-200">Ngành nghề khác</option>
            </select>
            {errors.industry && <span className="text-[10px] text-rose-500 font-medium">{errors.industry}</span>}
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="serviceInterest" className="text-slate-300 text-xs font-medium">
              Giải pháp quan tâm <span className="text-rose-500">*</span>
            </label>
            <select
              id="serviceInterest"
              name="serviceInterest"
              value={formData.serviceInterest}
              onChange={handleInputChange}
              className={`bg-slate-900/80 border ${
                errors.serviceInterest ? "border-rose-500" : "border-slate-800"
              } focus:border-secondary/50 rounded-xl px-3 py-2.5 text-sm text-slate-100 outline-none transition-colors`}
            >
              <option value="" disabled className="text-slate-600 bg-slate-950">Chọn giải pháp...</option>
              {services.map((svc) => (
                <option key={svc.id} value={svc.id} className="bg-slate-950 text-slate-200">
                  {svc.title}
                </option>
              ))}
              <option value="all-in-one" className="bg-slate-950 text-slate-200">Tất cả giải pháp (Hệ thống AI)</option>
            </select>
            {errors.serviceInterest && (
              <span className="text-[10px] text-rose-500 font-medium">{errors.serviceInterest}</span>
            )}
          </div>
        </div>

        {/* Row 3: Budget */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="budget" className="text-slate-300 text-xs font-medium">
            Mức ngân sách dự kiến <span className="text-rose-500">*</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            className={`bg-slate-900/80 border ${
              errors.budget ? "border-rose-500" : "border-slate-800"
            } focus:border-secondary/50 rounded-xl px-3 py-2.5 text-sm text-slate-100 outline-none transition-colors`}
          >
            <option value="" disabled className="text-slate-600 bg-slate-950">Chọn khoảng ngân sách...</option>
            {budgetOptions.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-slate-950 text-slate-200">
                {opt.label}
              </option>
            ))}
          </select>
          {errors.budget && <span className="text-[10px] text-rose-500 font-medium">{errors.budget}</span>}
        </div>

        {/* Row 4: Message */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="message" className="text-slate-300 text-xs font-medium">
            Mô tả thêm nhu cầu (Nếu có)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Ví dụ: Tôi muốn tích hợp chatbot hỏi đáp tự động cho khách sạn 30 phòng ở Sầm Sơn..."
            className="bg-slate-900/80 border border-slate-800 focus:border-secondary/50 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 outline-none resize-none transition-colors"
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
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover text-white font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0 cursor-pointer"
        >
          {isSubmitting ? (
            <span>Đang gửi thông tin...</span>
          ) : (
            <>
              <Send className="h-4 w-4" />
              <span>Gửi Đăng Ký Tư Vấn</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
