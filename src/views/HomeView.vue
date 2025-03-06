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
            <div class="github-calendar-container">
              <h3>My Github Contributions</h3>
              <div id="github-graph">
                <p v-if="!isLoaded">Loading...</p>
              </div>
            </div>
            <hr />
            <div class="rss-feed-container">
              <h3>Latest Blog Posts</h3>
              <el-row :gutter="20">
                <el-col v-for="item in feedItems" :key="item.link" :span="24">
                  <el-card class="blog-card" shadow="hover">
                    <div class="blog-header">
                      <font-awesome-icon
                        :icon="['fas', 'file-lines']"
                        class="icon"
                      />
                      <a :href="item.link" target="_blank" class="blog-title">{{
                        item.title
                      }}</a>
                    </div>
                    <div class="blog-meta">
                      <span class="update-time">
                        <font-awesome-icon
                          :icon="['fas', 'clock']"
                          class="icon"
                        />
                        {{ formatDate(item.pubDate) }}
                      </span>
                      <span class="tags">
                        <font-awesome-icon
                          :icon="['fas', 'tags']"
                          class="icon"
                        />
                        <el-tag
                          v-for="(tag, index) in item.tags"
                          :key="index"
                          size="small"
                          type="info"
                          class="tag"
                        >
                          {{ tag }}
                        </el-tag>
                      </span>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
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
          <div class="footer-content">
            <p>
              <a href="https://icp.gov.moe/?keyword=20251453" target="_blank"
                >萌ICP备20251453号</a
              >
            </p>
            <p>
              &copy; 2025 By
              <a
                href="https://github.com/Kisechan"
                target="_blank"
                rel="nofollow noopener"
                ><strong>Kisechan</strong></a
              >
            </p>
            <p style="font-size: 0.75em">
              Made With <a href="https://cn.vuejs.org/">Vue3</a> &
              <a href="https://element-plus.org/zh-CN/">Element Plus</a>
            </p>
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
const feedItems = ref([]);
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

// 获取并解析 RSS Feed
const fetchRSSFeed = async () => {
  const rssUrl = "https://blog.kisechan.space/atom.xml"; // 替换为你的 Atom Feed URL
  try {
    const response = await fetch(rssUrl);
    const str = await response.text();
    const data = new window.DOMParser().parseFromString(str, "text/xml");
    const items = data.querySelectorAll("entry");

    feedItems.value = Array.from(items).map(item => ({
      title: item.querySelector("title").textContent,
      link: item.querySelector("link").getAttribute("href"),
      pubDate: item.querySelector("updated").textContent,
      tags: Array.from(item.querySelectorAll("category")).map(
        category => category.getAttribute("term")
      ),
    }));
  } catch (error) {
    console.error("Error fetching RSS Feed:", error);
  }
};

// 格式化日期
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

// 在组件挂载后懒加载
onMounted(() => {
  loadGitHubCalendar();
  fetchRSSFeed();
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
  gap: 24px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.rss-feed-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.blog-card {
  margin-bottom: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.blog-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.blog-title {
  font-size: 1.2em;
  font-weight: bold;
  color: #303133;
  text-decoration: none;
  margin-left: 10px;
}

.blog-title:hover {
  color: #409eff;
}

.blog-meta {
  display: flex;
  align-items: center;
  font-size: 0.9em;
  color: #606266;
}

.update-time,
.tags {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.icon {
  margin-right: 5px;
  color: #909399;
}

.tag {
  margin-left: 5px;
}
</style>