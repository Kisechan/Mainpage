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
  
  <style scoped>
  .nav-menu {
    border-bottom: none !important;
    height: 60px;
  }
  
  .el-menu-item {
    font-size: 16px;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  </style>