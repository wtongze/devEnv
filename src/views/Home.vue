<template>
  <div class="home">
    <div class="mt-24">
      <h1 class="text-center text-3xl font-medium mb-2">快速查找国内镜像源</h1>
      <h2 class="text-center text-2xl text-gray-400">提升开发效率</h2>
    </div>
    <div class="mt-8 flex justify-center">
      <div
        class="rounded-lg border-2 border-gray-300 flex px-4 py-1 w-5/6 shadow items-center"
        style="max-width: 584px"
      >
        <input
          type="text"
          class="border-none focus:ring-0 w-full mr-4 -my-1 text-lg"
          v-model="search"
        />
        <div>
          <span class="material-icons text-gray-400">search</span>
        </div>
      </div>
    </div>
    <div class="mt-6 flex justify-center flex-wrap w-11/12 mx-auto">
      <package-card
        v-for="pkg in pkgCards"
        :name="pkg.name"
        :src="pkg.src"
        :alt="pkg.alt"
        :to="'/guides/' + pkg.to"
        :key="pkg.name"
      ></package-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Fuse from 'fuse.js';
import PackageCard from '../components/PackageCard.vue';

import LOGO_PYPI from '../assets/logos/pypi.svg';
import LOGO_NPM from '../assets/logos/npm.svg';
import LOGO_HOMEBREW from '../assets/logos/homebrew.svg';
import LOGO_NODEJS from '../assets/logos/nodejs.svg';
import LOGO_UBUNTU from '../assets/logos/ubuntu.svg';
import LOGO_DEBIAN from '../assets/logos/debian.svg';
import LOGO_CENTOS from '../assets/logos/centos.svg';
import LOGO_ARCHLINUX from '../assets/logos/archlinux.svg';

const all = [
  {
    name: 'PyPI',
    src: LOGO_PYPI,
    alt: 'PyPI Logo',
    to: 'pypi',
  },
  {
    name: 'Homebrew',
    src: LOGO_HOMEBREW,
    alt: 'Homebrew Logo',
    to: 'homebrew',
  },
  {
    name: 'npm',
    src: LOGO_NPM,
    alt: 'NPM Logo',
    to: 'npm',
  },
  {
    name: 'Node.js',
    src: LOGO_NODEJS,
    alt: 'Node.js Logo',
    to: 'nodejs',
  },
  {
    name: 'Ubuntu',
    src: LOGO_UBUNTU,
    alt: 'Ubuntu Logo',
    to: 'ubuntu',
  },
  {
    name: 'Debian',
    src: LOGO_DEBIAN,
    alt: 'Debian Logo',
    to: 'debian',
  },
  {
    name: 'CentOS',
    src: LOGO_CENTOS,
    alt: 'CentOS Logo',
    to: 'centos',
  },
  {
    name: 'Arch Linux',
    src: LOGO_ARCHLINUX,
    alt: 'Arch Linux Logo',
    to: 'archlinux',
  },
];
const fuse = new Fuse(all, { keys: ['name'] });

export default defineComponent({
  name: 'Home',
  components: {
    PackageCard,
  },
  data() {
    return {
      search: '',
      fuse,
      featured: [
        'pypi',
        'homebrew',
        'npm',
        'nodejs',
        'ubuntu',
        'debian',
        'centos',
        'archlinux',
      ],
      all,
    };
  },
  computed: {
    pkgCards() {
      if (this.search) {
        return (
          fuse
            // @ts-ignore
            .search(this.search)
            .slice(0, 8)
            .map((i) => i.item)
        );
      } else {
        // @ts-ignore
        return this.all.filter((i) => this.featured.includes(i.to));
      }
    },
  },
});
</script>
