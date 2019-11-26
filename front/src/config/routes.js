import Vue from 'vue';

const component = name => Vue.options.components[name];

export default () => [
  {
    path: '/',
    component: component('ktsa-layout'),
    children: [
      {
        path: 'home',
        component: component('home'),
        alias: '/',
      },
      {
        path: 'news',
        component: component('news'),
      },
      {
        path: 'about-us',
        component: component('about-us'),
      },
      {
        path: 'members',
        component: component('members'),
      },
      {
        path: 'events',
        component: component('events'),
      },
      {
        path: 'campus',
        component: component('campus'),
      },
      {
        path: 'contact',
        component: component('contact'),
      },
    ],
  },
  {
    path: '/admin',
    component: component('ktsa-admin'),
  },
  {
    path: '*',
    component: { template: '<div>404 Not Found</div>' },
  },
];
