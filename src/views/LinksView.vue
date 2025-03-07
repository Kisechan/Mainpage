<template>
  <div class="friend-links">
    <h1>
      <i class="fa-solid fa-link"></i>友链
    </h1>
    <!-- 加载状态 -->
    <div v-if="loading" class="loading-container">
      <el-skeleton :rows="10" animated />
    </div>
    <!-- 友链列表 -->
    <template v-else>
      <div>
        <el-card
          v-for="(category, categoryIndex) in friendLinks"
          :key="categoryIndex"
          class="category-card"
        >
          <template #header>
            <div class="category-header">{{ category.category }}</div>
          </template>
          <div class="links-container">
            <el-card
              v-for="(link, linkIndex) in category.links"
              :key="linkIndex"
              class="link-card"
              @mouseenter="hoverEffect(`${categoryIndex}-${linkIndex}`)"
              @mouseleave="resetEffect"
              :style="cardStyle(`${categoryIndex}-${linkIndex}`)"
              @click="openLink(link.url)"
            >
              <div class="link-content">
                <el-avatar :src="link.avatar" class="link-avatar" />
                <div class="link-info">
                  <div class="link-title">{{ link.title }}</div>
                  <div class="link-description">{{ link.description }}</div>
                </div>
              </div>
            </el-card>
          </div>
        </el-card>
        <el-card class="add-link-card">
      <div class="add-link-header">添加友链</div>
      <div class="add-link-content">
        <p>请按照以下格式提交您的友链信息：</p>
        <pre>
avatar: "您的头像链接"
title: "您的博客标题"
description: "您的博客描述"
url: "您的博客链接"</pre
        >
        <p>
          并发送至：<a href="mailto:links@kisechan.space"
            >links@kisechan.space</a
          >
        </p>
      </div>
    </el-card>
      </div>
    </template>
  </div>
</template>

<script>
import yaml from "js-yaml";
import { ref } from "vue";

export default {
  name: "FriendLinks",
  setup() {
    const friendLinks = ref([]);
    const hoveredCardId = ref(null);
    const loading = ref(true);
    // 加载 YAML 文件
    fetch("/links.yml")
      .then((response) => response.text())
      .then((text) => {
        friendLinks.value = yaml.load(text);
      })
      .catch((error) => {
        console.error("Failed to load YAML file:", error);
      })
      .finally(() => {
        loading.value = false; // 数据加载完成后，设置 loading 为 false
      });

    const hoverEffect = (cardId) => {
      hoveredCardId.value = cardId;
    };

    const resetEffect = () => {
      hoveredCardId.value = null;
    };

    const cardStyle = (cardId) => {
      return {
        transform: hoveredCardId.value === cardId ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.3s ease",
      };
    };

    const openLink = (url) => {
      window.open(url, "_blank");
    };

    return {
      friendLinks,
      hoverEffect,
      resetEffect,
      cardStyle,
      openLink,
      loading,
    };
  },
};
</script>

<style scoped>
.friend-links {
  padding: 20px;
}

.add-link-card {
  margin-bottom: 20px;
}

.add-link-header {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
}

.add-link-content {
  font-size: 1em;
  color: var(--text-color);
}

.add-link-content pre {
  background-color: var(--code-background-color);
  color: var(--code-text-color);
  padding: 10px;
  border-radius: 4px;
  overflow-x: auto;
}

.add-link-content a {
  color: #409eff;
  text-decoration: none;
}

.add-link-content a:hover {
  text-decoration: underline;
}

.category-card {
  margin-bottom: 20px;
}

.category-header {
  font-size: 1.5em;
  font-weight: bold;
}

.links-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
}

.link-card {
  width: 100%;
  cursor: pointer;
  position: relative;
  z-index: 1;
}

.link-card:hover {
  z-index: 2;
}

.link-content {
  display: flex;
  align-items: center;
}

.link-avatar {
  margin-right: 15px;
}

.link-info {
  display: flex;
  flex-direction: column;
}

.link-title {
  font-size: 1.2em;
  font-weight: bold;
}

.link-description {
  font-size: 0.9em;
  color: var(--code-text-color);
}

.loading-container {
  padding: 20px;
}

h1 {
  display: flex;
  align-items: center;
  gap: 10px;
}

.link-content {
  color: var(--text-color);
}
</style>
