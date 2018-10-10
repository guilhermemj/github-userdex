<template>
  <div>
    <empty-state v-if="userIsEmpty" />

    <v-layout wrap v-else>
      <v-flex xs12 md4 class="mb-2">
        <user-info-card :user-data="userData" />
      </v-flex>

      <v-flex xs12 md8>
        <v-card class="mb-3">
          <v-card-title>
            <p class="title">
              Repositórios

              <v-chip small>{{userData.public_repos}}</v-chip>
            </p>
          </v-card-title>

          <v-card-text>
            <p>lorem</p>
          </v-card-text>
        </v-card>

        <v-card class="mb-3">
          <v-card-title>
            <p class="title">
              Gists

              <v-chip small>{{userData.public_gists}}</v-chip>
            </p>
          </v-card-title>

          <v-card-text>
            <p>lorem</p>
          </v-card-text>
        </v-card>
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
