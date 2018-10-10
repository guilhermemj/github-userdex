<template>
  <v-layout class="user-info" wrap>
    <v-flex shrink class="px-3">
      <v-avatar size="64">
        <img :src="userData.avatar_url" alt="">
      </v-avatar>
    </v-flex>

    <v-flex>
      <p class="title mb-0">
        {{userData.name}}
      </p>

      <p class="subheading mb-2">
        {{userData.login}}
      </p>

      <p class="mb-0" v-if="userData.location">
        <v-icon small class="mr-2">
          location_on
        </v-icon>

        <span class="caption">
          {{userData.location}}
        </span>
      </p>

      <p class="mb-2" v-if="userData.email">
        <v-icon small class="mr-2">
          email
        </v-icon>

        <span class="caption">
          {{userData.email}}
        </span>
      </p>
    </v-flex>

    <v-flex xs12 v-if="userData.bio">
      <p>{{userData.bio}}</p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'UserInfoCard',

  props: {
    userData: Object,
  },
};
</script>
