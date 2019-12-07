import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import settings from './config/settings';
import news from './posts/news';
import images from './config/images';

import routes from './config/routes';
import ComponentsGlobalRegistration from './plugins/components-global-registration';

Vue.use(ComponentsGlobalRegistration, {
  files: require.context('./', true, /\.vue$/i),
});

const plugins = [VueRouter, Vuex];
plugins.forEach((p) => Vue.use(p));

const router = new VueRouter({
  mode: 'history',
  routes: routes(),
});

const store = new Vuex.Store({
  state: {
    login: true,
    locale: settings.locale,
    settings,
    news,
    images,
  },
  mutations: {
    login(state) {
      Object.assign(state, { login: true });
    },
    logout(state) {
      Object.assign(state, { login: false });
    },
  },
});

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  router,
  store,
}).$mount('.vue');
