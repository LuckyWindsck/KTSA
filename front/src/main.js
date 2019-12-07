import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './config/routes';
import ComponentsGlobalRegistration from './plugins/components-global-registration';

import store from './store';

Vue.use(ComponentsGlobalRegistration, {
  files: require.context('./', true, /\.vue$/i),
});

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: routes(),
});

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  router,
  store,
}).$mount('.vue');
