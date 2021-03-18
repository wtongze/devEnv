<template>
  <div class="min-h-screen flex flex-col">
    <div class="bg-gray-100 shadow py-4">
      <div class="px-4 sm:px-8">
        <router-link to="/">
          <span class="text-2xl font-medium">devEnv</span>
        </router-link>
      </div>
    </div>
    <div class="container mx-auto flex-1 my-8">
      <router-view></router-view>
    </div>
    <div class="footer bg-gray-100 py-2">
      <div
        class="container mx-auto flex justify-center space-x-8 select-none text-gray-400"
      >
        <!-- <p>京 ICP 备 00000000 号 - 0</p> -->
        <!-- <p>京网安备 0000000000 号</p> -->
        <p>Copyright © 2021 devEnv.cn</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style></style>
