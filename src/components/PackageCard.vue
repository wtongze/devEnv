<template>
  <router-link :to="to">
    <div
      class="h-24 mx-4 my-2 rounded-lg p-4 bg-gray-50 hover:bg-gray-200 active:bg-gray-300 flex align-middle"
    >
      <div class="w-24 h-16 flex align-middle justify-center">
        <img :src="src" :alt="alt" class="max-h-full" />
      </div>

      <div class="block w-32 self-center text-center p-2">
        <span class="text-lg font-medium tracking-wide select-none">{{
          name
        }}</span>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PackageCard',
  props: {
    name: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
    },
    to: {
      type: String,
      required: true,
    },
  },
});
</script>
