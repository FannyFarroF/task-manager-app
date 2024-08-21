import { createRouter, createMemoryHistory } from 'vue-router'
import Home from '../view/Home.vue'
import Login from '../view/Login.vue'

const routes = [
  { path: '/', name: 'login', component: Login },
  { path: '/home', name: 'home', component: Home }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})
export default router
