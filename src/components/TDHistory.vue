<template>
  <div
    class="td-history"
    ref="historyContainer"
    @mousedown="startDrag"
    @mousemove="handleDrag"
    @mouseup="stopDrag"
    @mouseleave="stopDrag"
    :class="{ dragging: isDragging }"
  >
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
  },
  data() {
    return {
      isDragging: false,
      startY: 0,
      scrollTop: 0
    }
  },
  methods: {
    startDrag(event) {
      this.isDragging = true
      this.startY = event.pageY
      this.scrollTop = this.$refs.historyContainer.scrollTop
      document.body.style.cursor = 'grabbing'
    },
    handleDrag(event) {
      if (!this.isDragging) return

      event.preventDefault()
      const deltaY = this.startY - event.pageY
      this.$refs.historyContainer.scrollTop = this.scrollTop + deltaY
    },
    stopDrag() {
      this.isDragging = false
      document.body.style.cursor = 'default'
    }
  }
}
</script>

<style>
.td-history {
  width: 100%;
  height: 150px;
  overflow-y: auto;
  overflow-x: auto;
  padding: 10px;
  cursor: grab;
  user-select: none;
}

.td-history.dragging {
  cursor: grabbing;
}

.td-history-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.td-history-item {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
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
