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
