import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Dora 中文社区',
  titleTemplate: ':title · Dora 中文社区',
  description: 'Dora-rs 中文社区。零拷贝数据流、多语言支持、声明式 YAML，极速上手的现代机器人开发框架。',

  base: '/dora-cn/',
  srcDir: 'docs',
  ignoreDeadLinks: true,

  // ⭐ 关键：让 VitePress 从仓库根目录的 public/ 加载静态资源
  // 因为 srcDir='docs',VitePress 默认会找 docs/public,这里改成相对 srcDir 的 ../public
  vite: {
    publicDir: '../public'
  },

  head: [
    ['meta', { name: 'theme-color', content: '#1B1464' }],
    ['meta', { property: 'og:title', content: 'Dora 中文社区' }],
    ['meta', { property: 'og:description', content: '为具身智能而生的现代机器人开发框架' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@300;400;500;600;700;800;900&family=Noto+Sans+SC:wght@300;400;500;600;700;800&display=swap' }]
  ],

  themeConfig: {
    siteTitle: false,
    logo: '/logo.jpg',

    nav: [
      { text: '快速上手', link: '/guide/quick-start' },
      { text: '核心概念', link: '/guide/concepts' },
      { text: '示例库', link: '/examples/' },
      {
        text: '社区',
        items: [
          { text: '加入社群', link: '/community' },
          { text: 'GitHub Discussions', link: 'https://github.com/orgs/dora-rs/discussions' }
        ]
      },
      { text: 'FAQ', link: '/guide/faq' },
      { text: '🌐 EN', link: 'https://dora-rs.ai' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '入门',
          items: [
            { text: '快速上手', link: '/guide/quick-start' },
            { text: '核心概念', link: '/guide/concepts' }
          ]
        },
        {
          text: '其他',
          items: [
            { text: 'FAQ', link: '/guide/faq' }
          ]
        }
      ],
      '/examples/': [
        {
          text: '示例库',
          items: [
            { text: '全部示例', link: '/examples/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dora-rs/dora' },
      { icon: 'discord', link: 'https://discord.gg/DXJ6edAtym' }
    ],

    footer: {
      message: '内容 CC BY-SA 4.0 · 代码 Apache-2.0 / MIT',
      copyright: '© 2025 Dora 中文社区 · 由社区开发者维护'
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },

    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一页', next: '下一页' },
    lastUpdatedText: '最后更新',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },

  markdown: {
    lineNumbers: true,
    theme: { light: 'github-light', dark: 'github-dark' }
  },

  cleanUrls: true,
  lastUpdated: true
})
