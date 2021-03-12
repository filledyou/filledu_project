import Vue from 'vue'
import VueRouter from 'vue-router'

// PAGES
import Login from '../views/login.vue'
import Dashboard from '../views/dashboard.vue'
// MENU PAGES
import Profile from '../views/menu/profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },

  // MENU PAGES
  {
    path: '/dashboard/profile',
    name: 'profile',
    component: Profile
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
