<script setup>
import Title from '../components/title.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const logOut = async () => {
  await store.dispatch('logOut')
  router.push('/')
}

const username = computed(() => {
  return store.state.user.email
})
</script>

<template>
  <header>
    <div class="content px-3 py-2">
      <div class="row justify-content-between align-items-center">
        <div class="col-md-6">
          <Title class="text-white" />
        </div>
        <div class="col-md-6 text-end">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-danger dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ username }}
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" type="button" @click="logOut">
                  <font-awesome-icon icon="sign-out-alt" /> Cerrar Sesión
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.btn-login {
  border-radius: 50%;
  background: #ffffff;
}
</style>