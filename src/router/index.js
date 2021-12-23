import Vue from 'vue'
import Router from 'vue-router'
import FindPage from '@/components/FindPage'
import Auth from '@/components/Auth'
import Main from '@/components/Main'
import Profile from '@/components/Profile'
import Register from '@/components/Register'
import Vacancy from '@/components/Vacancy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/find',
      name: 'FindPage',
      component: FindPage
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/vacancy',
      name: 'Vacancy',
      component: Vacancy
    }
  ]
})
