import axios from 'axios';
import { Message } from 'element-ui';
import store from '@/store';
import { getToken } from '@/utils/auth';
import i18n from '../lang';

// create an axios instance
const service = axios.create({
  baseURL: 'http://47.244.136.132', // api 的 base_url
  timeout: 5000 // request timeout
});

const LANGUAGE = {
  en: 'en-GB',
  zh: 'zh-CN'
};

service.interceptors.request.use(
  config => {
    config.headers['X-authorization'] = getToken();
    config.headers['X-app'] = 'FtElvF6R4FZtvzyRyQwY';
    config.headers['X-language'] = LANGUAGE[i18n.locale];
    store.dispatch('loading', true);
    return config;
  },
  error => {
    // Do something with request error
    store.dispatch('loading', false);
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    store.dispatch('loading', false);
    return response;
  },
  error => {
    const msg = '服务器开小差了，请稍后再试';
    store.dispatch('loading', false);
    if (error.response.status === 403) {
      // 同个账号不允许多人登录，自动顶掉返回登录页面
      if (error.response.data.message === 'Invalid access token') {
        store.dispatch('LogOut').then(() => {
          location.reload();
          return;
        });
      }
      Message({
        message: error.response.data.message,
        type: 'error',
        duration: 5 * 1000
      });
      return Promise.reject(error);
    } else if (error.response.status === 500) {
      Message({
        message: msg,
        type: 'error',
        duration: 5 * 1000
      });
      return Promise.reject(error);
    }
  }
);

async function request(params) {
  return service(params);
}

export default request;
