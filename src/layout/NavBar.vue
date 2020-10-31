<template>
 <v-app-bar app>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <h1>Movie Finder</h1>
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
};
</script>
