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

export default {
  name: 'Home',
  components: {
    SearchBox,
  },
  data: () => ({
    label: 'Search by Title',
  }),
  computed: {
    loading() {
      return this.$store.state.loading;
    },
  },
  methods: {
    onSearch(value) {
      this.$store.dispatch('getMoviesByTitle', value);
    },
  },
};
</script>
