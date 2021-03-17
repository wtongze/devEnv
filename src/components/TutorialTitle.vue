<template>
  <div class="tutorial-title">
    <div
      class="mb-4 h-32 w-3/4 md:w-full mx-auto rounded-xl flex items-center justify-center"
    >
      <div class="flex items-center w-full justify-center">
        <h1 class="text-3xl font-medium tracking-wide mx-8">
          {{ title }}
        </h1>
        <img
          v-if="src"
          :src="src"
          :alt="alt"
          class="h-full"
          style="max-width: 65px"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TutorialTitle',
  props: {
    title: String,
    src: String,
    alt: String,
  },
});
</script>
