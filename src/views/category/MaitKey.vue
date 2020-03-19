<template>
  <div style="display:flex;flex-wrap:wrap;justify-content:space-between;">
    <div v-for="(item, index) in cate.list" :key="index" style="flex: auto">
      <div style="width: 80px" class="q-pa-sm">
        <div style="text-align: center">
          <q-img :src="item.image"/>
        </div>
        <div style="text-align: center;font-size: 14px;font-weight:normal">
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MaitKey",
    props: {
      cate: Object
    }
  }
</script>

<style scoped>

</style>