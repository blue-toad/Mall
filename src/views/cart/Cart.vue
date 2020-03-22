<template>
  <div>
    <div style="background: #f5f5f5;padding-bottom: 30px" :style="height">
<!--      绑定的数据是data，表格头部的种类信息根据本地的columns显示-->
      <q-table
              class="q-pa-md"
              :data="data" :columns="columns" row-key="name"
              selection="multiple" :selected.sync="selected" grid
              hide-header hide-bottom
      >
<!--        组件自动进行对每个data数组中的数据的循环，单个信息为props传递给子插槽-->
        <template v-slot:item="props">
          <div class="q-py-sm col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition">
            <q-card flat>
              <q-card-section style="display:flex;align-items: center ">
                <q-checkbox style="flex: auto" color="pink-4" dense v-model="props.selected" :label="props.row.name"/>
                <div style="flex: none;font-size: 12px" class="text-grey-7">进入商店 ></div>
              </q-card-section>
              <div style="display: flex">

                <div style="flex: none" class="q-px-sm q-pb-sm">
                  <q-img :src="props.row.image"
                         spinner-color="white"
                         style="height: 130px;width: 100px;border-radius:5px"
                         @click="qqqqq()"
                  />
                </div>

                <div style="flex: auto">
                  <q-list>
                    <q-item>
                      <q-item-section>
<!--                        简介-->
                        <q-item-label style="max-height: 32px;overflow: hidden" class="text-grey-8">
                          {{ props.cols[1].value }}
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>
                        <q-item-label>{{ props.cols[2].label }}</q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-item-label style="color: #f06292">{{ '￥' + props.cols[2].value }}</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>
                        <q-item-label>{{ props.cols[3].label }}</q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-item-label caption>
<!--                          {{ props.cols[3].value }}-->
                          <q-input filled v-model="props.cols[3].value" dense />
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </div>

              </div>

            </q-card>
          </div>
        </template>

      </q-table>
      <div style="height: 46px;width:100%;background-color:white;position:fixed;bottom: 56px">
        <div style="display: flex;align-items: center" class="q-px-md q-py-xs">

          <div style="flex: auto;">
            <q-checkbox color="pink-4" v-model="selectedAll" />
            全选({{ selected.length }})
          </div>

          <div style="flex: none">
            <div style="display: flex;align-items: center">
              <div class="text-pink-4" style="font-size: 18px">
                {{ '￥' + totalPrice }}
              </div>
              <div class="q-pl-md">
                <q-btn rounded color="pink-4" size="md" label="结算" flat/>
              </div>
            </div>
          </div>

        </div>


      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Cart",
    data () {
      return {
        height: '',
        cart:[],
        // 选中信息
        selected: [],
        selectedAll: false,
        columns: [
          { name: 'image', label: '图标', field: 'image' },
          { name: 'title', label: '简介', field: 'title' },
          { name: 'price', label: '价格', field: 'price' },
          { name: 'count', label: '数量', field: 'count' },
        ],
        data: []
      }
    },
    created() {
      // 获得vuex中的购物车信息和屏幕高度
      this.data = this.$store.state.cartList
      this.height = this.$store.state.height
      console.log(this.cart)
      console.log(this.height)
    },
    computed: {
      // 计算总价
      totalPrice() {
        let item = {}
        let price = 0
        for(item of this.selected) {
          price += parseFloat(item.price);
        }
        return price
      }
    },
    watch: {
      // 判断是否进行全选
      // 如果全选 则将data中的 全部数据push到selected中
      // 否则清空selected
      selectedAll(newVal) {
        let item = null
        if (newVal == true) {
          this.selected = []
          for (item of this.data) {
            this.selected.push(item)
          }
          console.log('全选')
        } else {
          this.selected = []
        }
      }
    },
    methods: {
      qqqqq() {
        console.log(this.selected)
      }
    }
  }
</script>

<style scoped>

</style>