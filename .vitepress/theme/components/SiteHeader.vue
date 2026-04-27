<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import DoraBot from './DoraBot.vue'

const searchOpen = ref(false)
const searchInput = ref<HTMLInputElement | null>(null)
const wrapper = ref<HTMLElement | null>(null)

function handleClickOutside(e: MouseEvent) {
  if (wrapper.value && !wrapper.value.contains(e.target as Node)) {
    searchOpen.value = false
  }
}

function handleKeydown(e: KeyboardEvent) {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    searchInput.value?.focus()
    searchOpen.value = true
  }
  if (e.key === 'Escape') {
    searchOpen.value = false
    searchInput.value?.blur()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <header class="sticky top-0 z-50 backdrop-blur-lg border-b"
          style="background: rgba(255,255,255,0.85); border-color: var(--dora-line-2);">
    <div class="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between gap-6">

      <!-- Logo -->
      <a href="/" class="flex items-center gap-2.5 shrink-0">
        <div class="w-9 h-9 rounded-xl bg-white border flex items-center justify-center shadow-sm float-bot"
             style="border-color: var(--dora-line-2);">
          <DoraBot :size="28" />
        </div>
        <div class="flex flex-col leading-none">
          <span class="text-base font-bold tracking-tight text-ink">Dora 中文社区</span>
          <span class="mono text-[10px] text-ink-4 mt-0.5">dora-rs · zh-CN</span>
        </div>
      </a>

      <!-- 发现型搜索 -->
      <div ref="wrapper"
           class="relative flex-1 max-w-xl hidden md:block"
           :class="{ 'open': searchOpen }">
        <div class="search-input-box flex items-center gap-2 px-4 py-2.5 rounded-xl cursor-text transition-all"
             :class="searchOpen ? 'search-focused' : ''"
             style="background: var(--dora-bg-alt); border: 1px solid var(--dora-line-2);"
             @click="searchInput?.focus(); searchOpen = true">
          <svg class="w-4 h-4 text-ink-4 shrink-0" viewBox="0 0 16 16" fill="currentColor">
            <path d="M11 2a5 5 0 013.54 8.54l4.46 4.46-1.41 1.41-4.46-4.46A5 5 0 1111 2zm0 2a3 3 0 100 6 3 3 0 000-6z" />
          </svg>
          <input ref="searchInput" type="text"
                 placeholder='搜索教程 · 示例 · 文章 · API（试试 "YOLO" 或 "节点"）'
                 class="flex-1 bg-transparent outline-none text-sm placeholder:text-ink-4"
                 @focus="searchOpen = true" />
          <kbd class="ml-2 mono px-1.5 py-0.5 bg-white border rounded text-[10px] text-ink-4"
               style="border-color: var(--dora-line);">⌘ K</kbd>
        </div>

        <!-- 下拉发现层 -->
        <div v-show="searchOpen" class="search-pop">
          <div class="grid grid-cols-2" style="border-color: var(--dora-line-2);">
            <div class="p-4 border-r" style="border-color: var(--dora-line-2);">
              <div class="text-xs font-semibold text-ink-3 mb-3 mono uppercase tracking-wider">📚 学习资源</div>
              <a href="/guide/quick-start" class="search-item">
                <span class="text-base">🚀</span><span class="font-medium">快速上手</span>
                <span class="ml-auto text-xs text-ink-4">5 min</span>
              </a>
              <a href="/guide/concepts" class="search-item">
                <span class="text-base">📖</span><span class="font-medium">中文教程</span>
                <span class="ml-auto text-xs text-ink-4">7 章</span>
              </a>
              <a href="/examples/" class="search-item">
                <span class="text-base">🎯</span><span class="font-medium">示例库</span>
                <span class="ml-auto text-xs text-ink-4">6 个</span>
              </a>
              <a href="#path" class="search-item">
                <span class="text-base">🛣️</span><span class="font-medium">学习路径</span>
                <span class="ml-auto text-xs text-ink-4">5 站</span>
              </a>
            </div>
            <div class="p-4">
              <div class="text-xs font-semibold text-ink-3 mb-3 mono uppercase tracking-wider">🤝 社区参与</div>
              <a href="#community" class="search-item">
                <span class="text-base">📰</span><span class="font-medium">最新文章</span>
              </a>
              <a href="/community" class="search-item">
                <span class="text-base">💬</span><span class="font-medium">微信交流群</span>
              </a>
              <a href="#community" class="search-item">
                <span class="text-base">📺</span><span class="font-medium">B 站视频</span>
              </a>
              <a href="#community" class="search-item">
                <span class="text-base">✍️</span><span class="font-medium">投稿教程</span>
              </a>
            </div>
          </div>
          <div class="px-4 py-3 border-t flex items-center justify-between text-xs text-ink-3"
               style="background: var(--dora-bg-alt); border-color: var(--dora-line-2);">
            <span>热门搜索：</span>
            <div class="flex items-center gap-2">
              <a href="#" class="hot-tag mono">YOLO</a>
              <a href="#" class="hot-tag mono">节点</a>
              <a href="#" class="hot-tag mono">YAML</a>
              <a href="#" class="hot-tag mono">LeRobot</a>
            </div>
          </div>
        </div>
      </div>

      <!-- 桌面端导航 -->
      <nav class="hidden xl:flex items-center gap-1 text-sm shrink-0">
        <a href="/guide/quick-start" class="nav-link">教程</a>
        <a href="/examples/" class="nav-link">示例</a>
        <a href="#community" class="nav-link">社区</a>
        <a href="/guide/faq" class="nav-link">FAQ</a>
      </nav>

      <a href="/guide/quick-start" class="dora-btn dora-btn-primary text-sm shrink-0">
        <span>🚀</span><span>开始学习</span>
      </a>
    </div>
  </header>
</template>

<style scoped>
.search-input-box {
  transition: all 0.2s;
}
.search-focused {
  border-color: var(--dora-brand) !important;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
}
.search-pop {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid var(--dora-line);
  border-radius: 12px;
  box-shadow: 0 20px 50px -10px rgba(11, 16, 32, 0.18), 0 4px 12px rgba(11, 16, 32, 0.04);
  z-index: 60;
  overflow: hidden;
}
.search-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 14px;
  transition: background 0.2s;
  text-decoration: none;
  color: inherit;
}
.search-item:hover {
  background: var(--dora-brand-6);
}
.hot-tag {
  padding: 0.25rem 0.5rem;
  background: white;
  border: 1px solid var(--dora-line-2);
  border-radius: 4px;
  transition: all 0.2s;
  text-decoration: none;
  color: var(--dora-ink-3);
}
.hot-tag:hover {
  border-color: var(--dora-brand);
  color: var(--dora-brand);
}
.nav-link {
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  color: var(--dora-ink-2);
  transition: all 0.2s;
  text-decoration: none;
}
.nav-link:hover {
  color: var(--dora-ink);
  background: var(--dora-bg-alt);
}
</style>
