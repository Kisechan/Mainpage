<template>
  <el-menu mode="horizontal" class="custom-menu">
    <!-- 左侧网站名 -->
    <div class="website-name">
      <span style="font-weight: bold">Kisechan </span>
    </div>

    <!-- 右侧导航选项 -->
    <div class="menu-items">
      <!-- 手机端汉堡菜单 -->
      <el-menu-item class="mobile-menu-icon" @click="toggleMobileMenu">
        <i class="fa-solid fa-bars"></i>
      </el-menu-item>

      <!-- 桌面端导航项 -->
      <div class="desktop-menu">
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
    </div>

    <!-- 手机端抽屉菜单 -->
    <el-drawer v-model="isMobileMenuOpen" direction="ltr" size="80%">
      <el-menu>
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
      </el-menu>
    </el-drawer>
  </el-menu>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Sunny, Moon } from "@element-plus/icons-vue";

const router = useRouter();
const isDarkMode = ref(false);
const isMobileMenuOpen = ref(false);

// 打开外部链接
const goToBlog = () => {
  window.open("https://blog.kisechan.space", "_self");
};

// 打开内部链接（当前页面）
const openLink = (path) => {
  router.push(path);
  isMobileMenuOpen.value = false; // 关闭手机端菜单
};

// 切换暗黑模式
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
  localStorage.setItem("darkMode", isDarkMode.value);
};

// 切换手机端菜单
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--el-bg-color, #ffffff); /* 使用 Element Plus 的背景色变量，或者您自定义的颜色 */
  z-index: 1000;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.menu-items {
  display: flex;
  align-items: center;
}

.website-name {
  font-size: 1.5em;
}

.el-menu-item {
  font-size: 16px;
  gap: 6px;
  cursor: pointer;
}

.mobile-menu-icon {
  display: none; /* 默认隐藏手机端菜单图标 */
}

.desktop-menu {
  display: flex;
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

/* 手机端样式 */
@media (max-width: 768px) {
  .mobile-menu-icon {
    display: block; /* 显示手机端菜单图标 */
  }

  .desktop-menu {
    display: none; /* 隐藏桌面端导航项 */
  }
}
</style>