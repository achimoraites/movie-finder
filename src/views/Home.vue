<template>
  <v-container mt-5 pt-5>
    <SearchBox
      :label="label"
      @onSearch="onSearch"
     />
  </v-container>
</template>

<script>
// @ is an alias to /src
import SearchBox from '@/components/SearchBox.vue';

export default {
  name: 'Home',
  components: {
    SearchBox,
  },
  data: () => ({
    label: 'Search by Title',
  }),
  methods: {
    onSearch(value) {
      this.$store.dispatch('getMoviesByTitle', value);
    },
  },
};
</script>
