import GlobalComponentsRegistration from './components-registration';
import GlobalVariables from './variables';

export default {
  install(vue, options) {
    vue.use(GlobalComponentsRegistration, options);
    vue.use(GlobalVariables);
  },
};
