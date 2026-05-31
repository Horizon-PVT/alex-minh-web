export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  pricePrefix?: string;
  priceVal: string;
  priceUnit: string;
  description: string;
  features: string[];
  fitBadge: string;
  isPopular?: boolean;
  featuredNote?: string;
  ctaText: string;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: "web-uy-tin",
    name: "Web Uy Tín",
    price: "Từ 3 – 7 triệu",
    pricePrefix: "Từ",
    priceVal: "3 – 7",
    priceUnit: "triệu",
    description: "Website giới thiệu chuyên nghiệp cho doanh nghiệp nhỏ.",
    features: [
      "Website 1–5 trang chuẩn di động",
      "Tích hợp Zalo, Gọi ngay, Form",
      "Tối ưu tốc độ tải & SEO cơ bản"
    ],
    fitBadge: "Phù hợp: Hộ kinh doanh / SME mới bắt đầu",
    ctaText: "Nhận tư vấn gói này"
  },
  {
    id: "web-chatbot-ai",
    name: "Web + Chatbot AI",
    price: "Từ 8 – 18 triệu",
    pricePrefix: "Từ",
    priceVal: "8 – 18",
    priceUnit: "triệu",
    description: "Website đẹp + chatbot AI tư vấn và thu lead tự động.",
    features: [
      "Chatbot trả lời khách 24/7",
      "Lead tự động đổ về Google Sheet",
      "Báo lead mới ngay qua Telegram"
    ],
    fitBadge: "Phù hợp: Doanh nghiệp muốn có lead tự động",
    isPopular: true,
    featuredNote: "Gói bán chạy nhất",
    ctaText: "Chọn gói nổi bật này"
  },
  {
    id: "ai-sales-system",
    name: "AI Sales System",
    price: "Từ 20 – 50 triệu",
    pricePrefix: "Từ",
    priceVal: "20 – 50",
    priceUnit: "triệu",
    description: "Hệ thống bán hàng tự động cho doanh nghiệp muốn scale.",
    features: [
      "CRM mini lưu và phân loại lead",
      "Dashboard theo dõi nguồn khách",
      "Tự động hóa quy trình bán hàng"
    ],
    fitBadge: "Phù hợp: Đội sale / doanh nghiệp tăng trưởng",
    ctaText: "Trao đổi giải pháp"
  },
  {
    id: "operating-optimizing",
    name: "Vận hành & Tối ưu",
    price: "Từ 500k – 5 triệu / tháng",
    pricePrefix: "Từ",
    priceVal: "500k – 5",
    priceUnit: "triệu / tháng",
    description: "Dịch vụ đồng hành sau triển khai để hệ thống chạy tốt hơn mỗi tháng.",
    features: [
      "Tối ưu chatbot & nội dung",
      "Bảo trì website và hỗ trợ kỹ thuật",
      "Theo dõi hiệu quả và cải tiến định kỳ"
    ],
    fitBadge: "Phù hợp: Khách cần vận hành lâu dài",
    ctaText: "Đăng ký đồng hành"
  }
];

export interface ComparisonFeature {
  name: string;
  web: boolean | string;
  bot: boolean | string;
  sys: boolean | string;
  opt: boolean | string;
}

export const comparisonFeatures: ComparisonFeature[] = [
  { name: "Website chuẩn UI/UX", web: true, bot: true, sys: true, opt: true },
  { name: "Responsive mobile", web: true, bot: true, sys: true, opt: true },
  { name: "CTA gọi ngay / Zalo / form", web: true, bot: true, sys: true, opt: true },
  { name: "SEO cơ bản", web: true, bot: true, sys: true, opt: true },
  { name: "Chatbot AI tư vấn tự động", web: false, bot: true, sys: true, opt: true },
  { name: "Thu lead từ khách", web: false, bot: true, sys: true, opt: true },
  { name: "Đồng bộ Google Sheets", web: false, bot: true, sys: true, opt: true },
  { name: "Báo lead qua Telegram", web: false, bot: true, sys: true, opt: true },
  { name: "CRM mini", web: false, bot: false, sys: true, opt: true },
  { name: "Dashboard theo dõi lead", web: false, bot: false, sys: true, opt: true },
  { name: "Tự động hóa quy trình bán hàng", web: false, bot: false, sys: true, opt: true },
  { name: "Tối ưu nội dung bằng AI", web: false, bot: false, sys: false, opt: true },
  { name: "Hỗ trợ kỹ thuật", web: "12 tháng", bot: "Trọn đời", sys: "Trọn đời", opt: "Trọn đời" },
  { name: "Tối ưu hàng tháng", web: false, bot: false, sys: false, opt: "Liên tục" }
];

