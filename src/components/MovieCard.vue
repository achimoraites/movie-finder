<template>
  <v-card>
        <v-img
          :src="Poster"
        >
          <v-card-title class="white--text mt-8">
            <p class="ml-3">
              John Doe
            </p>
          </v-card-title>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            Today
          </div>
        </v-card-text>
      </v-card>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    Poster() {
      return this.movie.Poster && this.movie.Poster.length > 5
        ? this.movie.Poster : 'https://via.placeholder.com/650/000000/FFFFFF/?text=No Poster Available!';
    },
  },
};
</script>
