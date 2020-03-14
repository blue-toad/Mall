<template>
  <q-tabs v-model="tab"
          dense
          class="bg-white text-grey-8 shadow-2"
          active-color="pink-4"
          indicator-color="transparent"
  >
    <q-tab name="back" :ripple="false">
      <template><q-icon name="ion-arrow-back"></q-icon></template>
    </q-tab>
    <q-tab name="goods" label="商品" />
    <q-tab name="parameter" label="参数" />
    <q-tab name="comment" label="评论" />
    <q-tab name="more" :ripple="false">
      <template><q-icon name="ion-more"></q-icon></template>
    </q-tab>
  </q-tabs>
</template>

<script>
  export default {
    name: "GoodsHead",
    data() {
      return {
        tab: 'goods'
      }
    }
  }
</script>

<style scoped>

</style>