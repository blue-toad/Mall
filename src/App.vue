<template>
  <q-layout view="hHh lpR fFf" @scroll="onScroll" ref="layout">
    <q-header reveal>
      <q-bar v-if="model" class="bg-pink-4 shadow-6" style="height: 43px">
        <div class="text-white col text-center">蘑菇街</div>
      </q-bar>
      <GoodsHead v-else/>
    </q-header>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
      <q-page-scroller position="bottom-right" :scroll-offset="250" :offset="[18, 18]">
        <q-btn round color="pink-4" icon="arrow_forward" class="rotate-270" />
      </q-page-scroller>
    </q-page-container>

    <q-footer class="bg-white text-black shadow-up-2" style="padding: 0;">
      <UserFoot v-if="model"/>
      <GoodsFoot v-else/>
    </q-footer>

  </q-layout>
</template>

<script>
  import UserFoot from "components/UserFoot";
  import GoodsFoot from "components/GoodsFoot";
  import GoodsHead from "components/GoodsHead";

  export default {
    components: {UserFoot,GoodsFoot,GoodsHead},
    data () {
      return {
        model: false,
        tab: 'mails'
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
        //如果当前剩余空间不足300px开始向vuex中的数据传递
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
