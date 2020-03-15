<template>
  <div>
    <div>
      <div class="row q-px-md" v-if="goods.list.length">
        <div class="col">
          <GoodsItems :itemNumber="array1" :goodsList="goods.list" @changeHeight="balanceLeft"/>
        </div>
        <div style="width: 12px;flex: auto"></div>
        <div class="col">
          <GoodsItems :itemNumber="array2" :goodsList="goods.list" @changeHeight="balanceRight"/>
        </div>
      </div>
    </div>
    <div class="row justify-center q-my-md">
      <q-spinner-dots color="pink-4" size="40px" />
    </div>
  </div>
</template>

<script>
  //该组件已经封装，参树Goods 数组类型，需要包含商品信息的数组
  import GoodsItems from "./GoodsItems";
  export default {
    name: "GoodsList",
    components: {GoodsItems},
    data() {
      return {
        array1: [],
        array2: [],
        leftHeight: 0,
        rightHeight: 0,
        differ: 0
      }
    },
    props: {
      goods: Object
    },
    created() {
      //构造奇数偶数数组分别给左栏和右栏
      let i = 0
      while (i < 30){
        if (i % 2 === 0){this.array1.push(i)}
        else {this.array2.push(i)}
        i++
      }
    },
    watch: {
      //当传入新的商品数据时更新这左右两栏展示数组
      goods: {
        handler(newVal) {
          let i = this.array2.length + this.array1.length
          while (i < newVal.list.length){
            if (i % 2 === 0){this.array1.push(i)}
            else {this.array2.push(i)}
            i++
          }
          console.log(this.array1);
          console.log(this.array2);
        },
        // 当监视一个对象时需要使用deep参数
        deep: true
      },
      //比较左右两栏谁的高度比较高如果某一栏的高度比较高（200px）则将高的一栏的最后一个元素放入低的一栏
      differ(newVal) {
        console.log(newVal + '左边' + this.leftHeight + '右边' + this.rightHeight)
        if (this.leftHeight != 0 & this.rightHeight != 0 ){
          if (newVal > 200){
            this.array2.push(this.array1.pop())
          }
          else if(newVal < -200){
            this.array1.push(this.array2.pop())
          }
        }
      }
    },
    methods: {
      //获得左右两栏的高度数据
      balanceLeft(height) {
        this.leftHeight = height
        this.differ = this.leftHeight - this.rightHeight
      },
      balanceRight(height) {
        this.rightHeight = height
        this.differ = this.leftHeight - this.rightHeight
      }
    }
  }
</script>

<style scoped>

</style>