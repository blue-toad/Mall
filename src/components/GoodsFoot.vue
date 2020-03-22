<template>
  <div class="row" style="height: 44px;font-size: 10px">
    <div style="width: 40%;flex: auto" class="text-grey-8">
      <div style="display: flex" class="text-center">
        <div style="flex: auto;">
          <q-icon name="o_store" size="20px" style="padding-top: 5px"/>
          <div style="text-align: center;line-height: 24px">店铺</div>
        </div>
        <div style="flex: auto;">
          <q-icon name="o_record_voice_over" size="20px" style="padding-top: 5px"/>
          <div style="text-align: center;line-height: 24px">客服</div>
        </div>
        <div style="flex: auto;">
          <q-icon name="o_grade" size="20px" style="padding-top: 5px"/>
          <div style="text-align: center;line-height: 24px">收藏</div>
        </div>
      </div>
    </div>
    <div style="width: 60%;flex: auto;text-align: center;padding-right: 3%;padding-left:1%;padding-top:3px;font-weight: bold">
      <div class="row text-center">
        <div @click="addCart"
                class="col text-white bg-pink-4 shadow-2"
             style="line-height:36px;border-top-left-radius:100px;border-bottom-left-radius:100px;;background-color:red;">
          加入购物车
        </div>
        <div class="col text-white bg-orange-4 shadow-2" style="line-height:36px;border-top-right-radius:100px;border-bottom-right-radius:100px;">
          立即购买
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsFoot",
    methods: {
      //单击加入购物车时触发
      addCart() {
        this.$emit('addCart')
        this.$q.notify({
          message: '成功添加到购物车',
          color: 'pink-4',
          position: 'center',
          timeout: 100
        })
      }
    }
  }
</script>

<style scoped>

</style>