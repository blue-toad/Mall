<template>
<!--  使用layout布局最好的一点是有这个scroll，可以监听滚动位置，然后头部组件和底部组件也很好用-->
  <q-layout view="hHh lpR fFf" @scroll="onScroll" ref="layout">
    <q-header reveal>
<!--      根据model的不同显示不同的头部和底部-->
      <q-bar v-if="model" class="bg-pink-4 shadow-6" style="height: 43px">
        <div class="text-white col text-center">{{ title }}</div>
      </q-bar>
      <GoodsHead v-else @changePosition="changePosition" ref="head"/>
    </q-header>

    <q-page-container>
<!--      避免重复加载 除了good页面-->
      <keep-alive exclude="Good,Cart">
        <router-view ref="view" @changePart="changePart"/>
      </keep-alive>
<!--      这个是返回顶部-->
      <q-page-scroller v-if="!isCart" position="bottom-right" :scroll-offset="250" :offset="[18, 18]">
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
      //判断是否是购物车，是的话不显示返回到顶部的圈圈
      isCart() {
        if (this.$route.path.indexOf('cart') === 1) {
          return true
        } else {
          return false
        }
      },
      // 根据该属性判断显示不同的底部和头部
      model() {
        if (this.$route.path.indexOf('good') === 1) {
          return false
        } else {
          return true
        }
      },
      //根据不同的路由地址 输出不同的头部 文字
      title() {
        let path = this.$route.path
        if (path.indexOf('home') === 1) { return '首页'}
        else if (path.indexOf('cart') === 1) { return '购物车' }
        else if (path.indexOf('category') === 1) { return '分类'}
        else  { return '我的账户'}
      }
    },
    created() {
      let height = 'min-height:' + (window.innerHeight - 43 - 56) + 'px'
      console.log(height)
      this.$store.commit('changeHeight', height)
      this.$store.commit('changeWindowHeight', window.innerHeight)
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

</style>
