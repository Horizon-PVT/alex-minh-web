# Hướng Dẫn Thiết Lập Bảng Quản Lý Khách Hàng "Alex Minh AI - First 50 Prospects"

Tài liệu này hướng dẫn cách đưa tệp dữ liệu mẫu `.csv` lên Google Sheets và cấu hình giao diện chuyên nghiệp để quản lý chiến dịch tiếp cận 50 khách hàng tiềm năng tại Thanh Hóa.

---

## Bước 1: Tạo Trang Tính Google Sheets Mới
1. Truy cập [Google Sheets (Trang tính)](https://sheets.google.com) trên trình duyệt.
2. Nhấp vào nút **Trống (+)** để tạo một bảng tính mới.
3. Đổi tên bảng tính ở góc trên cùng bên trái thành: 
   > `Alex Minh AI - First 50 Prospects`

---

## Bước 2: Nhập File Mẫu CSV
1. Trên thanh công cụ, chọn **Tệp (File)** ➔ **Nhập (Import)**.
2. Chọn tab **Tải lên (Upload)** và kéo thả tệp [FIRST_50_PROSPECTS_TEMPLATE.csv](file:///d:/Project/A%20Tung/web-alex-minh/docs/sales/FIRST_50_PROSPECTS_TEMPLATE.csv) vào.
3. Cấu hình lựa chọn nhập:
   * *Vị trí nhập*: Chọn **Thay thế trang tính hiện tại (Replace current sheet)**.
   * *Loại dấu phân tách*: Chọn **Tự động phát hiện (Detect automatically)**.
4. Bấm **Nhập dữ liệu (Import data)**.

---

## Bước 3: Tạo Dropdown (Trình đơn thả xuống) Cho Cột "Trạng thái"
1. Bôi đen toàn bộ cột **Trạng thái** (Cột J, từ ô `J2` đến `J51`).
2. Chọn **Dữ liệu (Data)** ➔ **Xác thực dữ liệu (Data validation)**.
3. Bấm **Thêm quy tắc (Add rule)**.
4. Phần *Tiêu chí (Criteria)*, chọn **Trình đơn thả xuống (Dropdown)**.
5. Nhập lần lượt các giá trị trạng thái sau (và gán màu sắc trực quan tùy ý):
   * `New` (Màu xám)
   * `Contacted` (Màu xanh dương nhạt)
   * `Seen` (Màu tím nhạt)
   * `Interested` (Màu xanh dương đậm)
   * `Demo Booked` (Màu vàng)
   * `Demo Done` (Màu cam)
   * `Proposal Sent` (Màu hồng)
   * `Won` (Màu xanh lá cây)
   * `Lost` (Màu đỏ)
6. Bấm **Đã xong (Done)**.

---

## Bước 4: Tạo Dropdown Cho Cột "Ưu tiên"
1. Bôi đen toàn bộ cột **Ưu tiên** (Cột N, từ ô `N2` đến `N51`).
2. Bấm **Thêm quy tắc (Add rule)** trong bảng Xác thực dữ liệu.
3. Phần *Tiêu chí*, chọn **Trình đơn thả xuống**.
4. Nhập 3 mức độ ưu tiên:
   * `High` (Màu đỏ nhạt)
   * `Medium` (Màu vàng nhạt)
   * `Low` (Màu xám nhạt)
5. Bấm **Đã xong**.

---

## Bước 5: Định Dạng Có Điều Kiện Để Tô Màu Cả Hàng (Tùy chọn nâng cao)
Nếu muốn tô màu nền của cả dòng dựa theo Trạng thái để dễ nhìn:
1. Bôi đen toàn bộ bảng dữ liệu (từ `A2` đến `N51`).
2. Chọn **Định dạng (Format)** ➔ **Định dạng có điều kiện (Conditional formatting)**.
3. Phần *Quy tắc định dạng*, chọn **Công thức tùy chỉnh là (Custom formula is)**.
4. Nhập công thức: `=$J2="Won"` và chọn màu nền xanh lá nhạt.
5. Thêm các quy tắc tương tự cho các trạng thái khác, ví dụ: `=$J2="Lost"` (nền đỏ nhạt), `=$J2="Interested"` (nền xanh dương nhạt).
6. Bấm **Đã xong**.

---

## Bước 6: Cố Định (Freeze) Hàng Tiêu Đề
1. Chọn hàng đầu tiên (Hàng số 1 chứa tiêu đề cột).
2. Chọn **Xem (View)** ➔ **Cố định (Freeze)** ➔ **1 hàng (1 row)**.
3. Hàng tiêu đề sẽ luôn hiển thị ở trên cùng khi bạn cuộn chuột xuống dưới.

---

## Bước 7: Bật Bộ Lọc (Filter) Dữ Liệu
1. Chọn toàn bộ bảng tính bằng cách bấm vào ô trống ở góc trên cùng bên trái giao diện (giao giữa cột A và hàng 1).
2. Chọn **Dữ liệu (Data)** ➔ **Tạo bộ lọc (Create a filter)**.
3. Bây giờ bạn có thể dễ dàng lọc theo *Nhóm ngành*, lọc danh sách có ưu tiên *High* hoặc lọc các khách hàng đang ở trạng thái *Interested* để xử lý trước.

---

## Bước 8: Chia Sẻ Quyền Truy Cập Cho Đội Ngũ (Share with Team)
1. Bấm nút **Chia sẻ (Share)** ở góc trên cùng bên phải.
2. Thêm email của các thành viên trong đội ngũ kinh doanh (Sales Team).
3. Cấp quyền thích hợp:
   * **Người chỉnh sửa (Editor)**: Đối với nhân viên trực tiếp tiếp cận và cập nhật trạng thái khách hàng.
   * **Người xem (Viewer)**: Đối với các bên theo dõi tiến độ.
4. Bấm **Gửi (Send)**.
