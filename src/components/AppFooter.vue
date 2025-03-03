<template>
    <el-footer class="app-footer">
      <div class="social-links">
        <a v-for="item in socialLinks" :key="item.name" :href="item.url" target="_blank">
          <el-icon :size="24">
            <component :is="item.icon" />
          </el-icon>
        </a>
      </div>
      
      <div class="copyright">
        <p>2024 - 2025 Kisechan</p>
      </div>
    </el-footer>
  </template>
  
  <script setup>
  const socialLinks = [
    { name: 'github', icon: 'Github', url: 'https://github.com' },
    { name: 'email', icon: 'Message', url: 'mailto:your@email.com' }
  ]
  </script>
  
  <style scoped>
  .app-footer {
    background: #f5f7fa;
    text-align: center;
    padding: 2rem;
    margin-top: auto;
  }
  
  .social-links {
    margin-bottom: 1rem;
  }
  
  .social-links a {
    margin: 0 10px;
    color: #606266;
    transition: color 0.3s;
  }
  
  .social-links a:hover {
    color: #409eff;
  }
  
  .copyright p {
    margin: 5px 0;
    font-size: 0.9rem;
    color: #909399;
  }
  </style>