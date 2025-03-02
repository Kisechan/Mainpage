<template>
    <div class="container">
      <h1 class="title">Kisechan</h1>
      <el-row :gutter="20">
        <el-col 
          v-for="(link, index) in links" 
          :key="index" 
          :xs="24" :sm="12" :md="8" :lg="6"
        >
          <el-card class="link-card">
            <template #header>
              <div class="card-header">
                <el-icon><Link /></el-icon>
                <span>{{ link.name }}</span>
              </div>
            </template>
            <el-button 
              type="primary" 
              @click="openLink(link.url)"
            >
              访问网站
            </el-button>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </template>
  
  <script setup>
  import { Link } from '@element-plus/icons-vue'
  
  const links = [
    { name: 'GitHub', url: 'https://github.com' },
    { name: '博客', url: 'https://zhihu.com' }
  ]
  
  const openLink = (url) => {
    window.open(url, '_blank')
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  .title {
    text-align: center;
    color: #303133;
    margin-bottom: 30px;
  }
  .link-card {
    margin-bottom: 20px;
  }
  .card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
  }
  </style>