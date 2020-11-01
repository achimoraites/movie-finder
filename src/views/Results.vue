<template>
  <v-container mt-5 pt-5>
    <MovieSlider :movies="movies" />
  </v-container>
</template>

<script>
import MovieSlider from '@/components/MovieSlider.vue';

export default {
  name: 'Results',
  components: {
    MovieSlider,
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },
};
</script>
