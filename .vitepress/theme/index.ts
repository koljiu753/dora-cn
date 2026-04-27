import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import HomeLayout from './HomeLayout.vue'

import './styles/index.css'
import './styles/vars.css'

export default {
  extends: DefaultTheme,
  Layout: HomeLayout,
} satisfies Theme
