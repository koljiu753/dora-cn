<script setup lang="ts">
import faqs from '../data/faq.json'

// 简单的 markdown 转换：**xxx** -> <strong>xxx</strong>
function renderMd(text: string) {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong class="text-ink">$1</strong>')
}
</script>

<template>
  <section id="faq" class="py-24"
           style="background: linear-gradient(to bottom, #fff, rgba(239,246,255,0.3), #fff);">
    <div class="max-w-5xl mx-auto px-6">
      <div class="text-center mb-12 max-w-3xl mx-auto">
        <div class="section-eyebrow mb-5 inline-flex">06 · 常见疑问</div>
        <h2 class="display mb-4" style="font-size: clamp(2rem, 5vw, 3rem);">
          问得最多的<span class="gradient-text-blue">几个问题</span>
        </h2>
        <p class="text-ink-2 leading-relaxed">
          找不到答案？<a href="https://github.com/orgs/dora-rs/discussions" target="_blank" rel="noopener"
                       class="text-brand font-medium ulink">在 GitHub Discussions 问一下</a>，或者加群直接问。
        </p>
      </div>

      <div class="dora-card overflow-hidden divide-y" style="--tw-divide-opacity:1; border-color: var(--dora-line-2);">
        <details v-for="(item, i) in faqs" :key="i" class="group faq-row">
          <summary class="p-5 flex items-center justify-between hover:bg-gray-50 transition">
            <span class="font-semibold pr-6">{{ item.q }}</span>
            <span class="w-8 h-8 rounded-full bg-brand-6 text-brand flex items-center justify-center group-open:rotate-45 transition-transform shrink-0">+</span>
          </summary>
          <div class="px-5 pb-5 text-sm text-ink-2 leading-relaxed" v-html="renderMd(item.a)"></div>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-row {
  border-bottom: 1px solid var(--dora-line-2);
}
.faq-row:last-child { border-bottom: 0; }
</style>
