import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    space: 10000,
    windowHeight: 10000
  },
  mutations: {
    changeSpace(state, n) {
      state.space = n
    },
    chanegWindowHeight(state, n){
      state.windowHeight = n
    }
  },
  actions: {
  },
  modules: {
  }
})
