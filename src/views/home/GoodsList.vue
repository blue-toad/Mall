<template>
  <div class="row q-px-sm" v-if="goods.list.length">
    <GoodsItems :itemNumber="array1" :goodsList="goods.list" class="q-pr-sm"/>
    <GoodsItems :itemNumber="array2" :goodsList="goods.list"/>
  </div>
</template>

<script>
  import GoodsItems from "./GoodsItems";
  export default {
    name: "GoodsList",
    components: {GoodsItems},
    data() {
      return {
        array1: [],
        array2: [],
      }
    },
    props: {
      goods: Object
    },
    created() {
      //构造奇数偶数数组分别给左栏和右栏
      let i = 0
      while (i < 30){
        if (i % 2 === 0){this.array1.push(i)}
        else {this.array2.push(i)}
        i++
      }
    },
    watch: {
      //当传入新的商品数据时更新这俩个数组
      goods: {
        handler(newVal) {
          let i = this.array1.length * 2
          while (i < newVal.list.length){
            if (i % 2 === 0){this.array1.push(i)}
            else {this.array2.push(i)}
            i++
          }
          console.log(this.goods);
          console.log(this.array1);
          console.log('我是卢本伟');
        },
        deep: true
      }
    }
  }
</script>

<style scoped>

</style>