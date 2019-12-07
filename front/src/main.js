import Vue from 'vue';
import GlobalComponentsRegistration from './plugins/global/components-registration';
import GlobalVariables from './plugins/global/variables';
import router from './router';
import store from './store';

Vue.use(GlobalComponentsRegistration, {
  files: require.context('./', true, /\.vue$/i),
});

Vue.use(GlobalVariables);

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  router: router(),
  store,
}).$mount('.vue');
