import Vue from 'vue';
import GlobalComponentsRegistration from './plugins/global/components-registration';
import router from './router';
import store from './store';

Vue.use(GlobalComponentsRegistration, {
  files: require.context('./', true, /\.vue$/i),
});

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  router: router(),
  store,
}).$mount('.vue');
