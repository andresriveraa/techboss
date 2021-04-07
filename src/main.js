import ModuleSuccess from '@/components/ModuleSuccess.vue';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const Global = createApp(App);
Global.use(store).use(router).mount('#app');

Global.component(ModuleSuccess);
