import { createStore } from 'vuex';
import question from './modules/question';
import products from './modules/products';
import modal from './modules/modal';

export default createStore({
  modules: {
    question,
    products,
    modal,
  },
});
