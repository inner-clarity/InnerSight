module.exports = {
  locales: {
    '/': {
      lang: 'es-ES',
      title: 'InnerSight',
      description: 'Un espacio para la exploración interior y el autoconocimiento'
    },
    '/en/': {
      lang: 'en-US',
      title: 'InnerSight',
      description: 'A space for inner exploration and self-knowledge'
    }
  },
  
  base: '/InnerSight/',
  dest: 'docs/.vuepress/dist',
  
  themeConfig: {
    locales: {
      '/': {
        nav: [
          { text: 'Inicio', link: '/' },
          { text: 'Acerca de', link: '/about/' },
          { text: 'Contacto', link: '/contact/' },
          { text: 'English', link: '/en/' }
        ],
        
        sidebar: [
          '/',
          '/about/',
          '/contact/',
          '/analisis_psicologico_profundo.html',
          '/Sacerdocio_y_Salud_Mental.html',
          '/comunicado_salud_mental_v2_esp.html'
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
      },
      
      '/en/': {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'About', link: '/en/about/' },
          { text: 'Contact', link: '/en/contact/' },
          { text: 'Español', link: '/' }
        ],
        
        sidebar: [
          '/en/',
          '/en/about/',
          '/en/contact/',
          '/en/analisis_psicologico_profundo.html',
          '/en/Sacerdocio_y_Salud_Mental.html',
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
