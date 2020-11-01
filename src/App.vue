<template>
  <v-app>
    <NavBar />
    <v-alert class="fixed-alert" dismissible v-model="alert.visible" :type="alert.type">
      {{alert.message}}
    </v-alert>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/layout/NavBar.vue';
import EventBus, { ERROR } from '@/utils/eventBus';

export default {
  name: 'App',
  components: {
    NavBar,
  },
  data: () => ({
    alert: {
      visible: false,
      message: '',
      type: ERROR,
    },
  }),
  methods: {
    hideAlert() {
      setTimeout(() => {
        this.alert.visible = false;
      }, 3000);
    },
  },
  mounted() {
    EventBus.$on(ERROR, ({ message, type }) => {
      this.alert = {
        visible: true,
        message,
        type,
      };
      this.hideAlert();
    });
  },

};
</script>

<style>
.fixed-alert {
  z-index: 100;
  position: absolute !important;
  z-index: 100;
  bottom: 0;
  right: 0;
}
</style>
