<template>
  <div>
    <div style="background: #f5f5f5">
      <q-table
              class="q-pa-md"
              :data="data" :columns="columns" row-key="name"
              selection="multiple" :selected.sync="selected" grid
              hide-header hide-bottom
      >
        <template v-slot:item="props">
          <div class="q-py-sm col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition">
            <q-card flat>
              <q-card-section>
                <q-checkbox color="pink-4" dense v-model="props.selected" :label="props.row.name"/>
              </q-card-section>
              <q-separator/>
              <div style="display: flex">

                <div style="flex: none" class="q-pa-sm">
                  <q-img :src="props.row.image"
                         spinner-color="white"
                         style="height: 130px;width: 100px;border-radius:8px"
                  />
                </div>

                <div style="flex: auto">
                  <q-list>
                    <q-item>
                      <q-item-section>
                        <q-item-label style="max-height: 30px;overflow: hidden">
                          {{ props.cols[1].value }}
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>
                        <q-item-label>{{ props.cols[2].label }}</q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-item-label>{{ props.cols[2].value }}</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>
                        <q-item-label>{{ props.cols[3].label }}</q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-item-label caption>{{ props.cols[3].value }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </div>

              </div>

            </q-card>
          </div>
        </template>

      </q-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Cart",
    data () {
      return {
        cart:[],
        selected: [],
        columns: [
          { name: 'image', label: '图标', field: 'image' },
          { name: 'title', label: '简介', field: 'title' },
          { name: 'price', label: '价格', field: 'price' },
          { name: 'count', label: '数量', field: 'count' },
        ],
        data: [
          {
            name: '第一个店铺',
            image: 'https://placeimg.com/500/300/nature',
            title: 6.0,
            price: 24,
            count: 4.0,
          }
        ]
      }
    },
    created() {
      this.data = this.$store.state.cartList
      console.log(this.cart)
    }
  }
</script>

<style scoped>

</style>