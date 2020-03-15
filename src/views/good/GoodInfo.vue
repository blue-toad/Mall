<template>
  <div>
    <div class="shadow-up-2">
      <div class="text-body2 text-weight-medium q-pa-sm">
        <q-badge v-if="itemInfo.discountDesc != ''" align="middle" color="deep-orange-13">
          {{itemInfo.discountDesc}}
        </q-badge>
        {{itemInfo.title}}
      </div>
      <div class="row q-px-sm q-pl-md ">
        <div class="text-pink-4 text-h5" >{{itemInfo.price}}</div>
        <div class="q-pl-sm text-grey-5" style="padding-top: 7px;text-decoration: line-through">{{itemInfo.oldPrice}}</div>
      </div>
      <div class="row q-py-sm">
        <div v-for="(item, index) in itemInfo.columns" :key="index" class="col text-center text-grey-7" style="font-size: 12px">
          {{item}}
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "GoodInfo",
    props: {
      itemInfo: Object
    }
  }
</script>

<style scoped>

</style>