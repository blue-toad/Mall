<template>
  <q-page>
    <div id="q-app">
      <div>
        <q-card>
          <q-tabs
                  v-model="tab"
                  dense
                  class="text-grey"
                  active-color="primary"
                  indicator-color="primary"
                  align="justify"
          >
            <q-tab name="mails" label="人气" ></q-tab>
            <q-tab name="alarms" label="新品" ></q-tab>
            <q-tab name="movies" label="热销" ></q-tab>
          </q-tabs>

          <q-separator ></q-separator>

          <q-tab-panels v-model="tab" animated swipeable>
            <q-tab-panel name="mails">
                <!--        滚动条-->
                <q-infinite-scroll @load="onLoad" :offset="400">
                  <div style="display: flex" v-if="goods.pop.list.length">

                    <!--          左边-->
                    <div style="flex: auto;width: 50%">
                      <div id="list-left">
                        <div v-for="n in array1" :key="n" class="q-pt-sm q-pl-sm">
                          <q-card class="my-card">
                            <img :src="goods.pop.list[n].show.img" class="shadow-2">
                            <q-card-section style="padding: 4px">
                              <div class="text-body2" style="font-size: small;overflow: hidden;height: 40px">
                                {{ goods.pop.list[n].title}}
                              </div>
                              <div class="text-pink-4">
                                ￥{{ goods.pop.list[n].price }}
                              </div>
                            </q-card-section>
                          </q-card>
                        </div>
                      </div>
                    </div>

                    <!--          右边-->
                    <div style="flex: auto;width: 50%">
                      <div id="list-right">
                        <div v-for="n in array2" :key="n" class="q-pt-sm q-px-sm">
                          <q-card class="my-card" >
                            <img :src="goods.pop.list[n].show.img" class="shadow-2">
                            <q-card-section style="padding: 4px">
                              <div class="text-body2" style="font-size: small;overflow: hidden;height: 40px">
                                {{ goods.pop.list[n].title}}
                              </div>
                              <div class="text-pink-4">
                                ￥{{ goods.pop.list[n].price }}
                              </div>
                            </q-card-section>
                          </q-card>
                        </div>
                      </div>
                    </div>

                  </div>
                  <template v-slot:loading>
                    <div class="row justify-center q-my-md">
                      <q-spinner-dots color="bg-pink-4" size="40px" />
                    </div>
                  </template>
                </q-infinite-scroll>

            </q-tab-panel>

            <q-tab-panel name="alarms">
              <div class="text-h6">Alarms</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>

            <q-tab-panel name="movies">
              <div class="text-h6">Movies</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>


  </q-page>
</template>

<script>
  import {getHomeGoods} from "@/utils/home";

  export default {
    name: "Goods",
    data() {
      return {
        goods: {
          pop: {page: 0, list: []},
          new: {page: 0, list: []},
          sel: {page: 0, list: []}
        },
        tab: 'mails',
        part: 'pop',
        array1: [],
        array2: [],
        leftlength: 0,
        rightlength: 0
      }
    },
    created() {
      this.getHomeGoods('pop', 1)
      this.goods.pop.page = 1
      let i = 0
      while (i < 30){
        if (i % 2 === 0){this.array1.push(i)}
        else {this.array2.push(i)}
        i++
      }
    },
    methods: {
      getHomeGoods(part, page){
        getHomeGoods(part, page).then(res => {
          this.goods[part].list.push(...res.data.list)//这是一个将一个数组中的所有元素push进另一个数组的方法
          console.log(res)
        })
      },
      length() {
        //该函数的作用是判断左边的商品长度是否远大于右边的商品长度
        //如果左边的商品太长右边将会出现大片空白
        //通过修改array1和array2俩个数组将左右平均
        let left = document.getElementById('list-left').scrollHeight
        let right = document.getElementById('list-right').scrollHeight
        if (left - right > 300){
          this.array2.push(this.array1.pop())
        }
        else if (right - left > 300){
          this.array1.push(this.array2.pop())
        }
      },
      onLoad(index, done) {
        getHomeGoods(this.part, this.goods[this.part].page + 1).then(res => {
          this.goods[this.part].list.push(...res.data.list)
          this.goods[this.part].page ++
          let i = this.array1.length + this.array2.length
          while (i < this.goods[this.part].list.length){
            if (i % 2 === 0){this.array1.push(i)}
            else {this.array2.push(i)}
            i++
          }
          this.length()
          console.log(this.array1)
          done()
          console.log(res)
        })

      }
    }
  }
</script>

<style scoped>
.part {
  position: sticky;
}
</style>