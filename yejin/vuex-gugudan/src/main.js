import Vue from 'vue'
import App from './App.vue'
// eslint-disable-next-line no-unused-vars
import Vuex from 'vuex'
import {store} from '/store/store'
import {router} from './router/index.js'

Vue.use(Vuex);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
