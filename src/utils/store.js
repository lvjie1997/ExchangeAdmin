/**
 * 存储localStorage
 */
export const setStore = (key, val) => {
  window.localStorage.setItem(key, JSON.stringify(val));
};
/**
 * 获取localStorage
 */
export const getStore = (key) => {
  let obj = window.localStorage.getItem(key);
  obj = JSON.parse(obj);
  return obj;
}
/**
 * 删除localStorage
 */
export const removeStore = key => {
  window.localStorage.removeItem(key);
};

/**
 * 存储sessionStorage
 */
export const setSessStore = (key, val) => {
  window.sessionStorage.setItem(key, JSON.stringify(val));
};
/**
 * 获取sessionStorage
 */
export const getSessStore = (key) => {
  let obj = window.sessionStorage.getItem(key);
  obj = obj ? JSON.parse(obj) : null;
  return obj;
};
/**
 * 删除sessionStorage
 */
export const removeSessStore = key => {
  window.sessionStorage.removeItem(key);
};

/**
 * 获取全部localStorage
 */
export const getAllStore = (params) => {

};

/**
 * 清空全部localStorage
 */
export const clearStore = () => {
  // window.localStorage.clear()
  window.sessionStorage.clear();
};
