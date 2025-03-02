import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue' // 确保路径正确

const routes = [
  { path: '/', component: Home } // 确保根路径指向 Home 组件
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router