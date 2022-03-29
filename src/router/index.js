import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
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
import Create from '../views/Create.vue'
import CreateEdit from '../views/CreateEdit.vue'
import CreateSuccess from '../views/CreateSuccess.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
      // component: () => import('../views/TestView.vue')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/accountedit',
      name: 'Accountedit',
      component: AccountEdit
    },
    {
      path: '/accountadd',
      name: 'Accountadd',
      component: AccountAdd
    },
    {
      path: '/accountapply',
      name: 'Accountapply',
      component: AccountApply
    },
    {
      path: '/accountattend',
      name: 'Accountattend',
      component: AccountAttend
    },
    {
      path: '/accountsave',
      name: 'Accountsave',
      component: AccountSave
    },
    {
      path: '/accountmessage',
      name: 'Accountmessage',
      component: AccountMessage
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/projectview',
      name: 'Projectview',
      component: ProjectView
    },
    {
      path: '/projectmatch',
      name: 'Projectmatch',
      component: ProjectMatch
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/createedit',
      name: 'Createedit',
      component: CreateEdit
    },
    {
      path: '/createsuccess',
      name: 'Createsuccess',
      component: CreateSuccess
    },
  ]
})

export default router
