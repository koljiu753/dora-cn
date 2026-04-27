<script setup lang="ts">
import articles from '../data/articles.json'
import stats from '../data/stats.json'

function chipClass(category: string) {
  switch (category) {
    case 'tutorial': return 'chip-brand'
    case 'community': return 'chip-green'
    case 'deep-dive': return 'chip-purple'
    case 'news': return 'chip-orange'
    default: return ''
  }
}
</script>

<template>
  <section id="community" class="py-24 bg-white border-t" style="border-color: var(--dora-line-2);">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-14 max-w-3xl mx-auto">
        <div class="section-eyebrow mb-5 inline-flex">05 · 社区动态</div>
        <h2 class="display mb-5" style="font-size: clamp(2rem, 5vw, 3rem);">
          中文开发者的<span class="gradient-text-blue">真实分享</span>
        </h2>
        <p class="text-ink-2 leading-relaxed">
          来自 CSDN、知乎、博客园等平台的真实中文教程与经验贴。
        </p>
      </div>

      <div class="grid lg:grid-cols-12 gap-8">
        <div class="lg:col-span-7">
          <div class="flex items-end justify-between mb-5">
            <h3 class="text-xl font-bold flex items-center gap-2">
              <span>📰</span><span>文章 · 教程</span>
            </h3>
            <a href="#" class="text-sm font-medium text-brand hover:text-brand-2">全部 →</a>
          </div>

          <div class="dora-card overflow-hidden divide-y" style="--tw-divide-opacity:1;border-color: var(--dora-line-2);">
            <a v-for="(a, i) in articles" :key="i"
               :href="a.url" target="_blank" rel="noopener"
               class="article-row flex gap-4 p-5 hover:bg-gray-50 transition group"
               style="border-color: var(--dora-line-2);">
              <div class="mono text-xs text-ink-4 w-20 shrink-0 pt-1">{{ a.date.replace(/-/g, '·') }}</div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span class="chip" :class="chipClass(a.category)">{{ a.categoryLabel }}</span>
                  <span class="mono text-[10px] text-ink-4">@{{ a.author }} · {{ a.platform }}</span>
                </div>
                <h3 class="font-semibold group-hover:text-brand transition leading-snug">{{ a.title }}</h3>
                <p class="text-xs text-ink-3 mt-1.5 line-clamp-1">{{ a.summary }}</p>
              </div>
              <span class="text-ink-4 group-hover:text-brand group-hover:translate-x-1 transition-all self-center shrink-0">↗</span>
            </a>
          </div>

          <div class="mt-5 p-4 rounded-xl flex items-start gap-3"
               style="background: rgba(239,246,255,0.5); border: 1px solid var(--dora-brand-5);">
            <span class="text-xl">💡</span>
            <div class="text-sm text-ink-2">
              <strong class="text-ink">看到好文章想推荐？</strong> 欢迎在 GitHub 仓库提 PR，我们会把它收录到这个列表里。
            </div>
          </div>
        </div>

        <div class="lg:col-span-5 space-y-5">
          <div class="dora-card p-6 relative overflow-hidden"
               style="background: linear-gradient(135deg, #EFF6FF, #fff, #F0F9FF); border-color: var(--dora-brand-5);">
            <div class="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-30"
                 style="background: radial-gradient(circle, #60A5FA, transparent 60%);"></div>
            <div class="relative">
              <div class="mono text-xs text-brand mb-2">⋙ 征稿令</div>
              <h3 class="text-2xl font-bold mb-3">你写教程，<br/>我们帮你扩散。</h3>
              <p class="text-sm text-ink-2 leading-relaxed mb-5">
                你在用 Dora 搞机器人或具身智能？哪怕只是一个 demo 记录——发我们 PR 或公众号投稿，我们帮你润色、上首页、推到 GitHub Discussions。
              </p>
              <a href="#" class="dora-btn dora-btn-primary text-sm">提交一篇文章 →</a>
            </div>
          </div>

          <div class="dora-card p-6">
            <div class="mono text-xs text-brand mb-3 flex items-center gap-2">
              <span>⋙ 项目数据</span>
              <span class="chip text-[9px] py-0">来自 GitHub</span>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <div class="display text-3xl gradient-text-blue mb-1">{{ stats.stars }}</div>
                <div class="text-xs text-ink-3">GitHub Star</div>
              </div>
              <div>
                <div class="display text-3xl gradient-text-blue mb-1">{{ stats.forks }}</div>
                <div class="text-xs text-ink-3">Fork</div>
              </div>
              <div>
                <div class="display text-3xl gradient-text-blue mb-1">100%</div>
                <div class="text-xs text-ink-3">Rust 内核</div>
              </div>
              <div>
                <div class="display text-3xl gradient-text-blue mb-1">{{ stats.version }}</div>
                <div class="text-xs text-ink-3">最新版本</div>
              </div>
            </div>
          </div>

          <div class="dora-card p-6">
            <div class="mono text-xs text-brand mb-3">⋙ 哪里能找到我们</div>
            <div class="space-y-2">
              <a href="https://github.com/dora-rs/dora" target="_blank" rel="noopener" class="join-row group">
                <div class="flex items-center gap-3">
                  <div class="join-icon">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.58C20.57 21.79 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  </div>
                  <div>
                    <div class="font-semibold text-sm">GitHub 仓库</div>
                    <div class="mono text-[10px] text-ink-4">dora-rs/dora</div>
                  </div>
                </div>
                <span class="text-ink-4 group-hover:text-brand transition">↗</span>
              </a>
              <a href="/community" class="join-row group">
                <div class="flex items-center gap-3">
                  <div class="join-icon">💬</div>
                  <div>
                    <div class="font-semibold text-sm">微信交流群</div>
                    <div class="mono text-[10px] text-ink-4">备注「Dora」加入</div>
                  </div>
                </div>
                <span class="text-ink-4 group-hover:text-brand transition">↗</span>
              </a>
              <a href="https://discord.gg/DXJ6edAtym" target="_blank" rel="noopener" class="join-row group">
                <div class="flex items-center gap-3">
                  <div class="join-icon">🌐</div>
                  <div>
                    <div class="font-semibold text-sm">Discord（官方）</div>
                    <div class="mono text-[10px] text-ink-4">直接和核心开发者对话</div>
                  </div>
                </div>
                <span class="text-ink-4 group-hover:text-brand transition">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.article-row {
  border-bottom: 1px solid var(--dora-line-2);
}
.article-row:last-child { border-bottom: 0; }
.line-clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.join-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  border-radius: 8px;
  background: rgba(243, 245, 249, 0.8);
  border: 1px solid var(--dora-line-2);
  transition: all 0.2s;
  text-decoration: none;
  color: inherit;
}
.join-row:hover {
  border-color: var(--dora-brand);
  background: white;
}
.join-icon {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 8px;
  background: white;
  border: 1px solid var(--dora-line-2);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
