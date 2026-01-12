<!-- docs/.vitepress/theme/Layout.vue -->
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'

const route = useRoute()

// Lista de rutas relativas que deben mostrarse sin sidebar ni navbar
const FULL_PAGE_RELATIVE_PATHS = [
  'es/personal-note/README.md'
]

const isFullPage = FULL_PAGE_RELATIVE_PATHS.some(path => 
  route.data?.relativePath === path
)
</script>

<template>
  <!-- Modo aislado: solo contenido centrado -->
  <div v-if="isFullPage" class="full-page-layout">
    <div class="full-page-content">
      <Content />
    </div>
  </div>

  <!-- Modo normal: layout completo con sidebar y navbar -->
  <DefaultTheme.Layout v-else />
</template>

<style scoped>
.full-page-layout {
  background: var(--vp-c-bg);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.full-page-content {
  max-width: 780px;
  width: 100%;
  padding: 0 1.5rem;
  font-family: var(--vp-font-family-base);
  color: var(--vp-c-text-1);
  line-height: 1.7;
}
</style>