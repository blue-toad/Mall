<template>
  <div v-if="pop.list.length">
    <q-card>
<!--      头部的分类-->
      <q-tabs
              v-model="tab"
              dense
              class="text-grey q-pb-sm"
              active-color="pink-4"
              indicator-color="pink-4"
              align="justify"
              v-if="news.list.length"
      >
        <q-tab name="pop" label="人气" ></q-tab>
        <q-tab name="news" label="新品" ></q-tab>
        <q-tab name="sell" label="热销" ></q-tab>
      </q-tabs>
<!--      底下的面板-->
      <q-tab-panels v-model="tab" animated swipeable>
        <q-tab-panel name="pop" style="padding: 0;">
          <GoodsList :goods="pop"/>
        </q-tab-panel>

        <q-tab-panel name="news" style="padding: 0;">
          <GoodsList :goods="news"/>
        </q-tab-panel>

        <q-tab-panel name="sell" style="padding: 0;">
          <GoodsList :goods="sell"/>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
  //已封装，需要参数1.获得信息的axios方法 2.vuex中显示距离底部的信息space，isLoading属性
  import GoodsList from "./GoodsList";
  import {getHomeGoods} from "../../utils/home";

  export default {
    name: "Goods",
    components: {GoodsList},
    data() {
      return {
        tab: 'pop',
        pop: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        },
        news: {
          page: 0,
          list: []
        },
      }
    },
   watch:{
      '$store.state.space'(newVal){
        //不断监视当前距离底部的距离，如果发现没有距离 调用加载函数 对数组进行加载和push
        if ((newVal === 0) &(this.$store.state.isLoading === false)) {
          this.$store.commit('changeIsLoading', true)
          let part = this.tab
          if (part === 'news') {
            part = 'new'
          }
          getHomeGoods(part, this[this.tab].page + 1).then(res => {
            this[this.tab].list.push(...res.data.list)
            this[this.tab].page ++
            console.log(res.data.list);
            this.$store.commit('changeIsLoading', false)
          })
        }

      }
   },
    created() {
      this.getGoods('pop', 1)
      this.getGoods('sell', 1)
      this.getGoods('new', 1)
    },
    methods: {
      //获得商品信息的请求
      getGoods(part, page) {
        getHomeGoods(part, page).then(res => {
          if (part === 'new'){
            part = 'news'
          }
          //这是一个将一个数组中的所有元素push进另一个数组的方法
          this[part].list.push(...res.data.list)
          this[part].page = page
        }).catch(error => {
          console.log(error + '获取商品信息失败')
        })
      }
    }
  }
</script>

<style scoped>

</style>