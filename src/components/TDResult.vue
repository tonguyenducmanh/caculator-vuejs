/** * màn hình hiển thị kết quả * created by : tdmanh1 23/04/2023 thi công màn hình kết quả iphone
caculator clone */
<template>
  <div class="td-result" @click="removeOneChar">
  <div class="td-result-number" :style="{ fontSize: calculateFontSize }">{{ formattedResult }}</div>
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
  computed: {
    formattedResult() {
      // Format số lớn với dấu phẩy phân cách hàng nghìn
      return this.finalResult.toLocaleString('en-US');
    },
    calculateFontSize() {
      const numLength = this.finalResult.toString().length;
      if (numLength > 9) {
        // Giảm font size dần theo số lượng chữ số
        const reducedSize = 60 - ((numLength - 9) * 5);
        // Giới hạn font size tối thiểu là 20px
        return `${Math.max(20, reducedSize)}px`;
      }
      return '60px'; // Font size mặc định
    }
  },
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
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 10px;
  overflow-x: auto;
}

.td-result::-webkit-scrollbar {
  height: 4px;
}

.td-result::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

.td-result::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}

.td-result-number {
  font-size: 60px;
  white-space: nowrap;
  padding: 0 10px;
}
</style>
