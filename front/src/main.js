import Vue from 'vue';
import Global from './plugins/global';
import router from './router';
import store from './store';

const files = require.context('./', true, /\.vue$/i);
Vue.use(Global, { files });

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  router: router(),
  store,
}).$mount('.vue');
