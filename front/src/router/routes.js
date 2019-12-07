import Vue from 'vue';

export default () => [
  {
    path: '/',
    name: 'index',
    component: Vue.component('the-index'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: Vue.component('the-home'),
        alias: '',
      },
      {
        path: 'news',
        name: 'news',
        component: Vue.component('the-news'),
      },
      {
        path: 'about-us',
        name: 'about-us',
        component: Vue.component('the-about-us'),
      },
      {
        path: 'members',
        name: 'members',
        component: Vue.component('the-members'),
      },
      {
        path: 'events',
        name: 'events',
        component: Vue.component('the-events'),
      },
      {
        path: 'campus',
        name: 'campus',
        component: Vue.component('the-campus'),
      },
      {
        path: 'contact',
        name: 'contact',
        component: Vue.component('the-contact'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Vue.component('the-admin-login'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Vue.component('the-admin-dashboard'),
    alias: '/admin',
  },
  {
    path: '*',
    component: { template: '<div>404 Not Found</div>' },
  },
];
