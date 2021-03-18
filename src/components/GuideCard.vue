<template>
  <div class="guide-card">
    <div class="guide-card-steps">
      <slot></slot>
    </div>
    <div class="guide-card-control">
      <button class="btn-outline pl-2" @click="prevStep" v-if="step > 1">
        <span class="material-icons"> chevron_left </span>
        返回
      </button>
      <div class="flex-1"></div>
      <button class="btn pr-2" @click="nextStep" v-if="step < maxStep">
        继续
        <span class="material-icons"> chevron_right </span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GuideCard',
  data() {
    return {
      step: 1,
      maxStep: 1,
    };
  },
  mounted() {
    this.maxStep = this.$el.querySelectorAll('.guide-card-step').length;
  },
  methods: {
    prevStep() {
      if (this.step > 1) {
        this.step--;
      }
    },
    nextStep() {
      if (this.step < this.maxStep) {
        this.step++;
      }
    },
  },
});
</script>

<style scoped>
.guide-card {
  flex: 1 1 0%;
  border-width: 2px;
  --tw-border-opacity: 1;
  border-color: rgba(243, 244, 246, var(--tw-border-opacity));
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  padding: 2rem;
  border-radius: 8px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  min-height: 500px;
}

.guide-card-steps {
  flex: 1 1 0%;
}

.guide-card-control {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  height: 36px;
}
</style>
