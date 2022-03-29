import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/main.css'
import 'animate.css'
import 'moment'

const app = createApp(App)

app.use(router)

app.mount('#app')
