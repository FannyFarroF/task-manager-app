<script setup>
import Aside from './components/aside.vue'
import Tasks from './components/tasks.vue'
import Header from './components/header.vue'
import { ref } from 'vue'

const list = ref([])
const idTaskEdit = ref('')
const nameTaskEdit = ref('')
const descriptionTaskEdit = ref('')
const addTask = (task) => list.value.push(task)
const removeTask = (taskId) => {
  list.value = list.value.filter((task) => task.id !== taskId)
}
const moveTask = (taskId, statusTask) => {
  list.value.filter((task) => {
    if (task.id == taskId) {
      task.status = statusTask
    }
  })
}
const editTask = (taskId, nameTask, descriptionTask) => {
  idTaskEdit.value = taskId
  nameTaskEdit.value = nameTask
  descriptionTaskEdit.value = descriptionTask
}

const updateTask = (newTask) => {
  list.value.filter((task) => {
    if (task.id == newTask.id) {
      task.name = newTask.name
      task.description = newTask.description
    }
  })
}
</script>

<template>
  <div class="row p-0">
    <div class="col-md-12">
      <Header />
    </div>
    <div class="col-md-3 p-0">
      <Aside
        @addTask="addTask"
        :idTaskEdit="idTaskEdit"
        :nameTaskEdit="nameTaskEdit"
        :descriptionTaskEdit="descriptionTaskEdit"
        @updateTask="updateTask"
      />
    </div>
    <div class="col-md-9 p-0">
      <Tasks :list="list" @removeTask="removeTask" @moveTask="moveTask" @updateTask="editTask" />
    </div>
  </div>
</template>

<style>
#app {
  min-height: 100vh !important;
  background: #22314e;
  overflow-x: hidden;
}
</style>
