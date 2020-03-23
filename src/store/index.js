import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    space: 10000,   //距离底部的距离
    windowHeight: 10000,  // 整个页面的高度
    hight: '',    //出去头部和底部的中间容器高度
    // 该参数判断是否在进行数据的加载，避免重复触发加载函数
    isLoading: false,
    position: 0,
    cartList: [{"iid":"1m7s9c4","name":"阿究究","price":"88.90","image":"//s3.mogucdn.com/mlcdn/c45406/180828_550k23i82cbibh32602fl43jc9aid_800x1200.jpg","title":"秋装女2018新款早秋女装裙子韩版针织连衣裙+衬衫上衣时尚套装","count":1},
      {"iid":"1m8a710","name":"安娜衣舍","price":"29.80","image":"//s5.mogucdn.com/mlcdn/c45406/180907_3jkl78l30c0ijib72lk997gh033ed_640x960.jpg","title":"吊带背心女夏2018秋季新款内搭吊带衫短款性感修身针织打底衫上衣显瘦","count":1}]
  },
  mutations: {
    changeSpace(state, n) {
      state.space = n
    },
    changeWindowHeight(state, n){
      state.windowHeight = n
    },
    changeIsLoading(state, n){
      state.isLoading = n
    },
    changePosition(state, n){
      state.position = n
    },
    changeHeight(state, n){
      state.height = n
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
