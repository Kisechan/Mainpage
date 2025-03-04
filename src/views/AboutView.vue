<template>
  <div class="about-container">
    <NavBar />
    <el-main>
      <el-row :gutter="20">
        <!-- 左侧正文 -->
        <el-col :span="16">
          <el-card>
            <h2>关于我</h2>
            <p>这里是正文内容...</p>
          </el-card>
        </el-col>

        <!-- 右侧作者信息 -->
        <el-col :span="8">
          <div class="author-info">
            <el-avatar :size="150" :src="require('@/assets/avatar.jpg')" />
            <h3>作者姓名</h3>
            <p>这里是作者简介...</p>
          </div>
        </el-col>
      </el-row>
    </el-main>
    <AppFooter />
  </div>
</template>

<style scoped>
.about-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.author-info {
  text-align: center;
  padding: 20px;
  background: #f5f7fa;
  border-radius: 8px;
}

.el-card {
  margin-bottom: 20px;
}
</style>
