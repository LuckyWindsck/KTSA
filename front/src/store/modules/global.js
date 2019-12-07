import settings from '../../config/settings';
import news from '../../posts/news';
import images from '../../config/images';

const state = {
  locale: settings.locale,
  settings,
  news,
  images,
};

export default {
  namespaced: true,
  state,
};
