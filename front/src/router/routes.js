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
        path: 'contact',
        name: 'contact',
        component: Vue.component('the-contact'),
      },
      {
        path: 'privacy',
        name: 'privacy',
        component: Vue.component('the-privacy'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Vue.component('the-login'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Vue.component('the-dashboard'),
    alias: '/admin',
  },
  {
    path: '*',
    component: { template: '<div>404 Not Found</div>' },
  },
];
