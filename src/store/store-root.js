import api from '@/plugins/api';

export default {
  state: {
    searchQuery: '',
    pending: false,
    userData: {},
  },

  mutations: {
    updateSearchQuery(localState, newValue) {
      localState.searchQuery = newValue;
    },

    updatePendingState(localState, newValue) {
      localState.pending = newValue;
    },

    updateUserData(localState, newValue) {
      localState.userData = newValue;
    },
  },

  actions: {
    async searchUser({ commit, state }) {
      commit('updatePendingState', true);

      try {
        const { data } = await api.users.getForUser({
          username: state.searchQuery,
        });

        commit('updateUserData', data);
      } catch (error) {
        throw new Error(error);
      } finally {
        commit('updatePendingState', false);
      }
    },
  },
};
