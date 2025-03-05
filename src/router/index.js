import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/links',
    name: 'links',
    component: () => import('@/views/LinksView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router