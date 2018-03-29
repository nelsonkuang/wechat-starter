import fetch from '../utils/wxRequest';

export const getUsers = (page = 1, limit = 20) => fetch({
  url: '/user-list', 
  data: {
    _page: page,
    _limit: limit
  },
  needMd5: false
});
