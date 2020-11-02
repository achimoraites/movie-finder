<template>
  <v-container mt-5 pt-5>
    <SearchBox
      class="mb-5"
      label="Search more movies..."
      :loading="loading"
      @onSearch="onSearch"
     />
    <MovieSlider v-if="movies && movies.length" :movies="movies" />
  </v-container>
</template>

<script>
import MovieSlider from '@/components/MovieSlider.vue';
import SearchBox from '@/components/SearchBox.vue';
import SearchMoviesMixin from '@/mixins/search-movies-mixin';

export default {
  name: 'Results',
  components: {
    MovieSlider,
    SearchBox,
  },
  mixins: [SearchMoviesMixin],
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
