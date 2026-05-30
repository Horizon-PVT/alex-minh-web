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

## 6. Các tính năng đã hoàn thiện trong các Phase trước
* **Lead Capture & Tự động hóa**: Biểu mẫu tư vấn và chatbot đã được tích hợp API thật gửi dữ liệu tự động về **Google Sheets** và bắn thông báo lead nóng tức thời về **Telegram**.
* **Đo lường & SEO**: Google Analytics 4 (GA4) đã được tích hợp an toàn qua biến môi trường `NEXT_PUBLIC_GA_ID`, và sitemap.xml/robots.txt đã được kiểm tra trên Google Search Console.
* **Bộ Nội Dung SEO Local**: Đã lập trình hệ thống dynamic routes `/blog/[slug]` và xuất bản 5 bài viết tối ưu SEO local cho thị trường Thanh Hóa.

---

## 7. Bộ Tài Liệu Bán Hàng & Tiếp Cận Khách Hàng (Sales Kit)
Để phục vụ quá trình giới thiệu sản phẩm và tiếp cận khách hàng thực tế tại Thanh Hóa, bộ tài liệu bán hàng đã được tạo sẵn trong thư mục `docs/sales/`:

1. 👉 **[Bảng Giá Các Gói Dịch Vụ](file:///d:/Project/A%20Tung/web-alex-minh/docs/sales/PRICE_PACKAGES.md)**: Chi tiết về đối tượng phù hợp, tính năng và kết quả kỳ vọng cho từng gói dịch vụ.
2. 👉 **[Mẫu Tin Nhắn Tiếp Cận](file:///d:/Project/A%20Tung/web-alex-minh/docs/sales/ZALO_FACEBOOK_OUTREACH.md)**: Kịch bản nhắn tin tiếp cận tự nhiên qua Zalo/Facebook cho từng nhóm ngành du lịch, spa, BĐS, giáo dục.
3. 👉 **[Kịch Bản Gọi Điện 3 Phút](file:///d:/Project/A%20Tung/web-alex-minh/docs/sales/CALL_SCRIPT_3_MIN.md)**: Cách thức gọi điện tiếp cận lạnh, vượt qua các từ chối phổ biến để chốt lịch gửi demo.
4. 👉 **[Kịch Bản Trình Bày Demo 15 Phút](file:///d:/Project/A%20Tung/web-alex-minh/docs/sales/DEMO_SCRIPT_15_MIN.md)**: Hướng dẫn chi tiết 15 phút trình diễn tính năng website, chatbot và luồng lead đổ về Google Sheets/Telegram.
5. 👉 **[Checklist Khảo Sát Khách Hàng](file:///d:/Project/A%20Tung/web-alex-minh/docs/sales/CONSULTATION_CHECKLIST.md)**: Phiếu thông tin nhanh cần ghi nhận khi tư vấn thiết kế cho khách hàng.
6. 👉 **[Kế Hoạch Tiếp Cận 50 Khách Đầu Tiên](file:///d:/Project/A%20Tung/web-alex-minh/docs/sales/FIRST_50_LEADS_PLAN.md)**: Lộ trình tìm kiếm địa chỉ và tiếp cận các nhóm khách hàng tiềm năng tại Thanh Hóa trong 7 ngày đầu.

