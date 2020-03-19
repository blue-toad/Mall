<template>
  <q-tabs v-model="tab"
          dense
          class="bg-white text-grey-8 shadow-2"
          active-color="pink-4"
          indicator-color="transparent"
  >
    <q-tab name="back" :ripple="false" @click="$router.push('/home')">
      <template><q-icon name="ion-arrow-back"></q-icon></template>
    </q-tab>
    <q-tab name="goods" label="商品" @click="changePosition(0)"/>
    <q-tab name="comment" label="评论" @click="changePosition(1)"/>
    <q-tab name="detail" label="详情" @click="changePosition(2)"/>
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
    },
    methods: {
      //这个方法向app中传递准备滚动到哪个部分
      changePosition(n) {
        this.$emit('changePosition', n)
      },
      changeTab(n) {
        switch (n) {
          case 1 : {this.tab = 'goods';break;}
          case 2 : {this.tab = 'comment';break;}
          case 3 : {this.tab = 'detail';break;}

        }
      }
    }
  }
</script>

<style scoped>

</style>