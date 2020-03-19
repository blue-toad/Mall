<template>
  <div>
    <div style="display:flex;">
      <div style="width: 100px;flex: none" v-if="categories.length">
        <q-list separator>
          <q-item clickable :active="item.title === part" active-class="my-active"
                  v-for="(item, index) in categories" :key="index"
                  class="text-center">
            <q-item-section @click="getSubcategories(index)" >
              <q-item-label>{{ item.title }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>

      <div style="flex: auto" v-if="finish">
        <MaitKey :cate="transportData"/>
      </div>

    </div>
  </div>
</template>

<script>
  import MaitKey from "./MaitKey";
  import {getCategory, getSubcategory} from "@/utils/category";

  export default {
    name: "Category",
    components: {
      MaitKey
    },
    data() {
      return {
        // 左边的列表的分类
        categories: [],
        // 右边的详细分类的总共
        categoryData: [],
        //这个参数是传递个右边组件的部分
        transportData: {},
        part: '',
        finish: false
      }
    },
    created() {
      getCategory().then(res => {
        console.log(res)
        // 1.获取整体的分类数据
        this.categories = res.data.category.list
        // 2.请求第一个分类的数据
        this.getSubcategories(0)
      })
    },
    methods: {
      getSubcategories(n) {
        let maitKey = this.categories[n].maitKey
        getSubcategory(maitKey).then(res => {
          this.categoryData[n] = res.data
          console.log('这是第' + n + '个')
          console.log(this.categoryData)
          // 这个finish标志第一次数据加载完成，v-if的对数组的长度判断可能有问题，当数组为空的时候没有length导致错误
          // 我的想法是用一个标志根据时候得到传递回来的数据进行判断
          // 数据加载回来了，然后渲染子组件
          // 但是左边的列表li就可以对数组的长度使用v-if进行判断，我也不知道为什么，有可能是因为左边的请求是写在created里面的？
          this.finish = true
          this.transportData = this.categoryData[n]
          this.part = this.categories[n].title
        })
      }
    }
  }
</script>

<style scoped>
  .my-active {
    color: white;
    background: #f06292
  }


</style>