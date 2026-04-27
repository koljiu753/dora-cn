<template>
  <section id="start" class="py-24 relative overflow-hidden"
           style="background: linear-gradient(to bottom, #fff, rgba(239,246,255,0.3), #fff);">
    <div class="absolute inset-0 grid-pattern"
         style="opacity: 0.4; mask-image: radial-gradient(circle at 50% 30%, black 0%, transparent 70%);"></div>

    <div class="max-w-7xl mx-auto px-6 relative">
      <div class="text-center mb-14 max-w-3xl mx-auto">
        <div class="section-eyebrow mb-5 inline-flex">02 · 快速上手</div>
        <h2 class="display mb-5" style="font-size: clamp(2rem, 5vw, 3rem);">
          从零到跑通 <span class="gradient-text-blue">YOLO 检测</span>，<br />
          只需要三步。
        </h2>
        <p class="text-ink-2 mono text-sm">
          前置条件：Python 3.9+ · Linux/macOS/Windows · 摄像头可选
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-6">
        <!-- step 1 -->
        <div class="dora-card dora-card-hover p-7 relative">
          <div class="flex items-start justify-between mb-5">
            <div>
              <div class="display text-6xl gradient-text-blue mb-1">01</div>
              <div class="text-xs mono text-ink-4">STEP · 30 秒</div>
            </div>
            <div class="w-11 h-11 rounded-full bg-brand-6 flex items-center justify-center">
              <svg class="w-5 h-5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
              </svg>
            </div>
          </div>
          <h3 class="text-lg font-bold mb-2">装 CLI</h3>
          <p class="text-sm text-ink-2 leading-relaxed mb-5">一行 pip 搞定，不动现有环境。</p>
          <pre class="mono text-xs rounded-lg p-4 overflow-x-auto" style="background:#0F172A;color:#E5E7EB"><code><span style="color:#6B7280">$</span> <span style="color:#38BDF8">pip</span> install dora-rs-cli
<span style="color:#6B7280">$</span> dora -h</code></pre>
          <div class="mt-4 flex items-center gap-2 text-xs" style="color:#059669">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            看到 <code class="mono px-1.5 py-0.5 rounded" style="background:#ECFDF5">dora-rs cli client</code> 即成功
          </div>
        </div>

        <!-- step 2 -->
        <div class="dora-card dora-card-hover p-7 relative">
          <div class="flex items-start justify-between mb-5">
            <div>
              <div class="display text-6xl gradient-text-blue mb-1">02</div>
              <div class="text-xs mono text-ink-4">STEP · 2 分钟</div>
            </div>
            <div class="w-11 h-11 rounded-full bg-brand-6 flex items-center justify-center">
              <svg class="w-5 h-5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
              </svg>
            </div>
          </div>
          <h3 class="text-lg font-bold mb-2">写 YAML</h3>
          <p class="text-sm text-ink-2 leading-relaxed mb-5">一份蓝图，声明谁接谁。</p>
          <pre class="mono text-[11px] rounded-lg p-4 overflow-x-auto leading-relaxed" style="background:#0F172A;color:#E5E7EB"><code><span style="color:#FB7185">nodes:</span>
<span style="color:#FB7185">  - id:</span> <span style="color:#7DD3FC">camera</span>
<span style="color:#FB7185">    build:</span> <span style="color:#86EFAC">pip install opencv-video-capture</span>
<span style="color:#FB7185">    path:</span> <span style="color:#86EFAC">opencv-video-capture</span>
<span style="color:#FB7185">    outputs:</span> [<span style="color:#86EFAC">image</span>]

<span style="color:#FB7185">  - id:</span> <span style="color:#7DD3FC">yolo</span>
<span style="color:#FB7185">    build:</span> <span style="color:#86EFAC">pip install dora-yolo</span>
<span style="color:#FB7185">    path:</span> <span style="color:#86EFAC">dora-yolo</span>
<span style="color:#FB7185">    inputs:</span>
<span style="color:#FB7185">      image:</span> <span style="color:#7DD3FC">camera/image</span></code></pre>
        </div>

        <!-- step 3 -->
        <div class="dora-card dora-card-hover p-7 relative">
          <div class="flex items-start justify-between mb-5">
            <div>
              <div class="display text-6xl gradient-text-blue mb-1">03</div>
              <div class="text-xs mono text-ink-4">STEP · 3 分钟</div>
            </div>
            <div class="w-11 h-11 rounded-full bg-brand-6 flex items-center justify-center">
              <svg class="w-5 h-5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
          <h3 class="text-lg font-bold mb-2">跑起来</h3>
          <p class="text-sm text-ink-2 leading-relaxed mb-5">一条命令，自动构建并启动所有节点。</p>
          <pre class="mono text-xs rounded-lg p-4 overflow-x-auto" style="background:#0F172A;color:#E5E7EB"><code><span style="color:#6B7280">$</span> <span style="color:#38BDF8">dora</span> build yolo.yml
<span style="color:#6B7280">$</span> <span style="color:#38BDF8">dora</span> run yolo.yml

<span style="color:#34D399">[✓]</span> camera <span style="color:#6B7280">ready</span>
<span style="color:#34D399">[✓]</span> yolo   <span style="color:#6B7280">ready</span>
<span style="color:#38BDF8">→ streaming @ 49.8 fps</span></code></pre>
        </div>
      </div>

      <div class="mt-10 flex flex-wrap items-center justify-between gap-4 p-5 dora-card max-w-4xl mx-auto">
        <div class="flex items-center gap-3">
          <span class="chip chip-brand">💡 Tip</span>
          <span class="text-sm text-ink-2">没摄像头？把 <code class="mono text-xs px-1.5 py-0.5 rounded" style="background:var(--dora-bg-alt);color:var(--dora-brand)">camera</code> 换成 <code class="mono text-xs px-1.5 py-0.5 rounded" style="background:var(--dora-bg-alt);color:var(--dora-brand)">mock-video</code> 节点，照样跑。</span>
        </div>
        <a href="/guide/quick-start" class="text-sm font-medium text-brand hover:text-brand-2 flex items-center gap-1.5">
          查看完整新手教程
          <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
