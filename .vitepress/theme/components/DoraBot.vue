<script setup lang="ts">
defineProps<{
  size?: number | string
  color?: string
  eyeColor?: string
}>()
</script>

<template>
  <svg
    :width="size || 40"
    :height="size || 40"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Dora 机器人 logo"
  >
    <!-- 头部主体（半圆 / 椭圆头） -->
    <path
      d="M14 28 C14 16, 22 11, 32 11 C42 11, 50 16, 50 28 L50 32 L14 32 Z"
      :fill="color || '#1B1464'"
    />
    <!-- 左耳/天线点 -->
    <circle cx="11" cy="14" r="3" :fill="color || '#1B1464'" />
    <!-- 右耳/天线点 -->
    <circle cx="53" cy="14" r="3" :fill="color || '#1B1464'" />
    <!-- 左眼 -->
    <circle cx="25" cy="22" r="4.5" :fill="eyeColor || '#FFFFFF'" />
    <!-- 右眼 -->
    <circle cx="39" cy="22" r="4.5" :fill="eyeColor || '#FFFFFF'" />
    <!-- 身体（梯形） -->
    <path
      d="M22 36 L42 36 L40 50 L24 50 Z"
      :fill="color || '#1B1464'"
    />
    <!-- 左手 -->
    <circle cx="14" cy="42" r="3.5" :fill="color || '#1B1464'" />
    <!-- 右手 -->
    <circle cx="50" cy="42" r="3.5" :fill="color || '#1B1464'" />
    <!-- 左脚 -->
    <circle cx="26" cy="56" r="3.5" :fill="color || '#1B1464'" />
    <!-- 右脚 -->
    <circle cx="38" cy="56" r="3.5" :fill="color || '#1B1464'" />
  </svg>
</template>
