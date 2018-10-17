<template>
  <div>
    <empty-state v-if="userIsEmpty" />

    <v-layout wrap v-else>
      <v-flex xs12 md4 lg3 class="mb-2">
        <user-info-card :user-data="userData" />
      </v-flex>

      <v-flex xs12 md8 lg9>
        <v-tabs class="main-tabs" color="transparent">
          <v-tab>
            Repositories

            <v-chip small disabled>
              {{userData.public_repos}}
            </v-chip>
          </v-tab>

          <v-tab-item>
            lorem ipsum
          </v-tab-item>

          <v-tab>
            Gists

            <v-chip small disabled>
              {{userData.public_gists}}
            </v-chip>
          </v-tab>

          <v-tab>
            Followers

            <v-chip small disabled>
              {{userData.followers}}
            </v-chip>
          </v-tab>

          <v-tab>
            Following

            <v-chip small disabled>
              {{userData.following}}
            </v-chip>
          </v-tab>
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
      isLoading: state => state.pending,
      userData: state => state.userData,
    }),

    userIsEmpty() {
      return !Object.keys(this.userData).length;
    },
  },
};
</script>

<style lang="scss">
  .main-tabs .v-tabs__wrapper {
    border-bottom: 1px solid #ddd;
  }
</style>
