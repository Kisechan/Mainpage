<template>
    <div class="tools-container">
      <h1>
        <i class="fa-solid fa-screwdriver-wrench"></i>工具
      </h1>
      <!-- 加载状态 -->
      <div v-if="loading" class="loading-container">
        <el-skeleton :rows="10" animated />
      </div>
      <!-- 工具列表 -->
      <template v-else>
        <el-card v-for="(category, categoryIndex) in tools" :key="categoryIndex" class="category-container">
          <h2>{{ category.category }}</h2>
          <div class="tools-grid">
            <el-card
              v-for="(tool, toolIndex) in category.tools"
              :key="toolIndex"
              class="tool-card"
              @click="openLink(tool.url)"
            >
              <div class="tool-content">
                <el-avatar :src="tool.icon" class="tool-icon" />
                <div class="tool-info">
                  <div class="tool-title">{{ tool.title }}</div>
                  <div class="tool-description">{{ tool.description }}</div>
                </div>
              </div>
            </el-card>
          </div>
        </el-card>
      </template>
    </div>
  </template>
  
  <script>
  import yaml from "js-yaml";
  import { ref } from "vue";
  
  export default {
    name: "ToolsView",
    setup() {
      const tools = ref([]);
      const loading = ref(true);
  
      // 加载 YAML 文件
      fetch(import.meta.env.VITE_TOOLS_YAML_URL)
        .then((response) => response.text())
        .then((text) => {
          tools.value = yaml.load(text);
        })
        .catch((error) => {
          console.error("Failed to load YAML file:", error);
        })
        .finally(() => {
          loading.value = false;
        });
  
      const openLink = (url) => {
        window.open(url, "_self");
      };
  
      return {
        tools,
        openLink,
        loading,
      };
    },
  };
  </script>
  
  <style scoped>
  .tools-container {
    padding: 20px;
  }
  
  .category-container {
    margin-bottom: 30px;
  }
  
  .category-container h2 {
    font-size: 1.5em;
    margin-bottom: 15px;
    color: var(--text-color);
  }
  
  .tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 15px;
  }
  
  .tool-card {
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .tool-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .tool-content {
    display: flex;
    align-items: center;
  }
  
  .tool-icon {
    margin-right: 15px;
  }
  
  .tool-info {
    display: flex;
    flex-direction: column;
  }
  
  .tool-title {
    font-size: 1.2em;
    font-weight: bold;
  }
  
  .tool-description {
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
  </style>