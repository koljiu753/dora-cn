# 🚀 把这套代码部署到 koljiu753/dora-cn 仓库

> Claude 没法直接帮你操作 GitHub 仓库（既不能删文件也不能 push commit），但下面这套步骤 5-10 分钟就能搞定。

---

## 方式 A（推荐）：本地操作

### 1. 下载这套代码

把 `/mnt/user-data/outputs/dora-cn.zip` 下载到本地，解压。

### 2. 清空你的仓库（在本地）

```bash
# 克隆你现有的仓库
git clone https://github.com/koljiu753/dora-cn.git
cd dora-cn

# 删除所有文件（保留 .git 目录）
git rm -rf .
git clean -fxd

# 提交「清空」操作
git commit --allow-empty -m "chore: clean repo for redesign"
```

### 3. 把新代码复制进来

```bash
# 假设你把 zip 解压到了 ~/Downloads/dora-cn-new/
cp -r ~/Downloads/dora-cn-new/. .

# 也别忘了隐藏文件
cp -r ~/Downloads/dora-cn-new/.github .
cp -r ~/Downloads/dora-cn-new/.vitepress .
cp ~/Downloads/dora-cn-new/.gitignore .
```

### 4. 验证一下能跑

```bash
npm install
npm run dev
# 浏览器打开 http://localhost:5173 看效果
```

### 5. 提交并推送

```bash
git add .
git commit -m "feat: redesign with VitePress + new homepage

- Replace static docs with VitePress 1.5
- Add custom homepage with 9 sections (Hero / Dataflow / Concepts / QuickStart / Examples / LearningPath / Community / FAQ / FinalCTA)
- New brand: deep blue robot logo
- Real Chinese articles from CSDN/知乎/博客园
- Real GitHub stats with auto-update workflow
- Data-driven examples and articles (JSON)
- Components: 13 Vue SFCs in .vitepress/theme/
- GitHub Actions: auto-deploy + auto-update-stats"

git push origin main
```

---

## 方式 B：用 GitHub 网页操作

如果你不想用命令行：

### 1. 清空仓库

1. 打开 https://github.com/koljiu753/dora-cn
2. 进每个文件，点右上角的「🗑️ Delete file」按钮
3. 或者直接到 Settings → 最底部 → 「Delete this repository」，然后重新建一个同名仓库

### 2. 上传新文件

1. 在仓库主页点 「Add file → Upload files」
2. 把解压后的所有文件**拖进去**（注意 GitHub 网页上传有些隐藏文件需要手动处理）
3. 写 commit message，点 Commit

> ⚠️ **注意**：网页上传有几个限制：
> - 一次最多 100 个文件
> - 单文件不能超过 25MB
> - **隐藏文件夹（如 `.github`、`.vitepress`）需要手动逐个创建**
>
> 所以更推荐方式 A。

---

## 部署上线

### 启用 GitHub Pages

push 之后：

1. 进入仓库 Settings → Pages
2. **Source** 选 `GitHub Actions`
3. 保存

每次 push 到 main 分支，`.github/workflows/deploy.yml` 会自动构建并部署。
首次部署后访问：`https://koljiu753.github.io/dora-cn/`

### 接入自定义域名 doracc.com

1. 在 `public/` 下新建 `CNAME` 文件，内容为 `doracc.com`
2. 在你的域名 DNS 服务商添加 CNAME 记录指向 `koljiu753.github.io`
3. 在 GitHub Pages 设置里填入 `doracc.com` 并勾选 Enforce HTTPS

### 部署到 Cloudflare Pages（国内访问更快，推荐）

1. 登录 [pages.cloudflare.com](https://pages.cloudflare.com)
2. 连接 GitHub，选择 `koljiu753/dora-cn`
3. 构建配置：
   - Framework preset：**VitePress**
   - Build command：`npm run build`
   - Build output：`.vitepress/dist`
4. 自定义域名绑定 doracc.com（DNS 指向 Cloudflare 提供的 CNAME）

---

## 启用自动更新 GitHub 数据

`.github/workflows/update-stats.yml` 这个工作流每天会自动跑一次，从 GitHub API 拉取最新的 dora-rs 项目 Star/Fork/版本号，更新到 `stats.json` 并自动 commit。

要让它能自动 commit，需要：

1. 进入仓库 Settings → Actions → General
2. 找到 **Workflow permissions**
3. 选择 **Read and write permissions**
4. 勾选 **Allow GitHub Actions to create and approve pull requests**
5. 保存

之后你也可以手动触发：Actions 页面 → 选择 `Update GitHub Stats` → Run workflow。

---

## 常见问题

### Q: `npm install` 报错？
A: 确保 Node.js 版本 ≥ 18。`node -v` 检查一下。

### Q: 构建报错说找不到 vue / vitepress？
A: `rm -rf node_modules package-lock.json && npm install`

### Q: 部署后页面 404？
A: 检查 GitHub Pages 设置的 Source 是不是选了 `GitHub Actions`，不是 `Deploy from a branch`。

### Q: 我想改 logo / 主色？
A:
- Logo SVG：`public/logo.svg` + `.vitepress/theme/components/DoraBot.vue`
- 主色：`.vitepress/theme/styles/vars.css` 修改 `--dora-brand-deep` / `--dora-brand`

### Q: 我想加新文章？
A: 编辑 `.vitepress/theme/data/articles.json`，按已有格式加一条即可。

### Q: 我想改首页布局？
A: `.vitepress/theme/components/HomePage.vue` 是首页主组件，调整 `<template>` 里组件的顺序就行。

---

## 下一步建议

按优先级：

1. ✅ 把上面的代码 push 上去，配置好 Pages，让站点先跑起来
2. ⏭️ 把 `koljiu753/dora-cn` 改成你们组织/团队的仓库（比如 `dora-cn/dora-cn`），更显正式
3. ⏭️ 接入 Algolia DocSearch（替代当前的 local search，体验更好）
4. ⏭️ 完善 6 个示例的实际 demo 仓库
5. ⏭️ 接入 Giscus 评论系统（基于 GitHub Discussions）
