<script setup>
import Card from '../components/card.vue'
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps(['list'])
const emit = defineEmits(['removeTask', 'moveTask', 'updateTask'])

const statuses = [
  { id: '1', name: 'Backlog', key: 'backlog', color: 'backlog', background: 'bg-light' },
  { id: '2', name: 'In Progress', key: 'progress', color: 'progresss', background: 'bg-progress' },
  { id: '3', name: 'Review', key: 'review', color: 'review', background: 'bg-review' },
  { id: '4', name: 'Completed', key: 'completed', color: 'completed', background: 'bg-completed' }
]

const filterTask = computed(() => {
  return statuses.reduce((acc, status) => {
    acc[status.key] = props.list.filter((item) => item.status === status.key)
    return acc
  }, {})
})

const handleRemoveTask = (taskId) => {
  emit('removeTask', taskId)
}

const handleMoveTask = (taskId, statusTask) => {
  const currentStatus = statuses.find((item) => item.key == statusTask)
  const nextIdStatus = parseInt(currentStatus.id) + 1
  const nextStatus = statuses.find((item) => item.id == nextIdStatus)
  if (nextStatus) {
    const nextStatusKey = nextStatus.key
    emit('moveTask', taskId, nextStatusKey)
  } else {
    console.log('No hay un siguente estado disponible')
  }
}

const handleUpdateTask = (taskId, nameTask, descriptionTask) => {
  emit('updateTask', taskId, nameTask, descriptionTask)
}
</script> 

<template>
  <div class="tasks px-3 py-4">
    <div class="row">
      <div class="col-md-3" v-for="status in statuses" :key="status.id">
        <div class="d-flex justify-content-center">
          <font-awesome-icon icon="circle" :class="status.color" />
          <h6 class="text-center text-white ms-1 my-0">
            {{ status.name }}
          </h6>
        </div>
        <div class="list">
          <Card
            v-for="item in filterTask[status.key]"
            :key="item.id"
            :name="item.name"
            :description="item.description"
            :id="item.id"
            :status="item.status"
            :background="status.background"
            @removeTask="handleRemoveTask"
            @moveTask="handleMoveTask"
            @updateTask="handleUpdateTask"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tasks {
  background: #182841;
  min-height: 100vh !important;
}
.list {
  margin: 25px 15px;
}
.backlog {
  color: #e9ecef !important;
}
.progresss {
  color: #ffcd39 !important;
}
.review {
  color: #fd7e14 !important;
}
.completed {
  color: #146c43 !important;
}
</style>
