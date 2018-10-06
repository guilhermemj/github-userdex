import api from '@/api';

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
        const data = await api.users.getUser(state.searchQuery);

        commit('updateUserData', data);
      } catch (error) {
        throw new Error(error);
      } finally {
        commit('updatePendingState', false);
      }
    },
  },
};
