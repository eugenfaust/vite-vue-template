import { createApp } from 'vue';
import store from './store';
import Toast from "vue-toastification";
import router from './router';
import "vue-toastification/dist/index.css";
import './style.css';
import App from './App.vue';

createApp(App).use(store).use(Toast).use(router).mount('#app');
