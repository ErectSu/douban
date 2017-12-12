import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home'
import Login from 'pages/login'
import Register from 'pages/register'
import ArticleDetail from 'pages/article-detail'
import { checkAuth } from '../utils/auth'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/articleDetail',
      name: 'articleDetail',
      component: ArticleDetail
    }
  ]
})

router.beforeEach(checkAuth)

export default router
