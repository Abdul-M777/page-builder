import { createRouter, createWebHistory } from 'vue-router'
import WebsiteDesigner from '../views/Designer/WebsiteDesigner.vue'

const routes = [
  
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
