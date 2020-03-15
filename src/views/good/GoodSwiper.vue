<template>
  <div>
    <q-carousel
            animated
            v-model="slide"
            infinite
            autoplay
            arrows
            swipeable
            transition-prev="slide-right"
            transition-next="slide-left"
    >
      <q-carousel-slide v-for="(item, index) in topImages" :key="index" :name="index" :img-src="'https:' + topImages[index]" />
    </q-carousel>
  </div>
</template>

<script>
  export default {
    name: "GoodSwiper",
    data() {
      return {
        slide: 1
      }
    },
    props: {
      topImages: Array
    }
  }
</script>

<style scoped>

</style>