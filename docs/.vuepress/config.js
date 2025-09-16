module.exports = {
  title: 'InnerSight',
  description: 'Un espacio para la exploración interior y el autoconocimiento',
  base: '/InnerSight/',
  dest: 'docs/.vuepress/dist',
  
  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Acerca de', link: '/about/' },
      { text: 'Contacto', link: '/contact/' }
      
    ],
    
    sidebar: [
      '/',
      '/about/',
      '/contact/',
      '/Mi_vida',
      '/Lo_que_esta_pasando',
      '/analisis_psicologico_profundo',
      '/Sacerdocio_y_Salud_Mental',
      '/carta'      
    ],

    //'/chat',
    //'/Lo_Que_No_Es'

    lastUpdated: 'Última actualización',
    
    // Configuración del repositorio
    repo: 'AlejandroParada/InnerSight',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Editar esta página en GitHub'
  },
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#1a365d' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#1a365d' }]
  ],
  
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom'
  ],

   extends: {
    layouts: {
      BareLayout: () => import('./layouts/BareLayout.vue')
    }
  }
}
