/**
 * Comments are from laravel project
 */

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
];

const router = new VueRouter({ routes });

/**
 * Comments refer to https://github.com/laravel-shift/laravel-5.8/blob/master/resources/js/app.js#L11
 *
 * Recursively scan this directory for the Vue components and automatically
 * register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example></example>
 */
const files = require.context('./', true, /\.vue$/i);
files.keys().forEach((key) => {
  Vue.component(
    key.replace(/(\.\/components\/)(.*)Component\.vue/, '$2') // Get the component name
      .replace(/(.[A-Z]*)([A-Z])/g, '$1-$2') // Convert to kebab-case
      .toLowerCase(), // Conver to lowercase
    files(key).default,
  );
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
  router,
}).$mount('.vue');
