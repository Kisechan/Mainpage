import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
    meta: {
      hideFooter: true,
      title: "主页",
      metaTags: [
        {
          name: "description",
          content: "Kisechan的个人主页。",
        },
      ],
    },
  },
  {
    path: "/links",
    name: "links",
    component: () => import("@/views/LinksView.vue"),
    meta: {
      title: "友链",
      metaTags: [
        {
          name: "description",
          content: "Kisechan的个人主页 - 友链部分。",
        },
      ],
    },
  },
  {
    path: "/tools",
    name: "tools",
    component: () => import("@/views/ToolsView.vue"),
    meta: {
      title: "工具",
      metaTags: [
        {
          name: "description",
          content: "Kisechan的个人主页 - 工具部分。",
        },
      ],
    },
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue"),
    meta: { title: "寄了" },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const title = to.meta.title; // 获取路由元信息中的标题
  if (title) {
    document.title = "Kisechan | " + title; // 设置页面标题
  }
  next();
});

export default router;
