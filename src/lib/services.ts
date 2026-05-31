export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: string;
  details: string[];
}

export const services: ServiceItem[] = [
  {
    id: "website-landing",
    title: "Website & Landing Page",
    shortDesc: "Xây dựng website/landing page chuẩn SEO, tối ưu di động và định hướng chuyển đổi cao.",
    description: "Không chỉ dừng lại ở giao diện đẹp, website của Alex Minh AI đóng vai trò như một nhân viên bán hàng chuyên nghiệp, chủ động thu hút khách hàng và tối ưu tỷ lệ chuyển đổi trực tuyến.",
    icon: "Globe",
    details: [
      "Giao diện đẹp chuẩn di động, tối ưu trải nghiệm người dùng.",
      "Tập trung tối ưu tỷ lệ chuyển đổi và thu thập lead hiệu quả.",
      "Tốc độ tải cực nhanh, chuẩn hóa SEO local Thanh Hóa."
    ]
  },
  {
    id: "chatbot-ai",
    title: "Chatbot AI Thông Minh",
    shortDesc: "Tự động phản hồi khách hàng 24/7 theo dữ liệu và kịch bản riêng của doanh nghiệp.",
    description: "Giải phóng thời gian vận hành bằng trợ lý AI thông minh. Bot tự động tư vấn sản phẩm, báo giá và ghi nhận thông tin khách hàng bất kể ngày đêm trên đa nền tảng.",
    icon: "MessageSquareCode",
    details: [
      "Trực chiến phản hồi & tư vấn khách hàng tự động 24/7.",
      "Báo giá và trả lời linh hoạt theo kịch bản dữ liệu riêng biệt.",
      "Tự động thu thập Họ tên, Số điện thoại và Zalo khách hàng."
    ]
  },
  {
    id: "automation-sales",
    title: "Automation Bán Hàng",
    shortDesc: "Tự động lưu lead, báo cáo nguồn khách và đồng bộ dữ liệu kinh doanh.",
    description: "Kết nối trơn tru website và chatbot với hệ thống quản lý. Quy trình tự động hóa giúp chủ doanh nghiệp kiểm soát mọi cơ hội bán hàng và tối ưu năng suất nhân sự.",
    icon: "Cpu",
    details: [
      "Tự động đẩy và lưu trữ lead tức thì về Google Sheets.",
      "Gửi thông báo báo lead mới ngay lập tức qua Telegram.",
      "Đồng bộ hóa lịch hẹn, cam kết không bỏ sót khách hàng."
    ]
  },
  {
    id: "ai-content",
    title: "Nội Dung Bán Hàng Bằng AI",
    shortDesc: "Sản xuất bài viết, kịch bản video ngắn và nội dung truyền thông tự động bằng AI.",
    description: "Hỗ trợ xây dựng chiến lược nội dung đồng bộ trên các nền tảng mạng xã hội, thu hút khách hàng tiềm năng mà không mất nhiều thời gian và chi phí biên soạn.",
    icon: "PenTool",
    details: [
      "Biên soạn bài viết giới thiệu sản phẩm chuẩn SEO local.",
      "Xây dựng bộ câu hỏi FAQ thông minh để tối ưu Chatbot AI.",
      "Lên kịch bản video ngắn (TikTok, Reels) & bài viết truyền thông."
    ]
  }
];

