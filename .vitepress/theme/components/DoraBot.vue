<script setup lang="ts">
import { withBase } from 'vitepress'

const props = defineProps<{
  size?: number | string
  invert?: boolean
}>()

const logoUrl = withBase('/logo.jpg')
</script>

<template>
  <img
    :src="logoUrl"
    :width="size || 40"
    :height="size || 40"
    alt="Dora 机器人 logo"
    class="dora-bot-img"
    :class="{ 'dora-bot-invert': invert }"
    draggable="false"
  />
</template>

<style scoped>
.dora-bot-img {
  display: block;
  object-fit: contain;
  user-select: none;
}

.dora-bot-invert {
  filter: brightness(0) invert(1);
}
</style>
