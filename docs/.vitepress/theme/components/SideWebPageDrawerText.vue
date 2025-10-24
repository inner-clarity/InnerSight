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

      <div v-if="external" class="iframe-container">
        <iframe
          v-if="pageUrl"
          :src="pageUrl"
          frameborder="0"
          allowfullscreen
          sandbox="allow-scripts allow-same-origin"
          class="full-iframe"
          :title="triggerText"
        ></iframe>
        <div v-else class="no-url">
          URL no especificada.
        </div>
      </div>

      <div v-else class="iframe-container">
        <iframe
          v-if="pageUrl"
          :src="pageUrl"
          frameborder="0"
          allowfullscreen
          sandbox="allow-scripts allow-same-origin"
          class="full-iframe"
          :title="triggerText"
        ></iframe>
        <div v-else class="no-url">
          URL no especificada.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideWebPageDrawerText',
  props: {
    pageUrl: {
      type: String,
      default: null
    },
    triggerText: {
      type: String,
      default: 'Ver contenido'
    },
    external: {
      type: Boolean,
      default: false
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
  beforeUnmount() {
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
.inline-component {
  display: inline-block;
  vertical-align: top;
  line-height: inherit;
  text-decoration: none;
}

.text-link {
  color: #3eaf7c;
  text-decoration: underline;
  cursor: pointer;
  font-size: 16px;
  vertical-align: baseline;
  text-decoration: none;
}

.text-link:hover {
  color: #0056b3;
}

.side-drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9998;
}

.side-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 90%;
  height: 100%;
  max-width: 800px;
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

.iframe-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 4px;
  background: #f8f9fa;
}

.full-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.no-url {
  color: #666;
  text-align: center;
  font-size: 14px;
  padding: 20px;
}

@media (min-width: 768px) {
  .side-drawer {
    width: 60%;
  }
}
</style>

