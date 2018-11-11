<template>
  <v-layout wrap>
    <v-flex xs12 md4 lg3 class="mb-2">
      <user-info-card :user-data="userInfo" />
    </v-flex>

    <v-flex xs12 md8 lg9>
      <v-tabs v-model="activeTab" class="main-tabs" color="transparent">
        <v-tab @click="updateRepos">
          Repositories

          <user-content-tab-badge>
            {{userInfo.public_repos}}
          </user-content-tab-badge>
        </v-tab>

        <v-tab-item>
          <v-progress-linear
            indeterminate
            color="grey"
            class="ma-0"
            height="2"
            v-if="pendingRepositories"
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

        <v-tab @click="updateFollowers">
          Followers

          <user-content-tab-badge>
            {{userInfo.followers}}
          </user-content-tab-badge>
        </v-tab>

        <v-tab-item>
          <v-progress-linear
            indeterminate
            color="grey"
            class="ma-0"
            height="2"
            v-if="pendingFollowers"
          />

          <template v-if="!followers.length">
            <p>No info to show.</p>
          </template>

          <v-container class="px-0">
            <v-layout wrap>
              <template v-for="item of followers">
                <v-flex xs12 sm6 md4 :key="item.id">
                  <user-info-card-simple :user-data="item" />
                </v-flex>
              </template>
            </v-layout>
          </v-container>
        </v-tab-item>

        <v-tab @click="updateFollowing">
          Following

          <user-content-tab-badge>
            {{userInfo.following}}
          </user-content-tab-badge>
        </v-tab>

        <v-tab-item>
          <v-progress-linear
            indeterminate
            color="grey"
            class="ma-0"
            height="2"
            v-if="pendingFollowing"
          />

          <template v-if="!following.length">
            <p>No info to show.</p>
          </template>

          <v-container class="px-0">
            <v-layout wrap>
              <template v-for="item of following">
                <v-flex xs12 sm6 md4 :key="item.id">
                  <user-info-card-simple :user-data="item" />
                </v-flex>
              </template>
            </v-layout>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import UserContentTabBadge from './UserContentTabBadge.vue';
import UserInfoCard from './UserInfoCard.vue';
import UserInfoCardSimple from './UserInfoCardSimple.vue';
import RepoInfoCard from './RepoInfoCard.vue';

export default {
  name: 'UserContent',

  components: {
    UserContentTabBadge,
    UserInfoCard,
    UserInfoCardSimple,
    RepoInfoCard,
  },

  data() {
    return {
      activeTab: 0,

      hasFetchedRepos: false,
      hasFetchedFollowers: false,
      hasFetchedFollowing: false,
    };
  },

  computed: {
    ...mapState({
      userInfo: state => state.userInfo.data,

      pendingRepositories: state => state.repos.pending,
      repositories: state => state.repos.data,

      pendingFollowers: state => state.followers.pending,
      followers: state => state.followers.data,

      pendingFollowing: state => state.following.pending,
      following: state => state.following.data,
    }),
  },

  created() {
    this.updateRepos();
  },

  methods: {
    ...mapActions({
      fetchRepos: 'repos/fetchData',
      fetchFollowers: 'followers/fetchData',
      fetchFollowing: 'following/fetchData',
    }),

    updateRepos() {
      if (this.hasFetchedRepos) {
        return;
      }

      this.fetchRepos();
      this.hasFetchedRepos = true;
    },

    updateFollowers() {
      if (this.hasFetchedFollowers) {
        return;
      }

      this.fetchFollowers();
      this.hasFetchedFollowers = true;
    },

    updateFollowing() {
      if (this.hasFetchedFollowing) {
        return;
      }

      this.fetchFollowing();
      this.hasFetchedFollowing = true;
    },
  },
};
</script>

<style lang="scss">
  .main-tabs .v-tabs__wrapper {
    border-bottom: 1px solid #ddd;
  }
</style>
