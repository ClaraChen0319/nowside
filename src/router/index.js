import { createRouter, createWebHashHistory } from 'vue-router'
import Test from '../views/Test.vue'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Account from '../views/Account.vue'
import AccountEdit from '../views/AccountEdit.vue'
import AccountAdd from '../views/AccountAdd.vue'
import AccountApply from '../views/AccountApply.vue'
import AccountAttend from '../views/AccountAttend.vue'
import AccountSave from '../views/AccountSave.vue'
import AccountMessage from '../views/AccountMessage.vue'
import Project from '../views/Project.vue'
import ProjectView from '../views/ProjectView.vue'
import ProjectMatch from '../views/ProjectMatch.vue'

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
      path: '/accountedit',
      name: 'accountedit',
      component: AccountEdit
    },
    {
      path: '/accountadd',
      name: 'accountadd',
      component: AccountAdd
    },
    {
      path: '/accountapply',
      name: 'accountapply',
      component: AccountApply
    },
    {
      path: '/accountattend',
      name: 'accountattend',
      component: AccountAttend
    },
    {
      path: '/accountsave',
      name: 'accountsave',
      component: AccountSave
    },
    {
      path: '/accountmessage',
      name: 'accountmessage',
      component: AccountMessage
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/projectview',
      name: 'projectview',
      component: ProjectView
    },
    {
      path: '/projectmatch',
      name: 'projectmatch',
      component: ProjectMatch
    },
  ]
})

export default router
