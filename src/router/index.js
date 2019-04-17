import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* Layout */
import Layout from '@/views/layout/Layout';

/** note: Submenu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [{
  path: '/redirect',
  component: Layout,
  hidden: true,
  children: [{
    path: '/redirect/:path*',
    component: () => import('@/views/redirect/index')
  }]
},
{
  path: '/login',
  component: () => import('@/views/login/index'),
  hidden: true
},
{
  path: '/auth-redirect',
  component: () => import('@/views/login/authredirect'),
  hidden: true
},
{
  path: '/404',
  component: () => import('@/views/errorPage/404'),
  hidden: true
},
{
  path: '/401',
  component: () => import('@/views/errorPage/401'),
  hidden: true
},
{
  path: '/',
  component: Layout,
  redirect: 'main',
  children: [{
    path: 'main',
    component: () => import('@/views/main/index'),
    name: 'page_view_text_exchange',
    meta: {
      title: 'page_view_text_exchange',
      icon: 'dashboard',
      noCache: true
    }
  }]
},
{
  path: '/SecuritiesManagement',
  component: Layout,
  redirect: 'noredirect',
  name: 'route_menu_SecuritiesManagement',
  alwaysShow: true,
  meta: {
    title: 'route_menu_SecuritiesManagement',
    icon: 'money'
  },
  children: [{
    path: 'SecuritiesList',
    component: () => import('@/views/SecuritiesManagement/SecuritiesList'),
    name: 'route_menu_SecuritiesList',
    meta: {
      title: 'route_menu_SecuritiesList'
    }
  },
  {
    hidden: true,
    path: 'AddSecurities',
    component: () => import('@/views/SecuritiesManagement/AddSecurities'),
    name: 'route_menu_AddSecurities',
    meta: {
      title: 'route_menu_AddSecurities'
    }
  },
  {
    hidden: true,
    path: 'SecuritiesDetails/:id',
    component: () => import('@/views/SecuritiesManagement/SecuritiesDetails'),
    name: 'route_menu_SecuritiesDetails',
    meta: {
      title: 'route_menu_SecuritiesDetails'
    }
  }]
},
{
  path: '/UserManagement',
  component: Layout,
  redirect: 'noredirect',
  name: 'route_menu_UserManagement',
  alwaysShow: true,
  meta: {
    title: 'route_menu_UserManagement',
    icon: 'user'
  },
  children: [{
    path: 'UserList',
    component: () => import('@/views/UserManagement/User/UserList'),
    name: 'route_menu_UsersList',
    meta: {
      title: 'route_menu_UsersList'
    }
  },
  {
    hidden: true,
    path: 'AddUser',
    component: () => import('@/views/UserManagement/User/AddUser'),
    name: 'route_menu_AddUser',
    meta: {
      title: 'route_menu_AddUser'

    }
  },
  {
    hidden: true,
    path: 'EditUser/:id',
    component: () => import('@/views/UserManagement/User/EditUser'),
    name: 'route_menu_EditUser',
    meta: {
      title: 'route_menu_EditUser'
    }
  }]
}];

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
});

export const asyncRouterMap = [
  /** When your routing table is too long, you can split it into small modules**/
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
];
