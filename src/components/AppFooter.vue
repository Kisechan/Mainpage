<template>
  <el-footer>
    <div class="footer-content">
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
      <div class="footer-text">
        <p>
          &copy; 2025 By
          <a
            href="https://github.com/Kisechan"
            target="_blank"
            rel="nofollow noopener"
            ><strong>Kisechan</strong></a
          >
        </p>
        <p>功能完善中...</p>
      </div>
    </div>
  </el-footer>
</template>

<script setup>
// 可以在这里定义一些逻辑
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

.social-icons {
  margin-top: 10px;
}

.social-icons a {
  color: #303133;
  margin: 0 10px;
  font-size: 24px;
}

.social-icons a:hover {
  color: rgb(159.5, 206.5, 255);
}
</style>
