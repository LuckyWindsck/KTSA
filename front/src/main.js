import Vue from 'vue';
import ComponentsGlobalRegistration from './plugins/components-global-registration';
import router from './router';
import store from './store';

Vue.use(ComponentsGlobalRegistration, {
  files: require.context('./', true, /\.vue$/i),
});

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  router: router(),
  store,
}).$mount('.vue');
