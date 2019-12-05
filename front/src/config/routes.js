import Vue from 'vue';

const component = name => Vue.options.components[name];

export default () => [
  {
    path: '/',
    component: component('the-index'),
    children: [
      {
        path: 'home',
        component: component('the-home'),
        alias: '/',
      },
      {
        path: 'news',
        component: component('the-news'),
      },
      {
        path: 'about-us',
        component: component('the-about-us'),
      },
      {
        path: 'members',
        component: component('the-members'),
      },
      {
        path: 'events',
        component: component('the-events'),
      },
      {
        path: 'campus',
        component: component('the-campus'),
      },
      {
        path: 'contact',
        component: component('the-contact'),
      },
    ],
  },
  {
    path: '/admin',
    component: component('the-admin'),
  },
  {
    path: '*',
    component: { template: '<div>404 Not Found</div>' },
  },
];
