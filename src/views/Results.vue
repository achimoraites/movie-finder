<template>
  <v-container mt-5 pt-5>
    <h2>Results</h2>
    <!-- <MovieCard v-for="(movie, index) in movies" :key="index" /> -->
    <!-- <v-row>
      <v-col
      v-for="(movie, index) in movies"
      :key="index"
      sm="12"
      md="6"
      >
        <MovieCard :movie="movie" />
      </v-col>
    </v-row> -->
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
