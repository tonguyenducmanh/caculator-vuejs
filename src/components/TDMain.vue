/** * màn hình main của máy tính * created by: tdmanh1 23/04/2023 thi công màn hình main của máy
tính iphone clone */
<template>
  <div class="td-main">
    <div class="td-caculator">
      <!-- phần màn hình kết quả -->
      <TDResult :finalResult="state == enumeration.state.typeOne ? prevNumber : nextNumber" />
      <!-- phần nút bấm -->
      <TDControl />
    </div>
  </div>
</template>
<script>
import TDControl from '@/components/TDControl.vue'
import TDResult from '@/components/TDResult.vue'
import enumeration from '@/enums/enumeration.js'

export default {
  name: 'TDMain',
  components: {
    TDResult,
    TDControl
  },
  data() {
    return {
      enumeration: enumeration,
      prevNumber: 0, // số thứ nhất của phép tính
      nextNumber: 0, // số thứ hai của phép tính
      state: enumeration.state.typeOne, // trạng thái của máy tính : 0 là đang nhập số thứ nhất, 1 là đang nhập số thứ 2
      calculationSign: enumeration.calculationSign.NotSet // dấu của phép tính hiện tại
    }
  },
  mounted() {},
  created() {
    let me = this
    //lấy ra kết quả tính toán cuối cùng
    let lastResult = sessionStorage.getItem('tdCaculateResult')
    if (lastResult) {
      me.prevNumber = Number(lastResult)
    }
  },
  methods: {
    /**
     * function thêm 1 chữ số vào sau số hiện tại ở phần result
     * @author tdmanh1 23-04-2023
     */
    typeNumber(value) {
      let me = this
      // chỉ cho phép nhập tối đa 6 số
      // kiểm tra xem hiện tại đang nhập số thứ nhất hay số thứ 2
      if (value && me.state == enumeration.state.typeOne) {
        me.prevNumber = me.concatNumber(value, me.prevNumber)
      } else {
        me.nextNumber = me.concatNumber(value, me.nextNumber)
      }
    },
    /**
     * hàm thực hiện thêm 1 số vào đằng sau giá trị đang hiển thị trên màn hình
     */
    concatNumber(value, target) {
      if (target.toString() && target.toString().length <= 6) {
        if (target.toString() == '0') {
          //nếu số hiện tại là số 0 thì chỉ việc thay thế nó bằng số mới
          target = Number(value)
        } else if (target.toString().includes('.0')) {
          target = Number(
            target.toString().substring(0, target.toString().length - 1) + value.toString()
          )
        } else {
          // nếu số hiện tại không phải số 0 thì cộng chuỗi
          target = Number(target.toString() + value.toString())
        }
      }
      return target
    },
    /**
     * function nhập dấu của phép tính
     */
    typeSimpleFunction(value) {
      let me = this
      if (value) {
        me.state = enumeration.state.typeTwo
      }
      switch (value) {
        case enumeration.buttonName.Plus:
          me.calculationSign = enumeration.calculationSign.Plus
          break
        case enumeration.buttonName.Minus:
          me.calculationSign = enumeration.calculationSign.Minus
          break
        case enumeration.buttonName.Multiple:
          me.calculationSign = enumeration.calculationSign.Multiple
          break
        case enumeration.buttonName.Divide:
          me.calculationSign = enumeration.calculationSign.Divide
          break
        default:
          me.calculationSign = enumeration.calculationSign.NotSet
          break
      }
    },
    /**
     * thực hiện tính toán
     */
    typeCalulate() {
      // lấy ra số thứ nhất số thứ 2 và thực hiện tính toán
      let me = this
      switch (me.calculationSign) {
        case enumeration.calculationSign.Plus:
          me.prevNumber = me.prevNumber + me.nextNumber
          me.nextNumber = 0
          break
        case enumeration.calculationSign.Minus:
          me.prevNumber = me.prevNumber - me.nextNumber
          me.nextNumber = 0
          break
        case enumeration.calculationSign.Multiple:
          me.prevNumber = me.prevNumber * me.nextNumber
          me.nextNumber = 0
          break
        case enumeration.calculationSign.Divide:
          me.prevNumber = me.prevNumber / me.nextNumber
          me.nextNumber = 0
          break
        default:
          break
      }
      me.state = enumeration.state.typeOne
    },
    /**
     * thêm dấu phẩy vào sau số
     */
    typeComma() {
      let me = this
      if (me.state == enumeration.state.typeOne && me.prevNumber.toString() != '0') {
        me.prevNumber = me.prevNumber.toFixed(1)
      }
      if (me.state != enumeration.state.typeOne && me.nextNumber.toString() != '0') {
        me.nextNumber = me.nextNumber.toFixed(1)
      }
    },
    /**
     * xử lý các nút còn lại của chương trình
     */
    typeOther(value) {
      let me = this
      if (me.state == enumeration.state.typeTwo && me.nextNumber != 0) {
        //luôn chuyển về trạng thái nhập số thứ nhất
        me.state = enumeration.state.typeOne
        me.prevNumber = me.nextNumber
        me.nextNumber = 0
      }
      switch (value) {
        case enumeration.buttonName.Clear:
          me.prevNumber = 0
          break
        case enumeration.buttonName.Opposite:
          me.prevNumber = 0 - me.prevNumber
          break
        case enumeration.buttonName.Percent:
          me.prevNumber = 100 / me.prevNumber
          break
        default:
          break
      }
    },
    /**
     * xóa 1 ký tự khỏi số đang nhập
     */
    removeOneChar() {
      let me = this
      if (me.state == enumeration.state.typeOne) {
        me.prevNumber = Number(
          me.prevNumber.toString().substring(0, me.prevNumber.toString().length - 1)
        )
        if (isNaN(me.prevNumber)) {
          me.prevNumber = 0
        }
      } else {
        me.nextNumber = Number(
          me.nextNumber.toString().substring(0, me.nextNumber.toString().length - 1)
        )
        if (isNaN(me.nextNumber)) {
          me.nextNumber = 0
        }
      }
    }
  },
  props: {}
}
</script>
<style>
.td-main {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.td-caculator {
  background-color: black;
  color: white;
  width: 380px;
  height: 600px;
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
}
</style>
