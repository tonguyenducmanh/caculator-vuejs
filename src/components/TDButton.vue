/** các nút bấm có trong chương trình created by tdmanh1 23/04/2023 thi công các nút bấm có trong
chương trình */
<template>
  <div
    v-if="buttonType == enumeration.buttonType.Number && size == enumeration.buttonSize.Normal"
    class="td-button-container td-button-common"
  >
    <!-- loại nút nhập số -->
    <div class="td-button">
      {{ keyWord }}
    </div>
  </div>
  <div
    v-else-if="buttonType == enumeration.buttonType.Number && size == enumeration.buttonSize.Double"
    class="td-button-container td-button-common td-button-common-double"
  >
    <!-- loại nút nhập số -->
    <div class="td-button">
      {{ keyWord }}
    </div>
  </div>
  <div
    v-else-if="buttonType == enumeration.buttonType.SimpleFunction"
    class="td-button-container td-button-simple-function"
  >
    <!-- loại nút chức năng cơ bản -->
    <div class="td-button">
      {{ keyWord }}
    </div>
  </div>
  <div
    v-else-if="buttonType == enumeration.buttonType.Caculate"
    class="td-button-container td-button-simple-function"
  >
    <!-- loại nút tính toán -->
    <div class="td-button">
      {{ keyWord }}
    </div>
  </div>
  <div
    v-else-if="buttonType == enumeration.buttonType.Comma"
    class="td-button-container td-button-common"
  >
    <!-- loại nút dấu phẩy -->
    <div class="td-button">
      {{ keyWord }}
    </div>
  </div>
  <div
    v-else-if="buttonType == enumeration.buttonType.Other"
    class="td-button-container td-button-other"
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
    keyWord: {
      type: String,
      default: '0'
    },
    buttonType: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 0
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
  color: white;
}
.td-button-simple-function:hover {
  background-color: #ffb050;
  color: white;
}
.td-button-simple-function:active {
  background-color: #f1911d;
  color: white;
}
.td-button-caculate {
  background-color: #ffffff;
}
.td-button-caculate .td-button {
  color: #ff930e;
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
