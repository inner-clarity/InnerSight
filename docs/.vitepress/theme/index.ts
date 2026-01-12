// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  ...DefaultTheme
  // VitePress detectará automáticamente Layout.vue
  // y lo usará como layout raíz.
}