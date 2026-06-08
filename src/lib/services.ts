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
    title: "Website / Landing Page",
    shortDesc:
      "Xây dựng website/landing page chuyên nghiệp, chuẩn mobile, có CTA Zalo/Gọi/Form rõ ràng.",
    description:
      "Website là sản phẩm chính của Alex Minh AI: giúp doanh nghiệp có nền tảng online chỉn chu, trình bày dịch vụ rõ ràng và tạo đường dẫn thuận tiện để khách để lại thông tin.",
    icon: "Globe",
    details: [
      "Giao diện chuyên nghiệp, responsive tốt trên mobile.",
      "Nút Zalo, gọi nhanh và form liên hệ đặt ở vị trí dễ thao tác.",
      "Nội dung giới thiệu cơ bản theo ngành, tập trung giúp khách hiểu nhanh dịch vụ."
    ]
  },
  {
    id: "chatbot-ai",
    title: "Chatbot AI theo dữ liệu doanh nghiệp",
    shortDesc:
      "Chatbot AI tư vấn theo thông tin doanh nghiệp cung cấp, giúp phản hồi câu hỏi lặp lại và ghi nhận nhu cầu ban đầu.",
    description:
      "Chatbot AI là điểm khác biệt của gói mũi nhọn tháng 6. Bot được cấu hình theo dịch vụ, bảng giá, FAQ và quy trình tư vấn của từng doanh nghiệp, không tự trả lời ngoài phạm vi dữ liệu bàn giao.",
    icon: "MessageSquareCode",
    details: [
      "Tư vấn theo dữ liệu doanh nghiệp cung cấp, có giới hạn phạm vi rõ ràng.",
      "Hỗ trợ trả lời câu hỏi thường gặp, giới thiệu dịch vụ và hướng khách để lại SĐT/Zalo.",
      "Có demo chatbot AI theo ngành trước khi triển khai nếu dự án phù hợp."
    ]
  },
  {
    id: "automation-sales",
    title: "Form + Google Sheet + Telegram/email alert",
    shortDesc:
      "Hệ thống hỗ trợ nhận khách: form thu thông tin, lưu lead về Google Sheet và gửi thông báo để đội ngũ xử lý.",
    description:
      "Phần automation tập trung vào việc giảm rơi rụng thông tin khách. Khi có lead mới, dữ liệu được gom về một nơi và gửi cảnh báo để doanh nghiệp chủ động gọi lại hoặc nhắn Zalo.",
    icon: "Cpu",
    details: [
      "Form thu lead ưu tiên Tên, SĐT/Zalo và ngành kinh doanh.",
      "Lưu lead về Google Sheet theo cấu trúc hiện có.",
      "Gửi Telegram/email alert để đội ngũ biết có khách mới và xử lý kịp thời."
    ]
  },
  {
    id: "ai-content",
    title: "Nội dung bán hàng theo ngành",
    shortDesc:
      "Hỗ trợ viết nội dung website, CTA, FAQ và kịch bản chatbot phù hợp với ngành nghề của doanh nghiệp.",
    description:
      "Nội dung không phải gói riêng để làm loãng offer. Đây là phần hỗ trợ trong quá trình triển khai Website AI, giúp website và chatbot nói đúng dịch vụ, đúng bảng giá và đúng cách doanh nghiệp tư vấn khách.",
    icon: "PenTool",
    details: [
      "Soạn nội dung giới thiệu dịch vụ, lợi ích và CTA theo ngành.",
      "Xây dựng FAQ để chatbot AI có dữ liệu trả lời an toàn hơn.",
      "Tối ưu lời mời liên hệ, Zalo/gọi/form để khách dễ để lại thông tin."
    ]
  }
];
