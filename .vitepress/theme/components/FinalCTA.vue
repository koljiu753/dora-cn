<script setup lang="ts">
import { ref } from 'vue'
import DoraBot from './DoraBot.vue'

const copied = ref(false)
function copy() {
  navigator.clipboard.writeText('pip install dora-rs-cli')
  copied.value = true
  setTimeout(() => (copied.value = false), 1500)
}
</script>

<template>
  <section class="py-28 relative overflow-hidden">
    <div class="absolute inset-0" style="background: linear-gradient(135deg, #1B1464 0%, #1D4ED8 50%, #2563EB 100%);"></div>
    <div class="absolute inset-0 grid-pattern" style="opacity: 0.1;"></div>
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full pointer-events-none"
         style="background: radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.18), transparent 60%);"></div>

    <div class="max-w-4xl mx-auto px-6 text-center relative text-white">
      <div class="flex justify-center mb-6">
        <div class="w-20 h-20 rounded-2xl backdrop-blur border flex items-center justify-center float-bot"
             style="background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.2);">
          <DoraBot :size="56" color="white" eye-color="#1B1464" />
        </div>
      </div>
      <h2 class="display mb-6" style="font-size: clamp(2.5rem, 7vw, 5rem); line-height: 1;">
        别再看了。<br />
        <span style="color:#BFDBFE;">pip install</span> 一下试试。
      </h2>
      <p class="text-lg max-w-xl mx-auto mb-10 leading-relaxed" style="color: rgba(219, 234, 254, 0.9);">
        从这一刻到看到第一个数据流跑起来，比你泡一杯咖啡的时间还短。
      </p>

      <div class="max-w-xl mx-auto rounded-xl overflow-hidden mb-8 backdrop-blur border"
           style="background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2);">
        <div class="flex items-center gap-3 p-4">
          <span class="mono" style="color: #BFDBFE;">$</span>
          <span class="mono text-white flex-1 text-left">pip install dora-rs-cli</span>
          <button @click="copy" class="mono text-xs px-3 py-1.5 rounded transition border"
                  style="color: #BFDBFE; background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2);">
            {{ copied ? '已复制 ✓' : '复制' }}
          </button>
        </div>
      </div>

      <div class="flex flex-wrap items-center justify-center gap-3">
        <a href="/guide/quick-start" class="dora-btn" style="background:white;color:#1D4ED8;font-weight:600;box-shadow:0 20px 40px -12px rgba(0,0,0,0.4);">
          🚀 跑通第一个 Demo
        </a>
        <a href="/guide/concepts" class="dora-btn backdrop-blur"
           style="background:rgba(255,255,255,0.1);color:white;border:1px solid rgba(255,255,255,0.2);">
          浏览完整文档
        </a>
      </div>
    </div>
  </section>
</template>
