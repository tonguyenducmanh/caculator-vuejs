/** thi công màn hình control created by tdmanh1 23/04/2023 thi công màn hình control iphone
caculator clone */
<template>
  <div class="td-control-container">
    <div class="td-control">
      <template v-for="controlButton in controlButtons" :key="controlButton.key">
        <TDButton
          v-if="currentActiveButton == controlButton.buttonName"
          :buttonType="controlButton.buttonType"
          :keyWord="controlButton.buttonName"
          :size="controlButton.size"
          :buttonActive="true"
        />
        <TDButton
          v-else
          :buttonType="controlButton.buttonType"
          :keyWord="controlButton.buttonName"
          :size="controlButton.size"
          @active-this-button="changeActiveButton"
        />
      </template>
    </div>
  </div>
</template>
<script>
import controlConfig from '@/config/controlConfig.js'
import TDButton from '@/components/TDButton.vue'
export default {
  name: 'TDControl',
  components: {
    TDButton
  },
  data() {
    return {
      controlButtons: controlConfig,
      currentActiveButton: null // tên của nút hiện tại đang active
    }
  },
  mounted() {},
  created() {},
  props: {},
  methods: {
    /**
     * thay đổi nút hiện tại đang active
     */
    changeActiveButton(value) {
      this.currentActiveButton = value
    }
  }
}
</script>
<style>
.td-control-container {
  flex: 1;
  border-bottom-right-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
}
.td-control {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-items: center;
}
</style>
