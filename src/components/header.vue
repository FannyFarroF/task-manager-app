<script setup>
import Title from '../components/title.vue'
</script>

<template>
  <header>
    <div class="content px-3 py-2">
      <div class="row justify-content-between align-items-center">
        <div class="col-md-6">
          <Title class="text-white" />
        </div>
        <div class="col-md-6 text-end">
          <button class="btn btn-login" title="Cerrar Sesión">
            <font-awesome-icon icon="sign-out-alt" />
          </button>
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