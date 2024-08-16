<script setup>
</script>

<template>
  <div class="aside py-3">
    <div class="container">
      <h4 class="text-white">Task Manager App</h4>
      <div class="form my-3">
        <div class="mb-3">
          <label for="task" class="form-label text-white">Task Name</label>
          <input type="text" class="form-control" id="task" />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label text-white">Description</label>
          <textarea class="form-control" name="description" id="" cols="3" rows="3"></textarea>
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-success w-100">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.aside {
  background: #191b1f;
  min-height: 100vh !important;
}
</style>
