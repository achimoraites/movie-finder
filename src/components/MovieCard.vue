<template>
  <v-card elevation="2">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ movie.Title }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ movie.Year }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-card-actions @click="showDetails">
      <v-btn color="orange darken-2" text> Details </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <MovieCardDetails :movie="movie" />
      </div>
    </v-expand-transition>

    <v-img :src="Poster"> </v-img>
  </v-card>
</template>

<script>
import MovieCardDetails from '@/components/MovieCardDetails.vue';

export default {
  name: 'MovieCard',
  components: {
    MovieCardDetails,
  },
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    show: false,
  }),
  computed: {
    Poster() {
      return this.movie.Poster && this.movie.Poster.length > 5
        ? this.movie.Poster
        : 'https://via.placeholder.com/650/000000/FFFFFF/?text=No Poster Available!';
    },
  },
  methods: {
    showDetails() {
      this.show = !this.show;
    },
  },
};
</script>
