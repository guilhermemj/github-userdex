/* eslint-disable no-param-reassign */
import api from '../api';

export default (Vue) => {
  Vue.prototype.$api = api;
};
