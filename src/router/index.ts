import MainLayout from '@/layouts/MainLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('../pages/Home.vue'),
        },
        {
          path: '/login',
          name: 'Login',
          component: () => import('../pages/Login.vue'),
        },
        {
          path: '/register',
          name: 'Register',
          component: () => import('../pages/Register.vue'),
        }
      ]
    },
  ]
})

export default router
