<template>
  <v-app>
    <v-toolbar app>

    </v-toolbar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>

    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
