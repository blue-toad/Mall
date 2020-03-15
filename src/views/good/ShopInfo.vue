<template>
  <div class="q-pt-sm">
    <q-img :src="'https:' + shopInfo.shopLogo" style="r">
    </q-img>
  </div>
</template>

<script>
  export default {
    name: "ShopInfo",
    props: {
      shopInfo: Object
    }
  }
</script>

<style scoped>

</style>