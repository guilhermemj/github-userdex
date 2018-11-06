<template>
  <div>
    <empty-state v-if="userIsEmpty" />

    <user-content v-else />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import EmptyState from './EmptyState.vue';
import NotFoundState from './NotFoundState.vue';
import UserContent from './UserContent.vue';

export default {
  name: 'TheContent',

  components: {
    EmptyState,
    NotFoundState,
    UserContent,
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
