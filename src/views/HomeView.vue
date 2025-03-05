<template>
  <div class="home-container">
    <el-main>
      <el-row :gutter="20">
        <!-- 左侧正文 -->
        <el-col :span="16">
          <el-card>
            <p>passage...</p>
            <div class="github-calendar-container">
              <!-- 贡献图容器 -->
              <div id="github-graph"></div>
            </div>
          </el-card>
        </el-col>

        <!-- 右侧作者信息 -->
        <el-col :span="8">
          <div class="author-info">
            <el-avatar :size="120" :src="avatarUrl" />
            <h3>Hello</h3>
            <i>"Non est ad astra mollis e trris via."</i>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script setup>
import avatarUrl from "@/assets/avatar.png";
import { onMounted } from "vue";
import GitHubCalendar from "github-calendar";

// 在组件挂载后初始化 GitHub 贡献图
onMounted(() => {
  GitHubCalendar("#github-graph", "Kisechan", {
    responsive: true, // 响应式设计
    tooltips: true, // 显示提示信息
  });
});
</script>

<style scoped>
.home-container {
  padding: 20px;
}

.author-info {
  text-align: center;
}

.el-avatar {
  margin-bottom: 10px;
}

.github-calendar-container {
  margin: 20px;
}

#github-graph {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
</style>
