import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/packages/pypi',
    name: 'PyPI',
    component: () => import('../views/packages/PyPI.vue'),
  },
  {
    path: '/packages/homebrew',
    name: 'Homebrew',
    component: () => import('../views/packages/Homebrew.vue'),
  },
  {
    path: '/packages/npm',
    name: 'NPM',
    component: () => import('../views/packages/NPM.vue'),
  },
  {
    path: '/packages/nodejs',
    name: 'Nodejs',
    component: () => import('../views/packages/Nodejs.vue'),
  },
  {
    path: '/packages/ubuntu',
    name: 'Ubuntu',
    component: () => import('../views/packages/Ubuntu.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
