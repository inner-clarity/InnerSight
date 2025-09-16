<template>
  <div class="inline-component">
    <a href="#" @click.prevent="openDrawer" class="text-link">
      {{ triggerText }}
    </a>

    <!-- Overlay oscuro -->
    <div
      v-if="isOpen"
      class="side-drawer-overlay"
      @click="closeDrawer"
    ></div>

    <!-- Panel lateral -->
    <div
      v-if="isOpen"
      class="side-drawer"
      :class="{ 'slide-in': isOpen }"
    >
      <button class="close-btn" @click="closeDrawer">×</button>
      <div class="video-container">
        <video
          v-if="videoSrc"
          :src="videoSrc"
          controls
          autoplay
          playsinline
          class="full-video"
          preload="metadata"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideVideoDrawerText',
  props: {
    videoSrc: {
      type: String,
      required: true
    },
    triggerText: {
      type: String,
      default: 'Ver video'
    }
  },
  data() {
    return {
      isOpen: false,
      isTouch: false
    }
  },
  mounted() {
    this.isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  },
  methods: {
    openDrawer() {
      this.isOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeDrawer() {
      this.isOpen = false
      document.body.style.overflow = ''
    }
  },
  beforeDestroy() {
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
/* Contenedor principal - clave para evitar saltos de línea y alinear bien */
.inline-component {
  display: inline-block;
  vertical-align: top;
  line-height: inherit;
}

/* Estilo del enlace de texto */
.text-link {
  color: #3eaf7c;
  text-decoration: underline;
  cursor: pointer;
  font-size: 16.3px;
  vertical-align: baseline;
  text-decoration: none;
}

.text-link:hover {
  color: #0056b3;
}

/* Overlay oscuro */
.side-drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9998;
}

/* Panel lateral */
.side-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 90%;
  height: 100%;
  max-width: 600px;
  background: white;
  z-index: 9999;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slide-in {
  transform: translateX(0);
}

/* Botón de cerrar */
.close-btn {
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #555;
  padding: 0;
  margin: 0 0 1rem auto;
}

.close-btn:hover {
  color: #000;
}

/* Contenedor del video */
.video-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.full-video {
  max-width: 120%;
  max-height: 100vh;
  object-fit: contain;
  border-radius: 4px;
}

/* Responsive: en pantallas grandes, el panel es más angosto */
@media (min-width: 768px) {
  .side-drawer {
    width: 50%;
  }
}
</style>