<script setup>

</script>

<template>
  <div class="row p-0 justify-content-center">
    <RouterView></RouterView>
    <div class="creator p-2" title="Copyright © 2024 Fanny Farro">
      <a href="https://devfannyfarro.netlify.app/" target="_blank" rel="noopener noreferrer">
        <img src="/public/creator.png" alt="" srcset="" class="w-100" />
      </a>
    </div>
  </div>
</template>

<style>
#app {
  min-height: 100vh !important;
  background: #22314e;
  overflow-x: hidden;
}
.creator {
  position: fixed;
  bottom: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-content: center;
  object-fit: contain;
  border-radius: 50%;
}
.creator a {
  width: 100%;
  height: 100%;
}
</style>
