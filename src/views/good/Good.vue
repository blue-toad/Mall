<template>
  <div>
    <GoodSwiper :top-images="topImages"/>
    <GoodInfo :item-info="itemInfo"/>
    <ShopInfo :shop-info="shopInfo"/>
  </div>
</template>

<script>
  import GoodSwiper from "./GoodSwiper";
  import GoodInfo from "./GoodInfo";
  import ShopInfo from "./ShopInfo";
  import {getGoodDetails, itemInfos, shopInfos} from "@/utils/good";

  export default {
    name: "Good",
    components: {
      GoodSwiper,
      GoodInfo,
      ShopInfo
    },
    data() {
      return {
        topImages: [],
        itemInfo: {},
        shopInfo: {}
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
        console.log(res);
      })
    }
  }
</script>

<style scoped>

</style>