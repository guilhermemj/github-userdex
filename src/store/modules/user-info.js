import api from '@/plugins/api';

export default {
  namespaced: true,

  state: {
    pending: false,
    data: {},
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
        const { data } = await api.users.getForUser({
          username: rootState.searchQuery,
        });

        commit('updateData', data);
      } catch (error) {
        throw new Error(error);
      } finally {
        commit('updatePendingState', false);
      }
    },
  },
};
