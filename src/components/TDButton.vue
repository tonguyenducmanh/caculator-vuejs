/** các nút bấm có trong chương trình created by tdmanh1 23/04/2023 thi công các nút bấm có trong
chương trình */
<template>
  <div
    v-if="buttonType == enumeration.buttonType.Number && size == enumeration.buttonSize.Normal"
    class="td-button-container td-button-common"
    @click="typeNumber"
  >
    <!-- loại nút nhập số -->
    <div class="td-button">
      {{ keyWord }}
    </div>
  </div>
  <div
    v-else-if="buttonType == enumeration.buttonType.Number && size == enumeration.buttonSize.Double"
    class="td-button-container td-button-common td-button-common-double"
    @click="typeNumber"
  >
    <!-- loại nút nhập số -->
    <div class="td-button">
      {{ keyWord }}
    </div>
  </div>
  <div
    v-else-if="buttonType == enumeration.buttonType.SimpleFunction"
    class="td-button-container td-button-simple-function"
    @click="typeSimpleFunction"
    :class="buttonActive == true ? 'td-button-simple-function-active' : ''"
  >
    <!-- loại nút chức năng cơ bản -->
    <div class="td-button">
      {{ keyWord }}
    </div>
  </div>
  <div
    v-else-if="buttonType == enumeration.buttonType.Caculate"
    class="td-button-container td-button-simple-function"
    @click="typeCalulate"
    :class="buttonActive == true ? 'td-button-simple-function-active' : ''"
  >
    <!-- loại nút tính toán -->
    <div class="td-button">
      {{ keyWord }}
    </div>
  </div>
  <div
    v-else-if="buttonType == enumeration.buttonType.Comma"
    class="td-button-container td-button-common"
    @click="typeComma"
  >
    <!-- loại nút dấu phẩy -->
    <div class="td-button">
      {{ keyWord }}
    </div>
  </div>
  <div
    v-else-if="buttonType == enumeration.buttonType.Other"
    class="td-button-container td-button-other"
    @click="typeOther"
  >
    <!-- loại nút tính năng khác -->
    <div class="td-button">
      {{ keyWord }}
    </div>
  </div>
</template>

<script>
import enumeration from '@/enums/enumeration.js'
export default {
  name: 'TDButton',
  data() {
    return {
      enumeration: enumeration
    }
  },
  props: {
    // từ khóa của nút
    keyWord: {
      type: String,
      default: '0'
    },
    // kiểu nút
    buttonType: {
      type: Number,
      default: enumeration.buttonType.Number
    },
    // kích cỡ của nút
    size: {
      type: Number,
      default: enumeration.buttonType.Normal
    },
    // trạng thái đã ấn của nút chức năng
    buttonActive: {
      type: Boolean,
      default: false
    }
  },
  mounted() {},
  created() {},
  methods: {
    /**
     * gọi tới function nhập số của tdmain.vue
     */
    typeNumber() {
      let me = this
      if (
        me.keyWord &&
        me.$parent &&
        me.$parent.$parent &&
        typeof me.$parent.$parent.typeNumber == 'function'
      ) {
        me.$parent.$parent.typeNumber(me.keyWord)
      }
    },
    /**
     * gọi tới function nhập dấu phép tính của tdmain.vue
     */
    typeSimpleFunction() {
      let me = this
      if (
        me.keyWord &&
        me.$parent &&
        me.$parent.$parent &&
        typeof me.$parent.$parent.typeSimpleFunction == 'function'
      ) {
        me.$parent.$parent.typeSimpleFunction(me.keyWord)
        me.$emit('activeThisButton', me.keyWord)
      }
    },
    /**
     * gọi tới function tính toán của tdmain.vue
     */
    typeCalulate() {
      let me = this
      if (
        me.$parent &&
        me.$parent.$parent &&
        typeof me.$parent.$parent.typeCalulate == 'function'
      ) {
        me.$parent.$parent.typeCalulate()
        me.$emit('activeThisButton', me.keyWord)
      }
    },
    /**
     * gọi tới method thêm dấu phẩy
     */
    typeComma() {
      let me = this
      if (me.$parent && me.$parent.$parent && typeof me.$parent.$parent.typeComma == 'function') {
        me.$parent.$parent.typeComma()
        me.$emit('activeThisButton', null)
      }
    },
    /**
     * gọi tới các tính năng khác của máy tính
     */
    typeOther() {
      let me = this
      if (me.$parent && me.$parent.$parent && typeof me.$parent.$parent.typeOther == 'function') {
        me.$parent.$parent.typeOther(me.keyWord)
        me.$emit('activeThisButton', null)
      }
    }
  }
}
</script>

<style>
.td-button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: black;
  cursor: pointer;
}
.td-button {
  color: white;
  font-size: 30px;
}
.td-button-common {
  background-color: #454545;
}
.td-button-common:hover {
  background-color: #5c5c5c;
}
.td-button-common:active {
  background-color: #353535;
}
.td-button-simple-function {
  background-color: #ff930e;
}
.td-button-simple-function:hover {
  background-color: #ffb050;
}
.td-button-simple-function-active {
  background-color: white;
}
.td-button-simple-function-active .td-button {
  color: #ff930e;
}
.td-button-simple-function-active:hover {
  background-color: white;
}
.td-button-other {
  background-color: #b1b1b1;
}
.td-button-other:hover {
  background-color: #cecece;
}
.td-button-other:active {
  background-color: #858585;
}
.td-button-other .td-button {
  color: #000000;
}
/* chiếm 2 slot trong grid */
.td-button-common-double {
  grid-column: span 2;
  width: 90%;
  border-radius: 50px;
}
</style>
