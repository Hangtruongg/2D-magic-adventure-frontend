import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import axios from 'axios';
// Set withCredentials to true for all requests
axios.defaults.withCredentials = true;
//import router from './router'
// Vue Router imports here if needed

const app = createApp(App)

//app.use(router)
app.use(router)
app.mount('#app')