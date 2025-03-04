<script setup>
</script>

<template>
  <div>
    <!-- 全局导航栏 -->
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于</router-link>
    </nav>

    <!-- 路由匹配的组件会渲染在这里 -->
    <router-view />
  </div>
</template>

<style scoped>
/* 全局样式 */
nav {
  padding: 10px;
  background-color: #f0f0f0;
}

nav a {
  margin-right: 10px;
  text-decoration: none;
  color: #333;
}

nav a.router-link-active {
  color: #42b983;
  font-weight: bold;
}
</style>