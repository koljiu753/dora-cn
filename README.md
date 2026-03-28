# DORA 中文社区（doracc.com）

基于 [Astro](https://astro.build) 与 [Tailwind CSS](https://tailwindcss.com) 的静态站点，面向中国大陆用户优化导航与说明，并与 [dora-rs.ai](https://dora-rs.ai/) 官方文档对齐。

## 本地开发

要求：Node.js ≥ 22.12（见 `package.json` 的 `engines`）。

```bash
npm install
npm run dev
```

开发服务器默认：<http://localhost:4321/>

## 构建与预览

```bash
npm run build
npm run preview
```

产物输出目录：`dist/`。

## 站点地址与 SEO

- 在仓库根目录复制 `.env.example` 为 `.env`，按需设置 `PUBLIC_SITE_URL`（生产环境完整根 URL，须带 `https://`）。
- 未设置时，构建默认使用 `https://doracc.com`（见 `astro.config.mjs`）。
- 构建会生成 `sitemap-index.xml`（`@astrojs/sitemap`）；`public/robots.txt` 中的 Sitemap 地址需与实际上线域名一致，部署前请核对。

## 部署

任意支持静态文件的托管均可（如 GitHub Pages、Cloudflare Pages、对象存储 + CDN 等）。将 `dist/` 上传即可；若使用子路径部署，需在 `astro.config.mjs` 中配置 `base` 并同步更新 `site` 与 `robots.txt`。

## 许可证

本站原创内容的许可说明见站内 [关于与声明](/about) 页面；dora-rs 上游以官方仓库为准。
