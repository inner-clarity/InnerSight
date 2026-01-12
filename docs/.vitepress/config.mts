import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  // Base URL: '/' para desarrollo local, '/InnerSight/' para GitHub Pages
  base: '/InnerSight/',
  
  // Excluir directorios de backup del build
  srcExclude: ['**/root-backup/**', '**/*-backup/**', '**/*.old'],
  
  locales: {
    root: {
      lang: 'en-US',
      label: 'English',
      title: 'InnerSight',
      description: 'A space for inner exploration and self-knowledge',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '/about/' },
          { text: 'Contact', link: '/contact/' }
        ],
        
        sidebar: {
          '/': [
            {
              text: 'Main Pages',
              items: [
                { text: 'Home', link: '/' },
                { text: 'About', link: '/about/' },
                { text: 'Contact', link: '/contact/' }
              ]
            },
            {
              text: 'Foundations',
              items: [
                { text: 'Psychological Foundations', link: '/analisis_psicologico_apropiado_v2' },
                { text: 'Scientific Foundation', link: '/fundamento_cientifico_validacion' },
                { text: 'Coercive Restrictions', link: '/efectos_de_restricciones_coercitiva' },
                { text: 'Conditioned to the Conformity', link: '/chantaje_emocional' },
                { text: 'Nature of Emotional Regulation', link: '/naturaleza_regulacion_emocional' },
                { text: 'Emotional Marital Security', link: '/seguridad_emocional_conyugal' }
              ]
            },
            {
              text: 'Mental Health & Priesthood',
              items: [
                { text: 'Priesthood & Mental Health', link: '/sacerdocio_salud_mental_apropiado_v5' }
              ]
            },
            {
              text: 'Guides & Resources',
              items: [
                { text: 'Institutional Proposal', link: '/propuesta_v1_esp' },
                { text: 'Practical Guide for Leaders', link: '/guia_practica_lideres' },
                { text: 'FAQ for Leaders', link: '/preguntasfrecuentes' },
                { text: 'Family Conversation Guide', link: '/guia_conversacion' }
              ]
            }
          ]
        },
        
        editLink: {
          pattern: 'https://github.com/inner-clarity/InnerSight/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },
        
        socialLinks: [
          { icon: 'github', link: 'https://github.com/inner-clarity/InnerSight' }
        ]
      }
    },
    
    es: {
      lang: 'es-ES',
      label: 'Español',
      title: 'InnerSight',
      description: 'Un espacio para la exploración interior y el autoconocimiento',
      themeConfig: {
        nav: [
          { text: 'Inicio', link: '/es/' },
          { text: 'Acerca de', link: '/es/about/' },
          { text: 'Contacto', link: '/es/contact/' }
        ],
        
        sidebar: {
          '/es/': [
            {
              text: 'Páginas Principales',
              items: [
                { text: 'Inicio', link: '/es/' },
                { text: 'Acerca de', link: '/es/about/' },
                { text: 'Contacto', link: '/es/contact/' }
              ]
            },
            {
              text: 'Fundamentos',
              items: [
                { text: 'Fundamentos Psicológicos', link: '/es/analisis_psicologico_apropiado_v2' },
                { text: 'Fundamento Científico', link: '/es/fundamento_cientifico_validacion' },
                { text: 'Restricciones Coercitivas', link: '/es/efectos_de_restricciones_coercitiva' },
                { text: 'Condiciona a la conformidad', link: '/es/chantaje_emocional' },
                { text: 'Naturaleza de la regulación emocional', link: '/es/naturaleza_regulacion_emocional' },
                { text: 'Seguridad Emocional Conyugal', link: '/es/seguridad_emocional_conyugal' }
              ]
            },
            {
              text: 'Salud Mental y Sacerdocio',
              items: [
                { text: 'Sacerdocio y Salud Mental', link: '/es/sacerdocio_salud_mental_apropiado_v5' }
              ]
            },
            {
              text: 'Guías y Recursos',
              items: [
                { text: 'Propuesta Institucional', link: '/es/propuesta_v1_esp' },
                { text: 'Guía Práctica para Líderes', link: '/es/guia_practica_lideres' },
                { text: 'Preguntas Frecuentes', link: '/es/preguntasfrecuentes' },
                { text: 'Guía de Conversación', link: '/es/guia_conversacion' }
              ]
            }
          ]
        },
        
        editLink: {
          pattern: 'https://github.com/inner-clarity/InnerSight/edit/main/docs/:path',
          text: 'Editar esta página en GitHub'
        },
        
        socialLinks: [
          { icon: 'github', link: 'https://github.com/inner-clarity/InnerSight' }
        ],
        
        docFooter: {
          prev: 'Página anterior',
          next: 'Página siguiente'
        },
        
        outlineTitle: 'En esta página',
        lastUpdatedText: 'Última actualización',
        returnToTopLabel: 'Volver arriba',
        sidebarMenuLabel: 'Menú',
        darkModeSwitchLabel: 'Apariencia',
        lightModeSwitchTitle: 'Cambiar a modo claro',
        darkModeSwitchTitle: 'Cambiar a modo oscuro'
      }
    },
    
    pt: {
      lang: 'pt-BR',
      label: 'Português',
      title: 'InnerSight',
      description: 'Um espaço para exploração interior e autoconhecimento',
      themeConfig: {
        nav: [
          { text: 'Início', link: '/pt/' },
          { text: 'Sobre', link: '/pt/about/' },
          { text: 'Contato', link: '/pt/contact/' }
        ],
        
        sidebar: [
          { text: 'Início', link: '/pt/' },
          { text: 'Sobre', link: '/pt/about/' },
          { text: 'Contato', link: '/pt/contact/' },
          { text: 'Fundamentos Psicológicos', link: '/pt/analisis_psicologico_apropiado_v2' },
          { text: 'Fundamento Científico', link: '/pt/fundamento_cientifico_validacion' },
          { text: 'Restrições Coercitivas', link: '/pt/efectos_de_restricciones_coercitiva' },
          { text: 'Condicionado à Conformidade', link: '/pt/chantaje_emocional' },
          { text: 'Natureza da regulação emocional', link: '/pt/naturaleza_regulacion_emocional' },
          { text: 'Segurança Emocional Conjugal', link: '/pt/seguridad_emocional_conyugal' },
          { text: 'Sacerdócio e Saúde Mental', link: '/pt/sacerdocio_salud_mental_apropiado_v5' },
          { text: 'Proposta Institucional', link: '/pt/propuesta_v1_esp' },
          { text: 'Guia Prática para Líderes', link: '/pt/guia_practica_lideres' },
          { text: 'Perguntas Frequentes', link: '/pt/preguntasfrecuentes' },
          { text: 'Guia de Conversação', link: '/pt/guia_conversacion' }
        ],
        
        editLink: {
          pattern: 'https://github.com/inner-clarity/InnerSight/edit/main/docs/:path',
          text: 'Editar esta página no GitHub'
        },
        
        socialLinks: [
          { icon: 'github', link: 'https://github.com/inner-clarity/InnerSight' }
        ],
        
        docFooter: {
          prev: 'Página anterior',
          next: 'Próxima página'
        },
        
        outlineTitle: 'Nesta página',
        lastUpdatedText: 'Última atualização',
        returnToTopLabel: 'Voltar ao topo',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Aparência',
        lightModeSwitchTitle: 'Mudar para modo claro',
        darkModeSwitchTitle: 'Mudar para modo escuro'
      }
    },
    
    fr: {
      lang: 'fr-FR',
      label: 'Français',
      title: 'InnerSight',
      description: 'Un espace d\'exploration intérieure et de connaissance de soi',
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'À propos', link: '/fr/about/' },
          { text: 'Contact', link: '/fr/contact/' }
        ],
        
        sidebar: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'À propos', link: '/fr/about/' },
          { text: 'Contact', link: '/fr/contact/' },
          { text: 'Fondements Psychologiques', link: '/fr/analisis_psicologico_apropiado_v2' },
          { text: 'Fondement Scientifique', link: '/fr/fundamento_cientifico_validacion' },
          { text: 'Restrictions Coercitives', link: '/fr/efectos_de_restricciones_coercitiva' },
          { text: 'Conditionné à la Conformité', link: '/fr/chantaje_emocional' },
          { text: 'Nature de la régulation émotionnelle', link: '/fr/naturaleza_regulacion_emocional' },
          { text: 'Sécurité Émotionnelle Conjugale', link: '/fr/seguridad_emocional_conyugal' },
          { text: 'Sacerdoce et Santé Mentale', link: '/fr/sacerdocio_salud_mental_apropiado_v5' },
          { text: 'Proposition Institutionnelle', link: '/fr/propuesta_v1_esp' },
          { text: 'Guide Pratique pour les Dirigeants', link: '/fr/guia_practica_lideres' },
          { text: 'Questions Fréquentes', link: '/fr/preguntasfrecuentes' },
          { text: 'Guide de Conversation', link: '/fr/guia_conversacion' }
        ],
        
        editLink: {
          pattern: 'https://github.com/inner-clarity/InnerSight/edit/main/docs/:path',
          text: 'Modifier cette page sur GitHub'
        },
        
        socialLinks: [
          { icon: 'github', link: 'https://github.com/inner-clarity/InnerSight' }
        ],
        
        docFooter: {
          prev: 'Page précédente',
          next: 'Page suivante'
        },
        
        outlineTitle: 'Sur cette page',
        lastUpdatedText: 'Dernière mise à jour',
        returnToTopLabel: 'Retour en haut',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Apparence',
        lightModeSwitchTitle: 'Passer en mode clair',
        darkModeSwitchTitle: 'Passer en mode sombre'
      }
    },
    
    de: {
      lang: 'de-DE',
      label: 'Deutsch',
      title: 'InnerSight',
      description: 'Ein Raum für innere Erkundung und Selbsterkenntnis',
      themeConfig: {
        nav: [
          { text: 'Startseite', link: '/de/' },
          { text: 'Über uns', link: '/de/about/' },
          { text: 'Kontakt', link: '/de/contact/' }
        ],
        
        sidebar: [
          { text: 'Startseite', link: '/de/' },
          { text: 'Über uns', link: '/de/about/' },
          { text: 'Kontakt', link: '/de/contact/' },
          { text: 'Psychologische Grundlagen', link: '/de/analisis_psicologico_apropiado_v2' },
          { text: 'Wissenschaftliche Grundlage', link: '/de/fundamento_cientifico_validacion' },
          { text: 'Zwangseinschränkungen', link: '/de/efectos_de_restricciones_coercitiva' },
          { text: 'Konditioniert zur Konformität', link: '/de/chantaje_emocional' },
          { text: 'Natur der emotionalen Regulation', link: '/de/naturaleza_regulacion_emocional' },
          { text: 'Emotionale Eheliche Sicherheit', link: '/de/seguridad_emocional_conyugal' },
          { text: 'Priestertum und Geistige Gesundheit', link: '/de/sacerdocio_salud_mental_apropiado_v5' },
          { text: 'Institutioneller Vorschlag', link: '/de/propuesta_v1_esp' },
          { text: 'Praktischer Leitfaden für Führer', link: '/de/guia_practica_lideres' },
          { text: 'Häufig Gestellte Fragen', link: '/de/preguntasfrecuentes' },
          { text: 'Gesprächsleitfaden', link: '/de/guia_conversacion' }
        ],
        
        editLink: {
          pattern: 'https://github.com/inner-clarity/InnerSight/edit/main/docs/:path',
          text: 'Diese Seite auf GitHub bearbeiten'
        },
        
        socialLinks: [
          { icon: 'github', link: 'https://github.com/inner-clarity/InnerSight' }
        ],
        
        docFooter: {
          prev: 'Vorherige Seite',
          next: 'Nächste Seite'
        },
        
        outlineTitle: 'Auf dieser Seite',
        lastUpdatedText: 'Zuletzt aktualisiert',
        returnToTopLabel: 'Zurück nach oben',
        sidebarMenuLabel: 'Menü',
        darkModeSwitchLabel: 'Erscheinungsbild',
        lightModeSwitchTitle: 'Zum hellen Modus wechseln',
        darkModeSwitchTitle: 'Zum dunklen Modus wechseln'
      }
    },
    
    it: {
      lang: 'it-IT',
      label: 'Italiano',
      title: 'InnerSight',
      description: 'Uno spazio per l\'esplorazione interiore e la conoscenza di sé',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/it/' },
          { text: 'Chi siamo', link: '/it/about/' },
          { text: 'Contatto', link: '/it/contact/' }
        ],
        
        sidebar: [
          { text: 'Home', link: '/it/' },
          { text: 'Chi siamo', link: '/it/about/' },
          { text: 'Contatto', link: '/it/contact/' },
          { text: 'Fondamenti Psicologici', link: '/it/analisis_psicologico_apropiado_v2' },
          { text: 'Fondamento Scientifico', link: '/it/fundamento_cientifico_validacion' },
          { text: 'Restrizioni Coercitive', link: '/it/efectos_de_restricciones_coercitiva' },
          { text: 'Condizionato alla Conformità', link: '/it/chantaje_emocional' },
          { text: 'Natura della regolazione emotiva', link: '/it/naturaleza_regulacion_emocional' },
          { text: 'Sicurezza Emotiva Coniugale', link: '/it/seguridad_emocional_conyugal' },
          { text: 'Sacerdozio e Salute Mentale', link: '/it/sacerdocio_salud_mental_apropiado_v5' },
          { text: 'Proposta Istituzionale', link: '/it/propuesta_v1_esp' },
          { text: 'Guida Pratica per i Leader', link: '/it/guia_practica_lideres' },
          { text: 'Domande Frequenti', link: '/it/preguntasfrecuentes' },
          { text: 'Guida alla Conversazione', link: '/it/guia_conversacion' }
        ],
        
        editLink: {
          pattern: 'https://github.com/inner-clarity/InnerSight/edit/main/docs/:path',
          text: 'Modifica questa pagina su GitHub'
        },
        
        socialLinks: [
          { icon: 'github', link: 'https://github.com/inner-clarity/InnerSight' }
        ],
        
        docFooter: {
          prev: 'Pagina precedente',
          next: 'Pagina successiva'
        },
        
        outlineTitle: 'In questa pagina',
        lastUpdatedText: 'Ultimo aggiornamento',
        returnToTopLabel: 'Torna su',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Aspetto',
        lightModeSwitchTitle: 'Passa alla modalità chiara',
        darkModeSwitchTitle: 'Passa alla modalità scura'
      }
    },
    
    ru: {
      lang: 'ru-RU',
      label: 'Русский',
      title: 'InnerSight',
      description: 'Пространство для внутреннего исследования и самопознания',
      themeConfig: {
        nav: [
          { text: 'Главная', link: '/ru/' },
          { text: 'О нас', link: '/ru/about/' },
          { text: 'Контакты', link: '/ru/contact/' }
        ],
        
        sidebar: [
          { text: 'Главная', link: '/ru/' },
          { text: 'О нас', link: '/ru/about/' },
          { text: 'Контакты', link: '/ru/contact/' },
          { text: 'Психологические основы', link: '/ru/analisis_psicologico_apropiado_v2' },
          { text: 'Научное обоснование', link: '/ru/fundamento_cientifico_validacion' },
          { text: 'Принудительные ограничения', link: '/ru/efectos_de_restricciones_coercitiva' },
          { text: 'Условная любовь', link: '/ru/chantaje_emocional' },
          { text: 'Природа эмоциональной регуляции', link: '/ru/naturaleza_regulacion_emocional' },
          { text: 'Эмоциональная супружеская безопасность', link: '/ru/seguridad_emocional_conyugal' },
          { text: 'Священство и психическое здоровье', link: '/ru/sacerdocio_salud_mental_apropiado_v5' },
          { text: 'Институциональное предложение', link: '/ru/propuesta_v1_esp' },
          { text: 'Практическое руководство для лидеров', link: '/ru/guia_practica_lideres' },
          { text: 'Часто задаваемые вопросы', link: '/ru/preguntasfrecuentes' },
          { text: 'Руководство по разговорам', link: '/ru/guia_conversacion' }
        ],
        
        editLink: {
          pattern: 'https://github.com/inner-clarity/InnerSight/edit/main/docs/:path',
          text: 'Редактировать эту страницу на GitHub'
        },
        
        socialLinks: [
          { icon: 'github', link: 'https://github.com/inner-clarity/InnerSight' }
        ],
        
        docFooter: {
          prev: 'Предыдущая страница',
          next: 'Следующая страница'
        },
        
        outlineTitle: 'На этой странице',
        lastUpdatedText: 'Последнее обновление',
        returnToTopLabel: 'Вернуться наверх',
        sidebarMenuLabel: 'Меню',
        darkModeSwitchLabel: 'Внешний вид',
        lightModeSwitchTitle: 'Переключиться на светлый режим',
        darkModeSwitchTitle: 'Переключиться на темный режим'
      }
    },
    
    ko: {
      lang: 'ko-KR',
      label: '한국어',
      title: 'InnerSight',
      description: '내면 탐구와 자기 인식을 위한 공간',
      themeConfig: {
        nav: [
          { text: '홈', link: '/ko/' },
          { text: '소개', link: '/ko/about/' },
          { text: '연락처', link: '/ko/contact/' }
        ],
        
        sidebar: [
          { text: '홈', link: '/ko/' },
          { text: '소개', link: '/ko/about/' },
          { text: '연락처', link: '/ko/contact/' },
          { text: '심리학적 기초', link: '/ko/analisis_psicologico_apropiado_v2' },
          { text: '과학적 근거', link: '/ko/fundamento_cientifico_validacion' },
          { text: '강제적 제한의 효과', link: '/ko/efectos_de_restricciones_coercitiva' },
          { text: '조건부 사랑', link: '/ko/chantaje_emocional' },
          { text: '감정 조절의 본질', link: '/ko/naturaleza_regulacion_emocional' },
          { text: '감정적 부부 안전', link: '/ko/seguridad_emocional_conyugal' },
          { text: '성역과 정신 건강', link: '/ko/sacerdocio_salud_mental_apropiado_v5' },
          { text: '기관적 제안', link: '/ko/propuesta_v1_esp' },
          { text: '지도자를 위한 실용 가이드', link: '/ko/guia_practica_lideres' },
          { text: '자주 묻는 질문', link: '/ko/preguntasfrecuentes' },
          { text: '대화 가이드', link: '/ko/guia_conversacion' }
        ],
        
        editLink: {
          pattern: 'https://github.com/inner-clarity/InnerSight/edit/main/docs/:path',
          text: 'GitHub에서 이 페이지 편집'
        },
        
        socialLinks: [
          { icon: 'github', link: 'https://github.com/inner-clarity/InnerSight' }
        ],
        
        docFooter: {
          prev: '이전 페이지',
          next: '다음 페이지'
        },
        
        outlineTitle: '이 페이지에서',
        lastUpdatedText: '마지막 업데이트',
        returnToTopLabel: '맨 위로',
        sidebarMenuLabel: '메뉴',
        darkModeSwitchLabel: '외관',
        lightModeSwitchTitle: '라이트 모드로 전환',
        darkModeSwitchTitle: '다크 모드로 전환'
      }
    },
    
    ja: {
      lang: 'ja-JP',
      label: '日本語',
      title: 'InnerSight',
      description: '内面探求と自己認識のための空間',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: '私たちについて', link: '/ja/about/' },
          { text: 'お問い合わせ', link: '/ja/contact/' }
        ],
        
        sidebar: [
          { text: 'ホーム', link: '/ja/' },
          { text: '私たちについて', link: '/ja/about/' },
          { text: 'お問い合わせ', link: '/ja/contact/' },
          { text: '心理学的基盤', link: '/ja/analisis_psicologico_apropiado_v2' },
          { text: '科学的根拠', link: '/ja/fundamento_cientifico_validacion' },
          { text: '強制的制限の影響', link: '/ja/efectos_de_restricciones_coercitiva' },
          { text: '条件付き愛', link: '/ja/chantaje_emocional' },
          { text: '感情的調節の本質', link: '/ja/naturaleza_regulacion_emocional' },
          { text: '感情的夫婦安全', link: '/ja/seguridad_emocional_conyugal' },
          { text: '聖職と精神的健康', link: '/ja/sacerdocio_salud_mental_apropiado_v5' },
          { text: '制度的提案', link: '/ja/propuesta_v1_esp' },
          { text: '指導者のための実用ガイド', link: '/ja/guia_practica_lideres' },
          { text: 'よくある質問', link: '/ja/preguntasfrecuentes' },
          { text: '対話ガイド', link: '/ja/guia_conversacion' }
        ],
        
        editLink: {
          pattern: 'https://github.com/inner-clarity/InnerSight/edit/main/docs/:path',
          text: 'GitHubでこのページを編集'
        },
        
        socialLinks: [
          { icon: 'github', link: 'https://github.com/inner-clarity/InnerSight' }
        ],
        
        docFooter: {
          prev: '前のページ',
          next: '次のページ'
        },
        
        outlineTitle: 'このページで',
        lastUpdatedText: '最終更新',
        returnToTopLabel: 'トップへ戻る',
        sidebarMenuLabel: 'メニュー',
        darkModeSwitchLabel: '外観',
        lightModeSwitchTitle: 'ライトモードに切り替え',
        darkModeSwitchTitle: 'ダークモードに切り替え'
      }
    },
    
    zh: {
      lang: 'zh-CN',
      label: '中文',
      title: 'InnerSight',
      description: '内心探索和自我认知的空间',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '关于我们', link: '/zh/about/' },
          { text: '联系我们', link: '/zh/contact/' }
        ],
        
        sidebar: [
          { text: '首页', link: '/zh/' },
          { text: '关于我们', link: '/zh/about/' },
          { text: '联系我们', link: '/zh/contact/' },
          { text: '心理学基础', link: '/zh/analisis_psicologico_apropiado_v2' },
          { text: '科学依据', link: '/zh/fundamento_cientifico_validacion' },
          { text: '强制限制的影响', link: '/zh/efectos_de_restricciones_coercitiva' },
          { text: '条件性爱', link: '/zh/chantaje_emocional' },
          { text: '情绪调节的本质', link: '/zh/naturaleza_regulacion_emocional' },
          { text: '情感婚姻安全', link: '/zh/seguridad_emocional_conyugal' },
          { text: '圣职与心理健康', link: '/zh/sacerdocio_salud_mental_apropiado_v5' },
          { text: '机构提案', link: '/zh/propuesta_v1_esp' },
          { text: '领导者实用指南', link: '/zh/guia_practica_lideres' },
          { text: '常见问题', link: '/zh/preguntasfrecuentes' },
          { text: '对话指南', link: '/zh/guia_conversacion' }
        ],
        
        editLink: {
          pattern: 'https://github.com/inner-clarity/InnerSight/edit/main/docs/:path',
          text: '在GitHub上编辑此页面'
        },
        
        socialLinks: [
          { icon: 'github', link: 'https://github.com/inner-clarity/InnerSight' }
        ],
        
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        
        outlineTitle: '在本页',
        lastUpdatedText: '最后更新',
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '外观',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
      }
    },
    
    hi: {
      lang: 'hi-IN',
      label: 'हिन्दी',
      title: 'InnerSight',
      description: 'आंतरिक अन्वेषण और आत्म-जागरूकता के लिए स्थान',
      themeConfig: {
        nav: [
          { text: 'होम', link: '/hi/' },
          { text: 'हमारे बारे में', link: '/hi/about/' },
          { text: 'संपर्क', link: '/hi/contact/' }
        ],
        
        sidebar: [
          { text: 'होम', link: '/hi/' },
          { text: 'हमारे बारे में', link: '/hi/about/' },
          { text: 'संपर्क', link: '/hi/contact/' },
          { text: 'मनोवैज्ञानिक नींव', link: '/hi/analisis_psicologico_apropiado_v2' },
          { text: 'वैज्ञानिक आधार', link: '/hi/fundamento_cientifico_validacion' },
          { text: 'बाध्यकारी प्रतिबंधों के प्रभाव', link: '/hi/efectos_de_restricciones_coercitiva' },
          { text: 'अनुपालन के लिए सशर्त', link: '/hi/chantaje_emocional' },
          { text: 'भावनात्मक नियमन की प्रकृति', link: '/hi/naturaleza_regulacion_emocional' },
          { text: 'भावनात्मक वैवाहिक सुरक्षा', link: '/hi/seguridad_emocional_conyugal' },
          { text: 'पुजारीपन और मानसिक स्वास्थ्य', link: '/hi/sacerdocio_salud_mental_apropiado_v5' },
          { text: 'संस्थागत प्रस्ताव', link: '/hi/propuesta_v1_esp' },
          { text: 'नेताओं के लिए व्यावहारिक मार्गदर्शिका', link: '/hi/guia_practica_lideres' },
          { text: 'अक्सर पूछे जाने वाले प्रश्न', link: '/hi/preguntasfrecuentes' },
          { text: 'बातचीत मार्गदर्शिका', link: '/hi/guia_conversacion' }
        ],
        
        editLink: {
          pattern: 'https://github.com/inner-clarity/InnerSight/edit/main/docs/:path',
          text: 'GitHub पर इस पेज को संपादित करें'
        },
        
        socialLinks: [
          { icon: 'github', link: 'https://github.com/inner-clarity/InnerSight' }
        ],
        
        outlineTitle: 'इस पृष्ठ पर',
        lastUpdatedText: 'अंतिम अपडेट'
      }
    },
    
    tl: {
      lang: 'tl-PH',
      label: 'Tagalog',
      title: 'InnerSight',
      description: 'Isang espasyo para sa panloob na paggalugad at pagkilala sa sarili',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/tl/' },
          { text: 'Tungkol', link: '/tl/about/' },
          { text: 'Contact', link: '/tl/contact/' }
        ],
        
        sidebar: [
          { text: 'Home', link: '/tl/' },
          { text: 'Tungkol', link: '/tl/about/' },
          { text: 'Contact', link: '/tl/contact/' },
          { text: 'Mga Pundasyon sa Sikolohiya', link: '/tl/analisis_psicologico_apropiado_v2' },
          { text: 'Scientific Foundation', link: '/tl/fundamento_cientifico_validacion' },
          { text: 'Mga Coercive Restrictions', link: '/tl/efectos_de_restricciones_coercitiva' },
          { text: 'Kondisyon sa Pagsunod', link: '/tl/chantaje_emocional' },
          { text: 'Kalikasan ng Emotional Regulation', link: '/tl/naturaleza_regulacion_emocional' },
          { text: 'Seguridad Emosyonal sa Pag-aasawa', link: '/tl/seguridad_emocional_conyugal' },
          { text: 'Priesthood at Mental Health', link: '/tl/sacerdocio_salud_mental_apropiado_v5' },
          { text: 'Institutional Proposal', link: '/tl/propuesta_v1_esp' },
          { text: 'Gabay sa Praktikal para sa mga Leaders', link: '/tl/guia_practica_lideres' },
          { text: 'Mga Madalas Itanong', link: '/tl/preguntasfrecuentes' },
          { text: 'Gabay sa Conversation', link: '/tl/guia_conversacion' }
        ],
        
        editLink: {
          pattern: 'https://github.com/inner-clarity/InnerSight/edit/main/docs/:path',
          text: 'I-edit ang pahinang ito sa GitHub'
        },
        
        socialLinks: [
          { icon: 'github', link: 'https://github.com/inner-clarity/InnerSight' }
        ],
        
        outlineTitle: 'Sa pahinang ito',
        lastUpdatedText: 'Huling na-update'
      }
    }
  },
  
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['meta', { name: 'theme-color', content: '#2c5aa0' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#2c5aa0' }]
  ],
  
  themeConfig: {
    logo: '/logo.svg',
    appearance: 'dark',
    search: {
      provider: 'local'
    }
  },
  
  lastUpdated: true,
  cleanUrls: true,
  
  vite: {
    plugins: [
      {
        name: 'serve-static-personal-note',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const url = req.url || ''

            // Servir en ambas rutas: con y sin prefijo
            if (
              url === '/personal-note.html' ||
              url === '/InnerSight/personal-note.html'
            ) {
              const filePath = path.resolve(process.cwd(), 'personal-note.html')
              if (fs.existsSync(filePath)) {
                res.setHeader('Content-Type', 'text/html')
                fs.createReadStream(filePath).pipe(res)
                return // evita continuar con otros middlewares
              }
            }

            next() // pasa al siguiente middleware si no coincide
          })
        }
      }
    ]
  }
})