export default {
  methods: {
    onSearch(value) {
      this.$store.dispatch('getMoviesByTitle', value);
    },
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
  },
};
