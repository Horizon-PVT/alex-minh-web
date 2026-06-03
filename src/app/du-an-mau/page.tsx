import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  MessageSquare, 
  ArrowRight, 
  Sparkles, 
  Building2, 
  AlertTriangle, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  Shield, 
  Workflow, 
  FileSpreadsheet, 
  SendHorizontal, 
  BookOpen, 
  Bot
} from "lucide-react";

export const metadata = {
  title: "Dự Án Mẫu & Case Study Thực Tế - Alex Minh AI",
  description: "Khám phá các Case Study Website & Chatbot AI giả lập theo từng ngành tại Thanh Hóa giúp giải quyết khó khăn doanh nghiệp, thu hút lead và tự động hóa vận hành."
};

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  imagePath: string;
  context: string;
  problems: string[];
  solutions: string[];
  timeline: string[];
  expectedResults: string[];
  chatbotDemoId: string;
  chatbotMessage: string;
  leadBadge: string;
}

export default function ProjectDemoPage() {
  const cases: CaseStudy[] = [
    {
      id: "sam-son-hotel",
      title: "Hệ thống Website & Chatbot Khách Sạn Sầm Sơn",
      category: "Khách sạn / Homestay / Du lịch",
      imagePath: "/images/industries/hotel-homestay-samson.jpg",
      context: "Một khách sạn quy mô 35 phòng tại bãi tắm C Sầm Sơn muốn nâng cao tỷ lệ chốt phòng trực tiếp từ website vào mùa cao điểm du lịch hè, tránh phụ thuộc vào các sàn trung gian OTA.",
      problems: [
        "Mùa hè lượng khách hỏi giá phòng tăng dồn dập, nhân viên lễ tân bận đón khách tại sảnh không kịp trả lời tin nhắn trực tuyến.",
        "Khách hỏi phòng dễ thoát trang sang khách sạn đối thủ nếu phải chờ phản hồi quá 3 phút.",
        "Trôi tin nhắn chat, không thu thập và lưu trữ lại được SĐT của khách có nhu cầu thật để gọi điện tư vấn chốt sale."
      ],
      solutions: [
        "Thiết kế Website chuẩn SEO, tải nhanh giới thiệu trực quan hình ảnh phòng ốc thực tế, dịch vụ, vị trí bãi tắm.",
        "Tích hợp Chatbot AI tự động báo giá theo loại phòng (phòng đơn, đôi, VIP), gửi ảnh phòng qua inbox 24/7.",
        "Trợ lý ảo tự động hỏi nhu cầu (ngày check-in, số khách) và dẫn dắt để xin SĐT/Zalo của khách.",
        "Lead đăng ký phòng tự động lưu trữ về Google Sheet và nhắn thông báo tức thì qua Telegram của chủ khách sạn."
      ],
      timeline: ["Khảo sát thực địa & thông tin phòng", "Thiết kế Web giới thiệu Sầm Sơn", "Huấn luyện kịch bản Chatbot AI", "Cài đặt đồng bộ Telegram & Sheet", "Test vận hành & Bàn giao"],
      expectedResults: [
        "100% tin nhắn hỏi phòng được phản hồi lập tức dưới 2 giây tự động.",
        "Thu nhận trung bình 15-20 lead đăng ký phòng chất lượng mỗi ngày vào mùa hè.",
        "Giảm 60% công việc lễ tân phải nghe điện thoại báo giá cơ bản."
      ],
      chatbotDemoId: "tourism",
      chatbotMessage: "Lễ tân AI: Dạ Khách Sạn có phòng Deluxe hướng biển trống ngày 15/6 ạ. Anh/chị cho em xin SĐT để giữ phòng nhé!",
      leadBadge: "[Lead mới] Anh Tuấn vừa gửi SĐT 0978***567"
    },
    {
      id: "spa-dental",
      title: "Landing Page & Chatbot Đặt Lịch Hẹn Spa / Nha Khoa",
      category: "Spa / Nha khoa / Phòng khám",
      imagePath: "/images/industries/spa-dental-clinic.jpg",
      context: "Phòng khám nha khoa thẩm mỹ tại TP. Thanh Hóa muốn tối ưu hóa tỷ lệ đặt lịch hẹn thăm khám răng miễn phí và tư vấn chuyên sâu các dịch vụ răng sứ, niềng răng.",
      problems: [
        "Khách có xu hướng hỏi giá bọc răng sứ, niềng răng vào giờ đêm muộn (22h - 24h) khi nhân viên tư vấn đã nghỉ làm.",
        "Nhân viên trực trang page bận làm dịch vụ trực tiếp cho khách tại tiệm nên thường xuyên trả lời chậm trễ.",
        "Khó sắp xếp lịch hẹn khám khoa học, dẫn tới việc trùng lịch hoặc bỏ sót lịch hẹn của khách hàng."
      ],
      solutions: [
        "Xây dựng Landing Page chuyên nghiệp giới thiệu đội ngũ bác sĩ, cơ sở vật chất hiện đại và bảng giá dịch vụ công khai.",
        "Cấu hình Chatbot AI tư vấn tự động các dòng sứ, giải đáp quy trình niềng răng cơ bản ngay trên fanpage & web.",
        "Gợi ý khách chọn ngày giờ khám phù hợp và thu thập Họ tên + SĐT để đăng ký giữ chỗ lịch hẹn.",
        "Đồng bộ lịch hẹn tự động về Google Calendar của bác sĩ và báo tin nhắn về nhóm Telegram của quản lý phòng khám."
      ],
      timeline: ["Khảo sát dịch vụ & bảng giá chi tiết", "Thiết kế Landing Page đặt lịch", "Xây bộ câu hỏi FAQ cho chatbot học", "Kết nối Sheets & Google Calendar", "Kiểm thử & Bàn giao hệ thống"],
      expectedResults: [
        "Thu nhận 8-12 lịch hẹn thăm khám tự động mỗi tuần vào khung giờ đêm muộn.",
        "Giảm 95% tình trạng trùng lịch hoặc quên lịch của phòng khám.",
        "Nâng cao độ chuyên nghiệp của thương hiệu nha khoa/spa online."
      ],
      chatbotDemoId: "spa",
      chatbotMessage: "Nha khoa AI: Em đã đăng ký lịch khám răng miễn phí cho chị vào 15h00 ngày mai. Chị vui lòng check Zalo nhận mã hẹn ạ!",
      leadBadge: "[Lead mới] Chị Lan (TP Thanh Hóa) đặt lịch răng sứ"
    },
    {
      id: "thanh-hoa-realty",
      title: "Landing Page & Chatbot AI Lọc Khách Bất Động Sản",
      category: "Bất động sản / Cho thuê",
      imagePath: "/images/industries/real-estate-rental.jpg",
      context: "Nhóm môi giới bất động sản tại TP. Thanh Hóa đang chạy quảng cáo giới thiệu dự án đất nền và căn hộ chung cư mới, cần bộ lọc thông tin để tối ưu hóa năng suất sale.",
      problems: [
        "Chi phí quảng cáo thu lead đắt đỏ nhưng lead thu về có chất lượng kém (nhiều số ảo, không có nhu cầu thật).",
        "Sale mất nhiều thời gian gọi điện sàng lọc nhu cầu và khả năng tài chính của từng khách hàng một cách thủ công.",
        "Khách muốn xem tài liệu dự án ngay nhưng sale đang dẫn khách đi xem thực địa ngoài đường không kịp gửi file."
      ],
      solutions: [
        "Thiết kế Landing page giới thiệu dự án trực quan (vị trí, mặt bằng, tiện ích, tiến độ) chuẩn di động.",
        "Chatbot AI tự động hỏi nhu cầu khách hàng (mua ở hay đầu tư) và phân khúc tài chính sẵn có.",
        "Thu thập SĐT/Zalo khách hàng và tự động gửi tài liệu dự án/bảng tính dòng tiền qua Zalo.",
        "Phân loại lead tự động theo mức độ nóng/ấm/lạnh trước khi chuyển cho sale xử lý nhanh."
      ],
      timeline: ["Khảo sát tài liệu & mặt bằng dự án", "Thiết kế Landing Page dự án", "Cài đặt phễu lọc nhu cầu Chatbot", "Kết nối CRM/Bảng dữ liệu", "Bàn giao phễu thu lead"],
      expectedResults: [
        "Giảm 50% thời gian sale phải gọi điện tư vấn sàng lọc khách hàng không đúng tệp.",
        "Tăng 25% tỷ lệ lead thực tế phát sinh giao dịch nhờ lọc phễu thông tin chuẩn.",
        "Hỗ trợ gửi tài liệu tự động tức thì cho khách hàng 24/7."
      ],
      chatbotDemoId: "realestate",
      chatbotMessage: "BĐS AI: Đã gửi bảng giá và mặt bằng chi tiết khu đô thị Nam Sầm Sơn qua Zalo của anh. Anh cần hỗ trợ thêm thông tin gì ạ?",
      leadBadge: "[Lead mới] Anh Dũng vừa tải báo giá Đất nền"
    },
    {
      id: "edu-center",
      title: "Website & Chatbot Đăng Ký Học Thử Tiếng Anh",
      category: "Trung tâm Giáo dục / Tiếng Anh",
      imagePath: "/images/industries/education-center.jpg",
      context: "Trung tâm Anh ngữ tại khu vực Đông Sơn, Thanh Hóa muốn thu hút phụ huynh đăng ký kiểm tra trình độ và học thử miễn phí cho con từ 4-15 tuổi.",
      problems: [
        "Phụ huynh có xu hướng hỏi tư vấn ngoài giờ hành chính (đêm muộn) nhưng tư vấn viên đã nghỉ làm.",
        "Phụ huynh ngại điền các form đăng ký học dài trên website, cần tư vấn tương tác trực tiếp nhanh gọn.",
        "Khó khăn trong việc tổng hợp thông tin ban đầu (độ tuổi của con, mục tiêu học) để xếp lớp thi thử phù hợp."
      ],
      solutions: [
        "Website giới thiệu các khóa học (cho trẻ em, giao tiếp, IELTS), đội ngũ giáo viên bản xứ và cơ sở vật chất.",
        "Chatbot AI tư vấn học phí, lịch học dự kiến của các lớp học.",
        "Hỏi tuổi của con và gợi ý chương trình học tiếng Anh phản xạ tự nhiên phù hợp.",
        "Thu thập SĐT phụ huynh đăng ký test trình độ 4 kỹ năng miễn phí và tự động báo về Telegram quản lý tuyển sinh."
      ],
      timeline: ["Khảo sát chương trình học & độ tuổi", "Thiết kế Website trung tâm", "Thiết lập kịch bản chatbot tuyển sinh", "Đồng bộ phễu đăng ký học thử", "Bàn giao & hướng dẫn quản lý"],
      expectedResults: [
        "Tăng tỷ lệ chuyển đổi đăng ký học thử trên website lên 18% nhờ phễu chat tương tác tự nhiên.",
        "Giảm tải 40% công việc tư vấn thông tin cơ bản cho phòng tuyển sinh.",
        "Dễ dàng quản lý và chăm sóc danh sách học viên tiềm năng."
      ],
      chatbotDemoId: "education",
      chatbotMessage: "Anh ngữ AI: Em đã xếp lịch kiểm tra trình độ tiếng Anh miễn phí cho bé lúc 17h30 thứ 7 này. Hẹn gặp phụ huynh và bé ạ!",
      leadBadge: "[Lead mới] Phụ huynh bé Minh Đăng đăng ký học thử"
    },
    {
      id: "local-ocop",
      title: "Website Giới Thiệu & Đặt Sỉ Sản Phẩm OCOP Thanh Hóa",
      category: "OCOP / Đặc sản địa phương",
      imagePath: "/images/industries/ocop-local-products.jpg",
      context: "Cơ sở sản xuất nem chua và nước mắm truyền thống đạt tiêu chuẩn OCOP 4 sao tại Thanh Hóa cần xây dựng uy tín thương hiệu để tìm đại lý phân phối toàn quốc.",
      problems: [
        "Chủ cơ sở bận rộn sản xuất, đóng gói và đi thị trường nên không có thời gian trực page trả lời sỉ lẻ kịp thời.",
        "Khách hàng tỉnh xa thiếu tin cậy về năng lực xưởng sản xuất và giấy chứng nhận OCOP.",
        "Thông tin đơn hàng sỉ/lẻ rải rác trên nhiều kênh chat (Facebook, Zalo) gây nhầm lẫn khi giao nhận hàng."
      ],
      solutions: [
        "Thiết kế Website giới thiệu quy mô xưởng, quy trình sản xuất sạch, chứng nhận OCOP chuẩn chỉ tạo uy tín.",
        "Chatbot AI tự động báo giá sỉ theo số lượng và chính sách chiết khấu đại lý.",
        "Thu thập thông tin nhà phân phối đối tác: Tên, SĐT, Tỉnh thành, Số lượng muốn lấy.",
        "Đồng bộ thông tin đăng ký đại lý về Google Sheet tập trung cho bộ phận kế toán liên hệ gửi hàng mẫu."
      ],
      timeline: ["Khảo sát quy cách sản phẩm & chiết khấu", "Thiết kế Website OCOP chuyên nghiệp", "Cấu hình kịch bản chatbot báo giá sỉ", "Đồng bộ đơn đặt hàng sỉ/lẻ", "Test & Bàn giao"],
      expectedResults: [
        "Thu hút 30-40 khách hàng đại lý đăng ký nhận mẫu thử nem/nước mắm mỗi tháng.",
        "Nâng tầm uy tín thương hiệu OCOP Thanh Hóa trên môi trường số.",
        "Bảo đảm thông tin đại lý được ghi nhận tập trung, không thất lạc."
      ],
      chatbotDemoId: "ocop",
      chatbotMessage: "Nem Chua AI: Nem chua đặc biệt giá sỉ chỉ từ 2.800đ/quả từ 200 quả. Anh/chị có muốn nhận mẫu thử miễn phí không ạ?",
      leadBadge: "[Lead mới] Đại lý OCOP Nghệ An đăng ký lấy sỉ"
    }
  ];

  return (
    <div className="relative pt-32 pb-24 overflow-hidden bg-background">
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

      {/* Background Decor */}
      <div className="glow-bg bg-primary/10 w-[40rem] h-[40rem] -top-40 -right-40 animate-pulse" style={{ animationDuration: "10s" }}></div>
      <div className="glow-bg bg-secondary/5 w-[30rem] h-[30rem] bottom-10 -left-40 animate-pulse" style={{ animationDuration: "8s" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header / Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-24 relative">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-xs font-semibold mb-6 tracking-wide uppercase">
            <Sparkles className="h-3.5 w-3.5 text-secondary" />
            <span>Thư viện Case Study</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Dự Án Mẫu Web + Chatbot AI <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-primary via-secondary to-cyan-300 bg-clip-text text-transparent">
              Theo Từng Ngành
            </span>
          </h1>
          
          <p className="text-slate-400 text-sm sm:text-base mt-6 leading-relaxed max-w-2xl mx-auto">
            Xem cách Alex Minh AI mô phỏng giải pháp website, chatbot tư vấn và hệ thống thu lead tự động cho các nhóm doanh nghiệp phổ biến tại Thanh Hóa.
          </p>

          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mt-8 rounded-full shadow-[0_0_10px_rgba(0,229,255,0.4)]"></div>

          {/* Trust chips */}
          <div className="mt-10 flex flex-wrap justify-center gap-3.5 max-w-2xl mx-auto">
            {[
              "Theo ngành thực tế",
              "Có quy trình triển khai",
              "Có demo chatbot",
              "Có hệ thống thu lead"
            ].map((chip, idx) => (
              <div key={idx} className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#0e1626]/80 border border-slate-800/80 text-slate-300 text-[11px] sm:text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                <span>{chip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Details (Alternating 2-Column Showcases) */}
        <div className="space-y-28 md:space-y-36">
          {cases.map((cs, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={cs.id}
                id={cs.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center scroll-mt-28"
              >
                {/* Left Column: Visual Mockup */}
                <div
                  className={`lg:col-span-5 flex justify-center ${
                    isEven ? "lg:order-first" : "lg:order-last"
                  }`}
                >
                  <div className="w-full max-w-[480px] aspect-[4/3] rounded-2xl bg-[#0e1626]/70 border border-slate-800 p-2 flex flex-col justify-between shadow-2xl relative group overflow-hidden transition-all duration-300 hover:border-secondary/30 hover:shadow-[0_0_30px_rgba(0,229,255,0.15)]">
                    
                    {/* Visual container inside */}
                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-950">
                      <Image
                        src={cs.imagePath}
                        alt={cs.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={idx === 0}
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] brightness-[1.05] contrast-[1.01]"
                      />
                      
                      {/* Dark overlay gradients */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/20 to-transparent"></div>
                      
                      {/* Floating glassmorphism badge with gold accent */}
                      <div className="absolute top-4 left-4 glass px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-amber-500/30 shadow-lg pointer-events-none">
                        <Sparkles className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
                        <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest">
                          Case Study 0{idx + 1}
                        </span>
                      </div>

                      {/* Chatbot Mini Mockup Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2 pointer-events-none">
                        {/* Chatbot Message Bubble */}
                        <div className="glass px-3 py-2 rounded-xl border border-white/10 shadow-lg max-w-[85%] self-start">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></div>
                            <span className="text-[9px] font-bold text-slate-300 uppercase tracking-wider">Trợ lý AI</span>
                          </div>
                          <p className="text-[10px] text-white leading-normal font-medium">{cs.chatbotMessage}</p>
                        </div>
                        {/* Lead Badge Notification */}
                        <div className="glass px-2.5 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-950/40 shadow-md self-end flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                          <span className="text-[9px] font-bold text-emerald-300 tracking-wide">{cs.leadBadge}</span>
                        </div>
                      </div>

                      {/* Top floating application tag */}
                      <div className="absolute top-4 right-4 glass px-3 py-1.5 rounded-lg border border-secondary/25 text-secondary shadow-md pointer-events-none">
                        <span className="text-[10px] font-bold uppercase tracking-wider">
                          {cs.chatbotDemoId === "tourism" ? "Du lịch & Lưu trú" : 
                           cs.chatbotDemoId === "spa" ? "Y tế & Sức khỏe" : 
                           cs.chatbotDemoId === "realestate" ? "Bất động sản" : 
                           cs.chatbotDemoId === "education" ? "Tuyển sinh đào tạo" : "Sản xuất sỉ/lẻ"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Case study content */}
                <div className="lg:col-span-7 flex flex-col space-y-6">
                  <div>
                    {/* Category pill */}
                    <span className="text-[11px] font-bold tracking-wider text-secondary uppercase bg-secondary/5 border border-secondary/20 px-3 py-1 rounded-md inline-block mb-3.5">
                      {cs.category}
                    </span>
                    
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                      {cs.title}
                    </h2>
                    
                    {/* Business Context */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed border-l-2 border-primary/30 pl-4 py-0.5 italic">
                      <strong className="text-slate-200 block not-italic text-xs font-bold uppercase tracking-wider mb-1">Bối cảnh doanh nghiệp:</strong>
                      {cs.context}
                    </p>
                  </div>

                  {/* Problems vs Solutions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {/* Problems */}
                    <div className="space-y-3">
                      <h4 className="text-rose-400 font-bold text-xs tracking-wider uppercase flex items-center gap-1.5">
                        <AlertTriangle className="h-4 w-4 text-rose-500 shrink-0" />
                        Khó khăn gặp phải:
                      </h4>
                      <ul className="space-y-2.5">
                        {cs.problems.map((prob, pIdx) => (
                          <li key={pIdx} className="text-xs text-slate-400 leading-relaxed flex items-start gap-2">
                            <span className="text-rose-500/70 mt-0.5 shrink-0">•</span>
                            <span>{prob}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div className="space-y-3">
                      <h4 className="text-cyan-400 font-bold text-xs tracking-wider uppercase flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                        Giải pháp áp dụng:
                      </h4>
                      <ul className="space-y-2.5">
                        {cs.solutions.map((sol, sIdx) => (
                          <li key={sIdx} className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                            <span className="text-cyan-400/80 mt-0.5 shrink-0">✓</span>
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sơ đồ quy trình triển khai mẫu */}
                  <div className="pt-2 border-t border-slate-800/60">
                    <h4 className="text-slate-200 font-bold text-xs tracking-wide uppercase flex items-center gap-2 mb-3">
                      <Clock className="h-4 w-4 text-slate-400 shrink-0" />
                      Quy trình triển khai mẫu:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cs.timeline.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-center text-[10.5px] font-semibold text-slate-400 bg-slate-900/60 border border-slate-800/80 px-2.5 py-1.5 rounded-lg shadow-sm">
                          <span className="text-secondary mr-1">{sIdx + 1}.</span>
                          <span>{step}</span>
                          {sIdx < 4 && <ArrowRight className="h-3 w-3 text-slate-600 ml-2 hidden sm:inline" />}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expected Results */}
                  <div className="pt-4 border-t border-slate-800/60">
                    <h4 className="text-emerald-400 font-bold text-xs tracking-wider uppercase flex items-center gap-1.5 mb-3">
                      <TrendingUp className="h-4 w-4 text-emerald-400 shrink-0" />
                      Kết quả mục tiêu kỳ vọng:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {cs.expectedResults.map((res, rIdx) => (
                        <div key={rIdx} className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-slate-300 leading-relaxed shadow-sm">
                          {res}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="pt-4 flex flex-wrap gap-4">
                    <Link
                      href={`/demo-chatbot-ai?industry=${cs.chatbotDemoId}`}
                      className="px-5 py-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-secondary/40 text-slate-200 hover:text-white text-xs font-bold flex items-center gap-2 transition-all"
                    >
                      <MessageSquare className="h-4 w-4 text-secondary" />
                      <span>Xem demo chatbot ngành này</span>
                    </Link>
                    <Link
                      href="/lien-he"
                      className="px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold flex items-center gap-1.5 hover:from-primary-hover hover:to-secondary-hover shadow-lg shadow-primary/10 transition-all"
                    >
                      <span>Tư vấn mô hình tương tự</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      href="/bang-gia"
                      className="px-4 py-3 rounded-xl text-slate-400 hover:text-slate-200 text-xs font-bold transition-all text-center flex items-center justify-center"
                    >
                      Xem gói phù hợp
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section: Quy trình triển khai chung */}
        <div className="mt-36 border-t border-slate-800 pt-28 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Quy Trình Triển Khai Giải Pháp Web & Chatbot AI
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Chúng tôi chuẩn hóa quy trình 6 bước từ khâu tiếp nhận thông tin doanh nghiệp địa phương Thanh Hóa cho tới khi nghiệm thu, tối ưu hóa hệ thống.
            </p>
            <div className="h-1 w-12 bg-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Khảo sát mô hình kinh doanh", desc: "Tìm hiểu dòng sản phẩm, bài toán của cơ sở và thói quen hỏi đáp của khách hàng địa phương.", icon: Building2 },
              { step: "02", title: "Thu thập dữ liệu chuyên sâu", desc: "Tổng hợp các tài liệu dịch vụ, bảng giá sỉ/lẻ, hình ảnh thực tế và các câu hỏi khách hay hỏi.", icon: BookOpen },
              { step: "03", title: "Thiết kế Web / Landing Page", desc: "Xây dựng giao diện giới thiệu chuyên nghiệp, chuẩn SEO local, hiển thị mượt mà trên di động.", icon: Shield },
              { step: "04", title: "Thiết lập kịch bản Chatbot", desc: "Huấn luyện dữ liệu riêng cho AI, xây dựng phễu đối thoại xin Số điện thoại / Zalo tự nhiên.", icon: MessageSquare },
              { step: "05", title: "Đồng bộ CRM, Sheets & Telegram", desc: "Kết nối chatbot và biểu mẫu website với Google Sheets và Telegram để đẩy lead về tức thì 24/7.", icon: FileSpreadsheet },
              { step: "06", title: "Test thực tế, bàn giao & tối ưu", desc: "Chạy thử nghiệm lọc lỗi, hướng dẫn chủ doanh nghiệp cách quản lý và liên tục tối ưu theo dữ liệu thật.", icon: Workflow }
            ].map((p, pIdx) => {
              const StepIcon = p.icon;
              return (
                <div key={pIdx} className="bg-[#0e1626]/40 border border-slate-800/80 p-6 rounded-2xl relative shadow-lg group hover:border-secondary/20 transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.05)]">
                  <span className="absolute top-4 right-4 text-3xl font-black text-slate-800/50 group-hover:text-secondary/10 transition-colors">
                    {p.step}
                  </span>
                  <div className="p-3 rounded-xl bg-secondary/10 text-secondary w-fit mb-4 border border-secondary/20">
                    <StepIcon className="h-5 w-5" />
                  </div>
                  <h4 className="text-white font-bold text-base mb-2">{p.title}</h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section: Khách hàng nhận được gì? */}
        <div className="mt-36 border-t border-slate-800 pt-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Giá Trị Đạt Được Khi Triển Khai Hệ Thống
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              Không chỉ là làm web hay chatbot đơn lẻ, chúng tôi bàn giao một hệ thống phễu marketing số khép kín, hoạt động trơn tru.
            </p>
            <div className="h-1 w-12 bg-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Website chuẩn uy tín thương hiệu", desc: "Giao diện đẹp mắt, tạo ấn tượng chuyên nghiệp giúp giữ chân khách hàng từ cái nhìn đầu tiên.", icon: Shield },
              { title: "Chatbot AI phản hồi 24/7", desc: "Tự động chăm sóc, tư vấn cho khách hàng ngay cả ban đêm hay ngày nghỉ lễ mà không mệt mỏi.", icon: Bot },
              { title: "Lead tự động đẩy về Google Sheets", desc: "Quản lý dữ liệu tập trung, khoa học trên Excel online, dễ dàng kiểm soát hiệu quả bán hàng.", icon: FileSpreadsheet },
              { title: "Cảnh báo Telegram ngay lập tức", desc: "Điện thoại của chủ doanh nghiệp nảy thông báo lead mới ngay khi khách vừa gửi SĐT trên web.", icon: SendHorizontal },
              { title: "Tối ưu hóa phễu tư vấn bán hàng", desc: "Sàng lọc sẵn nhu cầu cơ bản trước khi chuyển cho sale, nâng cao tỷ lệ chốt đơn của nhóm tư vấn.", icon: TrendingUp },
              { title: "Quy trình mở rộng linh hoạt", desc: "Dễ dàng thêm dịch vụ, tích hợp các kênh quảng cáo (Facebook, TikTok Ads) khi doanh nghiệp phát triển.", icon: Workflow }
            ].map((v, vIdx) => {
              const ValIcon = v.icon;
              return (
                <div key={vIdx} className="flex gap-4 p-5 rounded-2xl bg-[#0b1220]/40 border border-slate-800 shadow-sm items-start">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
                    <ValIcon className="h-[18px] w-[18px]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1.5">{v.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA Banner Section */}
        <div className="mt-36 relative rounded-3xl overflow-hidden border border-slate-800/80 bg-[#0e1626]/40 p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50"></div>
          
          {/* Tech lines background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.04] pointer-events-none"></div>

          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Muốn Có Một Bản Demo Tương Tự Cho Ngành Của Anh/Chị?
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              Gửi thông tin cho Alex Minh AI, chúng tôi sẽ phân tích mô hình kinh doanh và gợi ý cách xây web, chatbot và hệ thống thu lead phù hợp.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/lien-he"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white hover:from-primary-hover hover:to-secondary-hover text-sm font-bold tracking-wide shadow-[0_4px_15px_rgba(0,229,255,0.25)] transition-all hover:-translate-y-0.5 text-center"
              >
                Nhận tư vấn miễn phí
              </Link>
              <Link
                href="/demo-chatbot-ai"
                className="px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white text-sm font-bold tracking-wide transition-all hover:-translate-y-0.5 text-center"
              >
                Thử chatbot demo
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
