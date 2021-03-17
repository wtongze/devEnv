<template>
  <div class="guide-card-step" v-show="show">
    <h2 class="text-2xl mb-4" v-if="final">完成</h2>
    <h2 class="text-2xl mb-4" v-else>第 {{ step }} 步</h2>
    <slot></slot>
    <div
      class="alert mt-4 flex items-center bg-gray-100 text-gray-500 rounded-lg px-2 py-1"
      v-if="final"
    >
      <div class="mx-2">
        <span class="material-icons">info_outline</span>
      </div>
      <div class="flex-1">
        <p>
          如果您觉得此网站对您有帮助的话，欢迎您在 Github 上给我们一颗 Star ！
          <a href="https://github.com/wtongze/devEnv" target="_blank">
            <button class="ml-2 btn-outline bg-white rounded-md">
              立即前往
              <span class="material-icons align-baseline text-sm">
                open_in_new
              </span>
            </button>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GuideCardStep',
  props: {
    step: {
      type: Number,
      required: true,
    },
    final: {
      type: Boolean,
    },
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
