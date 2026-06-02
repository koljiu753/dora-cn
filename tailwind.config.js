export default {
  content: [
    './docs/**/*.{md,vue}',
    './.vitepress/**/*.{ts,vue}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      }
    }
  }
}
