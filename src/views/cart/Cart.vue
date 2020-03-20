<template>
  <div class="q-pa-md bg-grey-2" >
    <q-table :data="data" :columns="columns" row-key="name"
            selection="multiple" :selected.sync="selected" grid
            hide-header hide-bottom
    >
      <template v-slot:item="props">
        <div class="q-py-sm col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition">
          <q-card flat>
            <q-card-section>
              <q-checkbox color="pink-4" dense v-model="props.selected" :label="props.row.name" />
            </q-card-section>
            <q-separator />
            <div style="display: flex">

              <div style="flex: none" class="q-pa-sm">
                <q-img  :src="props.row.image"
                        spinner-color="white"
                        style="height: 100px;width: 100px;border-radius:8px"
                        @click="qqqq(props.row.image)"
                />
              </div>

              <div style="flex: auto">
                <q-list dense>
                  <q-item>
                    <q-item-section>
                      <q-item-label>{{ props.cols[1].label }}</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-item-label caption>{{ props.cols[1].value }}</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label>{{ props.cols[2].label }}</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-item-label caption>{{ props.cols[2].value }}</q-item-label>
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
</template>

<script>
  export default {
    name: "Cart",
    data () {
      return {
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
          },
          {
            name: '第二个店铺',
            image: 'directions',
            title: 9.0,
            price: 37,
            count: 4.3,
          },
          {
            name: '第三个店铺',
            image: 'directions',
            title: 16.0,
            price: 23,
            count: 6.0,
          }
        ]
      }
    },
    methods: {
      qqqq(props) {
        console.log(props)
      }
    }
  }
</script>

<style scoped>

</style>