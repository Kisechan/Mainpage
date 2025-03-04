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

<style scoped></style>
