<template>
  <div class="home-container">
    <el-main>
      <el-row :gutter="20">
        <!-- 左侧正文 -->
        <el-col :span="16">
          <el-card>
            <p>某校 SE 专业学生，前 CChOer 。</p>
            <p>什么都会一点。</p>
            <p>
              可以通过这个邮箱联系我：
              <a href="mailto:admin@kisechan.space">admin@kisechan.space</a>
            </p>
            <hr />
            <h3>My Github Contributions</h3>
            <div class="github-calendar-container">
              <div id="github-graph">
                <p v-if="!isLoaded">Loading...</p>
              </div>
            </div>
          </el-card>
        </el-col>

        <!-- 右侧作者信息 -->
        <el-col class="right-column" :span="8">
          <div class="author-info">
            <el-avatar :size="120" :src="avatarUrl" />
            <h2>Hello</h2>
            <i>"Non est ad astra mollis e trris via."</i>
          </div>
          <div class="social-icons">
            <a href="https://github.com/Kisechan" target="_blank">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.zhihu.com/people/ptkise" target="_blank">
              <i class="fab fa-zhihu"></i>
            </a>
            <a href="https://space.bilibili.com/174541536" target="_blank">
              <i class="fab fa-bilibili"></i>
            </a>
            <a href="https://blog.kisechan.space" target="_blank">
              <i class="fa-solid fa-blog"></i>
            </a>
            <a href="mailto:admin@kisechan.space" target="_blank">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script setup>
import avatarUrl from "@/assets/avatar.png";
import { onMounted } from "vue";
import { ref } from "vue";

const isLoaded = ref(false);
// 懒加载
const loadGitHubCalendar = async () => {
  const GitHubCalendar = await import("github-calendar");
  GitHubCalendar.default("#github-graph", "Kisechan", {
    responsive: true, // 响应式设计
    tooltips: true, // 显示提示信息
    global_stats: false, // 显示全局统计信息
  });
  isLoaded.value = true;
};

// 在组件挂载后懒加载 GitHub 贡献图
onMounted(() => {
  loadGitHubCalendar();
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

.social-icons a {
  color: #303133;
  margin: 0 10px;
  font-size: 24px;
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-icons a:hover {
  color: rgb(159.5, 206.5, 255);
  transform: scale(1.2);
}

.social-icons {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.right-column {
  display: flex;
  flex-direction: column;
  gap: 24px; /* 设置 author-info 和 social-icons 之间的间隔 */
}
</style>
