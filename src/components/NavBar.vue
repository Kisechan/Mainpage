<template>
  <el-menu mode="horizontal" router>
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item @click="goToBlog">博客</el-menu-item>
    <el-menu-item index="/about">关于</el-menu-item>
  </el-menu>
</template>

<script setup>
const goToBlog = () => {
  window.open("https://blog.kisechan.space", "_blank");
};
</script>

<style scoped>
.el-menu {
  display: flex;
  justify-content: center;
}
</style>
