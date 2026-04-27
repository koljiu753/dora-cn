<template>
  <section class="py-20 bg-white border-t" style="border-color: var(--dora-line-2);">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-12 gap-12 items-center">

        <div class="lg:col-span-5">
          <div class="section-eyebrow mb-5">所见即所得</div>
          <h2 class="display text-4xl mb-5">
            一份 YAML <span class="text-ink-4">→</span><br />
            一张<span class="gradient-text-blue">实时运行</span>的数据流图
          </h2>
          <p class="text-ink-2 leading-relaxed mb-6">
            每个节点都是独立进程，节点间通过<strong class="text-ink">共享内存零拷贝</strong>传递数据。
            下面是 YOLO 检测 demo 的实际运行图，<span class="text-brand-deep font-medium">所有连线都在动</span>——这就是 Dora 跑起来的样子。
          </p>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start gap-3">
              <span class="check-icon">✓</span>
              <span class="text-ink-2">节点崩溃<strong class="text-ink">不会拖垮整个系统</strong>——独立进程隔离</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="check-icon">✓</span>
              <span class="text-ink-2">Python 节点<strong class="text-ink">不受 GIL 限制</strong>——天然并发</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="check-icon">✓</span>
              <span class="text-ink-2">同一张图，<strong class="text-ink">单机或跨机器</strong>都能跑</span>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-7">
          <div class="relative">
            <div class="absolute -inset-8 rounded-3xl pointer-events-none"
                 style="background: radial-gradient(circle at 50% 50%, rgba(37,99,235,0.14), transparent 65%);"></div>

            <div class="relative dora-card overflow-hidden"
                 style="box-shadow: 0 20px 60px -20px rgba(37,99,235,0.25);">
              <div class="flex items-center justify-between px-4 py-3 border-b"
                   style="border-color: var(--dora-line-2); background: rgba(243,245,249,0.5);">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full" style="background:#FCA5A5"></span>
                  <span class="w-3 h-3 rounded-full" style="background:#FCD34D"></span>
                  <span class="w-3 h-3 rounded-full" style="background:#86EFAC"></span>
                </div>
                <span class="mono text-xs text-ink-3">yolo.yml · dora graph</span>
                <span class="flex items-center gap-1.5 mono text-xs" style="color:#059669">
                  <span class="w-1.5 h-1.5 rounded-full blink" style="background:#10B981"></span>
                  RUNNING
                </span>
              </div>

              <div class="p-6 bg-white relative dot-pattern">
                <svg viewBox="0 0 400 280" class="w-full h-auto">
                  <defs>
                    <linearGradient id="flow-grad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stop-color="#1B1464" />
                      <stop offset="1" stop-color="#60A5FA" />
                    </linearGradient>
                  </defs>
                  <path d="M 120 60 C 170 60, 180 130, 200 140" stroke="url(#flow-grad)" stroke-width="1.8" fill="none" class="flow-line" stroke-linecap="round" />
                  <path d="M 280 60 C 230 60, 220 130, 200 140" stroke="url(#flow-grad)" stroke-width="1.8" fill="none" class="flow-line" style="animation-delay:-.9s" stroke-linecap="round" />
                  <path d="M 200 180 L 200 220" stroke="url(#flow-grad)" stroke-width="1.8" fill="none" class="flow-line" style="animation-delay:-1.8s" stroke-linecap="round" />
                  <path d="M 120 60 C 100 140, 120 200, 150 230" stroke="#60A5FA" stroke-width="1.4" fill="none" stroke-dasharray="4 5" opacity=".6" />

                  <g transform="translate(55,35)" filter="drop-shadow(0 4px 10px rgba(27,20,100,0.1))">
                    <rect class="df-node" x="0" y="0" width="130" height="50" rx="10" stroke="#1B1464" />
                    <rect x="0" y="0" width="4" height="50" rx="2" fill="#1B1464" />
                    <text x="14" y="18" font-family="Inter" font-size="11" font-weight="600" fill="#0B1020">Camera</text>
                    <text x="14" y="32" font-family="JetBrains Mono" font-size="9" fill="#6B7489">node · python</text>
                    <text x="14" y="44" font-family="JetBrains Mono" font-size="8" fill="#1B1464">→ image 640×480</text>
                    <circle cx="116" cy="14" r="3.5" fill="#10B981" />
                    <circle cx="116" cy="14" r="3.5" fill="#10B981" class="pulse-ring" style="transform-origin:116px 14px" />
                  </g>
                  <g transform="translate(215,35)" filter="drop-shadow(0 4px 10px rgba(14,165,233,0.1))">
                    <rect class="df-node" x="0" y="0" width="140" height="50" rx="10" stroke="#0EA5E9" />
                    <rect x="0" y="0" width="4" height="50" rx="2" fill="#0EA5E9" />
                    <text x="14" y="18" font-family="Inter" font-size="11" font-weight="600" fill="#0B1020">YOLO Detect</text>
                    <text x="14" y="32" font-family="JetBrains Mono" font-size="9" fill="#6B7489">node · gpu</text>
                    <text x="14" y="44" font-family="JetBrains Mono" font-size="8" fill="#0EA5E9">→ bbox tensor</text>
                    <circle cx="126" cy="14" r="3.5" fill="#10B981" />
                    <circle cx="126" cy="14" r="3.5" fill="#10B981" class="pulse-ring" style="transform-origin:126px 14px;animation-delay:-.5s" />
                  </g>
                  <g transform="translate(140,135)">
                    <rect class="df-node" x="0" y="0" width="120" height="40" rx="10" stroke="#94A3B8" stroke-dasharray="3 3" />
                    <text x="60" y="17" font-family="Inter" font-size="10" font-weight="600" fill="#3A4256" text-anchor="middle">merge + sync</text>
                    <text x="60" y="30" font-family="JetBrains Mono" font-size="8" fill="#6B7489" text-anchor="middle">shared memory</text>
                  </g>
                  <g transform="translate(130,215)" filter="drop-shadow(0 4px 10px rgba(37,99,235,0.1))">
                    <rect class="df-node" x="0" y="0" width="140" height="50" rx="10" stroke="#2563EB" />
                    <rect x="0" y="0" width="4" height="50" rx="2" fill="#2563EB" />
                    <text x="14" y="18" font-family="Inter" font-size="11" font-weight="600" fill="#0B1020">Rerun Viz</text>
                    <text x="14" y="32" font-family="JetBrains Mono" font-size="9" fill="#6B7489">node · visualize</text>
                    <text x="14" y="44" font-family="JetBrains Mono" font-size="8" fill="#2563EB">→ 2d+3d overlay</text>
                    <circle cx="126" cy="14" r="3.5" fill="#10B981" />
                  </g>
                </svg>
              </div>

              <div class="px-5 py-3 border-t flex items-center justify-between mono text-xs"
                   style="border-color: var(--dora-line-2); background: rgba(243,245,249,0.5);">
                <span class="text-ink-3">events/s</span>
                <div class="flex items-end gap-[2px] h-5">
                  <span class="bar-tick" style="height:30%"></span>
                  <span class="bar-tick" style="height:60%"></span>
                  <span class="bar-tick" style="height:45%"></span>
                  <span class="bar-tick" style="height:80%"></span>
                  <span class="bar-tick" style="height:55%"></span>
                  <span class="bar-tick" style="height:95%"></span>
                  <span class="bar-tick" style="height:70%"></span>
                  <span class="bar-tick" style="height:50%"></span>
                  <span class="bar-tick" style="height:85%"></span>
                  <span class="bar-tick" style="height:40%"></span>
                </div>
                <span class="text-brand font-medium">49.8 fps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.check-icon {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: var(--dora-brand-6);
  color: var(--dora-brand);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  flex-shrink: 0;
  margin-top: 2px;
}
.bar-tick {
  width: 4px;
  background: var(--dora-brand);
}
</style>
