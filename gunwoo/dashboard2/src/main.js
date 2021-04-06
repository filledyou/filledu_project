import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import Nav from './components/navbar.vue'

Vue.config.productionTip = false
Vue.component('nav-bar', Nav)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
