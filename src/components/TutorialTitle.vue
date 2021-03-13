<template>
  <div class="tutorial-title">
    <div class="mb-4 h-32 w-full rounded-xl flex items-center justify-center">
      <div class="flex items-center">
        <h1 class="text-3xl font-medium tracking-wide mr-8">
          {{ title }}
        </h1>
        <img v-if="src" :src="src" :alt="alt" class="h-full" />
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
    alt: String
  },
});
</script>
