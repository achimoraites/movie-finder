<template>
 <v-app-bar app>
      <div @click="goHome" class="d-flex align-center brand">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <h3>Movie Finder</h3>
      </div>

      <v-spacer></v-spacer>

      <div class="d-flex align-center justify-center">
        <v-switch
          v-model="$vuetify.theme.dark"
          inset
          :label="themeLabel"
        ></v-switch>
      </div>
    </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    themeLabel() {
      return this.$vuetify.theme.dark ? 'Toggle Light Theme' : 'Toggle Dark Theme';
    },
  },
  methods: {
    goHome() {
      if (this.$router.currentRoute.name !== 'Home') {
        this.$router.push('/');
      }
    },
  },
};
</script>

<style scoped>
.brand {
  cursor: pointer;
}
</style>
