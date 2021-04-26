import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Token:'',

    Step1: {
      schoolName: '',
      schoolAddress: '',
      enrollPeriod: '',
      campusArea : '',
      campusLocation: ''
    }

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
