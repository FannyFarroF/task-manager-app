<script setup>
import { ref, defineEmits, defineProps, watch } from 'vue'
import axios from 'axios'
import Toast from '../components/toast.vue'
import { useStore } from 'vuex'

const id = ref('')
const name = ref('')
const description = ref('')
const status = ref('backlog')
const showForm = ref(false)
const showToast = ref(false)
const message = ref('Task added successfully')
const store = useStore()

const props = defineProps(['idTaskEdit', 'nameTaskEdit', 'descriptionTaskEdit'])
const emit = defineEmits(['recoverTasks', 'updateTask'])
const url = 'https://devvuejs-default-rtdb.asia-southeast1.firebasedatabase.app/'
const uuid = store.state.user.uuid

const saveTask = () => {
  const task = {
    id: id.value,
    name: name.value,
    description: description.value,
    status: status.value
  }

  if (id.value == '') {
    axios
      .post(`${url}/tasks/${uuid}.json`, task)
      .then(function (response) {
        emit('recoverTasks')
        showToast.value = true
      })
      .catch(function (error) {
        console.log(error)
      })
  } else {
    emit('updateTask', task)
  }

  clearInputs()
}

const clearInputs = () => {
  id.value = ''
  name.value = ''
  description.value = ''
}

watch(
  () => [props.idTaskEdit, props.nameTaskEdit, props.descriptionTaskEdit],
  ([newId, newName, newDescription]) => {
    if (newId || newName || newDescription) {
      id.value = newId
      name.value = newName
      description.value = newDescription
    }
  }
)
</script>

<template>
  <div class="aside py-3">
    <div class="container">
      <div class="aside-header">
        <button class="btn btn-light" @click="showForm = !showForm">
          <font-awesome-icon icon="plus" />
          Add Task
        </button>
      </div>
      <div class="form my-3" v-show="showForm">
        <div class="mb-3">
          <input type="hidden" class="form-control" id="taskId" v-model="id" readonly />
        </div>
        <div class="mb-3">
          <label for="task" class="form-label">Name</label>
          <input type="text" class="form-control" id="task" v-model="name" />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea class="form-control" v-model="description" cols="3" rows="3"></textarea>
        </div>
        <div class="mb-3">
          <button class="btn btn-success w-100" @click="saveTask">Save</button>
        </div>
      </div>

      <Toast v-show="showToast" :message="message" />
    </div>
  </div>
</template>

<style scoped>
.aside {
  background: #22314e;
  min-height: 100vh !important;
}
.form {
  border-radius: 10px;
  color: #ffffff;
}
</style>
