<template>
    <v-list v-if="movie.Director" class="transparent">
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title> Director </v-list-item-title>
          <v-list-item-subtitle class="text-left">
            {{ movie.Director }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title> Genre </v-list-item-title>
          <v-list-item-subtitle class="text-left">
            {{ movie.Genre }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-skeleton-loader
      v-else
      type="article"
    ></v-skeleton-loader>
</template>

<script>
export default {
  name: 'MovieCardDetails',
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>
