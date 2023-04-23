/** * màn hình hiển thị kết quả * created by : tdmanh1 23/04/2023 thi công màn hình kết quả iphone
caculator clone */
<template>
  <div class="td-result">
    <div class="td-result-number">{{ finalResult }}</div>
  </div>
</template>
<script>
export default {
  name: 'TDResult',
  data() {
    return {
      finalResult: 0
    }
  },
  props: {}
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
