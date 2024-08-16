<script setup>
import Aside from './components/aside.vue'
import Tasks from './components/tasks.vue'
</script>

<template>
  <div class="row p-0">
    <div class="col-md-3 p-0">
      <Aside />
    </div>
    <div class="col-md-9 p-0">
      <Tasks />
    </div>
  </div>
</template>

<style>
#app {
  min-height: 100vh !important;
  background: #191b1f;
  overflow-x: hidden;
}
</style>
