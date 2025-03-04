<script setup>
import NavBar from "./components/NavBar.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <div>
    <NavBar />
    <router-view />
    <AppFooter />
  </div>
</template>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1; /* 占据剩余空间 */
}
</style>
