import Vue from 'vue'
import VueRouter from 'vue-router'

//  全部使用懒加载
Vue.use(VueRouter)

const routes = [
  {
    // 重定向
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('views/home/Home'),
  },
  {
    path: '/category',
    component: () => import('views/category/Category')
  },
  {
    path: '/cart',
    component: () => import('views/cart/Cart')
  },
  {
    path: '/profile',
    component: () => import('views/profile/ProFile')
  },
  {
    // 这个有参数
    path: '/good/:iid',
    component: () => import('views/good/Good'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
