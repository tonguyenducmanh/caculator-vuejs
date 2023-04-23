/** * màn hình main của máy tính * created by: tdmanh1 23/04/2023 thi công màn hình main của máy
tính iphone clone */
<template>
  <div class="td-main">
    <div class="td-caculator">
      <!-- phần màn hình kết quả -->
      <TDResult />
      <!-- phần nút bấm -->
      <TDControl />
    </div>
  </div>
</template>
<script>
import TDControl from '@/components/TDControl.vue'
import TDResult from '@/components/TDResult.vue'
export default {
  name: 'TDMain',
  components: {
    TDResult,
    TDControl
  },
  data() {
    return {}
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
