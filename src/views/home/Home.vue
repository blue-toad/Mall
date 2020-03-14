<template>
  <div>
    <!--        调用已经封装的轮播图-->
    <swiper :banners="banners" :recommends="recommends" class="position"/>
    <Goods/>
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
      });
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>