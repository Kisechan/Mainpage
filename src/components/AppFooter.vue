<template>
  <el-footer class="app-footer">
    <div class="social-links">
      <a
        v-for="item in socialLinks"
        :key="item.name"
        :href="item.url"
        target="_blank"
      >
        <el-icon :size="24">
          <component :is="item.icon" />
        </el-icon>
        <span class="link-name">{{ item.name }}</span>
      </a>
    </div>

    <div class="copyright">
      <p>2024 - 2025 Kisechan</p>
    </div>
  </el-footer>
</template>

<script setup>
const socialLinks = [
  { name: "github", icon: "Github", url: "https://github.com" },
  { name: "email", icon: "Message", url: "mailto:your@email.com" },
];
</script>

<style scoped></style>
