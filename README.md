# Pukido — Careers / Employer-branding site

Trang tuyển dụng & làm hình ảnh công ty cho **Pukido Group**, song ngữ Việt–Anh,
tĩnh (static), triển khai bằng GitHub Pages. Xây trên **Pukido Design System**
(màu xanh dương, slogan *Keep Moving Forward*, quy tắc 60/30/10).

## Cấu trúc

```
Website Pukido/
├─ index.html          # Toàn bộ nội dung 1 trang (single-page)
├─ css/
│  ├─ tokens.css       # Design tokens: màu, typography, spacing (từ Pukido Design System)
│  └─ site.css         # Layout + component styles
├─ js/
│  ├─ i18n.js          # Chuyển ngôn ngữ VI/EN
│  └─ main.js          # Menu mobile, hiệu ứng scroll, icon, năm
├─ assets/             # Logo + ảnh đội ngũ
└─ README.md
```

## Song ngữ (VI / EN)

- Tiếng Việt là ngôn ngữ mặc định, nằm trực tiếp trong HTML (tốt cho SEO & khi tắt JS).
- Bản tiếng Anh nằm ở thuộc tính `data-en="..."` trên từng phần tử.
- Người dùng bấm nút **VI / EN** ở thanh nav để chuyển; lựa chọn được ghi nhớ (localStorage).

Muốn sửa chữ: sửa text tiếng Việt trong thẻ, và sửa `data-en` cho bản tiếng Anh.

## Xem thử tại máy

Mở bằng một web server tĩnh bất kỳ (không mở trực tiếp `file://` để JS chạy đúng):

```bash
# Python
python -m http.server 5173
# rồi mở http://localhost:5173
```

## Deploy lên GitHub Pages

1. Tạo repo trên GitHub và đẩy toàn bộ thư mục này lên nhánh `main`.
   ```bash
   git init
   git add .
   git commit -m "Pukido careers site"
   git branch -M main
   git remote add origin https://github.com/<user>/<repo>.git
   git push -u origin main
   ```
2. Trên GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   chọn branch `main` / thư mục `/ (root)`, Save.
3. Vài phút sau site sẽ chạy tại `https://<user>.github.io/<repo>/`.
   (Có sẵn file `.nojekyll` để GitHub Pages phục vụ nguyên trạng.)
4. (Tuỳ chọn) Trỏ tên miền riêng (vd `tuyendung.pukido.com`) ở mục **Custom domain**.

## Những chỗ cần bạn cập nhật

- **Email nhận hồ sơ:** hiện dùng `binhbn@pukido.com` trong các nút "Ứng tuyển"
  và footer. Tìm–thay bằng email tuyển dụng chính thức nếu có (vd `tuyendung@pukido.com`).
- **Địa điểm làm việc:** các job card chưa ghi thành phố/địa chỉ cụ thể — thêm nếu cần.
- **Vị trí đang tuyển:** thêm/bớt/sửa trong khối `#jobs` của `index.html`.
- **Ảnh đội ngũ:** hiện dùng 2 ảnh từ design system (`assets/photo-team-1.jpg`,
  `photo-team-3.jpg`). Bổ sung ảnh thật (văn phòng, team, sự kiện Amazon) để trang
  giàu hình ảnh hơn — thay trực tiếp hoặc thêm vào mục "Cuộc sống tại Pukido".
- **Số liệu:** trang chỉ dùng số liệu có thật từ handbook (năm 2017, 4 lộ trình,
  5 giá trị). Không tự thêm số liệu doanh thu/nhân sự chưa được xác nhận.

## Nội dung lấy từ đâu

- **Handbook Pukido Ver3.2.0** — lịch sử, sứ mệnh/tầm nhìn, 5 giá trị cốt lõi,
  đãi ngộ, 4 lộ trình sự nghiệp, phương pháp làm việc.
- **Pukido Design System** (Claude Design) — màu, font, component, logo, ảnh đội ngũ.
- **ecomgreenway.com** — bối cảnh mảng đào tạo.
