<script setup>
import Title from '../components/title.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const store = useStore()
const router = useRouter()

const auth = async () => {
  await store.dispatch('logIn', { email: email.value, password: password.value })
  router.push('/home')
}
</script>

<template>
  <div class="login col-md-4">
    <div class="card">
      <div class="card-body p-3">
        <Title class="text-center" />
        <div class="form">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
              v-model="email"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="**********"
              v-model="password"
            />
          </div>
          <div class="mb-3">
            <button type="button" class="btn btn-primary w-100" @click="auth">
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.login {
  border-radius: 15px;
  margin-top: 10%;
}
</style>