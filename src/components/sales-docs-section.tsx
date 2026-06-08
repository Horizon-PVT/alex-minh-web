"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Eye, FileText, MessageSquare, ShieldCheck } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const salesDocuments = [
  {
    type: "profile",
    title: "Hồ sơ năng lực Alex Minh AI",
    label: "Company Profile",
    description:
      "Tài liệu giới thiệu năng lực triển khai Website AI, Chatbot AI theo dữ liệu doanh nghiệp và hệ thống nhận lead cho doanh nghiệp địa phương.",
    preview: "/sales-docs/previews/ho-so-nang-luc-cover.jpg",
    pdf: "/sales-docs/ho-so-nang-luc-alex-minh-ai.pdf",
    consultHref: "/lien-he?source=profile",
    downloadName: "Ho_so_nang_luc_Alex_Minh_AI.pdf",
    tags: ["Corporate tech", "Hồ sơ năng lực"],
  },
  {
    type: "catalog",
    title: "Catalog dịch vụ Alex Minh AI",
    label: "Service Catalog",
    description:
      "Bảng dịch vụ giúp doanh nghiệp chọn đúng gói Web Uy Tín, Web + Chatbot AI hoặc AI Sales System theo nhu cầu hiện tại.",
    preview: "/sales-docs/previews/catalog-dich-vu-cover.jpg",
    pdf: "/sales-docs/catalog-dich-vu-alex-minh-ai.pdf",
    consultHref: "/lien-he?source=catalog",
    downloadName: "Catalog_dich_vu_Alex_Minh_AI.pdf",
    tags: ["Chọn gói dịch vụ", "PDF gửi khách"],
  },
];

type SalesDocsSectionProps = {
  pageMode?: boolean;
};

export default function SalesDocsSection({ pageMode = false }: SalesDocsSectionProps) {
  const pageLocation = pageMode ? "tai_lieu" : "homepage";

  const trackSalesDocumentClick = (
    eventName: "sales_doc_view_pdf" | "sales_doc_download_pdf" | "sales_doc_consult_click",
    doc: (typeof salesDocuments)[number]
  ) => {
    trackEvent(eventName, {
      document_type: doc.type,
      page_location: pageLocation,
      document_url: doc.pdf,
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <section
      id="tai-lieu"
      className={`relative overflow-hidden border-t border-slate-800/60 bg-[#050914] ${
        pageMode ? "pt-40 pb-20 sm:pt-44 md:pt-48 md:pb-28" : "py-20 md:py-28"
      }`}
    >
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/8 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-600/8 blur-[120px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-cyan-200">
            <FileText className="h-3.5 w-3.5" />
            <span>Tài liệu bán hàng B2B</span>
          </div>
          <h2 className="mx-auto max-w-[17.5rem] break-words text-[1.55rem] font-black leading-tight tracking-tight text-white sm:max-w-4xl sm:text-4xl md:text-5xl">
            {pageMode ? (
              <>
                Tài liệu năng lực
                <span className="hidden sm:inline"> & </span>
                <br className="sm:hidden" />
                catalog dịch vụ
              </>
            ) : (
              <>
                Bộ tài liệu giới thiệu
                <br className="sm:hidden" />
                năng lực & dịch vụ
              </>
            )}
          </h2>
          <p className="mx-auto mt-4 max-w-[17.5rem] text-sm leading-relaxed text-slate-300 sm:max-w-2xl md:text-base">
            Xem nhanh hồ sơ năng lực và catalog dịch vụ của Alex Minh AI trước khi trao đổi giải pháp phù hợp cho doanh nghiệp.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["Chuẩn corporate tech", "Dùng cho tư vấn B2B", "PDF có thể in/gửi khách"].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3.5 py-1.5 text-[11px] font-bold text-slate-200"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="grid min-w-0 gap-7 lg:grid-cols-2">
          {salesDocuments.map((doc) => (
            <article
              key={doc.title}
              className="group mx-auto w-full max-w-[17.5rem] min-w-0 overflow-hidden rounded-[2rem] border border-slate-700/70 bg-gradient-to-b from-slate-900/95 to-slate-950/95 p-4 shadow-2xl shadow-black/25 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-cyan-950/30 sm:max-w-[22rem] lg:max-w-none"
            >
              <div className="grid min-w-0 gap-6 xl:grid-cols-[0.92fr_1.08fr] xl:items-stretch">
                <div className="min-w-0 rounded-[1.5rem] border border-cyan-300/15 bg-[#020817] p-3 shadow-inner shadow-cyan-950/20">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.15rem] bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.16),transparent_55%),#020817]">
                    <Image
                      src={doc.preview}
                      alt={`${doc.title} - ảnh bìa tài liệu`}
                      fill
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.015]"
                      sizes="(max-width: 1024px) 100vw, 38vw"
                    />
                  </div>
                </div>

                <div className="flex min-h-full min-w-0 flex-col justify-between px-1 pb-2 pt-1 sm:px-2 xl:py-4">
                  <div>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-blue-200">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>{doc.label}</span>
                    </div>

                    <h3 className="break-words text-2xl font-black tracking-tight text-white sm:text-3xl">
                      {doc.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-300">
                      {doc.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {doc.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-[11px] font-bold text-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-3">
                    <a
                      href={doc.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackSalesDocumentClick("sales_doc_view_pdf", doc)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-3.5 text-xs font-black uppercase tracking-wider text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:brightness-110"
                    >
                      <Eye className="h-4 w-4" />
                      Xem PDF
                    </a>
                    <a
                      href={doc.pdf}
                      download={doc.downloadName}
                      onClick={() => trackSalesDocumentClick("sales_doc_download_pdf", doc)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 bg-slate-900 px-5 py-3.5 text-xs font-black uppercase tracking-wider text-white transition-all hover:border-slate-400 hover:bg-slate-800"
                    >
                      <Download className="h-4 w-4" />
                      Tải PDF
                    </a>
                    <Link
                      href={doc.consultHref}
                      onClick={() => trackSalesDocumentClick("sales_doc_consult_click", doc)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-300/40 bg-cyan-400/10 px-5 py-3.5 text-xs font-black uppercase tracking-wider text-cyan-100 transition-all hover:border-cyan-200/70 hover:bg-cyan-400/15"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Nhận tư vấn
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 w-full max-w-[17.5rem] rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-slate-950 p-6 sm:max-w-none sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-black text-white">
                Muốn nhận tư vấn theo ngành và ngân sách hiện tại?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Gửi thông tin để Alex Minh AI đề xuất gói triển khai phù hợp, từ website nền tảng đến Web + Chatbot AI và AI Sales System.
              </p>
            </div>
            <Link
              href="/lien-he?source=sales-docs"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-black uppercase tracking-wider text-slate-950 transition-all hover:bg-cyan-100"
            >
              <MessageSquare className="h-4 w-4" />
              Nhận tư vấn
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
