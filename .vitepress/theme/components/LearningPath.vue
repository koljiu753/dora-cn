<script setup lang="ts">
const steps = [
  {
    num: '01',
    period: 'DAY 1',
    title: '理解心智',
    points: ['Dora 到底是什么', '数据流 / 节点 / 算子', 'Arrow 零拷贝原理'],
    duration: '⏱ 30 min',
    state: 'done'
  },
  {
    num: '02',
    period: 'DAY 1',
    title: '跑第一个 Demo',
    points: ['pip install + CLI', 'dora run yolo.yml', '看到检测画面'],
    duration: '⏱ 5 min',
    state: 'current'
  },
  {
    num: '03',
    period: 'WEEK 1',
    title: '写自己的节点',
    points: ['Python API 绑定', 'send_output / next', '改造现有示例'],
    duration: '⏱ 2 hr',
    state: 'todo'
  },
  {
    num: '04',
    period: 'WEEK 2',
    title: '搞懂运行时',
    points: ['Daemon 做了啥', 'Coordinator 做了啥', 'CLI 全家桶'],
    duration: '⏱ 3 hr',
    state: 'todo'
  },
  {
    num: '05',
    period: 'MONTH 1',
    title: '落地到机器人',
    points: ['多机分布式部署', '硬件时序与同步', '写一个 Rust 快节点'],
    duration: '⏱ 1 week',
    state: 'todo'
  }
]
</script>

<template>
  <section id="path" class="py-24 relative overflow-hidden"
           style="background: linear-gradient(to bottom, rgba(239,246,255,0.3), #fff, rgba(239,246,255,0.3));">
    <div class="max-w-7xl mx-auto px-6 relative">
      <div class="text-center mb-14 max-w-3xl mx-auto">
        <div class="section-eyebrow mb-5 inline-flex">04 · 学习路径</div>
        <h2 class="display mb-5" style="font-size: clamp(2rem, 5vw, 3rem);">
          一张图，<br />
          从<span class="gradient-text-blue">小白到开发者</span>。
        </h2>
        <p class="text-ink-2 leading-relaxed">
          按这条路径走，你不会迷路。每一站都对应社区维护的中文教程。
        </p>
      </div>

      <div class="relative">
        <div class="hidden lg:block absolute h-px"
             style="top: 3.2rem; left: 4%; right: 4%; background: linear-gradient(to right, transparent, #BFDBFE, #60A5FA, #BFDBFE, transparent);"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 relative">
          <div v-for="step in steps" :key="step.num" class="dora-card dora-card-hover p-6 relative">
            <div class="absolute -top-3 left-5 px-2 py-0.5 bg-white border mono text-[10px] text-brand rounded-full font-medium"
                 style="border-color: var(--dora-line);">
              {{ step.period }}
            </div>
            <div class="flex items-center justify-between mb-5">
              <span class="display text-4xl gradient-text-blue">{{ step.num }}</span>
              <div v-if="step.state === 'done'"
                   class="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white text-xs font-bold">✓</div>
              <div v-else-if="step.state === 'current'"
                   class="w-8 h-8 rounded-full bg-brand-6 border-2 border-brand flex items-center justify-center text-brand text-xs font-bold">{{ step.num }}</div>
              <div v-else
                   class="w-8 h-8 rounded-full border-2 flex items-center justify-center text-ink-4 text-xs font-bold"
                   style="background: var(--dora-bg-alt); border-color: var(--dora-line);">{{ step.num }}</div>
            </div>
            <h3 class="font-bold mb-2">{{ step.title }}</h3>
            <ul class="text-xs text-ink-2 space-y-1.5 leading-relaxed">
              <li v-for="(p, i) in step.points" :key="i" class="flex items-start gap-1.5">
                <span class="text-brand mt-0.5">·</span><span>{{ p }}</span>
              </li>
            </ul>
            <div class="mt-4 mono text-[10px] text-ink-4">{{ step.duration }}</div>
          </div>
        </div>
      </div>

      <div class="mt-12 grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        <a href="/guide/quick-start" class="dora-card dora-card-hover p-6 flex items-center justify-between group">
          <div>
            <div class="mono text-xs text-brand mb-1">→ 完全没编程基础？</div>
            <div class="text-lg font-bold mb-1">零基础入门手册</div>
            <div class="text-sm text-ink-3">从「Python 是什么」开始的超详细版本</div>
          </div>
          <svg class="w-6 h-6 text-ink-4 group-hover:text-brand group-hover:translate-x-1 transition-all" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </a>
        <a href="/guide/ros-migration" class="dora-card dora-card-hover p-6 flex items-center justify-between group">
          <div>
            <div class="mono text-xs text-brand mb-1">→ 有 ROS 基础？</div>
            <div class="text-lg font-bold mb-1">ROS 工程师迁移指南</div>
            <div class="text-sm text-ink-3">概念对照表 + 常见坑 + 工程习惯差异</div>
          </div>
          <svg class="w-6 h-6 text-ink-4 group-hover:text-brand group-hover:translate-x-1 transition-all" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
