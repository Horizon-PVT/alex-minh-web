export interface ScriptMessage {
  sender: "bot" | "user";
  text: string;
}

export interface IndustryDemo {
  id: string;
  name: string;
  painPoint: string;
  botCapability: string;
  leadCaptured: string;
  icon: string;
  exampleQuestions: string[];
  conversationScript: ScriptMessage[];
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
    ],
    conversationScript: [
      { sender: "bot", text: "Xin chào! Em là trợ lý AI của Khách sạn Ocean View Sầm Sơn. Em có thể hỗ trợ anh/chị xem phòng, đặt phòng hoặc báo giá dịch vụ nhanh chóng ạ." },
      { sender: "user", text: "Giá phòng đôi cuối tuần này bao nhiêu?" },
      { sender: "bot", text: "Dạ phòng đôi Deluxe bên em cuối tuần này có giá ưu đãi là 850.000đ/đêm đã bao gồm ăn sáng buffet ạ. Anh/chị đi ngày nào và khoảng mấy người để em kiểm tra phòng trống?" },
      { sender: "user", text: "Thứ 7 tuần này, đi 2 người." },
      { sender: "bot", text: "Dạ phòng hướng trực diện biển bãi A hiện đang còn trống ạ. Anh/chị vui lòng để lại số điện thoại (có Zalo) để em gửi ảnh phòng thực tế và giữ phòng trống cho mình nhé!" },
      { sender: "user", text: "0789 284 078" },
      { sender: "bot", text: "Tuyệt vời ạ! Em đã gửi thông báo đến bộ phận đặt phòng. Nhân viên sẽ liên hệ gửi ảnh phòng và xác nhận lịch qua Zalo cho anh/chị ngay nhé!" }
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
    ],
    conversationScript: [
      { sender: "bot", text: "Xin chào! Em là trợ lý AI dự án Horizon Landmark. Anh/chị cần tư vấn căn hộ mua ở hay căn hộ đầu tư để em gửi thông tin chi tiết ạ?" },
      { sender: "user", text: "Căn 2 phòng ngủ giá bao nhiêu?" },
      { sender: "bot", text: "Dạ căn 2 phòng ngủ diện tích 68m² hướng Đông Nam bên em đang có giá từ 1.8 tỷ. Anh/chị đang có nhu cầu mua ở hay đầu tư sinh lời ạ?" },
      { sender: "user", text: "Anh mua để đầu tư." },
      { sender: "bot", text: "Dạ dòng căn này cho thuê dòng tiền cực tốt, đang chiết khấu 5% đợt này. Anh/chị để lại số điện thoại/Zalo em gửi bảng tính dòng tiền và tài liệu dự án nhé!" },
      { sender: "user", text: "0789 284 078" },
      { sender: "bot", text: "Dạ em đã nhận được thông tin. Chuyên viên dự án sẽ gửi toàn bộ tài liệu và bảng giá chi tiết qua Zalo cho anh ngay ạ!" }
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
    ],
    conversationScript: [
      { sender: "bot", text: "Xin chào! Em là trợ lý AI của Nha khoa Quốc tế Thanh Hóa. Anh/chị đang quan tâm đến dịch vụ làm răng sứ, niềng răng hay chăm sóc răng miệng ạ?" },
      { sender: "user", text: "Giá làm răng sứ trọn gói bao nhiêu?" },
      { sender: "bot", text: "Dạ răng sứ bên em dòng Zirconia cao cấp đang có ưu đãi trọn gói từ 3.5 triệu/răng. Anh/chị có muốn đặt lịch hẹn khám miễn phí với bác sĩ trưởng khoa không ạ?" },
      { sender: "user", text: "Đặt lịch chiều nay 4h." },
      { sender: "bot", text: "Dạ khung giờ 16h00 hôm nay bên em đang còn lịch trống ạ. Anh/chị vui lòng để lại số điện thoại để em xác nhận giữ lịch hẹn khám cho mình nhé!" },
      { sender: "user", text: "0789 284 078" },
      { sender: "bot", text: "Dạ em đã lưu lịch hẹn lúc 16h00 chiều nay cho anh/chị. Bác sĩ sẽ đợi anh/chị tại phòng khám. Hẹn gặp anh/chị nhé!" }
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
    ],
    conversationScript: [
      { sender: "bot", text: "Xin chào! Em là trợ lý tuyển sinh AI của Anh ngữ Apex. Em có thể tư vấn lộ trình học cho bé hay khóa học IELTS cho người lớn giúp mình ạ?" },
      { sender: "user", text: "Có khóa tiếng Anh cho bé 6 tuổi không?" },
      { sender: "bot", text: "Dạ có ạ! Bên em đang tuyển sinh lớp tiếng Anh Cambridge cho bé 6 tuổi với phương pháp tương tác phản xạ tự nhiên. Chị muốn con học cuối tuần hay buổi tối?" },
      { sender: "user", text: "Học buổi tối trong tuần chị nhé." },
      { sender: "bot", text: "Dạ lớp tối thứ 3-5 hiện đang có ưu đãi tặng 1 tháng học thử miễn phí. Chị để lại số điện thoại/Zalo để em gửi lịch học thử cho bé nhé!" },
      { sender: "user", text: "0789 284 078" },
      { sender: "bot", text: "Dạ vâng ạ, tư vấn viên bên em sẽ liên hệ xếp lịch kiểm tra trình độ và đăng ký học thử miễn phí cho bé ngay nhé mẹ!" }
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
    ],
    conversationScript: [
      { sender: "bot", text: "Xin chào! Em là trợ lý bán hàng AI của thương hiệu Đặc sản Nem chua Thanh Hóa. Anh/chị cần lấy sỉ nem chua hay các sản phẩm OCOP làm quà ạ?" },
      { sender: "user", text: "Nem chua sỉ bao nhiêu 1 chục?" },
      { sender: "bot", text: "Dạ nem chua sỉ bên em tính từ 100 cái (10 chục) là có giá sỉ tại xưởng. Anh/chị lấy nem chua dài, nem vuông hay nem thính để em báo giá tốt nhất ạ?" },
      { sender: "user", text: "Nem chua dài lấy 300 cái." },
      { sender: "bot", text: "Dạ 300 cái giá sỉ cực tốt và hỗ trợ gửi xe khách giao nhanh trong ngày. Anh/chị cho em xin số điện thoại/Zalo để bộ phận sỉ gửi bảng chiết khấu nhé!" },
      { sender: "user", text: "0789 284 078" },
      { sender: "bot", text: "Dạ em đã nhận được thông tin. Bạn quản lý xưởng sẽ gọi điện báo giá chiết khấu tốt nhất và gửi đơn cho anh/chị qua Zalo ngay ạ!" }
    ]
  }
];
