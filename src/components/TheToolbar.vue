<template>
  <v-toolbar color="#24292e" dark app>
    <v-icon class="mr-3">
      map
    </v-icon>

    <h1 class="title mr-3">
      Github Explorer
    </h1>

    <v-spacer />

    <v-text-field
      color="white"
      solo flat
      hide-details
      placeholder="Search user..."
      append-icon="search"

      v-model="searchQuery"
    />
  </v-toolbar>
</template>

<script>
export default {
  name: 'TheToolbar',

  data() {
    return {
      searchQuery: '',
    };
  },
};
</script>
