# Hướng dẫn Cấu hình Google Sheet Lead Capture & Telegram Alert

Tài liệu này hướng dẫn chi tiết cách cấu hình luồng thu thập thông tin khách hàng (lead) tự động từ website **Alex Minh AI** lưu trữ vào Google Sheet và thông báo qua Telegram.

---

## 1. Hướng dẫn thiết lập Google Sheet & Google Apps Script

### Bước 1: Tạo bảng tính Google Sheet
1. Truy cập [Google Sheets](https://sheets.google.com) và tạo một bảng tính mới.
2. Đổi tên bảng tính (ví dụ: `Alex Minh AI - Danh Sách Leads`).
3. Đặt hàng tiêu đề cột đầu tiên (Dòng 1) theo đúng thứ tự sau để dễ theo dõi:
   - **Cột A**: `Thời gian`
   - **Cột B**: `Họ và tên`
   - **Cột C**: `Số điện thoại`
   - **Cột D**: `Lĩnh vực`
   - **Cột E**: `Giải pháp`
   - **Cột F**: `Ngân sách`
   - **Cột G**: `Ghi chú`
   - **Cột H**: `Nguồn`
   - **Cột I**: `Trang đăng ký`
   - **Cột J**: `Địa chỉ IP`
   - **Cột K**: `Trình duyệt (User Agent)`

### Bước 2: Tạo Google Apps Script Web App
1. Trên thanh công cụ Google Sheet, chọn **Tiện ích mở rộng (Extensions)** > **Apps Script**.
2. Xóa toàn bộ mã mặc định trong tệp `Mã.gs` (`Code.gs`) và dán đoạn mã sau vào:

```javascript
// Khóa bảo mật để xác thực yêu cầu gửi từ API Route (ngăn chặn spam ngoài hệ thống)
// HÃY THAY THẾ CHUỒI NÀY BẰNG MỘT MẬT KHẨU KHÓ ĐOÁN CỦA RIÊNG BẠN
const WEBHOOK_SECRET = "alex_minh_secret_secure_key_2026";

function doPost(e) {
  try {
    // Phân tích dữ liệu JSON nhận được từ API route
    const data = JSON.parse(e.postData.contents);
    
    // 1. Xác thực Secret Key
    if (!data.secret || data.secret !== WEBHOOK_SECRET) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "Unauthorized: Invalid secret key."
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // 2. Mở bảng tính và chèn dòng dữ liệu mới
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([
      data.createdAt || new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" }),
      data.fullName || "",
      data.phone || "",
      data.industry || "",
      data.serviceInterest || "",
      data.budget || "",
      data.message || "",
      data.source || "",
      data.pageUrl || "",
      data.ip || "",
      data.userAgent || ""
    ]);
    
    // 3. Trả về kết quả thành công cho Next.js server
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Lead appended successfully."
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Trả về lỗi nếu quá trình ghi dữ liệu thất bại
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Bổ sung hỗ trợ phương thức OPTIONS nếu Vercel Serverless gọi kiểm tra CORS
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT);
}
```

3. Nhấp vào biểu tượng **Lưu (Save)** (hình đĩa mềm) hoặc nhấn `Ctrl + S`.

### Bước 3: Deploy Apps Script thành Web App
1. Nhấp vào nút **Triển khai (Deploy)** ở góc trên bên phải > chọn **Triển khai mới (New deployment)**.
2. Nhấp vào biểu tượng bánh răng **Chọn loại cấu hình (Select type)** > chọn **Ứng dụng web (Web app)**.
3. Cấu hình các thông số sau:
   - **Mô tả (Description)**: `Alex Minh AI Lead Capture v1.0`
   - **Thực thi dưới danh nghĩa (Execute as)**: Chọn **Tôi (Email của bạn)**.
   - **Ai có quyền truy cập (Who has access)**: Chọn **Bất kỳ ai (Anyone)**. *(Lưu ý: Bắt buộc chọn "Bất kỳ ai" thì API server của Vercel mới có quyền gọi POST đến Web App).*
4. Nhấn nút **Triển khai (Deploy)**.
5. Google sẽ yêu cầu ủy quyền tài khoản. Nhấn **Ủy quyền truy cập (Authorize access)** > Chọn tài khoản Google của bạn > Chọn **Advanced (Nâng cao)** > Nhấp vào **Đi tới Dự án không có tên (không an toàn)** > Nhấp **Cho phép (Allow)**.
6. Sao chép URL của ứng dụng web được cung cấp (Có dạng kết thúc bằng `/exec`). Đây chính là giá trị cho biến môi trường `GOOGLE_SHEET_WEBHOOK_URL`.

---

## 2. Hướng dẫn thiết lập Telegram Alert

Hệ thống sẽ gửi tin nhắn cảnh báo trực tiếp đến nhóm Telegram của bạn khi có lead mới.

### Bước 1: Tạo Telegram Bot qua `@BotFather`
1. Mở ứng dụng Telegram, tìm kiếm tài khoản `@BotFather` (có tích xanh chính chủ).
2. Gửi lệnh `/newbot` để bắt đầu tạo Bot mới.
3. Nhập tên hiển thị cho Bot (ví dụ: `Alex Minh Lead Alert`).
4. Nhập username cho Bot (phải kết thúc bằng chữ `bot` hoặc `_bot`, ví dụ: `alexminh_lead_bot`).
5. Sau khi thành công, `@BotFather` sẽ gửi cho bạn một chuỗi **HTTP API Token** (Ví dụ: `1234567890:ABCdefGhIJKlmNoPQRsTUVwxyZ`). Đây chính là giá trị cho biến môi trường `TELEGRAM_BOT_TOKEN`.

### Bước 2: Lấy Chat ID nhận thông báo
Bạn có thể cấu hình gửi tin nhắn trực tiếp cho chính mình (chat riêng với bot) hoặc gửi vào một Nhóm/Kênh chung của đội ngũ tư vấn.

#### Cách 1: Gửi tin nhắn cá nhân
1. Nhấp vào đường link bot của bạn (ví dụ: `t.me/alexminh_lead_bot`) và nhấn **Start** (Bắt đầu).
2. Tìm kiếm bot `@userinfobot` hoặc `@GetMyChatID_Bot` trên Telegram.
3. Nhấn **Start** để bot này gửi lại ID tài khoản Telegram của bạn (Ví dụ: `987654321`). Đây chính là `TELEGRAM_CHAT_ID`.

#### Cách 2: Gửi vào Nhóm chung (Group)
1. Tạo một nhóm Telegram mới hoặc sử dụng nhóm hiện tại và mời Bot của bạn làm thành viên của nhóm.
2. Mời bot `@GetMyChatID_Bot` hoặc một bot lấy chat ID tương tự vào nhóm đó. Bot sẽ tự động hiển thị Chat ID của nhóm (Thường bắt đầu bằng dấu trừ `-`, ví dụ: `-4012345678`).
3. Sau khi lấy được Chat ID, bạn có thể xóa bot lấy ID đó ra khỏi nhóm để tránh loãng.
4. `TELEGRAM_CHAT_ID` của bạn sẽ là chuỗi có dấu trừ (ví dụ: `-4012345678`).

---

## 3. Cấu hình biến môi trường trên Vercel / Local

### A. Chạy ở máy cá nhân (Local Development)
1. Tạo hoặc chỉnh sửa tệp `.env.local` ở thư mục gốc dự án.
2. Điền đầy đủ các thông số sau:

```bash
# URL ứng dụng web nhận từ Google Apps Script Deploy (Bước 3 phần 1)
GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/xxxx/exec

# Mã bí mật trùng khớp với biến WEBHOOK_SECRET đã khai báo trong Apps Script
GOOGLE_SHEET_WEBHOOK_SECRET=alex_minh_secret_secure_key_2026

# Token API của Bot lấy từ @BotFather (Bước 1 phần 2)
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGhIJKlmNoPQRsTUVwxyZ

# Chat ID cá nhân hoặc ID Group Telegram (Bước 2 phần 2)
TELEGRAM_CHAT_ID=987654321
```

*Lưu ý: Tệp `.env.local` đã nằm trong `.gitignore`, tuyệt đối không commit tệp này lên GitHub.*

### B. Cấu hình trên Vercel (Production)
Khi triển khai dự án lên Vercel, hãy truy cập vào bảng điều khiển dự án:
1. Vào **Settings** > **Environment Variables**.
2. Thêm mới 4 biến môi trường sau:
   - `GOOGLE_SHEET_WEBHOOK_URL`
   - `GOOGLE_SHEET_WEBHOOK_SECRET`
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
3. Nhập giá trị thực tế tương ứng vào.
4. Tiến hành Deploy lại (Redeploy) dự án để Vercel nạp các biến môi trường mới vào serverless functions.

---

## 4. Cơ chế hoạt động của API & Client

1. **Client-side Form / Chatbot**:
   - Khi người dùng gửi form hoặc chatbot hoàn tất kịch bản, client sẽ gửi một yêu cầu `POST /api/leads` chứa payload JSON (Họ tên, SĐT, Ngành nghề, Giải pháp, Ngân sách, Ghi chú, Nguồn, URL trang hiện tại).
   - Form có tích hợp trường ẩn honeypot `email_confirm` để chống Spam bots. Nếu trường này bị điền dữ liệu, server sẽ tự động bỏ qua yêu cầu một cách im lặng (trả về status 200 giả thành công để đánh lừa bot).
   
2. **Server-side API Validation**:
   - Chặn các phương thức khác ngoài `POST` (Trả về `405 Method Not Allowed`).
   - Kiểm tra giới hạn tần suất gửi (Rate Limit: Tối đa 5 yêu cầu/phút trên cùng 1 địa chỉ IP).
   - Validate nghiêm ngặt: Họ tên bắt buộc, Số điện thoại phải đúng định dạng mạng viễn thông Việt Nam (`/^(03|05|07|08|09)\d{8}$/`), Nguồn bắt buộc là `lead-form` hoặc `chatbot`.
   
3. **Google Sheet Webhook (Apps Script)**:
   - API route gửi payload JSON kèm mã bí mật `secret` đến Apps Script.
   - Nếu ở môi trường phát triển (Local Development) và thiếu biến `GOOGLE_SHEET_WEBHOOK_URL`, API route sẽ tự động kích hoạt chế độ **Giả lập ghi nhận thành công** kèm cảnh báo trên console log để nhà phát triển kiểm tra giao diện không bị gián đoạn.
   
4. **Telegram Bot Notification**:
   - Tin nhắn cảnh báo được gửi dưới dạng **Plain Text** để tránh lỗi biên dịch của Telegram khi người dùng nhập các ký tự đặc biệt (dễ làm crash API).
   - Nếu lưu thành công vào Google Sheet nhưng gửi Telegram thất bại (ví dụ: mất mạng, sai chat ID), hệ thống vẫn trả về `success: true` cho client để người dùng không cảm thấy phiền toái, đồng thời ghi log cảnh báo lỗi ở server.

---

## 5. Hướng dẫn Kiểm thử (Testing)

### Kiểm thử Local (Môi trường máy khách)
1. Bật Server Next.js bằng lệnh: `npm run dev`.
2. Truy cập biểu mẫu đăng ký trên giao diện, điền thông tin và bấm **Gửi Đăng Ký Tư Vấn**.
3. Nếu không có biến `GOOGLE_SHEET_WEBHOOK_URL` trong `.env.local`, bạn sẽ thấy cảnh báo giả lập trên Server Console:
   `WARNING: GOOGLE_SHEET_WEBHOOK_URL environment variable is missing. Simulating success in development mode.`
4. Điền các biến môi trường thật vào `.env.local` và gửi lại để kiểm thử tích hợp thực tế.

### Kiểm thử Production (Môi trường Vercel)
1. Đảm bảo bạn đã add đủ 4 biến môi trường trên Vercel dashboard.
2. Mở trình duyệt truy cập website của bạn (ví dụ: `https://alexminh.com`).
3. Thực hiện gửi form tư vấn hoặc chat thử với AI Chatbot để kết thúc kịch bản.
4. Mở Google Sheet để xác nhận thông tin đã xuất hiện tức thì.
5. Mở Telegram kiểm tra thông báo đẩy về nhóm của bạn.

---

## 6. Xử lý sự cố thường gặp (Troubleshooting)

| Lỗi / Hiện tượng | Nguyên nhân phổ biến | Cách khắc phục |
| :--- | :--- | :--- |
| **Gửi form báo lỗi đỏ, log server báo: "Unauthorized: Invalid secret key."** | Khóa `GOOGLE_SHEET_WEBHOOK_SECRET` trên server không khớp với khóa `WEBHOOK_SECRET` khai báo ở đầu tệp mã Google Apps Script. | Đồng bộ hóa lại chuỗi mật khẩu bí mật ở cả hai nơi. |
| **Gửi form báo lỗi đỏ, log server báo: "HTTP error 404/405" hoặc "Failed to fetch Apps Script"** | 1. URL Apps Script Web App bị sai.<br>2. Bạn chưa deploy hoặc thay đổi mã mà không tạo phiên bản deploy mới. | 1. Kiểm tra kỹ URL xem có đuôi `/exec` không.<br>2. Trong Apps Script: Nhấn **Deploy** > **Manage deployments** > Chọn Edit > Cập nhật Version lên bản mới nhất (hoặc New deployment) và lưu lại. |
| **Dữ liệu lưu vào Google Sheet được nhưng không nhận được tin nhắn Telegram** | 1. Token Bot hoặc Chat ID bị cấu hình sai.<br>2. Bạn chưa bấm **/start** trò chuyện với Bot để mở quyền gửi tin nhắn. | 1. Sử dụng công cụ kiểm tra của Telegram hoặc kiểm tra console log trên server.<br>2. Bắt buộc nhấp vào Bot và nhấn nút **Bắt đầu (Start)** trước khi gửi lead đầu tiên. |
| **API báo lỗi: "Bạn đang gửi yêu cầu quá nhanh..." (Lỗi 429)** | Bạn đã gửi quá 5 yêu cầu đăng ký tư vấn trong vòng 1 phút từ cùng một IP. | Đây là tính năng bảo vệ chống spam (Rate Limit) hoạt động đúng thiết kế. Hãy đợi 1 phút và thử lại. |
