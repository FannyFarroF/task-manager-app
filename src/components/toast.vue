<script setup>
import { defineProps } from 'vue'

const props = defineProps(['message'])
</script>
<template>
  <div class="alert alert-success alert-dismissible fade show" role="alert">
    {{ props.message }}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
</template>
