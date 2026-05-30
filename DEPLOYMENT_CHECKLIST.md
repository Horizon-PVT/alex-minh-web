# DEPLOYMENT CHECKLIST - PRODUCTION SYSTEM

Tài liệu này hướng dẫn chi tiết quy trình chuẩn bị, triển khai và kiểm thử website **Alex Minh AI** trên nền tảng Vercel với tên miền chính thức `alexminh.com`.

---

## 1. Chuẩn bị trước khi Triển khai (Pre-deploy Checklist)
- [ ] **Kiểm tra mã nguồn**:
  - Chạy `npm run lint` để chắc chắn không còn lỗi TypeScript/cú pháp.
  - Chạy `npm run build` ở local để kiểm định không bị lỗi biên dịch tĩnh.
- [ ] **Kiểm duyệt thông tin nhạy cảm**:
  - Bảo đảm không commit file `.env` hoặc `.env.local` lên GitHub.
  - Bảo đảm không có khóa API thật hay mật khẩu thật nào bị ghi cứng (hardcode) trong code.
- [ ] **Đồng bộ thương hiệu & Tên miền**:
  - Domain chính thức là `https://alexminh.com`.
  - Brand hiển thị thống nhất là **Alex Minh AI**.
  - Phần footer chứa tín dụng vận hành nhẹ nhàng: *“Alex Minh AI là thương hiệu tư vấn & triển khai Web, Chatbot AI và Automation, vận hành bởi KodaFlow.”*

---

## 2. Triển khai lên Vercel (Deployment Steps)
- [ ] **GitHub Push**:
  - Đẩy toàn bộ mã nguồn sạch của nhánh chính (main/master) lên kho lưu trữ riêng (private repository) trên GitHub.
- [ ] **Vercel Project Import**:
  - Đăng nhập vào Vercel Dashboard.
  - Bấm **Add New** -> **Project** -> Chọn kho mã nguồn `alex-minh`.
- [ ] **Cấu hình Project Settings**:
  - **Framework Preset**: Chọn **Next.js**.
  - **Build Command**: `npm run build` (Mặc định).
  - **Install Command**: `npm install` (Mặc định).
- [ ] **Cấu hình Environment Variables (Biến môi trường)**:
  - Sao chép các khóa từ file `.env.example` và nhập giá trị tương ứng lên Vercel Environment Variables:
    * `NEXT_PUBLIC_SITE_URL` = `https://alexminh.com`
    * `NEXT_PUBLIC_CONTACT_PHONE` = `0912.345.678` (Hoặc số hotline thật)
    * `NEXT_PUBLIC_ZALO_URL` = `https://zalo.me/0912345678` (Hoặc link Zalo thật)
    * `NEXT_PUBLIC_CONTACT_EMAIL` = `contact@alexminh.com`
  - Các biến liên quan tới Supabase và Telegram Bot để trống hoặc nhập giá trị mẫu (vì MVP hiện tại đang chạy mock client-side).
- [ ] **Bấm Deploy**: Chờ Vercel build thành công và nhận link xem trước dạng `*.vercel.app`.

---

## 3. Cấu hình Tên miền alexminh.com (Domain Setup)
- [ ] **Thêm tên miền trên Vercel**:
  - Vào **Settings** -> **Domains** trong dự án trên Vercel.
  - Nhập `alexminh.com` và bấm **Add**.
  - (Khuyến nghị) Thêm cả bản ghi phụ `www.alexminh.com` và cấu hình tự động redirect về domain chính `alexminh.com`.
- [ ] **Cấu hình DNS tại nhà quản lý tên miền (Domain Registrar)**:
  - Truy cập trang quản trị tên miền của bạn (ví dụ: Mắt Bão, iNET, Pavietnam...) và thêm các bản ghi sau:
    1. **Bản ghi A (cho root domain)**:
       * Host/Name: `@`
       * Loại (Type): `A`
       * Giá trị (Value): `76.76.21.21` (Địa chỉ IP Anycast của Vercel)
    2. **Bản ghi CNAME (cho sub-domain www)**:
       * Host/Name: `www`
       * Loại (Type): `CNAME`
       * Giá trị (Value): `cname.vercel-dns.com.`
- [ ] **Xác thực chứng chỉ SSL**: Chờ khoảng 10 phút - 2 giờ để DNS đồng bộ toàn cầu và Vercel tự động cấp chứng chỉ bảo mật SSL (HTTPS) miễn phí.

---

## 4. Kiểm tra Chất lượng Sau Deploy (Smoke Test Checklist)
Truy cập trực tiếp tên miền chính thức `https://alexminh.com` và thực hiện các bài kiểm tra sau:

- [ ] **Kiểm tra Responsive trên thiết bị di động (Mobile Test)**:
  - Dùng điện thoại thật (iOS/Android) kiểm tra xem giao diện có bị tràn viền chiều ngang không.
  - Kiểm tra hamburger menu mở ra/đóng lại mượt mà.
  - Các ô lưới (grid) hiển thị dạng 1 cột gọn gàng.
- [ ] **Kiểm tra Neo cuộn & Sticky Header**:
  - Nhấp vào các liên kết trên header: Trang chủ, Dịch vụ, Demo Chatbot, Dự án mẫu, Bảng giá, Blog, Liên hệ.
  - Bảo đảm trình duyệt cuộn mượt mà và tiêu đề các section không bị header che mất.
- [ ] **Kiểm tra các Nút Kêu gọi Hành động (CTA & Zalo/Call)**:
  - Nhấp thử nút Hotline ( Emerald) ở góc dưới bên trái xem thiết bị di động có tự động kích hoạt cuộc gọi hay không.
  - Nhấp thử nút Zalo ở góc dưới bên trái xem có mở tab trò chuyện Zalo mới hay không.
- [ ] **Kiểm tra Bong bóng Chatbot AI (Widget)**:
  - Nhấp nút mở chatbot ở góc dưới bên phải.
  - Chọn thử ngành -> Trả lời câu hỏi -> Nhập họ tên & SĐT.
  - Đảm bảo kịch bản chạy trơn tru đến bước xác nhận thành công.
- [ ] **Kiểm tra Biểu mẫu Đăng ký tư vấn (Lead Form)**:
  - Nhập thử thông tin lỗi (ví dụ số điện thoại sai định dạng, thiếu họ tên). Bảo đảm hệ thống hiển thị thông báo lỗi bằng Tiếng Việt.
  - Nhập thông tin đúng. Bảo đảm biểu mẫu hiển thị trạng thái thành công màu xanh lá cây với copywriting thương hiệu "Alex Minh AI".
- [ ] **Kiểm tra SEO & File Cấu hình tự động**:
  - Truy cập `https://alexminh.com/robots.txt`. Kiểm tra xem có hiển thị nội dung Text cho phép bot index và trỏ sitemap đúng không.
  - Truy cập `https://alexminh.com/sitemap.xml`. Kiểm tra xem có hiển thị cấu trúc XML chứa đủ 7 link trang không.
  - Sử dụng công cụ OpenGraph debugger (ví dụ Facebook Sharing Debugger) để kiểm thử hiển thị khi chia sẻ link qua mạng xã hội.

---

## 5. Giới hạn của Phiên bản Hiện tại (Known Limitations)
Cần nắm rõ các điểm giới hạn dưới đây của phiên bản MVP để giải thích với khách hàng hoặc chuẩn bị phát triển thêm:
1. **Lưu trữ biểu mẫu (Form Lead)**: Biểu mẫu hiện tại chỉ thực hiện kiểm tra định dạng dữ liệu ở Client và chạy API giả lập (chờ 1 giây rồi thông báo thành công). Dữ liệu khách hàng **CHƯA được lưu** vào bất kỳ cơ sở dữ liệu thật nào (như Supabase) hay Google Sheets.
2. **Kịch bản Chatbot**: Trợ lý Chatbot đang hoạt động hoàn toàn theo kịch bản rẽ nhánh định sẵn (scripted) và khớp câu hỏi mẫu, **CHƯA tích hợp** API trí tuệ nhân tạo thật (OpenAI/GPT) để trả lời tự do.
3. **Cổng Thông báo**: Chưa kết nối hệ thống tự động bắn tin nhắn báo lead mới về Zalo/Telegram cá nhân của quản trị viên.
4. **Phân tích truy cập**: Chưa nhúng mã theo dõi Google Analytics và chưa khai báo website với Google Search Console để theo dõi lượng tìm kiếm.

---

## 6. Đề xuất Hướng phát triển Tiếp theo (Next Steps)
1. **Giai đoạn 1.3**: Tích hợp gửi dữ liệu Lead Form & Chatbot về Google Sheet (thông qua Google Apps Script hoặc Webhook) để chủ doanh nghiệp quản lý danh sách dễ dàng bằng điện thoại.
2. **Giai đoạn 1.4**: Cấu hình gửi thông báo có Lead mới về Telegram Chat Group bằng Telegram Bot API để phản hồi khách ngay lập tức.
3. **Giai đoạn 2.0**: Huấn luyện chatbot bằng dữ liệu doanh nghiệp thật và kết nối API của OpenAI/Gemini để bot tự trò chuyện thông minh hơn.
