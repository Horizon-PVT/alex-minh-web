export interface ChatStep {
  id: string;
  type: "question" | "input" | "message";
  text: string;
  options?: { label: string; value: string; nextStepId: string }[];
  inputPlaceholder?: string;
  inputKey?: string;
  inputType?: "text" | "tel";
  nextStepId?: string;
}

export const chatbotScript: Record<string, ChatStep> = {
  welcome: {
    id: "welcome",
    type: "question",
    text: "Xin chào! Em là trợ lý AI giả lập của Alex Minh AI. Anh/chị đang kinh doanh trong lĩnh vực nào ạ?",
    options: [
      { label: "Khách sạn / Du lịch Sầm Sơn", value: "tourism", nextStepId: "has_website" },
      { label: "Bất động sản / Cho thuê", value: "realestate", nextStepId: "has_website" },
      { label: "Spa / Nha khoa / Phòng khám", value: "spa", nextStepId: "has_website" },
      { label: "Trung tâm giáo dục / Tiếng Anh", value: "education", nextStepId: "has_website" },
      { label: "OCOP / Đặc sản địa phương", value: "ocop", nextStepId: "has_website" },
      { label: "Lĩnh vực khác", value: "other", nextStepId: "has_website" }
    ]
  },
  has_website: {
    id: "has_website",
    type: "question",
    text: "Lĩnh vực rất tiềm năng! Anh/chị đã xây dựng website riêng cho hoạt động kinh doanh này chưa ạ?",
    options: [
      { label: "Đã có website rồi", value: "yes", nextStepId: "main_channel" },
      { label: "Chưa có website", value: "no", nextStepId: "main_channel" }
    ]
  },
  main_channel: {
    id: "main_channel",
    type: "question",
    text: "Hiện tại, khách hàng liên hệ với anh/chị nhiều nhất qua kênh nào?",
    options: [
      { label: "Facebook Fanpage", value: "facebook", nextStepId: "bot_need" },
      { label: "Zalo (Cá nhân / OA)", value: "zalo", nextStepId: "bot_need" },
      { label: "Gọi Hotline trực tiếp", value: "call", nextStepId: "bot_need" },
      { label: "Kênh khác", value: "other", nextStepId: "bot_need" }
    ]
  },
  bot_need: {
    id: "bot_need",
    type: "question",
    text: "Anh/chị mong muốn Chatbot AI hỗ trợ việc gì nhất trong kinh doanh?",
    options: [
      { label: "Tự động tư vấn sản phẩm/dịch vụ 24/7", value: "consult", nextStepId: "ask_name" },
      { label: "Đặt lịch hẹn / Đặt phòng tự động", value: "booking", nextStepId: "ask_name" },
      { label: "Thu thập SĐT/Zalo của khách tiềm năng", value: "lead", nextStepId: "ask_name" },
      { label: "Giải quyết câu hỏi lặp đi lặp lại", value: "faq", nextStepId: "ask_name" }
    ]
  },
  ask_name: {
    id: "ask_name",
    type: "input",
    text: "Rất rõ ràng ạ! Em có thể xin phép biết tên của anh/chị để dễ xưng hô được không?",
    inputPlaceholder: "Nhập tên của anh/chị...",
    inputKey: "userName",
    inputType: "text",
    nextStepId: "ask_phone"
  },
  ask_phone: {
    id: "ask_phone",
    type: "input",
    text: "Chào anh/chị {userName}. Để Alex Minh AI có thể thiết kế riêng một bản demo Chatbot AI phù hợp nhất và gửi qua Zalo, anh/chị vui lòng để lại số điện thoại (có Zalo) nhé!",
    inputPlaceholder: "Nhập số điện thoại/Zalo của anh/chị...",
    inputKey: "userPhone",
    inputType: "tel",
    nextStepId: "success"
  },
  success: {
    id: "success",
    type: "message",
    text: "Cảm ơn anh/chị {userName} ({userPhone})! Em đã ghi nhận yêu cầu làm chatbot demo cho ngành {industryName}. Đội ngũ Alex Minh AI sẽ liên hệ và gửi bản demo chi tiết qua Zalo cho anh/chị trong vòng 24h tới! Chúc anh/chị một ngày tốt lành ạ!"
  }
};
