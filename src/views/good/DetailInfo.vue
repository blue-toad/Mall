<template>
  <div class="" style="border-top: 10px solid #eeeeee;">
    <div class="q-pa-lg text-grey-7" style="font-size: 13px">
      {{ detailInfo.desc + '我是王鑫的爸爸' }}
    </div>
    <div v-for="(items, indexs) in detailInfo.detailImage" :key="indexs">
      <q-img v-for="(item, index) in items.list" :key="index" :src="'https:' + item"/>
    </div>
    <q-img :src="'https:' + info"></q-img>
  </div>
</template>

<script>
  export default {
    name: "DetailInfo",
    props: {
      detailInfo: Object
    },
    data() {
      return {
        info:''
      }
    },
    watch: {
      //返回的数据中数组1是穿着照片数组2是详情照片 比较坑的是数组1的最后一项应该放在最后展示
      //但是有的时候返回有数组2但是list为空
      //以下是为了将数组一的照片放到最后
      detailInfo(newVal) {
        this.info = newVal.detailImage[0].list.pop()
      }
    }
  }
</script>

<style scoped>

</style>