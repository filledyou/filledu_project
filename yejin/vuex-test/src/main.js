import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vuex.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

Vue.config.productionTip = false



new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
