import '@babel/polyfill';

import Vue from 'vue';

import App from './App.vue';
import store from './store';

import importAll from './helpers/import-all';

Vue.config.productionTip = false;

const plugins = importAll(require.context('./plugins', false, /\.js/));

plugins.forEach(plugin => Vue.use(plugin));

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
