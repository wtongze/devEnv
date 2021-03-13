<template>
  <div class="guide-card-step" v-show="show">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GuideCardStep',
  props: {
    step: Number,
  },
  computed: {
    show() {
      if (
        this.$parent &&
        'step' in this.$parent &&
        // @ts-ignore
        this.$parent.step === this.step
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
});
</script>
