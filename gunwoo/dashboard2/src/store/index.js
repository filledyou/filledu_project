import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    completed:{
      step1: false,
      step2: false,
      step3: false,
    }

  },
  mutations: {
    firstStepCompleted(state, payload){
      state.completed.step1 = true;
      
      console.log("mutation에서 받은 payload:")
      console.log(payload)
      console.log(state.completed.step1)
    }
  },
  actions: {
  },
  modules: {
  }
})
