<template>
  <div id="tab-bar">
    <tab-bar-item path="/home">
      <template v-slot:item-icon><img src="~assets/img/tabbar/home.svg"></template>
      <template v-slot:item-icon-active><img src="~assets/img/tabbar/home_active.svg"></template>
      <template v-slot:item-text><div>首页</div></template>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <template v-slot:item-icon><img src="~assets/img/tabbar/category.svg"></template>
      <template v-slot:item-icon-active><img src="~assets/img/tabbar/category_active.svg"></template>
      <template v-slot:item-text><div>分类</div></template>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <template v-slot:item-icon><img src="~assets/img/tabbar/cart.svg"></template>
      <template v-slot:item-icon-active><img src="~assets/img/tabbar/cart_active.svg"></template>
      <template v-slot:item-text><div>购物车</div></template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template v-slot:item-icon><img src="~assets/img/tabbar/profile.svg"></template>
      <template v-slot:item-icon-active><img src="~assets/img/tabbar/profile_active.svg"></template>
      <template v-slot:item-text><div>我的</div></template>
    </tab-bar-item>
  </div>
</template>

<script>
  import TabBarItem from "./TabBarItem";
  export default {
    name: "TabBar",
    components: {TabBarItem}
  }
</script>

<style scoped>
  #tab-bar{
    display: flex;
    flex-direction: row;
    background-color: #f6f6f6;

    position: fixed;
    left: 0px;
    bottom: 0px;
    right: 0px;

    box-shadow: 0 -3px 1px rgba(100,100,100,.1);

  }

</style>