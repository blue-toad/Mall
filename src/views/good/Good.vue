<template>
  <div>
    <GoodSwiper :top-images="topImages"/>
    <GoodInfo :item-info="itemInfo"/>
    <ShopInfo :shop-info="shopInfo"/>
    <Comment :rate="rate" ref="c" @position="newPosition"/>
    <DetailInfo :detail-info="detailInfo" ref="di" @position="newPosition"/>
    <DetailParam :item-params="itemParams"/>
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
  import {getGoodDetails, getRecommend, itemInfos, shopInfos, cartObject} from "@/utils/good";


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
        recommendList: [],
        position: [],
        part: 0,
        // 保存在本地的购物车信息
        cart: {}
      }
    },
    props: {
      iid: String
    },
    watch: {
      // 监视滚动的位置，然后传递方法出去改变头部栏中的选中
      '$store.state.position'(newVal){
        if (newVal >= 0 && newVal < this.position[1]) {
          this.changePart(1)
        }else if (newVal > this.position[1] && newVal < this.position[2]){
          this.changePart(2)
        }else {
          this.changePart(3)
        }
      }
    },
    created() {
      getGoodDetails(this.iid).then(res => {
        // 将传递回来的信息解析并赋值到本地
        this.topImages = res.result.itemInfo.topImages
        this.itemInfo = new itemInfos(res.result.itemInfo, res.result.columns)
        this.shopInfo = new shopInfos(res.result.shopInfo)
        this.detailInfo = res.result.detailInfo
        this.itemParams = res.result.itemParams
        this.rate = res.result.rate
        // 将默认信息添加到本地购物车
        this.cart = new cartObject (this.topImages, this.itemInfo, this.shopInfo)
        this.cart.count = 1
        console.log(res);
      })
      // 推荐信息是分开的
      getRecommend().then(res => {
        this.recommendList = res.data.list
      })
      //这个函数确保所有组件渲染完成然后在调用 但是由于某些组件使用v-if
      // 默认为false的情况下会认为已经完成了渲染
      // 所以还需要根据情况重新计算  就是下面的newPosition方法
      this.$nextTick(() => {
        this.position.push(0)
        this.position.push(this.$refs.c.$el.offsetTop)
        this.position.push(this.$refs.di.$el.offsetTop)
      })
    },
    methods: {
      // 滚动到某一位置的方法
      move(n) {
        window.scrollTo(0,this.position[n] - 34);
      },
      //这个方法将位置改变的信息发出去 改变head中的选中
      changePart(n) {
        let p = this.part
        if (p != n){
          this.part = n
          this.$emit('changePart', n)
        }
      },
      // 如果一些组件如渲染完成后会重新调用该方法 ，重新计算位置（距离顶部）
      newPosition() {
        this.position[1] = this.$refs.c.$el.offsetTop
        this.position[2] = this.$refs.di.$el.offsetTop
        // console.log(this.position)
      },
      // 将当前信息加入到vuex中供购物车读取
      addCart() {
        // 获得vuex中购物车中该信息的位置
        let index = this.$store.state.cartList.findIndex((n) => n.iid === this.cart.iid)
        if (index >= 0) {
          // 注意vuex中的commit只能提交一个参数
          //日了他妈的 第一次push的是本地对象的指针，所以操作本地的cart对象就相当于在vuex中改变
          // 所以就不需要调用vuex中的那个方法，注释了
          this.cart.count ++
        } else {
          this.$store.commit('pushCartList', this.cart)
        }
        // console.log(this.$store.state.cartList)
      }
    }
  }
</script>

<style scoped>

</style>