import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WebsiteDesigner from '../views/Designer/WebsiteDesigner.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/website-designer',
    name: 'WebsiteDesigner',
    component: WebsiteDesigner
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
