<template>
  <div style="flex: auto;width: 50%;">
    <div ref="test">
      <div v-for="n in itemNumber" :key="n" class="q-pb-sm">
        <q-card class="my-card" >
          <img :src="goodsList[n].show.img" class="shadow-2">
          <q-card-section style="padding: 4px">
            <div class="text-body2" style="font-size: small;overflow: hidden;height: 40px">
              {{ goodsList[n].title}}
            </div>
            <div class="text-pink-4">
              ￥{{ goodsList[n].price }}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
  //组件已经封装，主要参数是商品信息数组和显示部分数组
  export default {
    name: "GoodsItems",
    props: {
      itemNumber: Array,
      goodsList: Array
    },
    watch: {
      goodsList(){
        this.$nextTick(() => {
          // console.log('渲染')
          this.$emit('changeHeight', this.$refs.test.offsetHeight)
        })
      }
    }
  }
</script>

<style scoped>

</style>