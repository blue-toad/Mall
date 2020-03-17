<template>
  <div>
    <GoodSwiper :top-images="topImages"/>
    <GoodInfo :item-info="itemInfo"/>
    <ShopInfo :shop-info="shopInfo"/>
    <Comment :rate="rate"/>
    <DetailInfo :detail-info="detailInfo"/>
    <DetailParam :itemParams="itemParams"/>
    <Recommend :list="recommendList"/>
  </div>
</template>

<script>
  import GoodSwiper from "./GoodSwiper";
  import GoodInfo from "./GoodInfo";
  import ShopInfo from "./ShopInfo";
  import DetailInfo from "./DetailInfo";
  import DetailParam from "./DetailParam";
  import Comment from "./Comment";
  import Recommend from "./Recommend";
  import {getGoodDetails, getRecommend, itemInfos, shopInfos} from "@/utils/good";

  export default {
    name: "Good",
    components: {
      GoodSwiper, //轮播图
      GoodInfo,  //商品信息
      ShopInfo,  //店铺信息
      DetailInfo,    //商品照片
      DetailParam,    // 商品参数表格
      Comment,   //评论
      Recommend  //推荐
    },
    data() {
      return {
        topImages: [],
        itemInfo: {},
        shopInfo: {},
        detailInfo: {},
        itemParams: {},
        rate: {},
        recommendList: []
      }
    },
    props: {
      iid: String
    },
    created() {
      getGoodDetails(this.iid).then(res => {
        this.topImages = res.result.itemInfo.topImages
        this.itemInfo = new itemInfos(res.result.itemInfo, res.result.columns)
        this.shopInfo = new shopInfos(res.result.shopInfo)
        this.detailInfo = res.result.detailInfo
        this.itemParams = res.result.itemParams
        this.rate = res.result.rate
        console.log(res);
      })
      getRecommend().then(res => {
        this.recommendList = res.data.list
        console.log(res)
      })
    }
  }
</script>

<style scoped>

</style>