<script setup lang="ts">
import { ref, computed } from 'vue'
import examples from '../data/examples.json'

const activeTab = ref('all')
const tabs = [
  { key: 'all', label: '全部', emoji: '' },
  { key: 'vision', label: '视觉', emoji: '🎥' },
  { key: 'embodied', label: '具身智能', emoji: '🤖' },
  { key: 'llm', label: '语音 · LLM', emoji: '🎙️' },
  { key: 'slam', label: 'SLAM · 导航', emoji: '🚗' },
  { key: 'hardware', label: '硬件驱动', emoji: '⚙️' }
]

const filtered = computed(() => {
  if (activeTab.value === 'all') return examples
  return examples.filter((e) => e.category === activeTab.value)
})

const tabCount = (key: string) =>
  key === 'all' ? examples.length : examples.filter((e) => e.category === key).length

const levelChip = (level: string) => {
  if (level === 'beginner') return { label: '入门', cls: 'chip-green' }
  if (level === 'intermediate') return { label: '进阶', cls: '', style: 'background:#EFF6FF;color:#1D4ED8;border-color:#BFDBFE;' }
  return { label: '硬核', cls: '', style: 'background:#FEF3F2;color:#B91C1C;border-color:#FECACA;' }
}
</script>

<template>
  <section id="examples" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-12 max-w-3xl mx-auto">
        <div class="section-eyebrow mb-5 inline-flex">03 · 示例库</div>
        <h2 class="display mb-5" style="font-size: clamp(2rem, 5vw, 3rem);">
          不是文档，是<span class="gradient-text-blue">能跑的 demo</span>。
        </h2>
        <p class="text-ink-2 leading-relaxed">
          每个示例都是完整的 Git 仓库 + YAML，<strong class="text-ink">clone 即用</strong>。
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-2 mb-10 p-1 border rounded-xl w-fit mx-auto"
           style="background: var(--dora-bg-alt); border-color: var(--dora-line-2);">
        <button v-for="tab in tabs" :key="tab.key"
                @click="activeTab = tab.key"
                class="tab" :class="{ active: activeTab === tab.key }">
          <span v-if="tab.emoji">{{ tab.emoji }} </span>{{ tab.label }} · {{ tabCount(tab.key) }}
        </button>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a v-for="ex in filtered" :key="ex.id" :href="ex.link" class="dora-card dora-card-hover overflow-hidden group">
          <div class="aspect-[16/10] relative overflow-hidden border-b dot-pattern"
               :class="`gfx-${ex.graphTheme}`"
               style="border-color: var(--dora-line-2);">
            <!-- 简化的迷你流程图（每张卡都用同一种） -->
            <svg viewBox="0 0 200 120" class="absolute inset-0 w-full h-full p-3">
              <rect x="15" y="20" width="50" height="24" rx="5" fill="white" stroke="#1B1464" stroke-width="1.5"/>
              <rect x="130" y="20" width="50" height="24" rx="5" fill="white" stroke="#0EA5E9" stroke-width="1.5"/>
              <rect x="75" y="75" width="50" height="24" rx="5" fill="white" stroke="#60A5FA" stroke-width="1.5"/>
              <path d="M 65 32 L 130 32" stroke="#1B1464" stroke-width="1.5" class="flow-line"/>
              <path d="M 40 44 C 40 65, 75 80, 90 82" stroke="#60A5FA" stroke-width="1.5" class="flow-line" style="animation-delay:-1s"/>
              <path d="M 155 44 C 155 65, 120 80, 110 82" stroke="#0EA5E9" stroke-width="1.5" class="flow-line" style="animation-delay:-2s"/>
              <circle cx="40" cy="32" r="3" fill="#10B981"/>
              <circle cx="155" cy="32" r="3" fill="#10B981"/>
              <circle cx="100" cy="87" r="3" fill="#10B981"/>
            </svg>
            <span class="absolute top-3 right-3 chip" :class="levelChip(ex.level).cls"
                  :style="levelChip(ex.level).style">
              {{ levelChip(ex.level).label }}
            </span>
            <span v-if="ex.isNew" class="absolute top-3 left-3 chip chip-brand">NEW</span>
          </div>
          <div class="p-5">
            <div class="flex items-center gap-2 mb-2 mono text-[11px] text-ink-4 flex-wrap">
              <template v-for="(t, i) in ex.tags" :key="i">
                <span>{{ t }}</span>
                <span v-if="i < ex.tags.length - 1">·</span>
              </template>
            </div>
            <h3 class="text-base font-bold mb-2 group-hover:text-brand transition">{{ ex.title }}</h3>
            <p class="text-sm text-ink-2 leading-relaxed">{{ ex.description }}</p>
            <div class="mt-4 flex items-center justify-between text-xs text-ink-4">
              <span>⏱ {{ ex.duration }}</span>
              <span class="text-brand group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </a>
      </div>

      <div class="mt-10 text-center">
        <a href="/examples/" class="dora-btn dora-btn-secondary">浏览全部 {{ examples.length }} 个示例 <span>→</span></a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gfx-blue   { background: linear-gradient(135deg, #EFF6FF, #fff, #F0F9FF); }
.gfx-sky    { background: linear-gradient(135deg, #F0F9FF, #fff, #EFF6FF); }
.gfx-indigo { background: linear-gradient(135deg, #EEF2FF, #fff, #EFF6FF); }
.gfx-cyan   { background: linear-gradient(135deg, #ECFEFF, #fff, #EFF6FF); }
</style>
