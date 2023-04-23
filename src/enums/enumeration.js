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
  buttonSize: {
    Normal: 1, // kiểu bình thường, độ rộng bằng độ cao
    Double: 2 // kiểu rộng chiếm 2 ô
  }
}
