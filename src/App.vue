<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/layout/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
  data: () => ({
    //
  }),

};
</script>
