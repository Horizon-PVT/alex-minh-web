export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  pricePrefix?: string;
  priceVal: string;
  priceUnit: string;
  priceSub?: string;
  description: string;
  features: string[];
  fitBadge: string;
  isPopular?: boolean;
  featuredNote?: string;
  ctaText: string;
  promoBadge?: string;
  promoNote?: string;
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
    ctaText: "Chọn gói nổi bật này",
    promoBadge: "🎁 Tặng 7 ngày KODA ELITE",
    promoNote: "Trợ lý AI riêng hỗ trợ viết nội dung, chăm khách, nhắc việc và xử lý lead hằng ngày."
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
    ctaText: "Trao đổi giải pháp",
    promoBadge: "🎁 Tặng 30 ngày KODA ELITE",
    promoNote: "Trợ lý AI vận hành nội bộ, cá nhân hóa theo ngành nghề và quy trình bán hàng của doanh nghiệp."
  },
  {
    id: "operating-optimizing",
    name: "Vận hành Growth Partner",
    price: "Từ 500k/tháng",
    pricePrefix: "Từ",
    priceVal: "500k",
    priceUnit: "/tháng",
    priceSub: "Growth/Full Ops: 2–15tr+/tháng theo phạm vi vận hành",
    description: "Đội ngũ đồng hành xây dựng thương hiệu, vận hành website, chatbot, nội dung, media và kênh bán hàng online theo tháng.",
    features: [
      "Bảo trì & quản trị website hàng tháng",
      "Tối ưu chatbot, form và luồng thu lead",
      "Xây dựng định vị thương hiệu & thông điệp bán hàng",
      "Xây kênh truyền thông: Fanpage/Zalo OA/TikTok/Reels",
      "Lên kế hoạch nội dung theo tháng",
      "Thiết kế media/banner/bài đăng/video ngắn theo gói",
      "Theo dõi lead Google Sheet/Telegram",
      "Báo cáo hiệu quả & đề xuất tăng trưởng"
    ],
    fitBadge: "Phù hợp: Doanh nghiệp cần đội vận hành thuê ngoài",
    ctaText: "Tư vấn gói vận hành",
    promoNote: "Phạm vi công việc, số lượng nội dung/media và kênh vận hành được thống nhất theo từng gói."
  }
];

export interface ComparisonFeature {
  name: string;
  web?: boolean | string;
  bot?: boolean | string;
  sys?: boolean | string;
  opt?: boolean | string;
  isHeader?: boolean;
}

export const comparisonFeatures: ComparisonFeature[] = [
  { name: "Tính năng triển khai hệ thống", isHeader: true },
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
  
  { name: "VẬN HÀNH GROWTH PARTNER", isHeader: true },
  { name: "Bảo trì website kỹ thuật", web: "12 tháng", bot: "Trọn đời", sys: "Trọn đời", opt: "Trọn đời" },
  { name: "Xây dựng định vị thương hiệu", web: false, bot: false, sys: false, opt: "Growth / Full Ops" },
  { name: "Thông điệp bán hàng & bộ nội dung chủ đạo", web: false, bot: false, sys: false, opt: "Growth / Full Ops" },
  { name: "Tối ưu nhận diện thương hiệu trên website", web: "Setup ban đầu", bot: "Setup ban đầu", sys: "Setup nâng cao", opt: "Theo scope" },
  { name: "Xây dựng kênh Fanpage/Zalo OA/TikTok", web: false, bot: false, sys: false, opt: "Full Channel Ops" },
  { name: "Lịch nội dung theo tháng", web: false, bot: false, sys: false, opt: "Hàng tháng" },
  { name: "Media kit/banner/bài đăng/video ngắn", web: false, bot: false, sys: false, opt: "Theo scope" },
  { name: "Quản trị website hàng tháng", web: false, bot: false, sys: false, opt: "Starter / Growth" },
  { name: "Cập nhật nội dung website", web: false, bot: false, sys: false, opt: "Starter" },
  { name: "Tối ưu chatbot theo phản hồi khách", web: false, bot: "Setup ban đầu", sys: "Setup nâng cao", opt: "Growth / Full Ops" },
  { name: "Theo dõi form/lead/Google Sheet/Telegram", web: false, bot: "Setup ban đầu", sys: "CRM tích hợp", opt: "Liên tục" },
  { name: "Báo cáo hiệu quả hàng tháng", web: false, bot: false, sys: false, opt: "Hàng tháng" },
  { name: "Đề xuất cải thiện website/chatbot/kênh bán hàng", web: false, bot: false, sys: false, opt: "Full Channel Ops" },
  { name: "Tư vấn automation cho sales/admin", web: false, bot: false, sys: "Tích hợp", opt: "Theo gói" }
];

