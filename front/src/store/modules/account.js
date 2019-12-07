const state = {
  login: true,
};

const mutations = {
  login() {
    Object.assign(state, { login: true });
  },
  logout() {
    Object.assign(state, { login: false });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
