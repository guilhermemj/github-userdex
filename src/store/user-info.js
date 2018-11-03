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

    updateUserInfo(localState, newValue) {
      localState.data = newValue;
    },
  },

  actions: {
    async searchUser({ commit, rootState }) {
      commit('updatePendingState', true);

      try {
        const { data } = await api.users.getForUser({
          username: rootState.searchQuery,
        });

        commit('updateUserInfo', data);
      } catch (error) {
        throw new Error(error);
      } finally {
        commit('updatePendingState', false);
      }
    },
  },
};
