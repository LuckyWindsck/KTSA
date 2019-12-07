import settings from '../../../config/settings';
import news from '../../../posts/news';
import images from '../../../config/images';

export default {
  install(vue) {
    vue.mixin({
      computed: {
        settings: () => settings,
        locale: () => settings.locale,
        news: () => news,
        images: () => images,
      },
    });
  },
};
