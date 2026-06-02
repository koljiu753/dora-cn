<script setup lang="ts">
const programs = [
  {
    label: '新手学习',
    title: '从第一条数据流开始',
    text: '把 Dora 拆成安装、概念、示例、写节点四站。每一站都有中文材料和可复制命令。',
    link: '/guide/quick-start',
    linkText: '进入入门路径'
  },
  {
    label: '内容共建',
    title: '教程、案例、踩坑都值得被看见',
    text: '社区会收录文章、视频、Demo 和迁移经验。你不需要写成论文，一次真实复现就能帮到后来者。',
    link: '/community#contribute',
    linkText: '查看投稿方式'
  },
  {
    label: '问题互助',
    title: '把问题带到可以解决的地方',
    text: '中文社群负责降低沟通门槛，GitHub Discussions 负责沉淀技术答案，Discord 连接上游开发者。',
    link: '/community',
    linkText: '加入交流'
  }
]

const lanes = [
  '每月整理新手问题',
  '维护中文示例索引',
  '翻译上游核心文档',
  '发布社区项目进展',
  '组织线上分享和共学'
]
</script>

<template>
  <section id="ecosystem" class="py-24 bg-white border-t" style="border-color: var(--dora-line-2);">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-12 gap-10 items-start">
        <div class="lg:col-span-5">
          <div class="section-eyebrow mb-5 inline-flex">05 · 社区生态</div>
          <h2 class="display mb-5" style="font-size: clamp(2rem, 5vw, 3rem);">
            这不只是一个站点，<br />
            也是 Dora 中文社区的<span class="gradient-text-blue">入口大厅</span>。
          </h2>
          <p class="text-ink-2 leading-relaxed mb-8">
            参考成熟开源社区的组织方式，首页应该让新人知道怎么开始，让贡献者知道哪里参与，让外部伙伴感到这个社区在持续维护。
          </p>

          <div class="dora-card p-6">
            <div class="mono text-xs text-brand mb-4">COMMUNITY OPERATING LANES</div>
            <div class="grid sm:grid-cols-2 gap-3">
              <div v-for="lane in lanes" :key="lane" class="flex items-center gap-2 text-sm text-ink-2">
                <span class="w-2 h-2 rounded-full bg-brand shrink-0"></span>
                <span>{{ lane }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 grid md:grid-cols-3 gap-5">
          <a v-for="program in programs"
             :key="program.title"
             :href="program.link"
             class="dora-card dora-card-hover p-6 flex flex-col min-h-[280px]">
            <div class="mono text-xs text-brand mb-4">{{ program.label }}</div>
            <h3 class="text-xl font-bold text-ink leading-snug mb-3">{{ program.title }}</h3>
            <p class="text-sm text-ink-2 leading-relaxed flex-1">{{ program.text }}</p>
            <div class="mt-6 text-sm font-semibold text-brand flex items-center gap-1">
              <span>{{ program.linkText }}</span>
              <span>→</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
