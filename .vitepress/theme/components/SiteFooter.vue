<script setup lang="ts">
import DoraBot from './DoraBot.vue'
</script>

<template>
  <footer class="py-16 border-t" style="background: var(--dora-bg-alt); border-color: var(--dora-line-2);">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-12 gap-10 mb-12">
        <div class="md:col-span-4">
          <div class="flex items-center gap-2.5 mb-4">
            <div class="w-9 h-9 rounded-xl bg-white border flex items-center justify-center"
                 style="border-color: var(--dora-line-2);">
              <DoraBot :size="28" />
            </div>
            <div class="flex flex-col leading-none">
              <span class="text-base font-bold tracking-tight">Dora 中文社区</span>
              <span class="mono text-[10px] text-ink-4 mt-0.5">dora-rs · zh-CN</span>
            </div>
          </div>
          <p class="text-sm text-ink-3 leading-relaxed mb-5 max-w-sm">
            一群中国开发者自发维护的 dora-rs 中文学习社区。让中文机器人开发者不再被语言挡在门外。
          </p>
          <div class="flex items-center gap-2">
            <a href="https://github.com/dora-rs/dora" target="_blank" rel="noopener" class="social-icon" title="GitHub">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.1-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.58C20.57 21.79 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="#" class="social-icon" title="Bilibili">B</a>
            <a href="#" class="social-icon" title="微信">微</a>
            <a href="#" class="social-icon" title="知乎">知</a>
          </div>
        </div>

        <div class="md:col-span-2">
          <div class="text-xs font-semibold text-ink uppercase tracking-wider mb-4">学习</div>
          <ul class="space-y-2.5 text-sm">
            <li><a href="/guide/quick-start" class="footer-link">快速上手</a></li>
            <li><a href="/guide/concepts" class="footer-link">核心概念</a></li>
            <li><a href="/guide/" class="footer-link">中文教程</a></li>
            <li><a href="/guide/cli" class="footer-link">CLI 手册</a></li>
          </ul>
        </div>
        <div class="md:col-span-2">
          <div class="text-xs font-semibold text-ink uppercase tracking-wider mb-4">实战</div>
          <ul class="space-y-2.5 text-sm">
            <li><a href="/examples/" class="footer-link">示例库</a></li>
            <li><a href="#path" class="footer-link">学习路径</a></li>
            <li><a href="/guide/ros-migration" class="footer-link">ROS 迁移</a></li>
            <li><a href="/guide/distributed" class="footer-link">部署指南</a></li>
          </ul>
        </div>
        <div class="md:col-span-2">
          <div class="text-xs font-semibold text-ink uppercase tracking-wider mb-4">社区</div>
          <ul class="space-y-2.5 text-sm">
            <li><a href="https://github.com/dora-rs/dora" target="_blank" rel="noopener" class="footer-link">GitHub</a></li>
            <li><a href="https://discord.gg/DXJ6edAtym" target="_blank" rel="noopener" class="footer-link">Discord</a></li>
            <li><a href="#community" class="footer-link">微信群</a></li>
            <li><a href="/community#contribute" class="footer-link">投稿</a></li>
          </ul>
        </div>
        <div class="md:col-span-2">
          <div class="text-xs font-semibold text-ink uppercase tracking-wider mb-4">相关</div>
          <ul class="space-y-2.5 text-sm">
            <li><a href="https://dora-rs.ai" target="_blank" rel="noopener" class="footer-link">Dora 国际版 ↗</a></li>
            <li><a href="https://github.com/huggingface/lerobot" target="_blank" rel="noopener" class="footer-link">LeRobot ↗</a></li>
            <li><a href="https://rerun.io" target="_blank" rel="noopener" class="footer-link">Rerun ↗</a></li>
            <li><a href="https://arrow.apache.org" target="_blank" rel="noopener" class="footer-link">Apache Arrow ↗</a></li>
          </ul>
        </div>
      </div>

      <div class="pt-6 border-t flex flex-wrap items-center justify-between gap-4 text-xs text-ink-4"
           style="border-color: var(--dora-line-2);">
        <div>© 2025 Dora 中文社区 · 内容 CC BY-SA 4.0 · 代码 Apache-2.0 / MIT</div>
        <div class="flex items-center gap-5">
          <span class="mono">由社区开发者维护</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.social-icon {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 8px;
  background: white;
  border: 1px solid var(--dora-line);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  color: var(--dora-ink-3);
  transition: all 0.2s;
  text-decoration: none;
}
.social-icon:hover {
  color: var(--dora-brand);
  border-color: var(--dora-brand);
}
.footer-link {
  color: var(--dora-ink-3);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-link:hover { color: var(--dora-brand); }
</style>
