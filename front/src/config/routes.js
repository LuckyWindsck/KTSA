import Vue from 'vue';

const component = (name) => Vue.options.components[name];

export default () => [
  {
    path: '/',
    name: 'index',
    component: component('the-index'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: component('the-home'),
        alias: '',
      },
      {
        path: 'news',
        name: 'news',
        component: component('the-news'),
      },
      {
        path: 'about-us',
        name: 'about-us',
        component: component('the-about-us'),
      },
      {
        path: 'members',
        name: 'members',
        component: component('the-members'),
      },
      {
        path: 'events',
        name: 'events',
        component: component('the-events'),
      },
      {
        path: 'campus',
        name: 'campus',
        component: component('the-campus'),
      },
      {
        path: 'contact',
        name: 'contact',
        component: component('the-contact'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: component('the-admin-login'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: component('the-admin-dashboard'),
    alias: '/admin',
  },
  {
    path: '*',
    component: { template: '<div>404 Not Found</div>' },
  },
];
