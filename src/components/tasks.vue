<script setup>
import Card from '../components/card.vue'
</script>

<template>
  <div class="tasks p-3">
    <div class="row">
      <div class="col-md-4">
        <h6 class="text-white text-center">In Progress (2)</h6>
        <div class="list">
          <Card />
          <br />
          <Card />
        </div>
      </div>
      <div class="col-md-4">
        <h6 class="text-white text-center">In review (2)</h6>
        <div class="list">
          <Card />
          <br />
          <Card />
        </div>
      </div>
      <div class="col-md-4">
        <h6 class="text-white text-center">Completed (2)</h6>
        <div class="list">
          <Card />
          <br />
          <Card />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tasks {
  background: #292d32;
  min-height: 100vh !important;
}
.list {
  margin: 25px 15px;
}
</style>
