import '@/assets/styles/style.scss';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { useVuelidate } from '@vuelidate/core';

const app = createApp(App);
app.use(createPinia());
app.use(VueAxios, axios);
app.use(useVuelidate);

app.mount('#app');
