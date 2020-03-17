<template>
  <diV>
    <GoodsList :goods="goods" :infinite-loading="false"></GoodsList>
  </diV>
</template>

<script>
  import GoodsList from "../home/GoodsList";

  export default {
    name: "Recommend",
    components: {
      GoodsList
    },
    props: {
      list: Array
    },
    data() {
      return {
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