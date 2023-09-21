import "./assets/css/style.css"
import "./assets/css/responsive.css"
import './assets/main.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
