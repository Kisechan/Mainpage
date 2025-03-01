<template>
  <header>
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于</router-link>
      <router-link to="blog.kisechan.space/">前往博客</router-link>
    </nav>
  </header>
  <router-view />
</template>

<style>
#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
}
nav {
  margin-bottom: 2rem;
}
a {
  color: #42b983;
}
</style>
