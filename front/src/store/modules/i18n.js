const state = {
  locale: 'zh-TW',
};

const mutations = {
  changeLocale(_, locale) {
    Object.assign(state, { locale });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
