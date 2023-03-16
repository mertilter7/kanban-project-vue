import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import VueDraggable from "vuedraggable"

// createApp(App).mount('#app')
const app = createApp(App)
app.use(VueDraggable)

app.mount('#app')
