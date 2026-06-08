import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Sparkles, MessageSquare, Phone } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static routes for all 5 blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic SEO & OpenGraph metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {};
  }

  const title = `${post.title} | ${siteConfig.name}`;
  const description = post.description;

  return {
    title,
    description,
    keywords: post.keywords,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${siteConfig.domain}/blog/${post.slug}`,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Find related posts (exclude current)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="glow-bg bg-primary/10 w-[40rem] h-[40rem] -top-40 -right-40"></div>
      <div className="glow-bg bg-secondary/5 w-[30rem] h-[30rem] bottom-10 -left-40"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center space-x-2 text-slate-400 hover:text-white text-xs font-semibold mb-8 transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Quay lại trang tin tức</span>
        </Link>

        {/* Article Header */}
        <header className="mb-10 pb-8 border-b border-slate-800/80">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-secondary text-xs font-semibold mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{post.category}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 text-xs text-slate-500 font-semibold uppercase tracking-wider">
            <span className="flex items-center space-x-1.5">
              <Calendar className="h-3.5 w-3.5 text-slate-600" />
              <span>{post.date}</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Clock className="h-3.5 w-3.5 text-slate-600" />
              <span>{post.readingTime}</span>
            </span>
          </div>
        </header>

        {/* Article Body */}
        <article
          className="rich-text mb-16 text-slate-300 leading-relaxed text-sm sm:text-base space-y-6 
            [&>h2]:text-lg sm:[&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:border-l-2 [&>h2]:border-secondary [&>h2]:pl-3
            [&>h3]:text-base sm:[&>h3]:text-lg [&>h3]:font-bold [&>h3]:text-slate-100 [&>h3]:mt-6 [&>h3]:mb-3
            [&>p]:text-slate-400 [&>p]:leading-relaxed [&>p]:mb-4
            [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>ul]:mb-6 [&>ul]:text-slate-400
            [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-2 [&>ol]:mb-6 [&>ol]:text-slate-400
            [&>strong]:text-white [&>a]:text-secondary [&>a]:hover:underline [&>a]:font-semibold"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Contextual Internal Links Section */}
        <div className="mb-12 p-6 rounded-3xl bg-[#131926]/40 border border-slate-800">
          <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center space-x-2">
            <Sparkles className="h-4 w-4 text-secondary" />
            <span>Liên kết hữu ích cho doanh nghiệp Thanh Hóa:</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
            <Link
              href="/dich-vu"
              className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-secondary/40 text-slate-300 hover:text-white transition-all flex items-center justify-between"
            >
              <span>🌐 Chi tiết dịch vụ Web & Chatbot AI</span>
              <span className="text-secondary">&rarr;</span>
            </Link>
            <Link
              href="/demo-chatbot-ai"
              className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-secondary/40 text-slate-300 hover:text-white transition-all flex items-center justify-between"
            >
              <span>🤖 Trải nghiệm Chatbot AI mẫu theo ngành</span>
              <span className="text-secondary">&rarr;</span>
            </Link>
            <Link
              href="/bang-gia"
              className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-secondary/40 text-slate-300 hover:text-white transition-all flex items-center justify-between"
            >
              <span>💰 Bảng giá các gói giải pháp linh hoạt</span>
              <span className="text-secondary">&rarr;</span>
            </Link>
            <Link
              href="/lien-he?source=blog-demo"
              className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-secondary/40 text-slate-300 hover:text-white transition-all flex items-center justify-between"
            >
              <span>📞 Nhận demo chatbot AI theo ngành</span>
              <span className="text-secondary">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Final Conversion CTA Block */}
        <section className="mb-16 p-8 rounded-3xl bg-gradient-to-br from-[#0e1626] to-[#070b13] border border-slate-800 text-center relative overflow-hidden">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-40"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-white font-bold text-lg sm:text-xl tracking-tight mb-3">
              Muốn xem demo Web + Chatbot AI cho ngành của anh/chị?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
              Hãy liên hệ với Alex Minh AI. Chúng tôi sẽ phân tích mô hình kinh doanh thực tế tại địa phương Thanh Hóa và xây dựng bản Demo Chatbot chạy thử riêng hoàn toàn miễn phí cho anh/chị.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/lien-he?source=blog-demo"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold hover:from-primary-hover hover:to-secondary-hover shadow-md shadow-primary/20 transition-all flex items-center justify-center space-x-1.5"
              >
                <Phone className="h-4 w-4" />
                <span>Nhận demo chatbot AI theo ngành</span>
              </Link>
              <Link
                href="/demo-chatbot-ai"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white text-xs font-bold transition-all flex items-center justify-center space-x-1.5"
              >
                <MessageSquare className="h-4 w-4 text-secondary" />
                <span>Thử Chatbot Demo</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <footer className="border-t border-slate-800/80 pt-12">
          <h3 className="text-white font-bold text-base mb-6">Bài viết liên quan:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blog/${rp.slug}`}
                className="block p-5 rounded-2xl bg-[#131926]/20 border border-slate-800/60 hover:border-slate-700 transition-all"
              >
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest block mb-2">
                  {rp.category}
                </span>
                <h4 className="text-slate-100 font-bold text-xs sm:text-sm leading-snug mb-2 hover:text-secondary transition-colors line-clamp-2">
                  {rp.title}
                </h4>
                <p className="text-slate-400 text-[11px] leading-relaxed line-clamp-2">
                  {rp.description}
                </p>
              </Link>
            ))}
          </div>
        </footer>

      </div>
    </div>
  );
}
