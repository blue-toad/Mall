<template>
  <div>
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <div v-if="banners != []">
      <q-carousel
              animated
              v-model="slide"
              arrows
              navigation
              infinite
              swipeable
              autoplay
              height="180px"
      >
        <q-carousel-slide v-for="(item,index) in banners"
                          :name="index"
                          :key="index"
                          :img-src="item.image"

        />
      </q-carousel>
      <!--      优雅的分割线以下是推荐-->
      <div class="recommend">
        <div v-for="(item,index) in recommends" class="recommend-item" :key="index">
          <div class="recommend-img-box">
            <q-img :src="item.image"
                   class="recommend-img">
            </q-img>
          </div>
          <div class="recommend-des">
            {{item.title}}
          </div>
        </div>
      </div>
<!--      推荐商品-->
      <div>
          <q-layout>



            <q-page-container>
              <q-page-sticky expand position="top">
                <q-header bordered class="text-black" height-hint="98">
                  <q-tabs align="center">
                    <q-route-tab to="/page1" label="热销" />
                    <q-route-tab to="/page2" label="推荐" />
                    <q-route-tab to="/page3" label="第三" />
                  </q-tabs>
                </q-header>
              </q-page-sticky>
              <div style="display: flex">
<!--                左边-->
                <div style="width: 50%;flex: auto">
                  <q-card class="my-card">
                    <img src="https://cdn.quasar.dev/img/mountains.jpg">

                    <q-card-section>
                      <div class="text-h6">Our Changing Planet</div>
                      <div class="text-subtitle2">by John Doe</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                      {{ padding }}
                    </q-card-section>
                  </q-card>
                </div>
<!--                右边-->
                <div style="width: 50%;flex: auto">
                  <q-card class="my-card">
                    <img src="http://s11.mogucdn.com/mlcdn/c45406/180808_600abce0g8dc8i4f6ic7k27i7837l_640x960.jpg_320x999.jpg">

                    <q-card-section style="padding: 0">
                      <q-field outlined stack-label :dense="true" :borderless="true" maxlength="15">
                        <template v-slot:control>
                          <div class="self-center full-width no-outline good-info" tabindex="0" >"2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装"</div>
                        </template>
                      </q-field>
                    </q-card-section>

                  </q-card>
                  <q-card class="my-card">
                    <img src="http://s11.mogucdn.com/mlcdn/c45406/180808_600abce0g8dc8i4f6ic7k27i7837l_640x960.jpg_320x999.jpg">

                    <q-card-section style="padding: 0">
                      <q-field outlined stack-label :dense="true" :borderless="true" maxlength="15">
                        <template v-slot:control>
                          <div class="self-center full-width no-outline good-info" tabindex="0" >"2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装"</div>
                        </template>
                      </q-field>
                    </q-card-section>

                  </q-card>
                  <q-card class="my-card">
                  <img src="http://s11.mogucdn.com/mlcdn/c45406/180808_600abce0g8dc8i4f6ic7k27i7837l_640x960.jpg_320x999.jpg">

                  <q-card-section style="padding: 0">
                    <q-field outlined stack-label :dense="true" :borderless="true" maxlength="15">
                      <template v-slot:control>
                        <div class="self-center full-width no-outline good-info" tabindex="0" >"2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装"</div>
                      </template>
                    </q-field>
                  </q-card-section>

                </q-card>
                </div>
              </div>

            </q-page-container>

          </q-layout>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar.vue";
  import {getHomeMultidata, getHomeGoods} from "@/utils/home";

  export default {
    name: "Home",
    components: {
      NavBar
    },
    data() {
      return {
        slide: 0,
        padding: false,
        banners: [],
        recommends: [],
        goods: {
          pop: {page: 0, list: []},
          new: {page: 0, list: []},
          sel: {page: 0, list: []}
        }
      }
    },
    created() {
      //获得轮播图的信息和推荐栏的信息
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
        console.log(this.recommends);
        console.log(this.banners);
      });
      // 获得下面的商品信息
      this.getHomeGoods();
    },
    methods: {
      getHomeGoods(){
        getHomeGoods('pop', 1).then(res => {
          this.goods.pop.list.push(...res.data.list)

          console.log(this.goods.pop.list);
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: #ff8198;
    font-weight: 700;
    color: #fff;
  }
  .recommend {
    display: flex;
    padding: 6px 0;
    padding-left: 3%;
    padding-right: 3%;
  }
  .recommend-item {
    padding: 2px 2%;
    flex: auto;
  }
  .recommend-img {
    border-radius:50%;
    width: 60px;
    height: 60px;
  }
  .recommend-des {
    font-size: 13px;
    text-align: center;
  }
  .recommend-img-box {
    text-align: center;
    padding: 3px 0;
  }
  .good-info {
    font-size: 5px;

  }
  .header {
    position: sticky;
  }

</style>