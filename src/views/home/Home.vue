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
    </div>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar.vue";
  import {getHomeMultidata} from "@/utils/home";

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
        recommends: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
        console.log(this.recommends);
      })
    },
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
    padding-bottom: 1%;
    padding-left: 3%;
    padding-right: 3%;
  }
  .recommend-item {
    padding: 2%;
    flex: auto;
  }
  .recommend-img {
    border-radius:50%;
    width: 100%;
  }
  .recommend-des {
    font-size: 13px;
    text-align: center;
  }
  .recommend-img-box {
    padding: 6%;
  }

</style>