import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Intro from '@/components/Intro'

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
    }
  ]
})
