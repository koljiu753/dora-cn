<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import HomePage from './components/HomePage.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <HomePage v-if="frontmatter.layout === 'home-custom'" />
  <Layout v-else />
</template>
