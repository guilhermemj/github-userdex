import request from './request';
import getUser from './users/get-user';

export default {
  base: request,

  users: {
    getUser,
  },
};
