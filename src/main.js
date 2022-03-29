import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/main.css'
import 'animate.css'
import 'moment'

const app = createApp(App)

// router（路由）是指根據不同的 url，展示不同的內容
app.use(router)

app.mount('#app')
