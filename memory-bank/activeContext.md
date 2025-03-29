# Active Context

## Trạng Thái Hiện Tại
- Dự án đã được xây dựng hoàn chỉnh
- Các chức năng cơ bản đã hoạt động
- UI đã được styling giống máy tính iPhone

## Cấu Trúc Chính
- Sử dụng component-based architecture
- State management tập trung tại TDMain.vue
- Cấu hình nút bấm được tách riêng trong controlConfig.js

## Các Quyết Định Kỹ Thuật
1. **State Management**
   - Không sử dụng Vuex/Pinia vì scope nhỏ
   - Quản lý state đơn giản với Vue Data Properties
   - Sử dụng sessionStorage cho persistence

2. **UI/UX**
   - Thiết kế responsive với CSS flexbox
   - Sử dụng grid layout cho bàn phím
   - Giới hạn 6 chữ số để UI gọn gàng

3. **Code Organization**
   - Tách biệt rõ ràng giữa components
   - Enum và config được tách thành module riêng
   - CSS được tổ chức theo component

## Những Điểm Cần Lưu Ý
1. **Giới Hạn**
   - Chỉ hỗ trợ các phép tính cơ bản
   - Không hỗ trợ keyboard input
   - Giới hạn số chữ số hiển thị

2. **Xử Lý Edge Cases**
   - Chia cho 0
   - Overflow số
   - Số thập phân dài

## Kế Hoạch Tiếp Theo
1. **Cải Tiến Có Thể**
   - Thêm hỗ trợ keyboard
   - Mở rộng số chức năng tính toán
   - Thêm history cho các phép tính
   - Tối ưu hiệu năng cho số lớn
