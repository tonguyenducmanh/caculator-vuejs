/** thi công màn hình control created by tdmanh1 23/04/2023 thi công màn hình control iphone
caculator clone */
<template>
  <div class="td-control-container">
    <div class="td-control">
      <template v-for="controlButton in controlButtons" :key="controlButton.key">
        <TDButton
          :buttonType="controlButton.buttonType"
          :keyWord="controlButton.buttonName"
          :size="controlButton.size"
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
      controlButtons: controlConfig
    }
  },
  mounted() {
    let me = this
  },
  props: {}
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
