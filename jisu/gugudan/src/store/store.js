import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        RList:[],
    },

    getters:{
        updateResult:state=>{
          return state.RList;
        }
    },
  
    mutations:{
      RlistPush(state,payload){
        return state.RList.unshift(payload);
      },

      RlistReset(state){
        return state.RList = [];
      },

      RlistDel(state,idx){
        return state.RList.splice(idx,1);
      },

      RlistMod(state,item){
        return state.RList = item;
      }
    },
});