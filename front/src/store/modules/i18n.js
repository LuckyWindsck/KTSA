const state = {
  locale: sessionStorage.getItem('locale'),
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
