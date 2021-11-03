import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Intro from '@/components/Intro'
import Login from '@/components/auth/Login'
import Account from '@/components/userInfo/Account'
import Register from '@/components/auth/Register'

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
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Account',
      name: 'Account',
      component: Account
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    }
  ]
})
