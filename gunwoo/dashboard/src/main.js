import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Nav from './components/nav/navbar.vue'
import ListBox from './components/list.vue'

Vue.config.productionTip = false
Vue.component('nav-bar', Nav)
Vue.component('list-box', ListBox)

new Vue({
  
  router,
  store,
  render: h => h(App)
}).$mount('#app')
