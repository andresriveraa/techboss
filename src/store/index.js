import { createStore } from 'vuex';
import Question from './modules/question';
import products from './modules/products';

export default createStore({
  modules: {
    Question,
    products,
  },
});
