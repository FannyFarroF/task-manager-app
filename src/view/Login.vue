<script setup>
import Title from '../components/title.vue'
</script>
<template>
  <div class="login col-md-4">
    <div class="card">
      <div class="card-body p-3">
        <Title class="text-center" />
        <div class="form">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" placeholder="name@example.com" />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" placeholder="**********" />
          </div>
          <div class="mb-3">
            <button type="submit" class="btn btn-primary w-100">Iniciar Sesión</button>
            <RouterLink to="home" class="btn btn-secondary w-100 mt-2"
              >Continuar de Invitado</RouterLink
            >
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