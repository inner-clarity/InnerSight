<template>
  <div>
    <!-- Trigger según modo -->
    <div v-if="mode === 'text'" class="trigger-wrapper">
      <button
        v-if="asButton === 'true'"
        @click="openDrawer"
        class="text-trigger"
      >
        {{ triggerText }}
      </button>

      <a
        v-else
        href="#"
        @click.prevent="openDrawer"
        class="text-trigger"
      >
        {{ triggerText }}
      </a>
    </div>

    <div v-else-if="mode === 'image'" class="trigger-wrapper">
      <img
        :src="thumbnail"
        :alt="alt"
        @click="openDrawer"
        class="image-trigger"
        :class="{ 'is-touch': isTouch }"
      />
    </div>

    <div v-else-if="mode === 'image-text'" class="trigger-wrapper image-text-trigger">
      <img
        :src="thumbnail"
        :alt="alt"
        @click="openDrawer"
        class="image-trigger"
        :class="{ 'is-touch': isTouch }"
      />
      <span class="image-text-label">{{ triggerText }}</span>
    </div>

    <!-- Overlay -->
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
      <div class="image-container">
        <img :src="fullImage" :alt="alt" class="full-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideImageDrawer',
  props: {
    fullImage: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: 'Imagen ampliada'
    },
    triggerText: {
      type: String,
      default: 'Ver imagen'
    },
    mode: {
      type: String,
      default: 'text',
      validator: value => ['text', 'image', 'image-text'].includes(value)
    },
    asButton: {
      type: String,
      default: 'true'
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
.trigger-wrapper {
  display: inline-block;
}

.text-trigger {
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
  display: inline-block;
}

.text-trigger:hover {
  background: #0056b3;
}

.image-trigger {
  cursor: pointer;
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  transition: transform 0.2s;
}

.image-trigger:hover,
.image-trigger.is-touch:active {
  transform: scale(1.02);
}

.image-text-trigger {
  text-align: center;
}

.image-text-label {
  display: block;
  margin-top: 6px;
  font-size: 13px;
  color: #555;
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

.image-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.full-image {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
}

@media (min-width: 768px) {
  .side-drawer {
    width: 50%;
  }
}
</style>

