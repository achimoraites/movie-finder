<template>
  <v-container>
     <v-text-field
      v-model="searchValue"
      :append-icon="icon"
      :label="label"
      @click:append="search"
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
