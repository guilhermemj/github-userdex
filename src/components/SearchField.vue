<template>
  <v-text-field
    color="white"
    solo flat
    hide-details

    placeholder="Search user..."
    append-icon="search"
    :disabled="isFetching"
    :loading="isFetching"

    v-model.trim="localSearchQuery"
    @change="handleSearch"
    @click:append="handleSearch"
  />
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'SearchField',

  computed: {
    ...mapState({
      searchQuery: state => state.searchQuery,
      isFetching: state => state.pending,
    }),

    localSearchQuery: {
      get() {
        return this.searchQuery;
      },

      set(value) {
        this.updateSearchQuery(value);
      },
    },
  },

  methods: {
    ...mapMutations({
      updateSearchQuery: 'updateSearchQuery',
    }),

    ...mapActions({
      searchUser: 'searchUser',
    }),

    handleSearch() {
      if (!this.searchQuery) {
        return;
      }

      this.searchUser();
    },
  },
};
</script>
