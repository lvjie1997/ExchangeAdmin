import router from './router';
import store from './store';
import NProgress from 'nprogress';// progress bar
import 'nprogress/nprogress.css'; // progress bar style
import {
  getToken
} from '@/utils/auth'; // getToken from cookie

NProgress.configure({
  showSpinner: false
}); // NProgress Configuration

// permission judge function

const whiteList = ['/login', '/auth-redirect']; // no redirect whitelist
router.beforeEach((to, from, next) => {
  NProgress.start(); // start progress bar
  if (getToken()) { // determine if there has token
    /* has token*/
    if (to.path === '/login') {
      next({
        path: '/'
      });
      NProgress.done(); // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      const roles = ['admin']; // note: roles must be a array! such as: ['editor','develop']
      store.dispatch('GenerateRoutes', {
        roles
      }).then(() => { // 根据roles权限生成可访问的路由表
        to.meta.title = to.query.name ? to.query.name : to.meta.title;
        to.meta.title = to.query.name ? to.query.name : to.meta.title;
        next();
      });
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next();
    } else {
      next(`/login?redirect=${to.path}`); // 否则全部重定向到登录页
      NProgress.done(); // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
});

router.afterEach(() => {
  NProgress.done(); // finish progress bar
});
