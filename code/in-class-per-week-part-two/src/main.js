import './assets/main.css'
import router from './router/index.js'

import { createApp } from 'vue'
import App from './App.vue'

// console.log('main.js, before calling createApp()')
// createApp(App).mount('#app')
const app = createApp(App)
app.use(router)
app.mount('#app')
// console.log('main.js, after calling createApp()')
