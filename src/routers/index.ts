import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/guides/pypi',
    name: 'PyPI',
    component: () => import('../views/guides/PyPI.vue'),
  },
  {
    path: '/guides/homebrew',
    name: 'Homebrew',
    component: () => import('../views/guides/Homebrew.vue'),
  },
  {
    path: '/guides/npm',
    name: 'NPM',
    component: () => import('../views/guides/NPM.vue'),
  },
  {
    path: '/guides/nodejs',
    name: 'Nodejs',
    component: () => import('../views/guides/Nodejs.vue'),
  },
  {
    path: '/guides/ubuntu',
    name: 'Ubuntu',
    component: () => import('../views/guides/Ubuntu.vue'),
  },
  {
    path: '/guides/debian',
    name: 'Debian',
    component: () => import('../views/guides/Debian.vue'),
  },
  {
    path: '/guides/centos',
    name: 'Centos',
    component: () => import('../views/guides/Centos.vue'),
  },
  {
    path: '/guides/archlinux',
    name: 'Archlinux',
    component: () => import('../views/guides/Archlinux.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
