module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'InnerSight',
      description: 'A space for inner exploration and self-knowledge'
    },
    '/es/': {
      lang: 'es-ES',
      title: 'InnerSight',
      description: 'Un espacio para la exploración interior y el autoconocimiento'
    }
  },
  
  base: '/InnerSight/',
  dest: 'docs/.vuepress/dist',
  
  themeConfig: {
    locales: {
      '/': {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '/about/' },
          { text: 'Contact', link: '/contact/' },
          { text: 'Español', link: '/es/' }
        ],
        
        sidebar: [
          '/',
          '/about/',
          '/contact/',
          '/en/analisis_psicologico_apropiado_v2.html',
          '/en/sacerdocio_salud_mental_apropiado.html',
          '/en/mental_health_statement_english.html'
        ],

        lastUpdated: 'Last Updated',
        
        // Configuración del repositorio
        repo: 'inner-clarity/InnerSight',
        repoLabel: 'GitHub',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        
        // Configuración de idioma
        selectText: 'Languages',
        label: 'English'
      },
      
      '/es/': {
        nav: [
          { text: 'Inicio', link: '/es/' },
          { text: 'Acerca de', link: '/es/about/' },
          { text: 'Contacto', link: '/es/contact/' },
          { text: 'English', link: '/' }
        ],
        
        sidebar: [
          '/es/',
          '/es/about/',
          '/es/contact/',
          '/es/analisis_psicologico_apropiado_v2.html',
          '/es/sacerdocio_salud_mental_apropiado.html',
          '/es/comunicado_salud_mental_v2_esp.html'
        ],

        lastUpdated: 'Última actualización',
        
        // Configuración del repositorio
        repo: 'inner-clarity/InnerSight',
        repoLabel: 'GitHub',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Editar esta página en GitHub',
        
        // Configuración de idioma
        selectText: 'Idiomas',
        label: 'Español'
      }
    }
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
