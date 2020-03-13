<template>
  <q-layout view="hHh lpR fFf" @scroll="onScroll" ref="layout">

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>

    <q-footer class="bg-white text-black shadow-up-2" style="padding: 0;">
      <q-tabs
              v-model="tab"
              class="text-grey-9 row"
              dense
              indicator-color="transparent"
              active-color="pink-4"
      >
        <q-route-tab name="house" icon="o_house" label="主页" :ripple="false" class="col" to="/home"/>
        <q-route-tab name="list" icon="o_list" label="分类" :ripple="false" class="col" to="/category"/>
        <q-route-tab name="cart" icon="o_shopping_cart" label="购物车" :ripple="false" class="col" to="/cart"/>
        <q-route-tab name="profile" icon="o_account_box" label="我的" :ripple="false" class="col" to="/profile"/>
      </q-tabs>
    </q-footer>

  </q-layout>
</template>

<script>
  export default {
    data () {
      return {
        tab: 'house'
      }
    },
    mounted() {
      this.$store.commit('chanegWindowHeight', window.innerHeight)
    },
    methods: {
      //该方法根据显示窗口大小 当前显示的位置 最大位置
      //这三个参数判断用户是否拉到了底部，如果拉倒底部触发加载函数 对商品进行加载
      onScroll(info) {
        let a = info.position
        let b = this.$refs.layout.height
        let c = window.innerHeight
        if (b - c - a <= 200){
          this.$store.commit('changeSpace', b - a - c)
        }
      }
    }
  }
</script>


<style>
  @import "assets/css/base.css";

</style>
