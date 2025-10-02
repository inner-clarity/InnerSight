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
    },
    '/pt/': {
      lang: 'pt-BR',
      title: 'InnerSight',
      description: 'Um espaço para exploração interior e autoconhecimento'
    },
    '/fr/': {
      lang: 'fr-FR',
      title: 'InnerSight',
      description: 'Un espace d\'exploration intérieure et de connaissance de soi'
    },
    '/tl/': {
      lang: 'tl-PH',
      title: 'InnerSight',
      description: 'Isang espasyo para sa panloob na paggalugad at pagkilala sa sarili'
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
          { text: 'Español', link: '/es/' },
          { text: 'Português', link: '/pt/' },
          { text: 'Français', link: '/fr/' },
          { text: 'Tagalog', link: '/tl/' }
        ],
        
        sidebar: [
          '/',
          '/about/',
          '/contact/',
          { title: 'Psychological Foundations', path: '/en/analisis_psicologico_apropiado_v2.html' },
          { title: 'Scientific Foundation', path: '/en/scientific_foundation_validation.html' },
          { title: 'Coercive Restrictions', path: '/en/effects_of_coercive_restrictions.html' },
          { title: 'Conditioned to the Conformity', path: '/en/emotional_blackmail.html' },
          { title: 'Nature of Emotional Regulation', path: '/en/Nature_of_Emotional_Regulation.html' },
          { title: 'Emotional Marital Security', path: '/en/Emotional_Marital_Security.html' },
          { title: 'Priesthood & Mental Health', path: '/en/sacerdocio_salud_mental_apropiado_v5.html' },
          { title: 'Institutional Proposal', path: '/en/proposal_v1_en.html' },
          { title: 'Practical Guide for Leaders', path: '/en/Practical_Guide_Leaders.html' },
          { title: 'FAQ for Leaders', path: '/en/PreguntasFrecuentes.html' },
          { title: 'Family Conversation Guide', path: '/en/Guia_conversacion.html' }
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
          { text: 'English', link: '/' },
          { text: 'Português', link: '/pt/' },
          { text: 'Français', link: '/fr/' },
          { text: 'Tagalog', link: '/tl/' }
        ],
        
        sidebar: [
          '/es/',
          '/es/about/',
          '/es/contact/',
          { title: 'Fundamentos Psicológicos', path: '/es/analisis_psicologico_apropiado_v2.html' },
          { title: 'Fundamento Científico', path: '/es/fundamento_cientifico_validacion.html' },
          { title: 'Restricciones Coercitivas', path: '/es/efectos_de_restricciones_coercitiva.html' },
          { title: 'Condiciona a la conformidad', path: '/es/chantaje_emocional.html' },
          { title: 'Naturaleza de la regulación emocional', path: '/es/Naturaleza_regulacion_emocional.html' },
          { title: 'Seguridad Emocional Conyugal', path: '/es/Seguridad_Emocional_Conyugal.html' },
          { title: 'Sacerdocio y Salud Mental', path: '/es/sacerdocio_salud_mental_apropiado_v5.html' },
          { title: 'Propuesta Institucional', path: '/es/propuesta_v1_esp.html' },
          { title: 'Guía Práctica para Líderes', path: '/es/guia_practica_lideres.html' },
          { title: 'Preguntas Frecuentes', path: '/es/PreguntasFrecuentes.html' },
          { title: 'Guía de Conversación', path: '/es/Guia_conversacion.html' }
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
      
      '/pt/': {
        nav: [
          { text: 'Início', link: '/pt/' },
          { text: 'Sobre', link: '/pt/about/' },
          { text: 'Contato', link: '/pt/contact/' },
          { text: 'English', link: '/' },
          { text: 'Español', link: '/es/' },
          { text: 'Français', link: '/fr/' },
          { text: 'Tagalog', link: '/tl/' }
        ],
        
        sidebar: [
          '/pt/',
          '/pt/about/',
          '/pt/contact/',
          { title: 'Fundamentos Psicológicos', path: '/pt/analisis_psicologico_apropiado_v2.html' },
          { title: 'Fundamento Científico', path: '/pt/fundamento_cientifico_validacion.html' },
          { title: 'Restrições Coercitivas', path: '/pt/efectos_de_restricciones_coercitiva.html' },
          { title: 'Condicionado à Conformidade', path: '/pt/chantaje_emocional.html' },
          { title: 'Natureza da regulação emocional', path: '/pt/Natureza_da_Regulacao_Emocional.html' },
          { title: 'Segurança Emocional Conjugal', path: '/pt/Seguranca_Emocional_Conjugal.html' },
          { title: 'Sacerdócio e Saúde Mental', path: '/pt/sacerdocio_salud_mental_apropiado_v5.html' },
          { title: 'Proposta Institucional', path: '/pt/propuesta_v1_esp.html' },
          { title: 'Guia Prática para Líderes', path: '/pt/Guia_Pratica_Lideres.html' },
          { title: 'Perguntas Frequentes', path: '/pt/PreguntasFrecuentes.html' },
          { title: 'Guia de Conversação', path: '/pt/Guia_conversacion.html' }
        ],

        lastUpdated: 'Última atualização',
        
        // Configuração do repositório
        repo: 'inner-clarity/InnerSight',
        repoLabel: 'GitHub',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Editar esta página no GitHub',
        
        // Configuração de idioma
        selectText: 'Idiomas',
        label: 'Português'
      },
      
      '/fr/': {
        nav: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'À propos', link: '/fr/about/' },
          { text: 'Contact', link: '/fr/contact/' },
          { text: 'English', link: '/' },
          { text: 'Español', link: '/es/' },
          { text: 'Português', link: '/pt/' },
          { text: 'Tagalog', link: '/tl/' }
        ],
        
        sidebar: [
          '/fr/',
          '/fr/about/',
          '/fr/contact/',
          { title: 'Fondements Psychologiques', path: '/fr/analisis_psicologico_apropiado_v2.html' },
          { title: 'Fondement Scientifique', path: '/fr/fundamento_cientifico_validacion.html' },
          { title: 'Restrictions Coercitives', path: '/fr/efectos_de_restricciones_coercitiva.html' },
          { title: 'Conditionné à la Conformité', path: '/fr/chantaje_emocional.html' },
          { title: 'Nature de la régulation émotionnelle', path: '/fr/Nature_de_la_Regulation_Emotionnelle.html' },
          { title: 'Sécurité Émotionnelle Conjugale', path: '/fr/Securite_Emotionnelle_Conjugale.html' },
          { title: 'Sacerdoce et Santé Mentale', path: '/fr/sacerdocio_salud_mental_apropiado_v5.html' },
          { title: 'Proposition Institutionnelle', path: '/fr/propuesta_v1_esp.html' },
          { title: 'Guide Pratique pour les Dirigeants', path: '/fr/Guide_Pratique_Leaders.html' },
          { title: 'Questions Fréquentes', path: '/fr/PreguntasFrecuentes.html' },
          { title: 'Guide de Conversation', path: '/fr/Guia_conversacion.html' }
        ],

        lastUpdated: 'Dernière mise à jour',
        
        // Configuration du dépôt
        repo: 'inner-clarity/InnerSight',
        repoLabel: 'GitHub',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Modifier cette page sur GitHub',
        
        // Configuration de langue
        selectText: 'Langues',
        label: 'Français'
      },
      
      '/tl/': {
        nav: [
          { text: 'Home', link: '/tl/' },
          { text: 'Tungkol', link: '/tl/about/' },
          { text: 'Contact', link: '/tl/contact/' },
          { text: 'English', link: '/' },
          { text: 'Español', link: '/es/' },
          { text: 'Português', link: '/pt/' },
          { text: 'Français', link: '/fr/' }
        ],
        
        sidebar: [
          '/tl/',
          '/tl/about/',
          '/tl/contact/',
          { title: 'Mga Pundasyon sa Sikolohiya', path: '/tl/analisis_psicologico_apropiado_v2.html' },
          { title: 'Scientific Foundation', path: '/tl/fundamento_cientifico_validacion.html' },
          { title: 'Mga Coercive Restrictions', path: '/tl/efectos_de_restricciones_coercitiva.html' },
          { title: 'Kondisyon sa Pagsunod', path: '/tl/chantaje_emocional.html' },
          { title: 'Kalikasan ng Emotional Regulation', path: '/tl/Kalikasan_ng_Emotional_Regulation.html' },
          { title: 'Seguridad Emosyonal sa Pag-aasawa', path: '/tl/Seguridad_Emosyonal_sa_Pag-aasawa.html' },
          { title: 'Priesthood at Mental Health', path: '/tl/sacerdocio_salud_mental_apropiado_v5.html' },
          { title: 'Institutional Proposal', path: '/tl/propuesta_v1_esp.html' },
          { title: 'Gabay sa Praktikal para sa mga Leaders', path: '/tl/Gabay_Praktikal_mga_Leaders.html' },
          { title: 'Mga Madalas Itanong', path: '/tl/PreguntasFrecuentes.html' },
          { title: 'Gabay sa Conversation', path: '/tl/Guia_conversacion.html' }
        ],

        lastUpdated: 'Huling na-update',
        
        // Configuration ng repository
        repo: 'inner-clarity/InnerSight',
        repoLabel: 'GitHub',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'I-edit ang pahinang ito sa GitHub',
        
        // Configuration ng wika
        selectText: 'Mga Wika',
        label: 'Tagalog'
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
