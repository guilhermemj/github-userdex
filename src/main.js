import '@babel/polyfill';

import Vue from 'vue';

import App from './App.vue';
import store from './store';

import initVuetify from './plugins/vuetify';

Vue.config.productionTip = false;

initVuetify(Vue);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
