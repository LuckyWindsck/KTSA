const state = {
  login: true,
};

const mutations = {
  login(_, token) {
    Object.assign(state, { login: true });
    sessionStorage.setItem('token', token);
  },
  logout() {
    Object.assign(state, { login: false });
    sessionStorage.removeItem('token');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
