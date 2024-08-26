<script setup>
import Title from '../components/title.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const typeInput = ref('password')
const store = useStore()
const router = useRouter()

const register = async () => {
  await store.dispatch('register', { email: email.value, password: password.value })
  router.push('/home')
}

const toogleTypeInputPassword = () => {
  typeInput.value = typeInput.value == 'password' ? 'text' : 'password'
}
</script>

<template>
  <div class="login col-md-4">
    <div class="card">
      <div class="card-body p-3">
        <Title class="text-center" />
        <div class="form mt-3">
          <h6 class="text-center">Crear Cuenta</h6>
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
            <div class="input-group mb-3">
              <input
                :type="typeInput"
                class="form-control"
                id="password"
                placeholder="**********"
                v-model="password"
              />
              <button
                class="btn btn-outline-primary"
                type="button"
                @click="toogleTypeInputPassword"
              >
                <font-awesome-icon icon="eye" />
              </button>
            </div>
          </div>
          <div class="mb-3">
            <button type="button" class="btn btn-primary w-100" @click="register">
              Registrarse
            </button>
          </div>
          <div class="mb-3">
            <router-link to="/" type="button" class="btn btn-light w-100">
              Iniciar Sesión
            </router-link>
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