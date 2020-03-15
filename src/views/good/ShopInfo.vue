<template>
  <div>
    <div class="row q-px-lg q-pt-md" style="border-top: 10px solid #eeeeee;align-items: center">
      <q-avatar>
        <img :src="'https:' + shopInfo.shopLogo">
      </q-avatar>
      <div class="q-ml-sm" style="font-size: 16px;flex: auto">
        {{ shopInfo.name }}
      </div>
      <q-btn class="q-mr-lg shadow-1" style="flex: initial" size="sm" unelevated rounded color="amber-8" label="进店逛逛" />
    </div>

    <div class="row q-px-lg q-pb-lg" style="align-items:flex-end">
      <div class="col-3" style="height: 50px;">
        <div class="text-grey-7 q-ml-sm" style="font-size: 14px">
          {{ shopInfo.cSells }}<br>
          总销量
        </div>
      </div>
      <div class="col-3" style="height: 50px">
        <div class="text-grey-7 text-center" style="font-size: 14px">
          {{ shopInfo.cGoods }}<br>
          全部宝贝
        </div>
      </div>
      <div class="col-6">
        <div class="row q-mr-lg" style="justify-content: flex-end" v-for="(item, index) in shopInfo.score" :key="index">
          <div class="text-grey-9" style="font-size: 12px">
            {{ item.name }}
          </div>
          <div class="q-ml-sm" style="width: 25px">
            {{ item.score }}
          </div>
          <div>
            <q-badge v-if="item.isBetter" class="q-ml-sm" color="deep-orange-4" align="middle">高</q-badge>
            <q-badge v-else class="q-ml-sm" color="green-4" align="middle">低</q-badge>
          </div>
        </div>
      </div>


    </div>

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