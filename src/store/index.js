import Vue from 'vue';
import Vuex from 'vuex';
import root from './store-root';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  ...root,
});
