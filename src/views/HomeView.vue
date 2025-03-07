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
              <h3><i class="fa-solid fa-code-branch"></i>My Github Contributions</h3>
              <div id="github-graph"></div>
            </div>
            <hr />
            <div class="rss-feed-container">
              <h3><i class="fa-solid fa-box-archive"></i>Latest Blog Posts</h3>
              <el-row :gutter="20">
                <el-col v-for="item in feedItems" :key="item.link" :span="24">
                  <el-card class="blog-card" shadow="hover">
                    <div class="blog-header">
                      <i class="fa-solid fa-newspaper"></i>
                      <a :href="item.link" target="_blank" class="blog-title">{{
                        item.title
                      }}</a>
                    </div>
                    <div class="blog-meta">
                      <i class="fa-solid fa-clock-rotate-left"></i>
                      <span class="update-time">
                        {{ formatDate(item.pubDate) }}
                      </span>
                      <span class="tags">
                        <i class="fa-solid fa-tags"></i>
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
            <div class="read-more-container">
              <el-tooltip
                content="前往博客查看更多文章"
                placement="top"
                class="read-more-tooltip"
              >
                <el-card
                  class="read-more-card"
                  shadow="hover"
                  @click="goToBlog"
                >
                  <div class="read-more-content">
                    <span>Read More</span>
                    <i class="fa-brands fa-readme"></i>
                  </div>
                </el-card>
              </el-tooltip>
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
import { ref, onMounted, onUnmounted } from "vue";

const isLoaded = ref(false);
const feedItems = ref([]);
const githubCalendarInstance = ref(null); // 提升到组件作用域

const loadGitHubCalendar = async () => {
  await new Promise((resolve) => setTimeout(resolve, 100)); // 延迟 100ms
  const calendarElement = document.getElementById("github-graph");
  if (!calendarElement) {
    console.error("Element #github-graph not found");
    return;
  }

  const GitHubCalendar = await import("github-calendar");
  githubCalendarInstance.value = GitHubCalendar.default(
    calendarElement,
    "Kisechan",
    {
      responsive: true,
      tooltips: true,
      global_stats: false,
    }
  );
  isLoaded.value = true;
};

const cleanupGitHubCalendar = () => {
  const calendarElement = document.getElementById("github-graph");
  if (calendarElement) {
    calendarElement.innerHTML = ""; // 清空日历内容
  }
  if (githubCalendarInstance.value) {
    githubCalendarInstance.value = null; // 清理实例
  }
};

const fetchRSSFeed = async () => {
  const rssUrl = "https://blog.kisechan.space/atom.xml";
  try {
    const response = await fetch(rssUrl);
    const str = await response.text();
    const data = new window.DOMParser().parseFromString(str, "text/xml");
    const items = data.querySelectorAll("entry");

    feedItems.value = Array.from(items)
      .map((item) => ({
        title: item.querySelector("title").textContent,
        link: item.querySelector("link").getAttribute("href"),
        pubDate: item.querySelector("updated").textContent,
        tags: Array.from(item.querySelectorAll("category")).map((category) =>
          category.getAttribute("term")
        ),
      }))
      .slice(0, 6); // 只取前 6 篇文章
  } catch (error) {
    console.error("Error fetching RSS Feed:", error);
  }
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

const goToBlog = () => {
  window.open("https://blog.kisechan.space", "_blank");
};

onMounted(() => {
  loadGitHubCalendar();
  fetchRSSFeed();
});

onUnmounted(() => {
  cleanupGitHubCalendar();
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
  color: var(--text-color);
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
  color: var(--text-color);
  text-decoration: none;
  margin-left: 10px;
}

.blog-title:hover {
  color: #409eff;
}

.blog-meta {
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 0.9em;
  color: var(--text-color);
}

.update-time,
.tags {
  display: flex;
  align-items: center;
  margin-right: 20px;
  color: var(--text-color);
}

.icon {
  margin-right: 5px;
  color: var(--text-color);
}

.tag {
  margin-left: 5px;
  color: var(--code-text-color);
}

.read-more-container {
  display: flex;
  justify-content: flex-end; /* 靠右排版 */
}

.read-more-card {
  display: flex; /* 使用 flexbox */
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  cursor: pointer;
  width: 135px; /* 调整宽度 */
  height: 35px; /* 调整高度 */
  padding: 6px; /* 调整内边距 */
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.read-more-card:hover,
.read-more-tooltip {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.read-more-content {
  display: flex; /* 使用 flexbox */
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  gap: 2px;
  font-size: 0.85em; /* 调整字体大小 */
  color: #409eff;
}

.read-more-icon {
  color: var(--text-color);
  transition: transform 0.3s ease;
}

.read-more-card:hover .read-more-icon {
  transform: translateX(5px);
}

h3 {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
