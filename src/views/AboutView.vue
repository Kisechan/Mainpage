<template>
  <div class="about-container">
    <!-- <NavBar /> -->
    <el-main>
      <el-row :gutter="20">
        <!-- 左侧正文 -->
        <el-col :span="16">
          <el-card>
            <h2>ABOUT</h2>
            <p>passage...</p>
          </el-card>
        </el-col>

        <!-- 右侧作者信息 -->
        <el-col :span="8">
          <div class="author-info">
            <!-- <el-avatar :size="150" :src="require('@/assets/avatar.jpg')" /> -->
            <h3>name</h3>
            <p>info...</p>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<style scoped>
</style>

<script setup>
</script>