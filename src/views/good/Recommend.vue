<template>
  <diV v-if="list.length" class="q" style="border-top: 10px solid #eeeeee;">
    <div class="q-pt-sm">
      <div class="text-grey-7 text-center q-pb-sm" style="font-size: 15px">猜你喜欢</div>
      <GoodsList :goods="goods" :infinite-loading="false"></GoodsList>
    </div>
  </diV>
</template>

<script>
  import GoodsList from "../home/GoodsList";

  export default {
    name: "Recommend",
    components: {GoodsList},
    props: {
      list: Array
    },
    data() {
      return {
        // 因为原来传递的是一个对象，所以在把刚才的数组变为对象
        goods: {
          list: []
        }
      }
    },
    watch: {
      list(newVal) {
        this.goods.list = newVal
      }
    }
  }
</script>

<style scoped>

</style>