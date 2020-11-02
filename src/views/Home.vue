<template>
  <v-container mt-5 pt-5>
    <SearchBox
      :label="label"
      :loading="loading"
      @onSearch="onSearch"
     />
  </v-container>
</template>

<script>
// @ is an alias to /src
import SearchBox from '@/components/SearchBox.vue';
import SearchMoviesMixin from '@/mixins/search-movies-mixin';

export default {
  name: 'Home',
  components: {
    SearchBox,
  },
  mixins: [SearchMoviesMixin],
  data: () => ({
    label: 'Search by Title',
  }),
};
</script>
