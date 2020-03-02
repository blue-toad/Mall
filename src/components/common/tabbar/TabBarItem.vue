<template>
  <div class="tab-bar-item" @click="itemClick()">
    <slot name="item-icon" v-if="!isActive"></slot>
    <slot name="item-icon-active" v-else></slot>
    <div :class="{active:isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    data(){
      return{
      }
    },
    props:{
      path: String
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) != -1
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: auto;
    text-align: center;
    height: 49px;
    font-size: 14px;
    margin-top: 0px;
  }

  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-bottom: 0px;
  }
  .active{
    color: rgb(253,89,121);
  }
</style>