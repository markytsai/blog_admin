import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('../views/Dashboard'),
      meta: {
        title: '首页',
        icon: 'dashboard'
      }
    }]
  }, {
    path: '/blog',
    component: Layout,
    children: [{
      path: 'list',
      name: 'Blog',
      component: () => import('../views/container/Blog')
    }, {
      path: 'tag',
      name: 'Tag',
      component: () => import('../views/container/Tag')
    }, {
      path: 'editor',
      name: 'BlogEditor',
      component: () => import('../views/container/BlogEditor')
    }]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
