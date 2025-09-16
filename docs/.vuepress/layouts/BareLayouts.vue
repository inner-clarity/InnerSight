<template>
  <div class="bare-layout">
    <!-- Solo el contenido de la página -->
    <Content />
  </div>
</template>

<script>
export default {
  name: 'BareLayouts'
}
</script>

<style scoped>
.bare-layout {
  margin: 0;
  padding: 0;
  background: white;
  min-height: 100vh;
}

/* Estilo del contenido */
.Content {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
  font-size: 16px;
  color: #333;
}
</style>