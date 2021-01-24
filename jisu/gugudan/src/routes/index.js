import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Main from '../views/main.vue'
import User from '../views/user.vue'

export const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            component:Main,
            name:'Main'
        },
        {
            path:'/user',
            component:User,
            name:'User'
        }
    ]
})