import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue'
import Login from '../view/Login.vue'
import store from '../store'

const routes = [
  { path: '/', name: 'login', component: Login },
  { path: '/home', name: 'home', component: Home, meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.user.loggedIn) {
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
})

export default router
