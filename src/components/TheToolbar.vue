<template>
  <v-toolbar color="#24292e" dark app>
    <v-icon class="mr-3">
      map
    </v-icon>

    <h1 class="title mr-3">
      Github Explorer
    </h1>

    <v-spacer />

    <search-field />
  </v-toolbar>
</template>

<script>
import SearchField from './SearchField.vue';

export default {
  name: 'TheToolbar',

  components: {
    SearchField,
  },
};
</script>
