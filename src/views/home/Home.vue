<template>
  <div>
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar.vue";
  export default {
    name: "Home",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: #ff8198;
    font-weight: 700;
    color: #fff;
  }
</style>