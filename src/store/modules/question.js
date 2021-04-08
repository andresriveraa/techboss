import datos from './data.json';

export default {
  namespaced: true,
  state: {
    hello: 'world',
    questionList: [],
  },
  mutations: {
    setData(state, payload) {
      state.questionList.push(payload);
    },
    clearData(state) {
      state.questionList = [];
    },
  },
  actions: {
    getData({ commit }) {
      commit('clearData');
      datos.map((question) => commit('setData', question));
    },
  },
};
