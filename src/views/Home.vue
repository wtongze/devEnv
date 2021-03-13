<template>
  <div class="home">
    <div class="mt-24">
      <h1 class="text-center text-3xl font-medium mb-2">快速查找国内镜像源</h1>
      <h2 class="text-center text-2xl text-gray-400">提升开发效率</h2>
    </div>
    <div class="mt-8 flex justify-center">
      <div
        class="rounded-lg border-2 border-gray-300 flex px-4 py-1 w-5/6 shadow"
        style="max-width: 584px"
      >
        <input
          type="text"
          class="border-none focus:ring-0 w-full mr-4 -my-1 text-lg"
          v-model="search"
        />
        <button
          class="focus:outline-none rounded px-4 text-md bg-gray-200 hover:bg-gray-300 active:bg-gray-400"
          style="word-break: keep-all"
        >
          搜索
        </button>
      </div>
    </div>
    <div class="mt-6 flex justify-center flex-wrap">
      <package-card
        v-for="pkg in featured"
        :name="pkg.name"
        :src="pkg.src"
        :alt="pkg.alt"
        :to="pkg.to"
        :key="pkg.name"
      ></package-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PackageCard from '../components/PackageCard.vue';

import LOGO_PYPI from '../assets/logos/pypi.svg';
import LOGO_NPM from '../assets/logos/npm.svg';
import LOGO_HOMEBREW from '../assets/logos/homebrew.png';
import LOGO_DART_PUB from '../assets/logos/dart.png';

export default defineComponent({
  name: 'Home',
  components: {
    PackageCard,
  },
  data() {
    return {
      search: '',
      featured: [
        {
          name: 'PyPI',
          src: LOGO_PYPI,
          alt: 'PyPI Logo',
          to: '/packages/pypi',
        },
        {
          name: 'npm',
          src: LOGO_NPM,
          alt: 'NPM Logo',
          to: '/packages/npm',
        },
        {
          name: 'Homebrew',
          src: LOGO_HOMEBREW,
          alt: 'Homebrew Logo',
          to: '/packages/homebrew',
        },
        {
          name: 'Dart Pub',
          src: LOGO_DART_PUB,
          alt: 'Dart Pub Logo',
          to: '/packages/dart_pub',
        },
      ],
    };
  },
});
</script>
