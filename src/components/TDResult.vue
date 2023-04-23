/** * màn hình hiển thị kết quả * created by : tdmanh1 23/04/2023 thi công màn hình kết quả iphone
caculator clone */
<template>
  <div class="td-result" @click="removeOneChar">
    <div class="td-result-number">{{ finalResult }}</div>
  </div>
</template>
<script>
export default {
  name: 'TDResult',
  props: {
    finalResult: {
      type: Number,
      default: 0
    }
  },
  mounted() {},
  created() {},
  methods: {
    removeOneChar() {
      let me = this
      if (me.$parent && typeof me.$parent.removeOneChar == 'function') {
        me.$parent.removeOneChar()
      }
    }
  }
}
</script>
<style>
.td-result {
  position: relative;
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 10px;
}
.td-result-number {
  font-size: 60px;
}
</style>
