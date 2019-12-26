import Vue from 'vue';
import axios from 'axios';
import GlobalComponentsRegistration from './plugins/global-components-registration';
import GlobalImagesProperty from './plugins/global-images-property';
import router from './router';
import store from './store';
import settings from './config/settings';

axios.defaults.baseURL = settings.axios.baseURL;
Vue.prototype.$axios = axios;
Vue.use(GlobalComponentsRegistration);
Vue.use(GlobalImagesProperty);

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  router: router(),
  store,
}).$mount('.vue');
