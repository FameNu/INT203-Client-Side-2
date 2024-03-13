import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// console.log('main.js, before calling createApp()')
// createApp(App).mount('#app')
const app = createApp(App)
app.mount('#app')
// console.log('main.js, after calling createApp()')
