<template>
  <section id="concept" class="py-24"
           style="background: linear-gradient(to bottom, #fff, rgba(239,246,255,0.2), #fff);">
    <div class="max-w-7xl mx-auto px-6">

      <div class="text-center mb-16 max-w-3xl mx-auto">
        <div class="section-eyebrow mb-5 inline-flex">01 · 核心心智模型</div>
        <h2 class="display text-4xl mb-5" style="font-size: clamp(2rem, 5vw, 3rem);">
          把机器人拆成<span class="gradient-text-blue">一堆小盒子</span>，<br />
          然后画一张图。
        </h2>
        <p class="text-ink-2 leading-relaxed">
          每个能力都是独立节点，你用 YAML 声明谁给谁传数据——剩下的交给 Dora 运行时。
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div class="dora-card dora-card-hover p-7 relative">
          <div class="flex items-center justify-between mb-6">
            <div class="w-12 h-12 rounded-xl bg-brand-6 flex items-center justify-center">
              <svg class="w-6 h-6 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <circle cx="7" cy="15" r="1" fill="currentColor" />
              </svg>
            </div>
            <span class="mono text-xs text-ink-4">CONCEPT · 01</span>
          </div>
          <h3 class="display text-2xl mb-3">节点 <span class="text-ink-4 font-medium text-lg">Node</span></h3>
          <p class="text-ink-2 leading-relaxed mb-5 text-sm">
            一个独立进程，负责做一件事。崩溃不影响别人，可以用任何主流语言编写。
          </p>
          <pre class="mono text-xs border rounded-lg p-3 overflow-x-auto"
               style="background: var(--dora-bg-alt); border-color: var(--dora-line-2);"><code><span class="tk-k">- id:</span> <span class="tk-v">camera</span>
<span class="tk-k">  path:</span> <span class="tk-s">opencv-capture</span>
<span class="tk-k">  outputs:</span>
<span class="tk-k">    -</span> <span class="tk-s">image</span></code></pre>
        </div>

        <div class="dora-card dora-card-hover p-7 relative">
          <div class="flex items-center justify-between mb-6">
            <div class="w-12 h-12 rounded-xl bg-brand-6 flex items-center justify-center">
              <svg class="w-6 h-6 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="6" cy="6" r="2.5" />
                <circle cx="18" cy="6" r="2.5" />
                <circle cx="12" cy="18" r="2.5" />
                <path d="M8 7 L11 16 M16 7 L13 16" stroke-linecap="round" />
              </svg>
            </div>
            <span class="mono text-xs text-ink-4">CONCEPT · 02</span>
          </div>
          <h3 class="display text-2xl mb-3">数据流 <span class="text-ink-4 font-medium text-lg">Dataflow</span></h3>
          <p class="text-ink-2 leading-relaxed mb-5 text-sm">
            节点连接成的<strong class="text-ink">有向图</strong>，写在一份 YAML 里——你整个机器人应用的蓝图。
          </p>
          <pre class="mono text-xs border rounded-lg p-3 overflow-x-auto"
               style="background: var(--dora-bg-alt); border-color: var(--dora-line-2);"><code><span class="tk-k">- id:</span> <span class="tk-v">detector</span>
<span class="tk-k">  inputs:</span>
<span class="tk-k">    image:</span> <span class="tk-v">camera/image</span>
<span class="tk-c">  # 这条线即数据流</span></code></pre>
        </div>

        <div class="dora-card dora-card-hover p-7 relative">
          <div class="flex items-center justify-between mb-6">
            <div class="w-12 h-12 rounded-xl bg-brand-6 flex items-center justify-center">
              <svg class="w-6 h-6 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4l16 0 0 16 -16 0z" stroke-linejoin="round" />
                <path d="M7 9 l3 3 -3 3" stroke-linecap="round" stroke-linejoin="round" />
                <line x1="13" y1="15" x2="17" y2="15" stroke-linecap="round" />
              </svg>
            </div>
            <span class="mono text-xs text-ink-4">CONCEPT · 03</span>
          </div>
          <h3 class="display text-2xl mb-3">运行时 <span class="text-ink-4 font-medium text-lg">Runtime</span></h3>
          <p class="text-ink-2 leading-relaxed mb-5 text-sm">
            守护进程 + 协调器。前者管单机，后者管跨机部署。你只面对一个 CLI。
          </p>
          <pre class="mono text-xs border rounded-lg p-3 overflow-x-auto"
               style="background: var(--dora-bg-alt); border-color: var(--dora-line-2);"><code><span class="tk-c">$ dora up</span>
<span class="tk-c">$ dora run yolo.yml</span>
<span class="tk-v">  ✓ 4 nodes started</span>
<span class="tk-v">  ✓ shm ready</span></code></pre>
        </div>
      </div>
    </div>
  </section>
</template>
