import Vue from 'vue';
import VueRouter from 'vue-router';
import setting from '../config/setting.json';
import Plugin from './plugins/plugin';

// Globally import modules
const modules = [
  ['$setting', setting],
];
modules.forEach(([prop, value]) => {
  Object.defineProperty(Vue.prototype, prop, { value });
});

// Use plugin
Vue.use(Plugin);

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

// Creating the Vue application instance
// eslint-disable-next-line no-unused-vars
const app = new Vue({
  router,
}).$mount('.vue');
