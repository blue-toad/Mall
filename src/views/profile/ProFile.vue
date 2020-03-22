<template>
  <div>
    <div :style="height" style="background-color:#f5f5f5;">
       <div class="q-px-sm q-py-md">
         <q-card class="my-card bg-grey-2" flat>

           <q-card-section style="padding-top: 0px;padding-bottom: 2px">
             <div style="display: flex;align-items: center">
               <img src="~../../assets/img/ava.jpg" height="80" width="80" style="border-radius: 10px;flex: none"/>
               <div class="q-pl-md" style="font-weight: 800;flex: auto"> 我是楠哥的儿子 </div>
               <div style="flex: none;align-self: flex-start">
                 <div>
                   <q-icon name="ion-settings" size="sm" color="grey-7" class="q-pa-sm"></q-icon>
                   <q-icon name="ion-more" size="sm" color="grey-7" class="q-pa-sm"></q-icon>
                 </div>
               </div>
             </div>

           </q-card-section>

           <q-card-actions horizontal class="justify-around" style="text-align: center;padding-top: 4px" >
             <div v-for="(item, index) in part" :key="index">
               <div>{{ values[index] }}</div>
               <div>{{ item }}</div>
             </div>
           </q-card-actions>

         </q-card>

         <q-card class="my-card q-mx-sm" flat style="border-radius: 8px">
           <q-card-actions horizontal class="justify-between q-px-sm" style="padding: 5px">
             <div style="font-weight: 800;padding-left: 5px">我的订单</div>
             <div class="text-grey-7" style="font-size: 12px;padding-right: 5px">查看全部订单></div>
           </q-card-actions>

           <q-separator/>

           <q-card-actions horizontal class="justify-around">
             <div style="text-align: center;" v-for="(item, index) in icon1" :key="index">
               <q-img :src="item" height="35px" width="35px" style="fill: #9C27B0"></q-img>
               <div class="text-grey-7" style="font-size: 13px">{{ lable1[index] }}</div>
             </div>

           </q-card-actions>
         </q-card>

         <q-card class="my-card q-mx-sm" flat style="border-radius: 8px;margin-top: 15px">
           <q-card-actions horizontal class="justify-between q-px-sm" style="padding: 5px">
             <div style="font-weight: 600;padding-left: 5px">必备工具</div>
             <div class="text-grey-7" style="font-size: 12px;padding-right: 5px">查看全部工具></div>
           </q-card-actions>

           <q-separator/>

           <q-card-actions horizontal class="justify-around">
             <div style="text-align: center" v-for="(item, index) in icon2" :key="index">
               <img :src="item" height="32" width="32"/>
               <div class="text-grey-7" style="font-size: 13px">{{ lable2[index] }}</div>
             </div>

           </q-card-actions>

           <q-card-actions horizontal class="justify-around">
             <div style="text-align: center" v-for="(item, index) in icon3" :key="index">
               <img :src="item" height="32" width="32"/>
               <div class="text-grey-7" style="font-size: 13px">{{ lable3[index] }}</div>
             </div>

           </q-card-actions>
         </q-card>

         <q-card class="my-card q-mx-sm" flat style="border-radius: 8px;margin-top: 15px">
           <q-img :src="require('../../assets/img/四蛆兄弟.jpg')"></q-img>
         </q-card>
       </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProFile",
    data() {
      return {
        part:['收藏夹', '关注店铺', '我的足迹', '红包卡券'],
        values: [1, 5, 777, 98],
        icon1: [require('../../assets/img/mall.svg'), require('../../assets/img/shipping.svg'),require('../../assets/img/grade.svg'),require('../../assets/img/card.svg'),],
        lable1: ['待发货', '待收货', '评价', '退款/售后'],
        icon2: [require('../../assets/img/王.jpg'), require('../../assets/img/鑫.jpg'), require('../../assets/img/爸.jpg'),require('../../assets/img/爸.jpg') ],
        lable2: ['每日返现', '领券中心', '闲置换钱', '客服小密'],
        icon3: [require('../../assets/img/若.jpg'), require('../../assets/img/岩.jpg'), require('../../assets/img/爸1.jpg'),require('../../assets/img/爸1.jpg') ],
        lable3: ['我的花呗', '我的快递', '天猫农场', '主题换肤'],
        height: ''
      }
    },
    created() {
      this.height = this.$store.state.height
    }
  }
</script>

<style scoped>

</style>