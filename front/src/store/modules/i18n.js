const state = {
  locale: sessionStorage.getItem('locale') || 'zh-TW',
  locales: {
    'zh-TW': '中文',
    en: 'English',
    ja: '日本語',
  },
};

const mutations = {
  changeLocale(_, locale) {
    Object.assign(state, { locale });
    sessionStorage.setItem('locale', locale);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
