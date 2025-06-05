# Mainpage :orange_book:

使用 Vue 3 + Vite + Element Plus 搭建的个人主页项目。

**项目线上部署请移步:** [https://www.kisechan.space](https://www.kisechan.space)

## 功能和特色 :sparkler:

* **技术栈**
  * Vue 3
  * Vite
  * Element Plus
  * Vue Router
* **响应式设计**
  * 兼容桌面端和移动端设备
* **暗黑模式切换**
  * 支持亮色和暗色主题切换，并记忆选择
* **SEO 友好**:
  * `vite-plugin-sitemap` 生成站点地图
  * `robots.txt` 指导搜索引擎抓取
  * 每个路由动态设置页面标题和 `meta` 标签
* **图标库**:
  * Element Plus Icons
  * Font Awesome

## 开发和构建 :factory:

### 环境
* Node.js 22.14.0 （建议 >=16.x）

### 依赖

```bash
# 使用 npm
npm install
```

### 构建

克隆本仓库：

```bash
git clone git@github.com:Kisechan/Mainpage.git
cd Mainpage/
```

启动开发服务器：

```bash
npm run dev
```

---

构建生产版本：

```bash
npm run build
```

构建产物将输出到 `dist` 文件夹。

## 许可证

[MIT](./LICENSE)