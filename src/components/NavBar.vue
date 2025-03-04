<template>
  <el-menu
    mode="horizontal"
    :router="true"
    class="nav-menu"
    :default-active="$route.path"
  >
    <el-menu-item index="/">主页</el-menu-item>
    <el-menu-item>
      <a href="https://blog.kisechan.space/" target="_blank">博客</a>
    </el-menu-item>
    <el-menu-item index="/about">关于</el-menu-item>
  </el-menu>
</template>

<style scoped></style>
