<template>
  <div>
    <GoodSwiper :top-images="topImages"/>
    <GoodInfo :item-info="itemInfo"/>
    <ShopInfo :shop-info="shopInfo"/>
    <DetailInfo :detail-info="detailInfo"/>
  </div>
</template>

<script>
  import GoodSwiper from "./GoodSwiper";
  import GoodInfo from "./GoodInfo";
  import ShopInfo from "./ShopInfo";
  import DetailInfo from "./DetailInfo";
  import {getGoodDetails, itemInfos, shopInfos} from "@/utils/good";

  export default {
    name: "Good",
    components: {
      GoodSwiper,
      GoodInfo,
      ShopInfo,
      DetailInfo
    },
    data() {
      return {
        topImages: [],
        itemInfo: {},
        shopInfo: {},
        detailInfo: {}
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
        console.log(res);
      })
    }
  }
</script>

<style scoped>

</style>