import Vue from 'vue';
import Vuex from 'vuex';

import root from './store-root';
import userInfo from './modules/user-info';
import repos from './modules/repos';
import followers from './modules/followers';
import following from './modules/following';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  ...root,

  modules: {
    userInfo,
    repos,
    followers,
    following,
  },
});
