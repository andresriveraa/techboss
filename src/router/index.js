import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import product from '../components/Products.vue';
import AskModules from '../components/AskModules.vue';
import support from '../components/SupportMaterial.vue';
import question from '../components/AllQuestion.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        component: product,
      },
      {
        path: 'AskModules',
        component: AskModules,
      },
      {
        path: 'support',
        component: support,
      },
      {
        path: 'question',
        component: question,
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
