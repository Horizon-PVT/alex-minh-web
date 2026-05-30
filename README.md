# Alex Minh AI - Website & Chatbot AI cho doanh nghiệp Thanh Hóa

Đây là mã nguồn MVP website của **Alex Minh AI** — giải pháp Website, Chatbot AI & Automation bán hàng chuyên sâu cho doanh nghiệp và hộ kinh doanh tại Thanh Hóa (Khách sạn Sầm Sơn, BĐS, Spa, Nha khoa, Giáo dục, Sản phẩm OCOP...).

Dự án được xây dựng bằng **Next.js (App Router) + TypeScript + Tailwind CSS**.

---

## 1. Hướng dẫn chạy dự án dưới Local

### Yêu cầu hệ thống
* Node.js phiên bản **18.x** trở lên.
* npm hoặc pnpm/yarn.

### Cài đặt và Khởi chạy
1. Cài đặt các thư viện phụ thuộc:
   ```bash
   npm install
   ```
2. Chạy môi trường phát triển (Development server):
   ```bash
   npm run dev
   ```
3. Mở trình duyệt và truy cập: `http://localhost:3000` để xem kết quả.

---

## 2. Hướng dẫn đóng gói & Kiểm tra (Build & Lint)

Trước khi triển khai lên production, bạn bắt buộc phải kiểm tra lỗi cú pháp và chạy biên dịch đóng gói để đảm bảo hệ thống không bị lỗi:

1. Chạy linter kiểm tra cú pháp TypeScript/ESLint:
   ```bash
   npm run lint
   ```
2. Đóng gói sản phẩm thành các trang tĩnh tối ưu:
   ```bash
   npm run build
   ```
3. Chạy thử bản build production trên môi trường local:
   ```bash
   npm run start
   ```

---

## 3. Cấu trúc thư mục mã nguồn (Project Structure)

```txt
web-alex-minh/
├── src/
│   ├── app/                    # Next.js App Router (Các Routes chính)
│   │   ├── page.tsx            # Trang chủ (Homepage)
│   │   ├── layout.tsx          # Bố cục toàn trang (Header, Footer, Widgets)
│   │   ├── globals.css         # Cấu hình Tailwind CSS v4 & Styling chung
│   │   ├── robots.ts           # Cấu hình file robots.txt động theo domain
│   │   ├── sitemap.ts          # Cấu hình sơ đồ trang sitemap.xml động
│   │   ├── dich-vu/            # Trang chi tiết dịch vụ
│   │   ├── demo-chatbot-ai/    # Trang phòng thử nghiệm Chatbot AI
│   │   ├── du-an-mau/          # Trang giới thiệu các case demo
│   │   ├── bang-gia/           # Trang so sánh các gói giá
│   │   ├── lien-he/            # Trang liên hệ
│   │   └── blog/               # Trang blog SEO Local
│   │
│   ├── components/             # Các Components UI tái sử dụng
│   │   ├── site-header.tsx     # Menu điều hướng responsive
│   │   ├── site-footer.tsx     # Chân trang & chính sách bảo hành
│   │   ├── hero-section.tsx    # Section Hero
│   │   ├── problem-section.tsx # Section Nỗi đau khách hàng
│   │   ├── solution-section.tsx# Section Giải pháp AI
│   │   ├── services-section.tsx# Section Thẻ dịch vụ
│   │   ├── industry-demo-section.tsx # Thẻ chọn ngành chạy thử chatbot
│   │   ├── pricing-section.tsx # Section Bảng giá
│   │   ├── faq-section.tsx     # Section Hỏi đáp (Accordion)
│   │   ├── lead-form.tsx       # Form liên hệ có validate phía Client
│   │   ├── chatbot-demo-widget.tsx # Bong bóng chatbot tư vấn góc màn hình
│   │   └── floating-contact.tsx # Nút Hotline & Zalo nổi nhanh
│   │
│   └── lib/                    # Cấu hình tĩnh & cơ sở dữ liệu giả lập
│       ├── site-config.ts      # Chứa thông tin liên hệ, SEO chung
│       ├── services.ts         # Dữ liệu dịch vụ
│       ├── industries.ts       # Dữ liệu kịch bản các ngành nghề
│       ├── pricing.ts          # Dữ liệu các gói dịch vụ
│       └── chatbot-script.ts   # Kịch bản hội thoại của Chatbot AI
├── .env.example                # File biến môi trường mẫu
└── DEPLOYMENT_CHECKLIST.md     # Danh sách kiểm tra chất lượng trước/sau deploy
```

---

## 4. Cách thay đổi thông tin liên hệ (Hotline / Zalo / Email / SEO)

Mọi thông tin liên hệ và tên miền chính thức của Alex Minh AI đều được quản lý tập trung tại file:
👉 **[src/lib/site-config.ts](file:///d:/Project/A%20Tung/web-alex-minh/src/lib/site-config.ts)**

Khi thay đổi giá trị tại đây, website sẽ tự động cập nhật đồng bộ ở mọi nơi (Header, Footer, Nút liên hệ nổi, Form liên hệ, Robots và Sitemap):

```typescript
export const siteConfig = {
  name: "Alex Minh AI",
  tagline: "Website • Chatbot AI • Automation bán hàng",
  headline: "Website & Chatbot AI cho doanh nghiệp Thanh Hóa",
  description: "Tư vấn khách 24/7, thu lead tự động...",
  address: "Thành phố Thanh Hóa, Thanh Hóa",
  hotline: "0912.345.678",                 // Đổi số điện thoại tại đây
  zalo: "https://zalo.me/0912345678",      // Đổi đường link Zalo tại đây
  email: "contact@alexminh.com",           // Đổi hòm thư tại đây
  domain: "https://alexminh.com",          // Đổi tên miền chính thức tại đây
  // ...
};
```

---

## 5. Hướng dẫn Triển khai Vercel & Cấu hình Domain alexminh.com

Dự án Next.js này được tối ưu nhất trên nền tảng **Vercel** bằng các bước sau:

1. **Đẩy code lên GitHub**: Tạo repository riêng tư trên GitHub và push mã nguồn lên.
2. **Import Project**: Truy cập [Vercel](https://vercel.com/), chọn repository `alex-minh`.
3. **Cấu hình Environment Variables**:
   * Sao chép các khóa từ file `.env.example` vào cấu hình Vercel.
   * Cập nhật `NEXT_PUBLIC_SITE_URL` thành `https://alexminh.com`.
4. **Deploy**: Bấm nút **Deploy**, chờ dự án compile xong.
5. **Cấu hình DNS cho alexminh.com**:
   - Tại Vercel -> Settings -> Domains: Thêm tên miền `alexminh.com`.
   - Tại nhà cung cấp tên miền của bạn, cấu hình các bản ghi sau:
     * Bản ghi `@` (Type A): Giá trị `76.76.21.21`
     * Bản ghi `www` (Type CNAME): Giá trị `cname.vercel-dns.com.`
6. **Xác thực**: Chờ DNS đồng bộ và Vercel cấp chứng chỉ SSL HTTPS tự động.

---

## 6. Giới hạn đã biết của Phiên bản Hiện tại (Known Limitations)

* **Gửi biểu mẫu (Form Lead)**: Biểu mẫu đăng ký tư vấn hiện tại đang hoạt động ở mức **MOCK API** phía Client. Khi bấm gửi, hệ thống sẽ kiểm tra hợp lệ và thông báo thành công nhưng **CHƯA lưu** dữ liệu vào Supabase hay Google Sheets thật.
* **Kịch bản Chatbot**: Trợ lý chatbot thông minh đang chạy theo **Kịch bản mẫu rẽ nhánh** (scripted) và khớp câu hỏi từ bộ FAQ có sẵn, **CHƯA tích hợp** API trí tuệ nhân tạo (OpenAI/GPT) để trả lời tự do.
* **Hệ thống Cảnh báo**: Chưa kết nối gửi thông báo lead mới tự động về Zalo/Telegram.
* **Phân tích SEO**: Chưa liên kết mã theo dõi Google Analytics và Google Search Console.

*Mọi tài liệu chi tiết quy trình kiểm thử và rà soát chất lượng trước khi public đều được viết tại file: [DEPLOYMENT_CHECKLIST.md](file:///d:/Project/A%20Tung/web-alex-minh/DEPLOYMENT_CHECKLIST.md).*
