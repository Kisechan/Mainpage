<template>
  <el-menu mode="horizontal" class="custom-menu">
    <!-- 左侧网站名 -->
    <div class="website-name">
      <span style="font-weight: bold">Kisechan </span>
    </div>

    <!-- 右侧导航选项 -->
    <div class="menu-items">
      <el-menu-item @click="openLink('/')">
        <i class="fa-solid fa-house"></i>
        首页
      </el-menu-item>
      <el-menu-item @click="goToBlog">
        <i class="fa-solid fa-blog"></i>
        博客
      </el-menu-item>
      <el-menu-item @click="openLink('/links')">
        <i class="fa-solid fa-link"></i>
        友链
      </el-menu-item>
      <el-menu-item @click="openLink('/tools')">
        <i class="fa-solid fa-screwdriver-wrench"></i>
        工具
      </el-menu-item>
      <el-menu-item @click="toggleDarkMode">
        <div class="flip-container">
          <div :class="['flipper', isDarkMode ? 'flip' : '']">
            <el-icon class="front">
              <Sunny />
            </el-icon>
            <el-icon class="back">
              <Moon />
            </el-icon>
          </div>
        </div>
      </el-menu-item>
    </div>
  </el-menu>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Sunny, Moon } from "@element-plus/icons-vue";

const router = useRouter();
const isDarkMode = ref(false);

// 打开外部链接
const goToBlog = () => {
  window.open("https://blog.kisechan.space", "_blank");
};

// 打开内部链接（当前页面）
const openLink = (path) => {
  console.log("Navigating to:", path); // 调试信息
  router.push(path);
};

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
  localStorage.setItem("darkMode", isDarkMode.value);
};

// 初始化时读取 localStorage 中的模式选择
const initializeDarkMode = () => {
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode !== null) {
    isDarkMode.value = savedMode === "true";
    document.documentElement.classList.toggle("dark", isDarkMode.value);
  }
};

initializeDarkMode();
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
  gap: 6px;
  cursor: pointer; /* 添加手型光标 */
}

.website-name {
  font-size: 1.5em;
}

.el-menu-item {
  outline: none !important;
  background-color: transparent !important;
}

.flip-container {
  perspective: 1000px;
}

.flipper {
  position: relative;
  width: 24px;
  height: 24px;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip {
  transform: rotateY(180deg);
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.front {
  transform: rotateY(0deg);
}

.back {
  transform: rotateY(180deg);
}
</style>
