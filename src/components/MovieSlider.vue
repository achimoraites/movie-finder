<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(movie, index) in movies" :key="index">
      <MovieCard :movie="movie" />
    </swiper-slide>
    <div class="swiper-button swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button swiper-button-next" slot="button-next"></div>
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
      slidesPerColumn: 1,
      spaceBetween: 20,
      breakpoints: {
        // when window width is <= 320px
        0: {
          slidesPerView: 1,
          spaceBetweenSlides: 10,
        },
        // when window width is <= 480px
        480: {
          slidesPerView: 2,
          spaceBetweenSlides: 20,
        },
        // when window width is <= 640px
        640: {
          slidesPerView: 3,
          spaceBetweenSlides: 30,
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
  }),
};
</script>

<style scoped>
.swiper {
  height: auto;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {
  height: auto;
}
.swiper-button {
  background-color: #000000c9;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  padding: 2em;
}
.swiper-pagination {
  position: static;
}
</style>
