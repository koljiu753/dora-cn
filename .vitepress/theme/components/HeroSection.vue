<script setup lang="ts">
import { ref } from 'vue'
import DoraBot from './DoraBot.vue'
import stats from '../data/stats.json'

const copied = ref(false)
function copyInstall() {
  navigator.clipboard.writeText('pip install dora-rs-cli')
  copied.value = true
  setTimeout(() => (copied.value = false), 1500)
}
</script>

<template>
  <section class="relative overflow-hidden hero-glow">
    <div class="absolute inset-0 grid-pattern"
         style="opacity: 0.7; mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 85%);"></div>

    <div class="max-w-6xl mx-auto px-6 pt-20 pb-20 relative">
      <div class="text-center">

        <!-- 中央可爱机器人 -->
        <div class="rise d1 mb-8 flex justify-center">
          <div class="relative">
            <div class="absolute inset-0 -m-6 rounded-full pointer-events-none"
                 style="background: radial-gradient(circle, rgba(27,20,100,0.20), transparent 65%); opacity: 0.5;"></div>
            <div class="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white border flex items-center justify-center float-bot"
                 style="border-color: var(--dora-line-2); box-shadow: 0 20px 50px -10px rgba(27,20,100,0.3);">
              <DoraBot :size="80" />
            </div>
          </div>
        </div>

        <!-- 主标题 -->
        <h1 class="display rise d2 mx-auto max-w-4xl"
            style="font-size: clamp(2.6rem, 6vw, 5rem); margin-bottom: 1.5rem;">
          为<span class="gradient-text-blue">具身智能</span>而生的<br />
          现代机器人开发框架
        </h1>

        <!-- 副文案 -->
        <p class="text-lg text-ink-2 max-w-2xl leading-relaxed rise d3 mx-auto mb-10">
          把复杂的机器人应用抽象成一张<span class="text-ink font-medium">有向数据流图</span>。
          写一份 YAML，让摄像头、模型、机械臂在<span class="font-semibold text-brand-deep">零拷贝共享内存</span>上协同运转。
          <br class="hidden md:inline" />
          我们是面向中国开发者的 dora-rs 学习社区——让你从「听说过」到「跑通 demo」只需
          <span class="mono font-medium text-ink">5 分钟</span>。
        </p>

        <!-- CTA -->
        <div class="flex flex-wrap items-center justify-center gap-3 mb-12 rise d4">
          <a href="/guide/quick-start" class="dora-btn dora-btn-primary">
            <span>⚡ 5 分钟跑通第一个示例</span>
            <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="/guide/concepts" class="dora-btn dora-btn-secondary">先了解它是什么</a>
        </div>

        <!-- 安装命令 -->
        <div class="max-w-md mx-auto rise d4 mb-14">
          <div class="flex items-center gap-3 px-4 py-3 bg-white border rounded-xl mono text-sm shadow-sm"
               style="border-color: var(--dora-line);">
            <span class="text-ink-4">$</span>
            <span class="text-ink flex-1 text-left">pip install dora-rs-cli</span>
            <button @click="copyInstall"
                    class="px-2.5 py-1 hover:bg-gray-100 border rounded text-xs text-ink-3 hover:text-brand transition"
                    style="background: var(--dora-bg-alt); border-color: var(--dora-line-2);">
              {{ copied ? '已复制 ✓' : '复制' }}
            </button>
          </div>
        </div>

        <!-- 核心指标 -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t max-w-4xl mx-auto rise d5"
             style="border-color: var(--dora-line);">
          <div class="text-center">
            <div class="display text-3xl text-ink mb-1">17<span class="text-brand">×</span></div>
            <div class="text-xs text-ink-3 leading-relaxed">快过 ROS 2<br />（官方 benchmark）</div>
          </div>
          <div class="text-center">
            <div class="display text-3xl text-ink mb-1">&lt;1<span class="text-ink-4 text-lg">ms</span></div>
            <div class="text-xs text-ink-3 leading-relaxed">节点间<br />通信延迟</div>
          </div>
          <div class="text-center">
            <div class="display text-3xl text-ink mb-1">{{ stats.stars }}</div>
            <div class="text-xs text-ink-3 leading-relaxed">GitHub Star<br />（实时更新）</div>
          </div>
          <div class="text-center">
            <div class="display text-3xl text-ink mb-1">4</div>
            <div class="text-xs text-ink-3 leading-relaxed">支持语言<br />Rust / Py / C / C++</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 滚动字带 -->
    <div class="border-t bg-white py-3 overflow-hidden" style="border-color: var(--dora-line-2);">
      <div class="flex whitespace-nowrap mono text-sm text-ink-4 marquee">
        <template v-for="i in 2" :key="i">
          <span class="mx-8">ZERO-COPY SHARED MEMORY</span><span class="mx-8" style="color:#60A5FA">◇</span>
          <span class="mx-8">APACHE ARROW NATIVE</span><span class="mx-8" style="color:#60A5FA">◇</span>
          <span class="mx-8">DECLARATIVE YAML</span><span class="mx-8" style="color:#60A5FA">◇</span>
          <span class="mx-8">MULTI-LANGUAGE BINDINGS</span><span class="mx-8" style="color:#60A5FA">◇</span>
          <span class="mx-8">DISTRIBUTED BY DESIGN</span><span class="mx-8" style="color:#60A5FA">◇</span>
          <span class="mx-8">ROS 2 COMPATIBLE</span><span class="mx-8" style="color:#60A5FA">◇</span>
          <span class="mx-8">EMBODIED AI READY</span><span class="mx-8" style="color:#60A5FA">◇</span>
        </template>
      </div>
    </div>
  </section>
</template>
