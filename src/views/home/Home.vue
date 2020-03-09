<template>
  <div>
    <swiper :banners="banners" :recommends="recommends"></swiper>
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
          this.goods.pop.list.push(...res.data.list)
          // console.log(this.goods.pop.list);
          // console.log(res)
        })
      }
    }
  }
</script>

<style scoped>

</style>