/* eslint-disable no-param-reassign */
import axios from 'axios';

export default (Vue) => {
  Vue.prototype.$http = axios;
};
