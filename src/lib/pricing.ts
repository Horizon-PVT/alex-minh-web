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
    price: "Từ 4.9 triệu",
    pricePrefix: "Từ",
    priceVal: "4.9",
    priceUnit: "triệu",
    description: "Gói entry để doanh nghiệp có website/landing page gọn gàng, rõ thông tin và dễ liên hệ.",
    features: [
      "Website/landing page cơ bản",
      "Mobile responsive",
      "Nút Zalo/Gọi nhanh",
      "Form liên hệ",
      "Nội dung giới thiệu cơ bản",
      "Không bao gồm chatbot AI"
    ],
    fitBadge: "Entry package: phù hợp khi cần nền tảng online chuyên nghiệp trước",
    ctaText: "Xem gói Web từ 4.9 triệu"
  },
  {
    id: "web-chatbot-ai",
    name: "Web + Chatbot AI",
    price: "Từ 12.9 triệu",
    pricePrefix: "Từ",
    priceVal: "12.9",
    priceUnit: "triệu",
    description: "Gói mũi nhọn tháng 6 cho doanh nghiệp muốn website có chatbot AI tư vấn và nhận lead tự động.",
    features: [
      "Website bán hàng/landing page chuyên nghiệp",
      "Chatbot AI tư vấn theo dữ liệu doanh nghiệp cung cấp",
      "Form thu lead",
      "Google Sheet lưu lead",
      "Telegram/email alert",
      "CTA Zalo/Gọi/Form rõ ràng",
      "Nội dung bán hàng theo ngành",
      "Bàn giao hướng dẫn vận hành"
    ],
    fitBadge: "Phù hợp nhất cho doanh nghiệp muốn website có chatbot AI tư vấn và nhận lead tự động",
    isPopular: true,
    featuredNote: "Gói mũi nhọn tháng 6",
    ctaText: "Nhận demo chatbot AI theo ngành",
    promoBadge: "Ưu đãi tháng 6",
    promoNote: "Tặng demo chatbot AI theo ngành trong 24h nếu phù hợp, tên miền năm đầu và 7 ngày KODA ELITE."
  },
  {
    id: "ai-sales-system",
    name: "AI Sales System",
    price: "Từ 18 triệu hoặc báo giá riêng",
    pricePrefix: "Từ",
    priceVal: "18",
    priceUnit: "triệu+",
    priceSub: "Tích hợp phức tạp báo giá riêng",
    description: "Gói upsell cho doanh nghiệp cần website nhiều trang, dữ liệu tư vấn sâu và quy trình xử lý lead rõ hơn.",
    features: [
      "Website nhiều trang",
      "Chatbot AI theo dữ liệu doanh nghiệp, FAQ, bảng giá, dịch vụ và quy trình sale",
      "Quy trình nhận/chăm lead",
      "Tracking cơ bản",
      "Tư vấn xử lý lead",
      "Tích hợp phức tạp báo giá riêng"
    ],
    fitBadge: "Upsell: phù hợp khi cần hệ thống lead/sale phức tạp hơn",
    ctaText: "Trao đổi phạm vi AI Sales System"
  }
];

export const implementationScope = [
  "Website/landing page",
  "Mobile responsive",
  "Zalo/Gọi/Form",
  "Chatbot AI theo dữ liệu doanh nghiệp cho gói phù hợp",
  "Google Sheet",
  "Telegram/email alert",
  "Bàn giao hướng dẫn vận hành"
];

export const outOfScopeItems = [
  "Chạy quảng cáo Facebook/Google",
  "Cam kết số lead, số đơn hoặc doanh thu",
  "SEO lên top Google",
  "Viết hàng loạt bài blog dài hạn",
  "Chụp ảnh/quay video chuyên nghiệp",
  "Thiết kế logo/bộ nhận diện thương hiệu lớn",
  "App mobile",
  "CRM/phần mềm quản trị nội bộ phức tạp",
  "Chatbot AI không giới hạn hoặc tự trả lời ngoài dữ liệu doanh nghiệp cung cấp",
  "Tích hợp thanh toán, booking, CRM, API riêng nếu chưa báo giá thêm",
  "Chi phí tên miền premium, hosting đặc biệt, công cụ trả phí bên thứ ba nếu có"
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
