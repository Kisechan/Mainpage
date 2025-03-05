<template>
  <el-menu mode="horizontal" router class="custom-menu">
    <!-- 左侧网站名 -->
    <div class="website-name">
      <span style="font-weight: bold">Kisechan </span>
    </div>

    <!-- 右侧导航选项 -->
    <div class="menu-items">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item @click="goToBlog">博客</el-menu-item>
      <el-menu-item index="/links">友链</el-menu-item>
    </div>
  </el-menu>
</template>

<script setup>
const goToBlog = () => {
  window.open("https://blog.kisechan.space", "_blank");
};
</script>

<style scoped>
.custom-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.menu-items {
  display: flex;
  justify-content: center;
}

.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}

.el-menu-item {
  font-size: 16px;
}

.website-name {
  font-size: 1.5em;
}
</style>
