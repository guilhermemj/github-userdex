<template>
  <div>
    <empty-state v-if="userIsEmpty" />

    <v-layout wrap v-else>
      <v-flex xs12 md4 lg3 class="mb-2">
        <user-info-card :user-data="userInfo" />
      </v-flex>

      <v-flex xs12 md8 lg9>
        <v-tabs class="main-tabs" color="transparent">
          <v-tab>
            Repositories

            <v-chip small disabled>
              {{userInfo.public_repos}}
            </v-chip>
          </v-tab>

          <v-tab-item>
            lorem
          </v-tab-item>

          <v-tab>
            Gists

            <v-chip small disabled>
              {{userInfo.public_gists}}
            </v-chip>
          </v-tab>

          <v-tab-item>
            ipsum
          </v-tab-item>

          <v-tab>
            Followers

            <v-chip small disabled>
              {{userInfo.followers}}
            </v-chip>
          </v-tab>

          <v-tab-item>
            dolor
          </v-tab-item>

          <v-tab>
            Following

            <v-chip small disabled>
              {{userInfo.following}}
            </v-chip>
          </v-tab>

          <v-tab-item>
            sit
          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import EmptyState from './EmptyState.vue';
import UserInfoCard from './UserInfoCard.vue';

export default {
  name: 'TheContent',

  components: {
    EmptyState,
    UserInfoCard,
  },

  computed: {
    ...mapState({
      userInfo: state => state.userInfo.data,
    }),

    userIsEmpty() {
      return !Object.keys(this.userInfo).length;
    },
  },
};
</script>

<style lang="scss">
  .main-tabs .v-tabs__wrapper {
    border-bottom: 1px solid #ddd;
  }
</style>
