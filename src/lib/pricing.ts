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
    description: "Giải pháp cho hộ kinh doanh, doanh nghiệp nhỏ cần có mặt online chuyên nghiệp, tạo uy tín thương hiệu.",
    features: [
      "Website giới thiệu 1 – 5 trang chuyên nghiệp",
      "Giao diện chuẩn di động (Mobile-first)",
      "Tối ưu tốc độ tải trang dưới 2 giây",
      "Tích hợp nút Gọi ngay, Zalo, Chat Facebook",
      "Cài đặt vị trí Google Map doanh nghiệp",
      "Tối ưu SEO Local cơ bản ban đầu",
      "Bàn giao mã nguồn & Hướng dẫn sử dụng"
    ],
    ctaText: "Đăng ký tư vấn gói Web"
  },
  {
    id: "web-chatbot-ai",
    name: "Web + Chatbot AI",
    price: "Từ 8 – 18 triệu",
    description: "Gói dịch vụ chủ lực - Giải pháp tối ưu bán hàng, tự động tư vấn 24/7 và thu thập thông tin khách hàng tiềm năng.",
    features: [
      "Tất cả tính năng của gói Web Uy Tín",
      "Thiết kế Website/Landing Page chuyên ngành sâu",
      "Chatbot AI trả lời tự động theo dữ liệu riêng",
      "Tự động thu thập Lead (Họ tên, SĐT, Nhu cầu)",
      "Đồng bộ lưu trữ Lead tự động về Google Sheet",
      "Gửi thông báo có Lead mới về Telegram/Zalo",
      "Miễn phí 1 tháng tối ưu kịch bản chatbot",
      "Hỗ trợ viết 5 bài nội dung giới thiệu bằng AI"
    ],
    isPopular: true,
    ctaText: "Nhận demo Chatbot AI"
  },
  {
    id: "ai-sales-system",
    name: "AI Sales System",
    price: "Từ 20 – 50 triệu",
    description: "Hệ thống bán hàng và tự động hóa toàn diện cho doanh nghiệp muốn tối ưu đội ngũ sales và quản trị tập trung.",
    features: [
      "Tất cả tính năng của gói Web + Chatbot AI",
      "Hệ thống đa landing page cho nhiều chiến dịch",
      "Chatbot AI nâng cao, tự nhận diện ý định khách",
      "Tích hợp CRM mini quản lý trạng thái khách hàng",
      "Tự động phân loại khách (Hot/Warm/Cold)",
      "Dashboard báo cáo số liệu nguồn lead trực quan",
      "Tích hợp AI Content Generator riêng cho nhân viên",
      "Bảo hành & đồng hành tối ưu 3 tháng đầu"
    ],
    ctaText: "Liên hệ thiết kế hệ thống"
  },
  {
    id: "operating-optimizing",
    name: "Vận hành & Tối ưu",
    price: "Từ 500k – 5 triệu/tháng",
    description: "Đồng hành chăm sóc, huấn luyện AI chatbot thông minh hơn và sản xuất nội dung bán hàng hàng tháng.",
    features: [
      "Cập nhật thông tin mới của doanh nghiệp vào AI",
      "Tối ưu bộ FAQ dựa trên câu hỏi thực tế của khách",
      "Sản xuất 10-30 bài viết/caption bán hàng hàng tháng",
      "Báo cáo chất lượng tư vấn của bot và tỉ lệ chốt lead",
      "Bảo trì hệ thống, sửa lỗi phát sinh 24/7"
    ],
    ctaText: "Đăng ký gói vận hành"
  }
];
