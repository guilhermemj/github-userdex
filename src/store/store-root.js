export default {
  state: {
    searchQuery: '',
  },

  mutations: {
    updateSearchQuery(localState, newValue) {
      localState.searchQuery = newValue;
    },
  },

  actions: {
    clearData({ commit }) {
      commit('userInfo/updateData', {});
      commit('repos/updateData', []);
    },
  },
};
