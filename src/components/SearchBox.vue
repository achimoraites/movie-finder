<template>
  <v-container>
     <v-text-field
      v-model="searchValue"
      append-icon="mdi-magnify"
      @click:append="search"
      :label="label"
     >
     </v-text-field>
  </v-container>
</template>

<script>
export default {
  name: 'SearchBox',
  props: {
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: 'mdi-magnify',
    },
  },
  data: () => ({
    searchValue: '',
  }),
  methods: {
    search() {
      if (this.searchValue) {
        this.$emit('onSearch', this.searchValue);
      }
    },
  },
};
</script>
