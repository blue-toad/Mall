<template>
  <div>
<!--      头部的navbar-->
<!--      使用toorbar无法对高度进行调整不知道为什么-->
<!--      q-bar中的内容使用flex布局进行-->
    <q-header reveal>
      <q-bar class="bg-pink-4 shadow-6" style="height: 43px">
        <div class="text-white col text-center">蘑菇街</div>
      </q-bar>
    </q-header>


    <q-infinite-scroll :offset="400">
      <template v-slot:default style="max-height: 1000px;overflow: auto">
        <!--        调用已经封装的轮播图-->
        <swiper :banners="banners" :recommends="recommends" class="position"/>
        <Goods ref="target"/>
      </template>
    </q-infinite-scroll>

  </div>
</template>

<script>
  import Swiper from "components/home/Swiper.vue";
  import Goods from "./Goods";
  import {getHomeMultidata} from "@/utils/home";

  export default {
    name: "Home",
    components: {
      Swiper,
      Goods
    },
    data() {
      return {
        banners: [],
        recommends: [],
      }
    },
    created() {
      //获得轮播图的信息和推荐栏的信息
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
        // console.log(this.recommends);
        // console.log(this.banners);
      });
    },
    methods: {

    }
  }
</script>

<style scoped>

  .position {

  }
</style>