<template>
  <v-app>
    <the-toolbar />

    <v-content>
      <v-container fluid>
        <the-content />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TheToolbar from './components/TheToolbar.vue';
import TheContent from './components/TheContent.vue';

export default {
  name: 'App',

  components: {
    TheToolbar,
    TheContent,
  },
};
</script>
