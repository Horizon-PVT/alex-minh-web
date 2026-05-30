import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trải Nghiệm Demo Chatbot AI",
  description: "Trực tiếp chạy thử và tương tác với các kịch bản chatbot AI tự động hóa bán hàng dành cho Khách sạn Sầm Sơn, Spa, Nha khoa, BĐS, OCOP tại Thanh Hóa."
};

export default function DemoChatbotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
