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
    description: "Alex Minh AI thiết kế các website không chỉ để 'trưng bày' mà hoạt động như một nhân viên bán hàng chuyên nghiệp, giữ chân khách hàng và dẫn dắt họ tới hành động liên hệ.",
    icon: "Globe",
    details: [
      "Giao diện chuẩn UI/UX, hiển thị mượt mà trên mobile.",
      "Tối ưu tốc độ tải trang cực nhanh, hỗ trợ chuẩn SEO local.",
      "Tích hợp các nút kêu gọi hành động (Zalo, Gọi ngay, Điền form)."
    ]
  },
  {
    id: "chatbot-ai",
    title: "Chatbot AI Thông Minh",
    shortDesc: "Tự động phản hồi khách hàng 24/7 theo dữ liệu và kịch bản riêng của doanh nghiệp.",
    description: "Giải phóng thời gian của bạn và nhân viên bằng Chatbot AI thông minh. Bot tự động tư vấn sản phẩm, báo giá, thu thập thông tin khách hàng bất kể ngày đêm.",
    icon: "MessageSquareCode",
    details: [
      "Trả lời tự động và tức thì 24/7 trên Website, Zalo, Facebook.",
      "Tự động học dữ liệu riêng của cửa hàng/doanh nghiệp.",
      "Thu thập thông tin liên hệ (Họ tên, SĐT/Zalo, Nhu cầu) rõ ràng."
    ]
  },
  {
    id: "automation-sales",
    title: "Automation Bán Hàng",
    shortDesc: "Tự động lưu lead, báo cáo nguồn khách và đồng bộ dữ liệu kinh doanh.",
    description: "Kết nối website, chatbot với hệ thống quản lý dữ liệu. Giúp bạn không bao giờ bỏ sót bất kỳ khách hàng tiềm năng nào và tối ưu quy trình xử lý đơn hàng.",
    icon: "Cpu",
    details: [
      "Tự động đẩy thông tin khách hàng về Google Sheet ngay lập tức.",
      "Gửi thông báo có khách hàng mới qua Telegram của chủ doanh nghiệp.",
      "Hệ thống hóa lịch hẹn, nhắc lịch tư vấn tự động."
    ]
  },
  {
    id: "ai-content",
    title: "Nội Dung Bán Hàng Bằng AI",
    shortDesc: "Sản xuất bài viết, kịch bản video ngắn và nội dung truyền thông tự động bằng AI.",
    description: "Hỗ trợ xây dựng chiến lược nội dung nhất quán để thu hút khách hàng trên các kênh mạng xã hội mà không mất nhiều thời gian biên soạn.",
    icon: "PenTool",
    details: [
      "Viết bài giới thiệu dịch vụ và sản phẩm chuẩn SEO.",
      "Lên kịch bản video ngắn (TikTok, Reels) giới thiệu thương hiệu.",
      "Xây dựng bộ câu hỏi thường gặp (FAQ) tối ưu cho chatbot học."
    ]
  }
];
