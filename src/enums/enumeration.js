export default {
  //danh sách các nút có trên máy tính
  buttonName: {
    One: '1',
    Two: '2',
    Three: '3',
    Four: '4',
    Five: '5',
    Six: '6',
    Seven: '7',
    Eight: '8',
    Nine: '9',
    Zero: '0',
    Comma: ',',
    Multiple: 'x',
    Divide: '/',
    Plus: '+',
    Minus: '-',
    Percent: '%',
    Opposite: '+/-',
    Clear: 'AC',
    Caculate: '='
  },
  //loại nút được sử dụng
  buttonType: {
    Number: 1, // kiểu nhập số thông thường
    SimpleFunction: 2, // kiểu chức năng cơ bản như cộng trừ nhân chia
    Caculate: 3, // kiểu tính toán dấu bằng
    Comma: 4, // kiểu dấu phẩy
    Other: 5 // các kiểu tính toán khác
  },
  //kích cỡ của nút
  buttonSize: {
    Normal: 1, // kiểu bình thường, độ rộng bằng độ cao
    Double: 2 // kiểu rộng chiếm 2 ô
  },
  //trạng thái nhập hiện tại
  state: {
    typeOne: 1, // đang nhập số thứ nhất
    typeTwo: 2 // đang nhập số thứ hai
  },
  // dấu của phép tính hiện tại
  calculationSign: {
    NotSet: 1, // không thiết lập
    Plus: 2, // cộng
    Minus: 3, // trừ
    Multiple: 4, // nhân
    Divide: 5 // chia
  }
}
