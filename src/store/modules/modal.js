export default {
  namespaced: true,
  state: {
    show: false,
  },
  mutations: {
    showModal(state) {
      state.show = !state.show;
    },
  },
};
