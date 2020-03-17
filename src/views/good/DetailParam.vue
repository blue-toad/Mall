<template>
  <div style="border-top: 11px solid #eeeeee;">
    <div>
      <q-markup-table class="text-grey-7" v-if="itemParams.info">
        <tbody>
          <tr v-for="(item,index) in itemParams.info.set" :key="index">
            <td>{{ item.key }}</td>
            <td>{{ item.value }}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </div>
  </div>
</template>

<script>
  // 商品参数表格的展示
  export default {
    name: "DetailParam",
    props: {
      itemParams: Object
    }
  }
</script>

<style scoped>

</style>