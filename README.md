<div align="center">
  <img src="./public/logo.jpg" width="80" alt="Dora 中文社区" />
  <h1>Dora 中文社区</h1>
  <p><strong>为具身智能而生的现代机器人开发框架</strong></p>
  <p>
    <a href="https://doracc.com">官网</a> ·
    <a href="https://github.com/dora-rs/dora">Dora 主仓库</a> ·
    <a href="https://dora-rs.ai">国际版</a> ·
    <a href="https://discord.gg/DXJ6edAtym">Discord</a>
  </p>
</div>

---

本仓库是 [doracc.com](https://doracc.com) 的源码，由社区开发者自发维护，致力于为中文开发者提供 dora-rs 的学习资源、示例库与交流平台。

## 🚀 本地开发

```bash
# 克隆仓库
git clone https://github.com/koljiu753/dora-cn.git
cd dora-cn

# 安装依赖（推荐 pnpm，npm/yarn 也可以）
npm install

# 启动开发服务器（http://localhost:5173）
npm run dev

# 构建生产版本
npm run build

# 本地预览生产版本
npm run preview
```

需要 Node.js 18+。

## 📁 项目结构

```
dora-cn/
├── .github/
│   ├── workflows/
│   │   ├── deploy.yml         # 自动部署到 GitHub Pages
│   │   └── update-stats.yml   # 每天自动更新 GitHub 数据
│   └── ISSUE_TEMPLATE/        # 投稿模板
├── .vitepress/
│   ├── config.ts              # VitePress 主配置
│   └── theme/
│       ├── components/        # 首页所有 Vue 组件
│       │   ├── HomePage.vue   # 首页主组件
│       │   ├── HeroSection.vue
│       │   ├── DataflowDemo.vue
│       │   ├── ConceptCards.vue
│       │   ├── QuickStartSteps.vue
│       │   ├── ExampleGallery.vue
│       │   ├── LearningPath.vue
│       │   ├── CommunityFeed.vue
│       │   ├── FAQAccordion.vue
│       │   ├── FinalCTA.vue
│       │   ├── SiteHeader.vue
│       │   ├── SiteFooter.vue
│       │   ├── TopBanner.vue
│       │   └── DoraBot.vue    # 机器人 logo
│       ├── data/              # 数据驱动内容
│       │   ├── examples.json  # 示例库数据
│       │   ├── articles.json  # 文章列表
│       │   ├── faq.json       # FAQ
│       │   └── stats.json     # GitHub 数据（自动更新）
│       ├── styles/            # 全局样式
│       ├── HomeLayout.vue
│       └── index.ts
├── docs/
│   ├── index.md               # 首页入口
│   ├── community.md
│   ├── guide/                 # 教程文档
│   └── examples/              # 示例文档
└── public/                    # 静态资源
```

## ✏️ 贡献内容

### 投稿文章

1. Fork 本仓库
2. 编辑 `.vitepress/theme/data/articles.json`，添加你的文章
3. 提 PR

或者直接[提 Issue 投稿](https://github.com/koljiu753/dora-cn/issues/new?template=article-submission.md)，由维护者代为录入。

### 投稿示例

1. 准备一个完整的 demo 仓库（含 `dataflow.yml` + README）
2. 在 `.vitepress/theme/data/examples.json` 添加条目
3. 在 `docs/examples/` 添加详细文档
4. 提 PR

或者[直接提 Issue 投稿](https://github.com/koljiu753/dora-cn/issues/new?template=example-submission.md)。

### 完善文档

教程内容在 `docs/guide/`，直接编辑对应的 `.md` 文件即可。

## 🎨 设计规范

- **品牌色**：深蓝 `#1B1464`（logo 主色）/ 亮蓝 `#2563EB`（强调色）
- **字体**：Inter（西文）+ Noto Sans SC（中文）+ JetBrains Mono（代码）
- **组件库**：自定义 + VitePress 默认主题
- **logo**：可爱机器人，深蓝色，详见 `DoraBot.vue`

## 🤝 社区

- 💬 微信群：添加 `dora_cn` 备注「Dora」
- 📺 B 站：搜索「Dora 中文社区」
- 🌐 Discord（官方）：[加入](https://discord.gg/DXJ6edAtym)
- 💡 GitHub Discussions：[去问问题](https://github.com/orgs/dora-rs/discussions)

## 📜 License

- 内容采用 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- 代码采用 [Apache-2.0](./LICENSE) / MIT 双许可

---

<div align="center">
  Made with ❤ by Chinese developers · 让中文机器人开发者不再被语言挡在门外
</div>
