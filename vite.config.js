import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    vue(),
    sitemap({
      hostname: "https://www.kisechan.space",
      routes: [
        { path: "/", name: "主页" },
        { path: "/links", name: "友链" },
        { path: "/tools", name: "工具" },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
