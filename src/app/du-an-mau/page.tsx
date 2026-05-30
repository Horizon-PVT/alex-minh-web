import React from "react";
import Link from "next/link";
import { MessageSquare, ArrowRight, Sparkles, Building, AlertCircle, PlayCircle } from "lucide-react";

export const metadata = {
  title: "Dự Án Mẫu & Case Demo",
  description: "Tham khảo các mô hình website và chatbot AI giả lập cho các ngành thế mạnh tại Thanh Hóa như Khách sạn Sầm Sơn, BĐS, Spa, OCOP..."
};

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  context: string;
  problem: string;
  solution: string;
  expectedResult: string;
  chatbotDemoId: string;
}

export default function ProjectDemoPage() {
  const cases: CaseStudy[] = [
    {
      id: "sam-son-hotel",
      title: "Hệ thống Website & Chatbot Khách Sạn Sầm Sơn",
      category: "Du lịch / Khách sạn",
      context: "Một khách sạn quy mô 35 phòng tại bãi tắm C Sầm Sơn muốn nâng cao tỷ lệ chốt phòng trực tiếp từ website vào mùa cao điểm du lịch hè.",
      problem: "Mùa hè lượng khách hỏi dồn dập, nhân viên lễ tân bận đón khách tại sảnh không kịp trả lời tin nhắn trực tuyến. Khách hàng thoát trang sang khách sạn đối thủ do phản hồi chậm.",
      solution: "Thiết kế Website giới thiệu phòng ốc chuẩn di động tích hợp Chatbot AI tự động báo giá theo loại phòng (phòng đơn, đôi, VIP), chỉ đường đi bãi tắm và ghi nhận thông tin đặt phòng 24/7.",
      expectedResult: "Phản hồi khách ngay lập tức (dưới 2 giây). Giảm 60% thời gian lễ tân phải trả lời điện thoại báo giá. Thu nhận trung bình 15-20 lead đăng ký phòng mỗi ngày vào mùa cao điểm.",
      chatbotDemoId: "tourism"
    },
    {
      id: "thanh-hoa-realty",
      title: "Landing Page & Chatbot AI Lọc Khách Bất Động Sản",
      category: "Bất động sản",
      context: "Nhóm môi giới bất động sản tại TP. Thanh Hóa đang chạy quảng cáo giới thiệu dự án đất nền và căn hộ chung cư mới.",
      problem: "Chi phí quảng cáo đắt đỏ nhưng lead thu về có chất lượng kém (nhiều số ảo, không có tài chính phù hợp), môi giới mất nhiều thời gian gọi điện tư vấn lọc khách hàng thủ công.",
      solution: "Landing page giới thiệu dự án trực quan + Chatbot AI trực tuyến tự động gửi bảng giá, chính sách ngân hàng, đồng thời lọc nhu cầu (tài chính có sẵn, diện tích cần mua) trước khi báo cho sale.",
      expectedResult: "Tăng 25% chất lượng lead thực tế. Sale chỉ gọi điện cho những khách hàng đã được chatbot xác nhận nhu cầu và tài chính rõ ràng. Tự động lưu thông tin khách về Google Sheet.",
      chatbotDemoId: "realestate"
    },
    {
      id: "spa-dental",
      title: "Landing Page & Chatbot Đặt Lịch Hẹn Spa / Nha Khoa",
      category: "Spa / Nha khoa / Thẩm mỹ",
      context: "Một phòng khám Nha khoa thẩm mỹ tại TP. Thanh Hóa muốn tối ưu quy trình đặt lịch hẹn thăm khám và lấy cao răng miễn phí.",
      problem: "Khách hay hỏi giá bọc răng sứ, niềng răng vào khung giờ đêm muộn (22h - 24h). Thời điểm này nhân viên đã nghỉ làm nên không tư vấn và giữ chân khách đặt lịch được.",
      solution: "Chatbot AI trực chiến fanpage và website tự động gửi bảng giá niềng/bọc răng, trả lời địa chỉ, giờ làm việc và giúp khách hàng chọn ngày giờ khám phù hợp.",
      expectedResult: "Thu được 8-12 lịch hẹn thăm khám tự động mỗi tuần vào khung giờ đêm. Giảm tải công việc tư vấn báo giá cơ bản của lễ tân nha khoa.",
      chatbotDemoId: "spa"
    },
    {
      id: "edu-center",
      title: "Website & Chatbot Đăng Ký Học Thử Tiếng Anh",
      category: "Trung tâm Giáo dục",
      context: "Trung tâm Anh ngữ tại khu vực Đông Sơn, Thanh Hóa muốn thu hút phụ huynh đăng ký kiểm tra trình độ và học thử miễn phí cho con.",
      problem: "Phụ huynh có xu hướng hỏi tư vấn nhiều nhưng lười điền form đăng ký dài trên website, cần tư vấn tương tác trực tiếp nhanh gọn.",
      solution: "Chatbot AI tư vấn thân thiện qua hộp chat tự động giới thiệu lớp học theo độ tuổi, hỏi nhu cầu của bé và dẫn dắt phụ huynh để lại số điện thoại đăng ký xếp lớp kiểm tra năng lực.",
      expectedResult: "Tăng tỷ lệ chuyển đổi từ truy cập web thành đăng ký học thử lên 18%. Quy trình ghi nhận thông tin trẻ (tuổi, mục tiêu học) diễn ra tự nhiên như đang trò chuyện.",
      chatbotDemoId: "education"
    },
    {
      id: "local-ocop",
      title: "Website Giới Thiệu & Đặt Sỉ Sản Phẩm OCOP Thanh Hóa",
      category: "OCOP / Đặc sản địa phương",
      context: "Cơ sở sản xuất nem chua và nước mắm truyền thống đạt tiêu chuẩn OCOP 4 sao tại Thanh Hóa cần tìm đại lý phân phối toàn quốc.",
      problem: "Chủ cơ sở bận rộn sản xuất, đi thị trường nên không có thời gian trả lời tin nhắn hỏi mua sỉ, chính sách chiết khấu, dẫn đến mất nhiều đối tác đại lý tiềm năng.",
      solution: "Website giới thiệu nguồn gốc sản phẩm chuẩn chỉ kèm Chatbot AI tự động cung cấp bảng giá sỉ/lẻ, chính sách chiết khấu theo số lượng, gửi mẫu hợp đồng đại lý và lấy thông tin liên hệ.",
      expectedResult: "Hỗ trợ thu thập thông tin của 30-40 đối tác muốn làm đại lý/nhà phân phối mỗi tháng. Thể hiện sự chuyên nghiệp và uy tín của thương hiệu OCOP trên internet.",
      chatbotDemoId: "ocop"
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
            <span>Thư Viện Demo Giả Lập</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Dự Án Mẫu & Mô Hình Demo
          </h1>
          <p className="text-slate-400 text-sm mt-3">
            Dưới đây là các mô hình giải pháp giả lập được thiết kế dựa trên các bài toán kinh doanh phổ biến tại Thanh Hóa. Chúng tôi nói không với số liệu giả và luôn rõ ràng với khách hàng.
          </p>
          <div className="h-1 w-12 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Case Studies Cards List */}
        <div className="space-y-10 max-w-5xl mx-auto">
          {cases.map((cs) => (
            <div
              key={cs.id}
              className="bg-[#131926]/20 border border-slate-800/60 p-6 md:p-8 rounded-3xl flex flex-col space-y-6 hover:border-slate-750 transition-all"
            >
              {/* Card Title */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 pb-4 border-b border-slate-850">
                <div>
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-1">
                    {cs.category}
                  </span>
                  <h2 className="text-slate-100 font-extrabold text-lg sm:text-xl">
                    {cs.title}
                  </h2>
                </div>
                <div className="self-start sm:self-center px-3 py-1 rounded-full bg-slate-800 text-slate-350 text-[10px] font-semibold border border-slate-750 shrink-0">
                  Demo Giả Lập Ngành
                </div>
              </div>

              {/* Grid content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-slate-400 font-bold uppercase tracking-wider text-[11px] mb-1.5 flex items-center space-x-1.5">
                      <Building className="h-3.5 w-3.5 text-slate-500" />
                      <span>Bối cảnh doanh nghiệp</span>
                    </h3>
                    <p className="text-slate-300 leading-relaxed">{cs.context}</p>
                  </div>
                  <div>
                    <h3 className="text-rose-450 font-bold uppercase tracking-wider text-[11px] mb-1.5 flex items-center space-x-1.5">
                      <AlertCircle className="h-3.5 w-3.5 text-rose-500" />
                      <span>Khó khăn gặp phải</span>
                    </h3>
                    <p className="text-slate-300 leading-relaxed">{cs.problem}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-secondary font-bold uppercase tracking-wider text-[11px] mb-1.5 flex items-center space-x-1.5">
                      <PlayCircle className="h-3.5 w-3.5 text-secondary" />
                      <span>Giải pháp Alex Minh AI áp dụng</span>
                    </h3>
                    <p className="text-slate-300 leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-emerald-450 font-bold uppercase tracking-wider text-[11px] mb-1.5 flex items-center space-x-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Kết quả kỳ vọng thu được</span>
                    </h3>
                    <p className="text-slate-300 leading-relaxed">{cs.expectedResult}</p>
                  </div>
                </div>
              </div>

              {/* CTA link to demo */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-850/60">
                <p className="text-slate-500 text-xs">
                  * Hệ thống chatbot trong bài viết đã có sẵn bản demo để bạn trải nghiệm.
                </p>
                <div className="flex space-x-3 w-full sm:w-auto shrink-0 justify-end">
                  <Link
                    href={`/demo-chatbot-ai?industry=${cs.chatbotDemoId}`}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-secondary text-slate-200 hover:text-white text-xs font-semibold flex items-center space-x-2 transition-all w-full sm:w-auto justify-center"
                  >
                    <MessageSquare className="h-4 w-4 text-secondary" />
                    <span>Chạy thử chatbot demo</span>
                  </Link>
                  <Link
                    href="/lien-he"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold flex items-center space-x-1.5 hover:from-primary-hover hover:to-secondary-hover shadow-md shadow-primary/10 transition-all w-full sm:w-auto justify-center"
                  >
                    <span>Liên hệ thiết kế hệ thống tương tự</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
