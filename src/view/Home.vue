<script setup>
import Aside from '../components/aside.vue'
import Tasks from '../components/tasks.vue'
import Header from '../components/header.vue'
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'

const idTaskEdit = ref('')
const nameTaskEdit = ref('')
const descriptionTaskEdit = ref('')
const initialList = ref([])
const url = 'https://devvuejs-default-rtdb.asia-southeast1.firebasedatabase.app'
const store = useStore()
const uuid = store.state.user.uuid

onMounted(() => {
  recoverTasks()
})

const recoverTasks = () => {
  axios
    .get(`${url}/tasks/${uuid}.json`)
    .then(function (response) {
      initialList.value = response.data
    })
    .catch(function (error) {
      console.log(error)
    })
}

const finalList = computed(() => {
  const data = []
  for (let key in initialList.value) {
    data.push({ ...initialList.value[key], id: key })
  }
  return data
})

const removeTask = (taskId) => {
  axios
    .delete(`${url}/tasks/${uuid}/${taskId}.json`)
    .then(function () {
      recoverTasks()
    })
    .catch(function (error) {
      console.log(error)
    })
}

const moveTask = (taskId, statusTask) => {
  axios
    .patch(`${url}/tasks/${uuid}/${taskId}.json`, { status: statusTask })
    .then(function () {
      recoverTasks()
    })
    .catch(function (error) {
      console.log(error)
    })
}

const editTask = (taskId, nameTask, descriptionTask) => {
  idTaskEdit.value = taskId
  nameTaskEdit.value = nameTask
  descriptionTaskEdit.value = descriptionTask
}

const updateTask = (task) => {
  axios
    .put(`${url}/tasks/${uuid}/${task.id}.json`, task)
    .then(function () {
      recoverTasks()
    })
    .catch(function (error) {
      console.log(error)
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
        @recoverTasks="recoverTasks"
        :idTaskEdit="idTaskEdit"
        :nameTaskEdit="nameTaskEdit"
        :descriptionTaskEdit="descriptionTaskEdit"
        @updateTask="updateTask"
      />
    </div>
    <div class="col-md-9 p-0">
      <Tasks
        :finalList="finalList"
        @removeTask="removeTask"
        @moveTask="moveTask"
        @updateTask="editTask"
      />
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
  