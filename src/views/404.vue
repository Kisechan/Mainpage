<template>
    <div class="not-found">
      <h1>您访问的页面寄了</h1>
      <img src="/404.png" class="not-found-img" />
      <p>将在 {{ countdown }} 秒后自动跳转到首页...</p>
      <el-button type="primary" @click="goHome">立即返回首页</el-button>
      <!-- 优化后的进度条 -->
      <el-progress
        :percentage="(5 - countdown) * 20"
        :show-text="false"
        stroke-width="8"
        :color="colors"
        class="custom-progress"
      ></el-progress>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, computed } from "vue";
  import { useRouter } from "vue-router";
  
  export default {
    name: "NotFound",
    setup() {
      const router = useRouter();
      const countdown = ref(5); // 倒计时 5 秒
  
      // 自动跳转逻辑
      onMounted(() => {
        const timer = setInterval(() => {
          countdown.value--;
          if (countdown.value === 0) {
            clearInterval(timer);
            router.push("/"); // 跳转到首页
          }
        }, 1000);
      });
  
      // 手动跳转逻辑
      const goHome = () => {
        router.push("/");
      };
  
      // 动态计算进度条颜色
      const colors = [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ];
  
      return {
        countdown,
        goHome,
        colors,
      };
    },
  };
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    padding: 50px;
  }
  
  h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
  
  /* 图片样式优化 */
  .not-found-img {
    max-width: 300px; /* 设置图片最大宽度 */
    max-height: 300px; /* 设置图片最大高度 */
    width: auto; /* 保持图片比例 */
    height: auto; /* 保持图片比例 */
    border-radius: 15px; /* 添加圆角 */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* 添加阴影 */
    margin: 20px auto; /* 居中显示 */
    display: block; /* 确保图片居中 */
    animation: fadeIn 1s ease-in-out; /* 添加淡入动画 */
  }
  
  /* 淡入动画 */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  /* 自定义进度条样式 */
  .custom-progress {
    width: 40%; /* 设置进度条宽度 */
    margin: 20px auto; /* 居中显示 */
    transition: width 0.3s ease; /* 添加过渡动画 */
  }
  
  /* 进度条颜色渐变 */
  .el-progress-bar__inner {
    transition: all 0.3s ease; /* 添加颜色过渡动画 */
  }
  </style>