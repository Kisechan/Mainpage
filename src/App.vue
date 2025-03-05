<script setup>
import NavBar from "./components/NavBar.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <div>
    <NavBar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <AppFooter v-if="!$route.meta.hideFooter" />
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
