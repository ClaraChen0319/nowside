import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Test from '../views/Test.vue'
import Account from '../views/Account.vue'
import AccountView from '../views/AccountView.vue'
import AccountEdit from '../views/AccountEdit.vue'

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
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/accountview',
      name: 'accountview',
      component: AccountView
    },
    {
      path: '/accountedit',
      name: 'accountedit',
      component: AccountEdit
    },

  ]
})

export default router
