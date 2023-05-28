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
        path: 'news/:news_id?',
        component: Vue.component('the-news'),
        children: [
          {
            path: '',
            name: 'news',
            component: Vue.component('ktsa-news'),
          },
        ],
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
        path: 'events/:event_id?',
        component: Vue.component('the-events'),
        children: [
          {
            path: '',
            name: 'events',
            component: Vue.component('ktsa-event'),
          },
        ],
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
      {
        path: 'sitemap',
        name: 'sitemap',
        component: Vue.component('the-sitemap'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Vue.component('the-login'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: Vue.component('the-dashboard'),
    alias: '/dashboard',
  },
  {
    path: '*',
    component: { template: '<div>404 Not Found</div>' },
  },
];
