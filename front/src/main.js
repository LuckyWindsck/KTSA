import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import setting from './config/setting';
// TODO: solve the problem when not using file extension
import news from './posts/news';
import images from './config/images';
import routes from './config/routes';
import plugin from './plugins/plugin';

// Globally import modules
const modules = [
  ['$setting', setting],
  ['$locale', setting.locale],
  ['$news', news],
  ['$images', images],
];
modules.forEach(([prop, value]) => {
  Object.defineProperty(Vue.prototype, prop, { value });
});

/**
 * Recursively scan this directory for the Vue components and automatically
 * register them with their "basename".
 *
 * Eg. ./components/Example.vue -> <example></example>
 * Eg. ./components/ExampleComponent.vue -> <example></example>
 */
const files = require.context('./', true, /\.vue$/i);
files.keys().forEach((key) => {
  Vue.component(
    key.replace(/.*\/(.*?)((Component)?)\.vue/, '$1') // Get the component name
      .replace(/([a-z])([A-Z])/g, '$1-$2') // Convert to kebab-case
      .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
      .toLowerCase(), // Convert to lowercase
    files(key).default,
  );
});

// Use plugin
const plugins = [plugin, VueRouter, Vuex];
plugins.forEach(p => Vue.use(p));

const router = new VueRouter({
  mode: 'history',
  routes: routes(),
});

const store = new Vuex.Store({
  state: {
    login: true,
  },
  mutations: {
    login(state) {
      state.login = true;
    },
    logout(state) {
      state.login = false;
    },
  },
});

// Creating the Vue application instance
// eslint-disable-next-line no-unused-vars
const app = new Vue({
  router,
  store,
}).$mount('.vue');
