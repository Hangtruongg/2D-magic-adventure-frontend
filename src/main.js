import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
//import router from './router'
// Vue Router imports here if needed

const app = createApp(App)

//app.use(router)
app.use(router)
app.mount('#app') 