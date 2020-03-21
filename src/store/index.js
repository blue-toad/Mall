import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    space: 10000,
    windowHeight: 10000,
    // 该参数判断是否在进行数据的加载，避免重复触发加载函数
    isLoading: false,
    position: 0,
    cartList: []
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
    },
    changePosition(state, n){
      state.position = n
    },
    pushCartList(state, n) {
      state.cartList.push(n)
     }
    // changeCartCount(state, index) {
    //   state.cartList[index].count ++
    // }
  },
  actions: {
  },
  modules: {
  }
})
