import wepy from 'wepy';
import { getCurrentTime } from './tools';
import md5 from './md5';

const API_BASE_URL = 'http://10.2.10.192:3000'; // https://github.com/typicode/json-server 用json-server搭建本地服务器, 也可以查看根目录 mock-db.js 查看使用说明
const API_SECRET_KEY = 'MY_API_SECRET_KEY';

export default (options = {}) => {
  let data = options.data || {};
  let method = options.method || 'GET';
  let url = API_BASE_URL + (options.url || '');
  let header = options.header || { 'Content-Type': 'application/json' };
  let dataType = options.dataType || 'json';
  if (options.needMd5) {
    const TIMESTAMP = getCurrentTime();
    const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase());
    data.sign = SIGN;
    data.time = TIMESTAMP;
  }
  return new Promise((resolve, reject) => {
    wepy.request({
      url: url,
      method: method,
      data: data,
      header: header,
      dataType: dataType,
      success: function(res) {
        resolve(res);
      },
      fail: function(error) {
        reject(error);
      }
    });
  });
};
