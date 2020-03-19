<template>
  <div style="border-top: 10px solid #eeeeee" >
    <div v-if="finish" class="q-mt-md q-pb-sm" style="border-bottom: 1px solid #eeeeee;">
      <div class="row q-pl-lg" style="justify-content:space-between;">
        <div style="font-size: 14px">宝贝评价({{ rate.cRate }})</div>
        <div style="font-size: 14px" class="text-deep-orange-4 q-pr-lg">查看全部></div>
      </div>
    </div>
    <div v-if="finish" class="q-pt-sm q-pb-lg">
      <div class="row" style="justify-content:space-between;">
        <q-chip size="sm" color="white" class="q-px-lg" text-color="grey-7">
          <q-avatar size="sm">
            <img :src="'https:' + rate.list[0].user.avatar">
          </q-avatar>
          {{ rate.list[0].user.uname }}
        </q-chip>
        <div class="q-px-lg text-grey-7" style="text-align: center;font-size: 12px;align-self: center">
          {{ '2018' + adjustedDate }}
        </div>
      </div>
      <div class="q-px-lg text-grey-9" style="font-size: 13px;">
        {{ rate.list[0].content }}
      </div>
    </div>

  </div>
</template>

<script>
  import { date } from 'quasar'

  //用户评论展示
  export default {
    name: "Comment",
    props: {
      rate: Object
    },
    data() {
      return {
        finish: false,
        adjustedDate: ''
      }
    },
    watch: {
      rate() {
        //利用quasar的formdate将日期格式化
        this.adjustedDate = date.formatDate(this.rate.list[0].created, '-MM-DD HH:mm')
        this.finish = true
      },
      //如果当前页面加载完成，执行父方法重新计算评论的位置
      finish() {
        this.$emit('position')
      }
    }
  }
</script>

<style scoped>

</style>