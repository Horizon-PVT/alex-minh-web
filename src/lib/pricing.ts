export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: "web-uy-tin",
    name: "Web Uy Tín",
    price: "Từ 3 – 7 triệu",
    description: "Giải pháp xây dựng website giới thiệu thương hiệu số cơ bản, chuẩn chỉnh và tạo sự uy tín.",
    features: [
      "Website giới thiệu 1–5 trang chuẩn di động",
      "Tối ưu tốc độ tải trang cực nhanh dưới 2 giây",
      "Tích hợp các nút Gọi ngay, Zalo trực quan"
    ],
    ctaText: "Đăng ký tư vấn gói Web"
  },
  {
    id: "web-chatbot-ai",
    name: "Web + Chatbot AI",
    price: "Từ 8 – 18 triệu",
    description: "Gói chủ lực - Tự động tư vấn báo giá 24/7 và thu thập thông tin số điện thoại khách hàng.",
    features: [
      "Chatbot AI trả lời tự động theo dữ liệu riêng",
      "Đồng bộ tự động lưu thông tin khách về Google Sheet",
      "Bắn tin nhắn báo lead mới tức thời qua Telegram"
    ],
    isPopular: true,
    ctaText: "Nhận demo Chatbot AI"
  },
  {
    id: "ai-sales-system",
    name: "AI Sales System",
    price: "Từ 20 – 50 triệu",
    description: "Hệ thống bán hàng và tự động hóa toàn diện giúp tối ưu đội ngũ tư vấn và quản trị tập trung.",
    features: [
      "Hệ thống đa landing page chạy nhiều chiến dịch",
      "CRM mini lưu trữ và quản lý trạng thái khách hàng",
      "Dashboard báo cáo thống kê trực quan nguồn lead"
    ],
    ctaText: "Liên hệ thiết kế hệ thống"
  },
  {
    id: "operating-optimizing",
    name: "Vận hành & Tối ưu",
    price: "Từ 500k – 5 triệu/tháng",
    description: "Chăm sóc website, tối ưu kịch bản chatbot AI thông minh hơn và sản xuất bài viết bán hàng hàng tháng.",
    features: [
      "Cập nhật thông tin và tối ưu kịch bản chatbot AI",
      "Sản xuất nội dung, bài viết bán hàng hàng tháng",
      "Bảo trì kỹ thuật hệ thống và hỗ trợ sự cố 24/7"
    ],
    ctaText: "Đăng ký gói vận hành"
  }
];
