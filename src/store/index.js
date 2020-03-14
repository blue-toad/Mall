import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    space: 10000,
    windowHeight: 10000,
    isLoading: false
  },
  mutations: {
    changeSpace(state, n) {
      state.space = n
    },
    chanegWindowHeight(state, n){
      state.windowHeight = n
    },
    changeIsLoading(state, n){
      state.isLoading = n
    }
  },
  actions: {
  },
  modules: {
  }
})
