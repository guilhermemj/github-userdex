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
    clearUser({ commit }) {
      commit('userInfo/updateUserInfo', {});
    },
  },
};
