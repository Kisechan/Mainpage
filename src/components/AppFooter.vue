<template>
  <el-footer>
    <div class="footer-content">
      <p>© 2023 Kisechan</p>
      <p>还在做还在做还在做还在做</p>
      <div class="social-icons">
        <a href="https://twitter.com" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://facebook.com" target="_blank">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="https://github.com" target="_blank">
          <i class="fab fa-github"></i>
        </a>
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
  color: #b9b7b7;
  margin: 0 10px;
  font-size: 24px;
}

.social-icons a:hover {
  color: #dddade;
}
</style>