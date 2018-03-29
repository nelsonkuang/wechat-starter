import wepy from 'wepy';
import {getCurrentTime} from './tools';
import md5 from './md5';

const API_BASE_URL = 'http://localhost:3000';

export default async (options = {}) => {
    let data = options.data || {};
    let method = options.method || 'GET';
    let url = options.url;
    let header = options.header || { 'Content-Type': 'application/json' };
    if(options.needMd5) {
      const TIMESTAMP = getCurrentTime();
      const SIGN = md5.hex_md5((TIMESTAMP + API_BASE_URL).toLowerCase())
      data.sign = SIGN;
      data.time = TIMESTAMP;
    }
    if(method === 'GET') {
      let dataStr = ''; //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += (key + '=' + data[key] + '&');
      })

      if (dataStr !== '') {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
        url = url + '?' + dataStr;
      }
    }
    try {
      const res = await wepy.request({
          url: url,
          method: method,
          data: data,
          header: header,
      });
      return await res.json();
    }
    catch (error) {
      throw new Error(error);
    }
};
