import React from "react";
import Link from "next/link";
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "Blog Chia Sẻ - Kiến Thức Website & AI Chatbot",
  description: "Trang tin tức, cẩm nang và hướng dẫn ứng dụng AI Chatbot, thiết kế website bán hàng hiệu quả dành cho chủ doanh nghiệp tại Thanh Hóa."
};

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export default function BlogPage() {
  const posts: BlogPost[] = [
    {
      id: "ai-where-to-start",
      title: "Doanh nghiệp Thanh Hóa nên bắt đầu ứng dụng AI từ đâu?",
      excerpt: "Hướng dẫn thực tế, dễ hiểu cho các chủ doanh nghiệp vừa và nhỏ địa phương tiếp cận trí tuệ nhân tạo để tối ưu hóa chi phí và tăng hiệu suất bán hàng online.",
      category: "Cẩm nang AI",
      date: "26 Tháng 5, 2026",
      readTime: "5 phút đọc"
    },
    {
      id: "chatbot-ai-spa-dental",
      title: "Chatbot AI mang lại lợi ích gì cho chủ tiệm Spa & Nha khoa?",
      excerpt: "Phân tích cách trợ lý chatbot tự động chăm sóc, tư vấn bảng giá dịch vụ và lưu giữ lịch hẹn đặt lịch của khách hàng, kể cả ngoài giờ làm việc.",
      category: "Giải pháp ngành",
      date: "24 Tháng 5, 2026",
      readTime: "4 phút đọc"
    },
    {
      id: "website-hotel-sam-son",
      title: "Làm website khách sạn Sầm Sơn cần chuẩn bị những gì?",
      excerpt: "Kinh nghiệm thiết kế website và tích hợp chatbot trả lời tự động giá phòng cho mùa du lịch cao điểm tại bãi biển Sầm Sơn, Thanh Hóa.",
      category: "Thiết kế Web",
      date: "20 Tháng 5, 2026",
      readTime: "6 phút đọc"
    },
    {
      id: "chatbot-ai-realestate-thanh-hoa",
      title: "Chatbot AI cho môi giới bất động sản tại Thanh Hóa",
      excerpt: "Cách ứng dụng chatbot AI để tự động gửi sơ đồ mặt bằng dự án, chính sách chiết khấu và lọc tệp khách hàng tiềm năng có tài chính thực sự.",
      category: "Giải pháp ngành",
      date: "15 Tháng 5, 2026",
      readTime: "5 phút đọc"
    },
    {
      id: "web-chatbot-vs-normal-web",
      title: "Website tích hợp Chatbot AI khác biệt gì so với website thường?",
      excerpt: "So sánh chi tiết về tính tương tác và khả năng tạo ra chuyển đổi, thu thập lead tự động giữa hai mô hình website truyền thống và website thế hệ mới.",
      category: "Kiến thức",
      date: "10 Tháng 5, 2026",
      readTime: "4 phút đọc"
    },
    {
      id: "why-save-lead-automatically",
      title: "Vì sao doanh nghiệp nhỏ cần tự động hóa việc lưu trữ lead?",
      excerpt: "Tại sao việc nhập liệu tay hoặc để tin nhắn trôi đang giết chết cơ hội chốt đơn của bạn? Lợi ích khi tự động lưu thông tin khách về Google Sheet.",
      category: "Tự động hóa",
      date: "05 Tháng 5, 2026",
      readTime: "3 phút đọc"
    }
  ];

  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="glow-bg bg-primary/10 w-[40rem] h-[40rem] -top-40 -right-40"></div>
      <div className="glow-bg bg-secondary/5 w-[30rem] h-[30rem] bottom-10 -left-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-200 text-xs font-semibold mb-4">
            <Sparkles className="h-3.5 w-3.5 text-secondary" />
            <span>Tin Tức & Cẩm Nang</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Ứng Dụng Công Nghệ Vào Kinh Doanh
          </h1>
          <p className="text-slate-400 text-sm mt-3">
            Góc chia sẻ kiến thức thực tế về thiết kế web, chatbot thông minh và tự động hóa quy trình bán hàng dành riêng cho cộng đồng doanh nghiệp Thanh Hóa.
          </p>
          <div className="h-1 w-12 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post) => (
            <article
              key={post.id}
              className="glass-card rounded-3xl overflow-hidden border border-slate-800/50 flex flex-col p-6 space-y-4 hover:scale-[1.01]"
            >
              {/* Category & Stats */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                <span className="text-secondary">{post.category}</span>
                <div className="flex items-center space-x-2.5">
                  <span className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-slate-100 font-bold text-base sm:text-lg leading-snug hover:text-secondary transition-colors">
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </h2>

              {/* Excerpt */}
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed flex-grow">
                {post.excerpt}
              </p>

              {/* Read more link */}
              <div className="pt-3 border-t border-slate-850/60 flex">
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center space-x-1.5 text-secondary hover:text-white text-xs font-bold transition-all group"
                >
                  <span>Đọc bài viết chi tiết</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Blog newsletter mock */}
        <div className="max-w-xl mx-auto mt-20 text-center bg-[#131926]/30 border border-slate-800 p-6 sm:p-8 rounded-3xl">
          <BookOpen className="h-8 w-8 text-secondary mx-auto mb-3" />
          <h3 className="text-white font-bold text-sm sm:text-base mb-2">Đăng ký nhận bài viết mới nhất</h3>
          <p className="text-slate-400 text-xs mb-4">
            Alex Minh AI định kỳ gửi các cẩm nang hướng dẫn sử dụng AI và Web bán hàng thiết thực. Không spam.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Nhập email của bạn..."
              className="flex-1 bg-slate-900 border border-slate-850 rounded-xl px-4 py-2 text-xs sm:text-sm text-slate-100 placeholder-slate-650 outline-none focus:border-secondary/50"
            />
            <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-xs transition-all cursor-pointer">
              Đăng ký
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
