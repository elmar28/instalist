import Vue from 'vue'
import Router from 'vue-router'
import Home from './view/Home'
import Detail from './view/Detail'
import Error from './view/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    { // 追加
      path: '*',
      name: 'error',
      component: Error

    }
  ]
})