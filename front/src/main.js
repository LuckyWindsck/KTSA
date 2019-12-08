import Vue from 'vue';
import GlobalComponentsRegistration from './plugins/global-components-registration';
import GlobalImagesProperty from './plugins/global-images-property';
import router from './router';
import store from './store';

Vue.use(GlobalComponentsRegistration);
Vue.use(GlobalImagesProperty);

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  router: router(),
  store,
}).$mount('.vue');
