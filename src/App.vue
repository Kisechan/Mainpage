<script setup>
import NavBar from "./components/NavBar.vue";
import AppFooter from "./components/AppFooter.vue";
import { useRouter } from 'vue-router'
import { watch } from 'vue'
import { useHead } from '@unhead/vue'

const openGitHubRepo = () => {
  window.open("https://github.com/Kisechan/Mainpage", "_self");
};

const router = useRouter()

watch(() => router.currentRoute.value, (route) => {
  useHead({
    title: route.meta.title,
    meta: route.meta.metaTags || [],
  })
})
</script>

<template>
  <div>
    <NavBar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <el-tooltip content="查看本站源代码" placement="left" class="github-tooltip">
      <div class="github-corner" @click="openGitHubRepo">
        <i class="fa-solid fa-code"></i></div
    ></el-tooltip>
    <AppFooter v-if="!$route.meta.hideFooter" />
  </div>
</template>

<style scoped>
html,
body {
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

.github-corner {
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 2em;
  cursor: pointer;
  color: var(--text-color);
  transition: color 0.3s ease;
}
.github-corner:hover {
  color: #409eff;
}
</style>