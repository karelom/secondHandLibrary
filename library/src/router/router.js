import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Intro from '@/components/Intro'
import Account from '@/components/Account'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Intro',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/Account',
      name: 'Account',
      component: Account
    }
  ]
})
