<template>
<!--  使用layout布局最好的一点是有这个scroll，可以监听滚动位置，然后头部组件和底部组件也很好用-->
  <q-layout view="hHh lpR fFf" @scroll="onScroll" ref="layout">
    <q-header reveal>
      <q-bar v-if="model" class="bg-pink-4 shadow-6" style="height: 43px">
        <div class="text-white col text-center">蘑菇街</div>
      </q-bar>
      <GoodsHead v-else @changePosition="changePosition" ref="head"/>
    </q-header>

    <q-page-container>
      <router-view ref="view" @changePart="changePart"/>
      <q-page-scroller position="bottom-right" :scroll-offset="250" :offset="[18, 18]">
        <q-btn round color="pink-4" icon="arrow_forward" class="rotate-270" />
      </q-page-scroller>
    </q-page-container>

    <q-footer class="bg-white text-black shadow-up-2" style="padding: 0;">
      <UserFoot v-if="model"/>
      <GoodsFoot v-else @addCart="addCart"/>
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
        tab: 'mails'
      }
    },
    computed: {
      model() {
        if (this.$route.path.indexOf('good') === 1){
          return false
        }else {
          return true
        }
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
        this.$store.commit('changePosition', a)
        //如果当前剩余空间不足300px开始向vuex中的数据传递
        if (b - c - a <= 200){
          this.$store.commit('changeSpace', b - a - c)
        }
      },
      // 这个方法是根据头部传递来的信息对good页面中的位置进行跳转
      changePosition(n) {
        this.$refs.view.move(n)
      },
      // 这个方法是 根据页面滚动的位置 改变头部栏的显示
      changePart(n) {
        this.$refs.head.changeTab(n)
      },
      // 将当前商品加入购物车
      addCart() {
        this.$refs.view.addCart()
      }
    }
  }
</script>


<style>
  @import "assets/css/base.css";

</style>
