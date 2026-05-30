# Hướng dẫn Thiết lập Google Search Console & Tối ưu SEO cho alexminh.com

Tài liệu này hướng dẫn từng bước để đăng ký website **Alex Minh AI** với Google Search Console, xác thực quyền sở hữu tên miền, gửi sitemap và yêu cầu Google lập chỉ mục (index) trang web nhanh nhất.

---

## 1. Đăng ký & Xác thực tên miền trên Google Search Console

Google Search Console là công cụ miễn phí giúp bạn theo dõi thứ hạng tìm kiếm, kiểm tra lỗi lập chỉ mục và tối ưu hóa hiển thị website trên Google.

### Bước 1: Thêm tài sản mới (Property)
1. Truy cập [Google Search Console](https://search.google.com/search-console) và đăng nhập bằng tài khoản Google quản trị của bạn.
2. Nhấp vào danh sách tài sản ở góc trên bên trái > chọn **Thêm tài sản (Add property)**.
3. Ở cửa sổ hiện lên, chọn ô **Miền (Domain)** ở bên trái (giúp theo dõi tất cả tên miền phụ `www.alexminh.com`, `alexminh.com` và cả giao thức `http/https`).
4. Nhập tên miền: `alexminh.com` và nhấn **Tiếp tục (Continue)**.

### Bước 2: Xác thực quyền sở hữu qua DNS (Domain Name System)
Google sẽ yêu cầu bạn xác thực quyền sở hữu bằng cách thêm một bản ghi TXT vào cấu hình DNS của nhà đăng ký tên miền (Nhân Hòa, iNET, Mắt Bão...):

1. Sao chép chuỗi xác thực TXT mà Google cung cấp (có dạng: `google-site-verification=xxxxxx...`).
2. Đăng nhập vào trang quản trị tên miền của bạn (ví dụ: Nhân Hòa).
3. Đi tới phần **Cấu hình DNS / Quản lý bản ghi**.
4. Thêm một bản ghi mới với các thông số sau:
   - **Tên bản ghi (Host/Name)**: `@` hoặc để trống (tùy nhà cung cấp tên miền).
   - **Loại bản ghi (Type)**: `TXT`
   - **Giá trị (Value/Address)**: Dán chuỗi xác thực đã sao chép từ Google Search Console.
   - **TTL**: `3600` hoặc mặc định.
5. Nhấn **Lưu** để lưu bản ghi DNS mới.
6. Quay lại trang Google Search Console và nhấn nút **Xác minh (Verify)**.
   *(Lưu ý: Có thể mất từ 5 phút đến vài tiếng để bản ghi DNS có hiệu lực trên Internet. Nếu chưa được, hãy đợi một chút và bấm Xác minh lại).*

---

## 2. Gửi sơ đồ trang web (Sitemap)

Sơ đồ trang web giúp robot Google quét qua toàn bộ cấu trúc và các bài viết của website nhanh hơn. Website Next.js của chúng ta đã được tích hợp Sitemap động tại địa chỉ: `https://alexminh.com/sitemap.xml`.

1. Truy cập Google Search Console của tài sản `alexminh.com`.
2. Trên thanh menu bên trái, nhấp chọn mục **Sơ đồ trang web (Sitemaps)**.
3. Trong ô **Thêm sơ đồ trang web mới (Add a new sitemap)**, nhập phần đuôi: `sitemap.xml`.
4. Nhấn **Gửi (Submit)**.
5. Google sẽ tiến hành đọc sitemap và hiển thị trạng thái **Thành công (Success)** màu xanh. Số lượng URL tìm thấy sẽ hiển thị chi tiết (hiện tại là 7 trang chính thức của MVP).

---

## 3. Kiểm tra tệp Robots.txt

Tệp `robots.txt` hướng dẫn robot tìm kiếm các vùng dữ liệu được phép và không được phép quét trên trang web. Tệp robots.txt động của chúng ta nằm ở: `https://alexminh.com/robots.txt`.

Nội dung mặc định được cấu hình an toàn cho phép tất cả các công cụ tìm kiếm thu thập dữ liệu:
```txt
User-agent: *
Allow: /

Sitemap: https://alexminh.com/sitemap.xml
```

Bạn không cần cấu hình thêm gì cho tệp này vì Next.js đã kết xuất nó tự động dựa trên file cấu hình tên miền `src/lib/site-config.ts`.

---

## 4. Yêu cầu lập chỉ mục trang chủ ngay lập tức (Request Indexing)

Thông thường, Google sẽ mất từ vài ngày đến vài tuần để tự động phát hiện ra website mới. Bạn có thể chủ động đẩy nhanh tiến trình này bằng cách yêu cầu lập chỉ mục thủ công:

1. Tại Google Search Console, nhấp vào ô tìm kiếm **Kiểm tra URL (URL Inspection)** ở trên cùng.
2. Nhập URL trang chủ: `https://alexminh.com/` và nhấn `Enter`.
3. Google sẽ kiểm tra và hiển thị trạng thái: *"URL không nằm trên Google"* (vì đây là trang web mới).
4. Nhấp vào nút **Yêu cầu lập chỉ mục (Request Indexing)**.
5. Hệ thống sẽ tiến hành gửi yêu cầu xếp hàng để robot Google ghé thăm website của bạn. Quá trình index trang chủ thường sẽ hoàn tất trong vòng 24 - 48 giờ sau khi yêu cầu.

---

## 5. Danh sách các Trang/Route đã được tối ưu hóa Metadata

Hệ thống đã được thiết lập các thuộc tính meta tối ưu từ khóa Thanh Hóa, không nhồi nhét từ khóa rác nhằm đạt thứ hạng hiển thị cao nhất:

| Trang | Tiêu đề hiển thị (Meta Title) | Mô tả ngắn (Meta Description) |
| :--- | :--- | :--- |
| **Trang chủ** | `Alex Minh AI - Website & Chatbot AI cho doanh nghiệp Thanh Hóa` | `Alex Minh AI giúp doanh nghiệp Thanh Hóa xây website chuyên nghiệp, chatbot AI tư vấn khách 24/7, thu lead tự động và automation bán hàng.` |
| **Dịch vụ** | `Dịch Vụ Website & Chatbot AI | Alex Minh AI` | `Thiết kế Website chuyên nghiệp, tích hợp Chatbot AI trực chiến 24/7 và hệ thống tự động hóa bán hàng (Automation) cho doanh nghiệp Thanh Hóa.` |
| **Demo Chatbot** | `Trải Nghiệm Demo Chatbot AI | Alex Minh AI` | `Trực tiếp chạy thử và tương tác với các kịch bản chatbot AI tự động hóa bán hàng dành cho Khách sạn Sầm Sơn, Spa, Nha khoa, BĐS, OCOP tại Thanh Hóa.` |
| **Dự án mẫu** | `Dự Án Mẫu & Case Demo | Alex Minh AI` | `Tham khảo các mô hình website và chatbot AI giả lập cho các ngành thế mạnh tại Thanh Hóa như Khách sạn Sầm Sơn, BĐS, Spa, OCOP...` |
| **Bảng giá** | `Bảng Giá Dịch Vụ Website & Chatbot AI | Alex Minh AI` | `Bảng báo giá chi tiết dịch vụ thiết kế website, lập trình chatbot AI và tự động hóa quy trình bán hàng tại Thanh Hóa.` |
| **Blog** | `Blog Chia Sẻ - Kiến Thức Website & AI Chatbot | Alex Minh AI` | `Trang tin tức, cẩm nang và hướng dẫn ứng dụng AI Chatbot, thiết kế website bán hàng hiệu quả dành cho chủ doanh nghiệp tại Thanh Hóa.` |
| **Liên hệ** | `Liên Hệ Tư Vấn & Nhận Demo | Alex Minh AI` | `Liên hệ Alex Minh AI để được tư vấn thiết kế website, tích hợp chatbot và tự động hóa bán hàng cho doanh nghiệp của bạn tại Thanh Hóa.` |
