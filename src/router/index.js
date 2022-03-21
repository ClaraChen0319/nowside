import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Test from '../views/Test.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: Test
      // component: () => import('../views/TestView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },

  ]
})

export default router
