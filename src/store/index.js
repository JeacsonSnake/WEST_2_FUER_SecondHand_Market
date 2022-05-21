import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ifBar: true,
        isAuth: false,
  },
  getters: {
  },
    mutations: {
        ChangeBar(state,value) {
            state.ifBar = value;
        }
  },
  actions: {
  },
  modules: {
  }
})
