<template>
  <v-card class="user-info simple" :href="userData.html_url" hover>
    <v-card-title>
      <v-layout>
        <v-flex shrink class="text-xs-center" style="max-width: 56px">
          <v-avatar size="40">
            <img :src="userData.avatar_url" alt="">
          </v-avatar>
        </v-flex>

        <v-flex>
          <p class="subheading pt-2 mb-0">
            {{userData.login}}
          </p>
        </v-flex>
      </v-layout>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'UserInfoCardSimple',

  props: {
    userData: Object,
  },
};
</script>
