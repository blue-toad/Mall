<template>
  <q-tabs
          v-model="tab"
          class="text-grey-9 row"
          dense
          indicator-color="transparent"
          active-color="pink-4"
  >
    <q-route-tab name="house" icon="o_house" label="主页" :ripple="false" class="col" to="/home"/>
    <q-route-tab name="list" icon="o_list" label="分类" :ripple="false" class="col" to="/category"/>
    <q-route-tab name="cart" icon="o_shopping_cart" label="购物车" :ripple="false" class="col" to="/cart"/>
    <q-route-tab name="profile" icon="o_account_box" label="我的" :ripple="false" class="col" to="/profile"/>
  </q-tabs>
</template>

<script>
  //普通界面的底部
  export default {
    name: "UserFoot",
    data() {
      return {
        tab: 'house'
      }
    }
  }
</script>

<style scoped>

</style>