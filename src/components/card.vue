<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['name', 'description', 'id', 'status', 'background'])
const emit = defineEmits(['removeTask', 'moveTask', 'updateTask'])
const handleremove = () => {
  emit('removeTask', props.id)
}
const handleMove = () => {
  emit('moveTask', props.id, props.status)
}
const handleEdit = () => {
  console.log(`actualizar desde el card... ${props.id}`)
  emit('updateTask', props.id, props.name, props.description)
}
</script>

<template>
  <div class="card my-2" :class="props.background">
    <div class="card-header d-flex justify-content-between align-items-center">
      <h6 class="card-title m-0">{{ props.name }}</h6>
      <div class="dropdown">
        <button
          class="btn btn-light dropdown-toggle border-0"
          data-bs-toggle="dropdown"
          :class="props.background"
        >
          <font-awesome-icon icon="ellipsis-h" />
        </button>
        <ul class="dropdown-menu">
          <li><button class="dropdown-item" @click="handleremove">Eliminar</button></li>
          <li><button class="dropdown-item" @click="handleEdit">Actualizar</button></li>
          <li v-show="props.status != 'completed'">
            <button class="dropdown-item" @click="handleMove">Mover</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="card-body">
      <p class="card-text">{{ props.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: none;
}
.bg-completed {
  background: #9ff3e4 !important;
}
.bg-progress {
  background: #8fe5ff !important;
}
.bg-review {
  background: #e6f2b2 !important;
}
</style>