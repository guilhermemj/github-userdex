import api from '@/plugins/api';
import getRemainingPages from '@/helpers/get-remaining-pages';

export default {
  namespaced: true,

  state: {
    pending: false,
    data: [],
  },

  mutations: {
    updatePendingState(localState, newValue) {
      localState.pending = newValue;
    },

    updateData(localState, newValue) {
      localState.data = newValue;
    },
  },

  actions: {
    async fetchData({ commit, rootState }) {
      commit('updatePendingState', true);

      try {
        const firstPage = await api.users.getFollowingForUser({
          username: rootState.searchQuery,
          per_page: 100,
        });

        commit('updateData', await getRemainingPages(firstPage));
      } catch (error) {
        throw new Error(error);
      } finally {
        commit('updatePendingState', false);
      }
    },
  },
};
