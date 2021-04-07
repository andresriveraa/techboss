export default {
  namespaced: true,
  state: {
    hello: 'world',
  },
  mutations: {
    setData(state, payload) {
      state.questionList = payload;
    },
  },
  actions: {
    async getData({ commit }, payload) {
      commit('setData', payload);
      await fetch('../../assets/data.json')
        .then((res) => console.log(res));
    },
  },
};
