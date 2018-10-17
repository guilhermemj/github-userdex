<template>
  <div class="user-info">
    <v-layout>
      <v-flex shrink class="text-xs-center" style="max-width: 80px">
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
          <v-icon small>
            location_on
          </v-icon>

          <span class="caption">
            {{userData.location}}
          </span>
        </p>

        <p class="mb-0" v-if="userData.email">
          <v-icon small>
            email
          </v-icon>

          <span class="caption">
            {{userData.email}}
          </span>
        </p>
      </v-flex>
    </v-layout>

    <p class="caption mb-0 text-xs-justify" v-if="userData.bio">
      {{userData.bio}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'UserInfoCard',

  props: {
    userData: Object,
  },
};
</script>
