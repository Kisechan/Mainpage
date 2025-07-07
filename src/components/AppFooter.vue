<template>
  <el-footer>
    <div class="footer-content">
      <div class="footer-text">
        <p>
          <a href="https://icp.gov.moe/?keyword=20251453" target="_blank"
            >萌ICP备20251453号</a
          >
        </p>
        <span id="my-site-view">本站总访问量：加载中...</span>
        <p>
          &copy; 2025 By
          <a
            href="https://github.com/Kisechan"
            target="_self"
            rel="nofollow noopener"
            ><strong>Kisechan</strong></a
          >
        </p>
        <p style="font-size: 0.75em">
          Made With <a href="https://cn.vuejs.org/">Vue3</a> &
          <a href="https://element-plus.org/zh-CN/">Element Plus</a>
        </p>
      </div>
    </div>
  </el-footer>
</template>

<script setup>
import { onMounted } from "vue";
const counterJsUrl = import.meta.env.VITE_COUNTER_JS_URL;

onMounted(() => {
  if (counterJsUrl) {
    const script = document.createElement("script");
    script.async = true;
    script.src = counterJsUrl;
    document.body.appendChild(script);
  } else {
    console.warn("VITE_COUNTER_JS_URL is not defined");
  }
});
</script>

<style scoped>
.el-footer {
  text-align: center;
  padding: 20px 0;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

/* .social-icons {
  margin-top: 10px;
} */
</style>
