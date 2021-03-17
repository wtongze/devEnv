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
    path: '/packages/npm',
    name: 'NPM',
    component: () => import('../views/packages/NPM.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
