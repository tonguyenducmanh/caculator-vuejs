<template>
  <div class="td-history">
    <div class="td-history-list">
      <div v-for="(item, index) in history" :key="index" class="td-history-item">
        <span class="td-history-expression">{{ item.expression }}</span>
        <span class="td-history-result">= {{ item.result }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TDHistory',
  props: {
    history: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
.td-history {
  width: 100%;
  height: 150px;
  overflow-y: auto;
  padding: 10px;
}

.td-history-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.td-history-item {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.td-history-expression {
  opacity: 0.7;
}

.td-history-result {
  font-weight: 500;
}

/* Tùy chỉnh thanh cuộn */
.td-history::-webkit-scrollbar {
  width: 4px;
}

.td-history::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

.td-history::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}
</style>
