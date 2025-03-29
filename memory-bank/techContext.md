# Technical Context

## Project Structure
```
src/
├── App.vue              # Component gốc
├── main.js             # Entry point
├── components/         # Các components
│   ├── TDMain.vue     # Component chính của máy tính
│   ├── TDControl.vue  # Phần điều khiển (các nút)
│   ├── TDResult.vue   # Phần hiển thị kết quả
│   ├── TDHistory.vue  # Phần hiển thị lịch sử tính toán
│   └── TDButton.vue   # Component nút bấm
├── config/
│   └── controlConfig.js # Cấu hình cho các nút
├── enums/
│   └── enumeration.js  # Các enum của ứng dụng
└── assets/
    └── main.css       # CSS chung
```

## Key Technologies
- Vue.js 3: Framework frontend chính
- Vite: Build tool và dev server
- ESLint: Linting tool
- Prettier: Code formatting

## Dependencies
### Production
- vue: ^3.2.47

### Development
- @vitejs/plugin-vue: ^4.0.0
- vite: ^4.1.4
- eslint: ^8.34.0
- prettier: ^2.8.4

## State Management
- Sử dụng Vue Data Properties để quản lý state
- State chính:
  - prevNumber: Số thứ nhất của phép tính
  - nextNumber: Số thứ hai của phép tính
  - state: Trạng thái đang nhập (số 1 hay số 2)
  - calculationSign: Dấu của phép tính hiện tại

## Drag and Drop Implementation
- Sử dụng native DOM events để xử lý kéo thả:
  - mousedown: Khởi tạo trạng thái kéo
  - mousemove: Tính toán độ dịch chuyển và cập nhật scrollTop
  - mouseup/mouseleave: Kết thúc trạng thái kéo
- State cho kéo thả:
  - isDragging: Trạng thái đang kéo
  - startY: Vị trí Y bắt đầu kéo
  - scrollTop: Vị trí cuộn hiện tại

## Data Persistence
- Sử dụng sessionStorage để lưu kết quả tính toán cuối cùng
- Key: 'tdCaculateResult'

## Code Style
- ESLint và Prettier được cấu hình để đảm bảo code style nhất quán
- Sử dụng camelCase cho tên biến và hàm
- Tên component prefix với 'TD'
