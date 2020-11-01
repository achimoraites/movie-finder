<template>
  <v-container mt-5 pt-5>
    <MovieSlider v-if="movies && movies.length" :movies="movies" />
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
  mounted() {
    if (!this.movies.length) {
      this.$router.push('/');
    }
  },
};
</script>
