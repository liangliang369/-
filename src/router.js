import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: '/home',
      children:[
        {
          path:'/home',
          name:'home',
          component: () => import('./views/home/Home')
        },
        {
          path:'/classify',
          name:'classify',
          component: () => import('./views/classify/Classify')
        },
        {
          path:'/food',
          name:'food',
          component: () => import('./views/food/Food')
        },
        {
          path:'/cart',
          name:'cart',
          component: () => import('./views/cart/Cart')
        },
        {
          path:'/mine',
          name:'mine',
          component: () => import('./views/mine/Mine')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/login/Login')
    }
  ]
})
