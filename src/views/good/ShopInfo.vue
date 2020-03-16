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

    <div class="row q-px-lg q-pb-lg" style="align-items:flex-end;border-left: red 1px">
      <div class="col-3" style="height: 50px;">
        <div class="text-grey-7 q-ml-sm" style="font-size: 14px">
          {{ shopInfo.cSells | sell }}<br>
          总销量
        </div>
      </div>
      <div class="col-3" style="height: 50px">
        <div class="text-grey-7 text-center" style="font-size: 14px">
          {{ shopInfo.cGoods }}<br>
          全部宝贝
        </div>
      </div>
      <div class="col-6" style="border-left:2px solid #e0e0e0 ">
        <div class="row q-mr-lg" style="justify-content: flex-end;font-size: 12px" v-for="(item, index) in shopInfo.score" :key="index">
          <div class="text-grey-9 text-center">
            {{ item.name }}
          </div>
          <div :class="['q-ml-sm', {low: !item.isBetter},{high: item.isBetter}]" style="width: 25px;">
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
  //展示店铺的相关信息
  export default {
    name: "ShopInfo",
    props: {
      shopInfo: Object
    },
    filters: {
      sell(val) {
        let result = val
        if (result > 10000) {
          result = (val / 10000).toFixed(2) + '万'
        }
        return result
      }
    }
  }
</script>

<style scoped>
  .low {
    color: #81c784;
  }
  .high {
    color: #ff8a65;
  }

</style>