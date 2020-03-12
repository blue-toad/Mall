<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-white text-black shadow-up-2">
      <q-toolbar style="padding: 0">
        <q-btn icon="o_house" label="主页" unelevated stack class="col" to="/home"></q-btn>
        <q-btn icon="o_list" label="分类" unelevated stack class="col" to="/category"></q-btn>
        <q-btn icon="o_shopping_cart" label="购物车" unelevated stack class="col" to="/cart"></q-btn>
        <q-btn icon="o_account_box" label="我的" unelevated stack class="col" to="/profile"></q-btn>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>


<style>
  @import "assets/css/base.css";

</style>
