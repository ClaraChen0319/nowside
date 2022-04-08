import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Account from '../views/Account.vue'
import Create from '../views/Create.vue'
import Project from '../views/Project.vue'
import Success from '../views/Success.vue'

// <router-link> 跳轉路由的標籤
// <router-view> 顯示「目前所在」路由對應的元件內容
// 例：目前位於 /signup，<router-view> 則顯示對應的元件 Signup

// component: ...
// 同步載入
// 在根目錄就先載入所需的元件

// component: () => import('...')
// 非同步載入
// 只有在該路由下才會載入（import）對應的元件

// :to="{ name: 'ProjectView', params: { projectId: project.Id, }, hash: '#XXX' }"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
    },
    {
      path: '/accountedit',
      name: 'AccountEdit',
      component: () => import('../views/AccountEdit.vue'),
    },
    {
      path: '/accountproject',
      name: 'AccountProject',
      props: (route) => ({ projectType: route.params.projectType }),
      component: () => import('../views/AccountProject.vue'),
    },
    {
      path: '/accountmessage',
      name: 'AccountMessage',
      component: () => import('../views/AccountMessage.vue'),
    },
    {
      path: '/create',
      name: 'Create',
      component: Create,
    },
    {
      path: '/createsuccess',
      name: 'CreateSuccess',
      component: () => import('../views/CreateSuccess.vue'),
    },
    {
      path: '/project',
      name: 'Project',
      component: Project,
    },
    {
      path: '/projectview/:projectId',
      name: 'ProjectView',
      props: (route) => ({ projectId: route.params.projectId }),
      component: () => import('../views/ProjectView.vue'),
    },
    {
      path: '/projectedit/:projectId',
      name: 'ProjectEdit',
      props: (route) => ({ projectId: route.params.projectId }),
      component: () => import('../views/ProjectEdit.vue'),
    },
    {
      path: '/projectmatch/:projectId',
      name: 'ProjectMatch',
      props: (route) => ({ projectId: route.params.projectId }),
      component: () => import('../views/ProjectMatch.vue'),
    },
    {
      path: '/projectapply/:projectId',
      name: 'ProjectApply',
      props: (route) => ({ projectId: route.params.projectId }),
      component: () => import('../views/ProjectApply.vue'),
    },
    {
      path: '/success',
      name: 'Success',
      component: Success,
    },
    {
      path: '/successview/:successId',
      name: 'SuccessView',
      props: (route) => ({ successId: route.params.successId }),
      component: () => import('../views/SuccessView.vue'),
    },
  ]
})

export default router
