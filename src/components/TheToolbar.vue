<template>
  <v-toolbar color="#24292e" dark app>
    <v-avatar tile size="32" class="mr-3 pb-1">
      <img src="@/assets/logo-white.png" alt="">
    </v-avatar>

    <h1 class="title mr-3">
      GitHub Userdex
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
