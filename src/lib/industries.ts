export interface IndustryDemo {
  id: string;
  name: string;
  painPoint: string;
  botCapability: string;
  leadCaptured: string;
  icon: string;
  exampleQuestions: string[];
}

export const industries: IndustryDemo[] = [
  {
    id: "tourism",
    name: "Khách sạn / Homestay / Du lịch Sầm Sơn",
    painPoint: "Khách hỏi dồn dập vào mùa cao điểm về giá phòng, còn phòng trống không, vị trí gần biển không nhưng nhân viên trực page trả lời chậm dẫn đến mất khách.",
    botCapability: "Tự động báo giá theo loại phòng, giải đáp khoảng cách tới bãi tắm, gửi hình ảnh phòng qua chat và ghi nhận lịch check-in dự kiến.",
    leadCaptured: "Họ tên, SĐT, loại phòng quan tâm, ngày nhận/trả phòng, số lượng người.",
    icon: "Hotel",
    exampleQuestions: [
      "Giá phòng đôi cuối tuần này bao nhiêu?",
      "Khách sạn có gần bãi tắm A không?",
      "Có chỗ đỗ xe 29 chỗ không em?",
      "Cho anh xem ảnh phòng VIP với."
    ]
  },
  {
    id: "realestate",
    name: "Bất động sản / Cho thuê",
    painPoint: "Môi giới bận dẫn khách ngoài đường, không kịp phản hồi tin nhắn hỏi mua/thuê nhà. Lead rơi rụng và không phân loại được khách có tài chính thực sự.",
    botCapability: "Giới thiệu vị trí, tiện ích dự án, tầm giá, chính sách trả góp và tự động lọc khách theo khoảng tài chính quan tâm trước khi chuyển cho sale.",
    leadCaptured: "Họ tên, SĐT, khu vực quan tâm, phân khúc tài chính, nhu cầu mua hay thuê.",
    icon: "Home",
    exampleQuestions: [
      "Dự án này bao giờ bàn giao nhà?",
      "Căn 2 phòng ngủ giá bao nhiêu?",
      "Có hỗ trợ vay ngân hàng 70% không?",
      "Anh muốn đi xem nhà mẫu cuối tuần này."
    ]
  },
  {
    id: "spa",
    name: "Spa / Nha khoa / Phòng khám",
    painPoint: "Khách hay nhắn tin hỏi giá dịch vụ điều trị, đặt lịch hẹn nhưng lỡ dở vì nhân viên đang dở tay làm dịch vụ cho khách tại tiệm.",
    botCapability: "Tự động gửi bảng giá dịch vụ (triệt lông, làm răng, trị mụn...), tư vấn liệu trình sơ bộ và ghi nhận lịch hẹn khám/làm đẹp.",
    leadCaptured: "Họ tên, SĐT, dịch vụ cần làm, thời gian đăng ký đặt lịch.",
    icon: "Sparkles",
    exampleQuestions: [
      "Bên mình có những gói triệt lông nào?",
      "Giá làm răng sứ trọn gói là bao nhiêu?",
      "Chiều nay 4h có trống lịch làm mặt không em?",
      "Địa chỉ spa mình ở đường nào vậy?"
    ]
  },
  {
    id: "education",
    name: "Trung tâm giáo dục / Tiếng Anh",
    painPoint: "Phụ huynh nhắn tin hỏi lịch học, học phí ngoài giờ hành chính (đêm muộn). Tư vấn viên nghỉ làm nên không trả lời ngay được.",
    botCapability: "Giới thiệu các khóa học (cho trẻ em, giao tiếp, IELTS), lịch khai giảng, tư vấn lộ trình và đăng ký thi thử/học thử miễn phí.",
    leadCaptured: "Họ tên phụ huynh, SĐT, độ tuổi của con, mục tiêu học tập (giao tiếp/thi chứng chỉ).",
    icon: "GraduationCap",
    exampleQuestions: [
      "Có khóa tiếng Anh cho bé 6 tuổi không?",
      "Học phí lớp giao tiếp bao nhiêu một tháng?",
      "Lịch khai giảng lớp IELTS gần nhất là khi nào?",
      "Cho chị đăng ký cho con test trình độ thử."
    ]
  },
  {
    id: "ocop",
    name: "OCOP / Đặc sản địa phương",
    painPoint: "Chủ cơ sở sản xuất bận rộn vận hành, đóng gói hàng hóa, không có thời gian trực fanpage trả lời sỉ lẻ về bảng giá, chính sách đại lý.",
    botCapability: "Gửi thông tin sản phẩm, báo giá sỉ/lẻ, giới thiệu chính sách chiết khấu nhà phân phối và lấy thông tin giao hàng.",
    leadCaptured: "Họ tên, SĐT, tỉnh thành, số lượng muốn lấy sỉ/lẻ, sản phẩm quan tâm.",
    icon: "ShoppingBag",
    exampleQuestions: [
      "Nem chua Thanh Hóa lấy sỉ từ bao nhiêu hộp?",
      "Phí ship ra Hà Nội tính thế nào?",
      "Có chính sách đại lý cho tỉnh ngoài không?",
      "Bảng giá các loại chè lam bên mình thế nào?"
    ]
  }
];
