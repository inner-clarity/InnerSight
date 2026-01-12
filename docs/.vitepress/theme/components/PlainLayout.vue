<template>
  <div class="plain-layout">
    <Content />
  </div>
</template>

<script setup>
import { Content } from 'vitepress'
</script>

<style scoped>
.plain-layout {
  max-width: 780px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  font-family: var(--vp-font-family-base);
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
}
</style>