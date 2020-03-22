<template>
  <div v-if="banners != []">
    <q-carousel
            animated
            v-model="slide"
            arrows
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
</template>

<script>
  export default {
    name: "Swiper",
    data() {
      return {
        slide: 1,
      }
    },
    props: {
      banners: Array,
      recommends: Array
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    padding: 6px 3%;
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
</style>