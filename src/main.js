import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const Global = createApp(App);
Global.use(store).use(router).mount('#app');
