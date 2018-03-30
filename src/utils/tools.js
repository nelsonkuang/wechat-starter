import wepy from 'wepy';

export const getCurrentTime = () => {
  const date = new Date();
  const y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  const d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  const h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  const f =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  const s =
    date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return y + '' + m + '' + d + '' + h + '' + f + '' + s; // 20160614134947
};

export const setStorage = ({ key, data }, isSync = false) => {
  try {
    if (isSync) {
      wepy.setStorageSync(key, data);
    } else {
      wepy.setStorage({
        key: key,
        data: data
      });
    }
  } catch (e) {}
};

export const getStorage = (key, isSync = false) => {
  if (isSync) {
    try {
      return wepy.getStorageSync(key);
    } catch (e) {}
  } else {
    return new Promise((resolve, reject) => {
      try {
        wepy.getStorage({
          key: key,
          success: function(res) {
            resolve(res.data);
          },
          fail: function(error) {
            reject(error);
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  }
};

export const getStorageInfo = (isSync = false) => {
  if (isSync) {
    try {
      return wepy.getStorageInfoSync();
    } catch (e) {}
  } else {
    return new Promise((resolve, reject) => {
      try {
        wepy.getStorageInfo({
          success: function(res) {
            resolve(res);
          },
          fail: function(error) {
            reject(error);
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  }
};

export const removeStorage = (key, isSync = false) => {
  if (isSync) {
    try {
      return wepy.removeStorageSync(key);
    } catch (e) {}
  } else {
    return new Promise((resolve, reject) => {
      try {
        wepy.removeStorage({
          key: key,
          success: function(res) {
            resolve(res.data);
          },
          fail: function(error) {
            reject(error);
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  }
};

export const clearStorage = (isSync = false) => {
  if (isSync) {
    try {
      return wepy.clearStorageSync();
    } catch (e) {
      console.log(e);
    }
  } else {
    wepy.clearStorage();
  }
};
