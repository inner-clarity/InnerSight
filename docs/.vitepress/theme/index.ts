import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import type { Theme } from 'vitepress'

// Importar componentes personalizados
import ContenidoActualEn from './components/ContenidoActualEn.vue'
import SideImageDrawer from './components/SideImageDrawer.vue'
import SideImageDrawerText from './components/SideImageDrawerText.vue'
import SideVideoDrawerText from './components/SideVideoDrawerText.vue'
import SideWebPageDrawerText from './components/SideWebPageDrawerText.vue'

// Importar estilos personalizados si los hay
import './style.css'

const theme: Theme = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // Puedes personalizar slots aquí si necesitas
    })
  },
  enhanceApp({ app }) {
    // Registrar componentes globalmente
    app.component('ContenidoActualEn', ContenidoActualEn)
    app.component('SideImageDrawer', SideImageDrawer)
    app.component('SideImageDrawerText', SideImageDrawerText)
    app.component('SideVideoDrawerText', SideVideoDrawerText)
    app.component('SideWebPageDrawerText', SideWebPageDrawerText)
  }
}

export default theme

