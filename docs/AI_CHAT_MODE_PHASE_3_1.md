# Hướng Dẫn Kỹ Thuật — Phase 3.1 — Bổ Sung Chế Độ AI Thật Có Kiểm Soát (LOCAL ONLY)

Tài liệu này hướng dẫn cách cấu hình, vận hành và kiểm thử tính năng **Hỏi AI Thật** (Controlled AI Chat Mode) vừa được tích hợp vào hệ thống chatbot demo của **alexminh.com** trên môi trường cục bộ (local).

---

## 1. Kiến Trúc Hoạt Động (Architecture)

```
[UI: Playground / Widget] ➔ Toggle chuyển sang AI Mode
       ▼
[User gửi tin nhắn tự do]
       ▼
[Gọi API POST /api/chat] ➔ Kiểm tra độ dài, giới hạn lịch sử
       ▼
[ai-chat/provider] ➔ Nhận diện Provider (Gemini / OpenAI / Mock)
       ▼
[Gọi AI API / Mock] ➔ Áp dụng System Instruction & Guardrail
       ▼
[Trả về kết quả] ➔ Quét số điện thoại (hasPhone) ➔ Hiển thị CTA trên UI
```

---

## 2. Các Biến Môi Trường Cấu Hình (Environment Variables)
Sao chép các biến sau vào tệp cấu hình của bạn:

```bash
# Lựa chọn provider: gemini | openai | mock
AI_CHAT_PROVIDER=gemini

# Model AI (mặc định: gemini-2.5-flash)
AI_CHAT_MODEL=gemini-2.5-flash

# API Key lấy từ Google AI Studio (Bắt buộc nếu dùng gemini)
GEMINI_API_KEY=your_gemini_api_key_here

# API Key OpenAI nếu muốn đổi nhà cung cấp
OPENAI_API_KEY=your_openai_api_key_here
```

*Lưu ý: Nếu thiếu API key hoặc đặt `AI_CHAT_PROVIDER=mock`, hệ thống sẽ tự động fallback sang chế độ giả lập phản hồi thông minh dựa trên từ khóa mà không làm lỗi/crash ứng dụng.*

---

## 3. Quy Tắc Prompt Hệ Thống & Giới Hạn (Prompt & Guardrails)
* **System Instruction (`src/lib/ai-chat/prompts.ts`)**:
  - Nhập vai làm tư vấn viên ảo **"Alex Minh AI"**.
  - Xưng "em" và gọi khách là "anh/chị".
  - Giới hạn phản hồi ngắn gọn (<100 từ).
  - Chỉ tư vấn trong phạm vi dịch vụ: Xây dựng Website chuẩn SEO, Chatbot AI chăm sóc 24/7 và Automation đồng bộ Google Sheets/Telegram.
  - Lịch sự kéo khách hàng về chủ đề chính nếu họ hỏi ngoài lề hoặc hỏi về các chủ đề cấm (pháp lý, tài chính, y tế).
  - Không hứa hẹn cam kết tăng doanh thu/doanh số cứng để đảm bảo tính khách quan.
* **Kiểm soát chi phí (Cost Control)**:
  - Giới hạn tin nhắn người dùng nhập vào tối đa 1000 ký tự.
  - Chỉ gửi kèm tối đa 8 tin nhắn gần nhất trong lịch sử hội thoại lên API của nhà cung cấp.
  - Timeout gọi API tối đa 12 giây.

---

## 4. Hành Vi Nhận Diện Số Điện Thoại (Lead Detection)
* Backend API sẽ tự động quét tin nhắn của người dùng để tìm số điện thoại dạng Việt Nam.
* Nếu phát hiện, API trả về cờ `hasPhone: true`.
* **Trải nghiệm người dùng (UX)**:
  - Hệ thống **KHÔNG** tự động đẩy thông tin lên Google Sheet/Telegram để tránh duplicate lead ảo trong lúc thử nghiệm.
  - Khung chat sẽ hiển thị một thẻ CTA nổi bật nhấp nháy: **"Nhận tư vấn & demo phù hợp"**.
  - Chỉ khi khách hàng chủ động bấm vào nút này, thông tin mới chính thức được gửi qua API `/api/leads` để cập nhật bảng Sheet và báo về máy Admin.

---

## 5. Hướng Dẫn Cấu Hình Môi Trường Cục Bộ (Local Env Setup)

> [!WARNING]
> Không bao giờ commit tệp `.env.local` lên GitHub. Tệp `.gitignore` của dự án đã được cấu hình dòng `.env*` để tự động bỏ qua tất cả các tệp cấu hình môi trường này.

Để chạy tính năng chat AI thật với Gemini ở môi trường local, bạn làm theo các bước sau:

1. Tạo tệp `.env.local` tại thư mục gốc của dự án (`web-alex-minh/`).
2. Nhập các cấu hình sau (thay thế `<local-gemini-key>` bằng API key thật của bạn lấy từ Google AI Studio):
   ```bash
   AI_CHAT_PROVIDER=gemini
   AI_CHAT_MODEL=gemini-2.5-flash
   GEMINI_API_KEY=<local-gemini-key>
   ```
3. Khởi động môi trường phát triển cục bộ:
   ```bash
   npm run dev
   ```
4. Mở trình duyệt và truy cập liên kết:
   [http://localhost:3000/demo-chatbot-ai](http://localhost:3000/demo-chatbot-ai)
5. Trên khung trò chuyện, chuyển toggle sang chế độ **"Hỏi AI Thật"** để bắt đầu trải nghiệm chat trực tiếp.

---

## 6. Hướng Dẫn Kiểm Thử Thủ Công (Manual Testing)

1. **Test Fallback (Thiếu API Key)**:
   - Xóa `GEMINI_API_KEY` trong file `.env.local` hoặc đổi `AI_CHAT_PROVIDER=mock`.
   - Vào `/demo-chatbot-ai`, chuyển sang tab **Hỏi AI Thật** và gửi câu hỏi.
   - Kiểm chứng chatbot trả lời các câu mock định nghĩa sẵn (về giá, hotline, dịch vụ) tương ứng từ khóa và không bị treo.
2. **Test AI Thật (Có API Key)**:
   - Điền API Key Gemini hợp lệ vào `.env.local`.
   - Hỏi: *"Giá làm web bên em bao nhiêu?"* ➔ Bot trả lời giá tham khảo theo kịch bản Thanh Hóa.
   - Hỏi ngoài phạm vi: *"Công thức nấu nem chua Thanh Hóa là gì?"* ➔ Bot lịch sự hướng câu hỏi về dịch vụ website/chatbot của Alex Minh AI.
   - Nhập: *"Tư vấn cho anh qua sđt 0789.284.078"* ➔ Kiểm chứng thẻ CTA xác nhận xuất hiện. Click nút xác nhận ➔ Kiểm chứng có thông báo lưu lead và báo cáo Telegram thành công.
