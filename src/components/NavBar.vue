<template>
  <el-menu
    mode="horizontal"
    router
  >
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item >
      <a href="blog.kisechan.space" target="_blank">博客</a>
    </el-menu-item>
    <el-menu-item index="/about">关于</el-menu-item>
  </el-menu>
</template>

<script setup>
</script>

<style scoped>
.el-menu {
  display: flex;
  justify-content: center;
}
</style>