import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import TestView from '../views/TestView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/test',
      name: 'test',
      component: TestView
      // component: () => import('../views/TestView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },

  ]
})

export default router
