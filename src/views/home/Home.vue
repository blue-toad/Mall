<template>
  <div>
    <q-layout view="hHh lpR fFf">
<!--      头部的navbar-->
<!--      使用toorbar无法对高度进行调整不知道为什么-->
<!--      q-bar中的内容使用flex布局进行-->
      <q-header class="shadow-1 text-center" text-white >
        <q-bar class="bg-pink-4" style="height: 43px">
          <div style="flex: auto">蘑菇街</div>
        </q-bar>
      </q-header>
      <q-page-container>
<!--        调用已经封装的轮播图-->
        <swiper :banners="banners" :recommends="recommends" class="position"/>

        <router-view/>
      </q-page-container>

    </q-layout>

  </div>
</template>

<script>
  import Swiper from "components/home/Swiper.vue";
  import {getHomeMultidata, getHomeGoods} from "@/utils/home";

  export default {
    name: "Home",
    components: {
      Swiper
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          pop: {page: 0, list: []},
          new: {page: 0, list: []},
          sel: {page: 0, list: []}
        }
      }
    },
    created() {
      //获得轮播图的信息和推荐栏的信息
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
        console.log(this.recommends);
        console.log(this.banners);
      });
      // 获得下面的商品信息
      this.getHomeGoods();
    },
    methods: {
      getHomeGoods(){
        getHomeGoods('pop', 1).then(res => {
          this.goods.pop.list.push(...res.data.list)//这是一个将一个数组中的所有元素push进另一个数组的方法
          // console.log(this.goods.pop.list);
          // console.log(res)
        })
      }
    }
  }
</script>

<style scoped>

  .position {

  }
</style>