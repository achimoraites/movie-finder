<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(movie, index) in movies" :key="index">
      <MovieCard :movie="movie" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

import MovieCard from '@/components/MovieCard.vue';

export default {
  name: 'MovieSlider',
  components: {
    Swiper,
    SwiperSlide,
    MovieCard,
  },
  directives: {
    swiper: directive,
  },
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    model: 0,
    swiperOption: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
  }),
};
</script>

<style  scoped>
.swiper {
  height: 430px;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {
  height: auto;
}
</style>
