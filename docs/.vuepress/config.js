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
          { title: 'Psychological Foundations', path: '/en/analisis_psicologico_apropiado_v2.html' },
          { title: 'Scientific Foundation', path: '/en/scientific_foundation_validation.html' },
          { title: 'Coercive Restrictions', path: '/en/effects_of_coercive_restrictions.html' },
          { title: 'Emotional Blackmail', path: '/en/emotional_blackmail.html' },
          { title: 'Not Sexual Preference', path: '/en/not_sexual_preference.html' },
          { title: 'Priesthood & Mental Health', path: '/en/sacerdocio_salud_mental_apropiado_v3.html' },
          { title: 'Institutional Statement', path: '/en/mental_health_statement_v3_english.html' }
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
          { title: 'Fundamentos Psicológicos', path: '/es/analisis_psicologico_apropiado_v2.html' },
          { title: 'Fundamento Científico', path: '/es/fundamento_cientifico_validacion.html' },
          { title: 'Restricciones Coercitivas', path: '/es/efectos_de_restricciones_coercitiva.html' },
          { title: 'Chantaje Emocional', path: '/es/chantaje_emocional.html' },
          { title: 'No es Preferencia Sexual', path: '/es/no_es_preferencia_sexual.html' },
          { title: 'Sacerdocio y Salud Mental', path: '/es/sacerdocio_salud_mental_apropiado_v3.html' },
          { title: 'Declaración Institucional', path: '/es/comunicado_salud_mental_v3_esp.html' }
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
