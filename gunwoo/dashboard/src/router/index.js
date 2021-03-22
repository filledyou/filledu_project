import Vue from 'vue'
import VueRouter from 'vue-router'

// PAGES
import Login from '../views/login.vue'
import Dashboard from '../views/dashboard.vue'
// MENU PAGES
import Profile from '../views/menu/profile.vue'

//ADD SCHOOLS
import Step1 from '../views/addSchool/step1.vue'
import Step2 from '../views/addSchool/step2.vue'
import Step3 from '../views/addSchool/step3.vue'

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
  },

  //ADD SCHOOLS
  {
    path: '/addschool/step1',
    name: 'Step1',
    component: Step1
  },
  {
    path: '/addschool/step2',
    name: 'Step2',
    component: Step2
  },
  {
    path: '/addschool/step3',
    name: 'Step3',
    component: Step3
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
