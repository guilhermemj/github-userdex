<template>
  <v-layout wrap>
    <v-flex xs12 md4 lg3 class="mb-2">
      <user-info-card :user-data="userInfo" />
    </v-flex>

    <v-flex xs12 md8 lg9>
      <v-tabs v-model="activeTab" class="main-tabs" color="transparent">
        <v-tab @click="updateRepos">
          Repositories

          <span class="grey lighten-2 px-2 py-1 ml-2" style="border-radius: 12px; font-size: .8em;">
            {{userInfo.public_repos}}
          </span>
        </v-tab>

        <v-tab-item>
          <v-progress-linear
            indeterminate
            color="grey"
            class="ma-0"
            height="2"
            v-if="pendingRepos"
          />

          <template v-if="!repositories.length">
            <p>No info to show.</p>
          </template>

          <v-container class="px-0">
            <v-layout wrap>
              <template v-for="item of repositories">
                <v-flex xs12 sm6 md4 :key="item.id">
                  <repo-info-card :repo-data="item" style="height: 100%;" />
                </v-flex>
              </template>
            </v-layout>
          </v-container>
        </v-tab-item>

        <v-tab>
          Gists

          <span class="grey lighten-2 px-2 py-1 ml-2" style="border-radius: 12px; font-size: .8em;">
            {{userInfo.public_gists}}
          </span>
        </v-tab>

        <v-tab-item>
          ipsum
        </v-tab-item>

        <v-tab>
          Followers

          <span class="grey lighten-2 px-2 py-1 ml-2" style="border-radius: 12px; font-size: .8em;">
            {{userInfo.followers}}
          </span>
        </v-tab>

        <v-tab-item>
          dolor
        </v-tab-item>

        <v-tab>
          Following

          <span class="grey lighten-2 px-2 py-1 ml-2" style="border-radius: 12px; font-size: .8em;">
            {{userInfo.following}}
          </span>
        </v-tab>

        <v-tab-item>
          sit
        </v-tab-item>
      </v-tabs>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import UserInfoCard from './UserInfoCard.vue';
import RepoInfoCard from './RepoInfoCard.vue';

export default {
  name: 'UserContent',

  components: {
    UserInfoCard,
    RepoInfoCard,
  },

  data() {
    return {
      activeTab: 0,
      hasFetchedRepos: false,
    };
  },

  computed: {
    ...mapState({
      userInfo: state => state.userInfo.data,

      pendingRepos: state => state.repos.pending,
      repositories: state => state.repos.data,
    }),
  },

  created() {
    this.updateRepos();
  },

  methods: {
    ...mapActions({
      fetchRepos: 'repos/fetchData',
    }),

    updateRepos() {
      if (this.hasFetchedRepos) {
        return;
      }

      this.fetchRepos();
      this.hasFetchedRepos = true;
    },
  },
};
</script>

<style lang="scss">
  .main-tabs .v-tabs__wrapper {
    border-bottom: 1px solid #ddd;
  }
</style>
