import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import '../dist/output.css'
import './input.css';
import withUUID from 'vue-uuid';
import "tailwindcss/tailwind.css"

createApp(App).use(store).use(router).use(withUUID).mount('#app')
