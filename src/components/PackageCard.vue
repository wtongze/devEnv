<template>
  <router-link :to="to">
    <div
      class="h-24 w-60 2xl:w-68 mx-4 my-2 rounded-lg py-4 px-8 bg-gray-50 hover:bg-gray-200 active:bg-gray-300 flex"
    >
      <div class="w-5/12 flex justify-center">
        <img :src="src" :alt="alt" class="max-h-full" />
      </div>

      <div class="w-7/12 self-center text-center">
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
