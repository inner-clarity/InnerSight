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
    },
    '/de/': {
      lang: 'de-DE',
      title: 'InnerSight',
      description: 'Ein Raum für innere Erkundung und Selbsterkenntnis'
    },
    '/it/': {
      lang: 'it-IT',
      title: 'InnerSight',
      description: 'Uno spazio per l\'esplorazione interiore e la conoscenza di sé'
    },
    '/ru/': {
      lang: 'ru-RU',
      title: 'InnerSight',
      description: 'Пространство для внутреннего исследования и самопознания'
    },
    '/ko/': {
      lang: 'ko-KR',
      title: 'InnerSight',
      description: '내면 탐구와 자기 인식을 위한 공간'
    },
    '/ja/': {
      lang: 'ja-JP',
      title: 'InnerSight',
      description: '内面探求と自己認識のための空間'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'InnerSight',
      description: '内心探索和自我认知的空间'
    },
    '/hi/': {
      lang: 'hi-IN',
      title: 'InnerSight',
      description: 'आंतरिक अन्वेषण और आत्म-जागरूकता के लिए स्थान'
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

        ],
        
        sidebar: [
          '/',
          '/about/',
          '/contact/',
          { title: 'Psychological Foundations', path: '/analisis_psicologico_apropiado_v2.html' },
          { title: 'Scientific Foundation', path: '/scientific_foundation_validation.html' },
          { title: 'Coercive Restrictions', path: '/effects_of_coercive_restrictions.html' },
          { title: 'Conditioned to the Conformity', path: '/emotional_blackmail.html' },
          { title: 'Nature of Emotional Regulation', path: '/Nature_of_Emotional_Regulation.html' },
          { title: 'Emotional Marital Security', path: '/Emotional_Marital_Security.html' },
          { title: 'Priesthood & Mental Health', path: '/sacerdocio_salud_mental_apropiado_v5.html' },
          { title: 'Institutional Proposal', path: '/proposal_v1_en.html' },
          { title: 'Practical Guide for Leaders', path: '/Practical_Guide_Leaders.html' },
          { title: 'FAQ for Leaders', path: '/PreguntasFrecuentes.html' },
          { title: 'Family Conversation Guide', path: '/Guide_for_Difficult_Family_Conversations.html' }
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
      },
      
      '/de/': {
        nav: [
          { text: 'Startseite', link: '/de/' },
          { text: 'Über uns', link: '/de/about/' },
          { text: 'Kontakt', link: '/de/contact/' },
        ],
        
        sidebar: [
          '/de/',
          '/de/about/',
          '/de/contact/',
          { title: 'Psychologische Grundlagen', path: '/de/analisis_psicologico_apropiado_v2.html' },
          { title: 'Wissenschaftliche Grundlage', path: '/de/fundamento_cientifico_validacion.html' },
          { title: 'Zwangseinschränkungen', path: '/de/efectos_de_restricciones_coercitiva.html' },
          { title: 'Konditioniert zur Konformität', path: '/de/chantaje_emocional.html' },
          { title: 'Natur der emotionalen Regulation', path: '/de/Natur_der_Emotionalen_Regulation.html' },
          { title: 'Emotionale Eheliche Sicherheit', path: '/de/Emotionale_Eheliche_Sicherheit.html' },
          { title: 'Priestertum und Geistige Gesundheit', path: '/de/sacerdocio_salud_mental_apropiado_v5.html' },
          { title: 'Institutioneller Vorschlag', path: '/de/propuesta_v1_esp.html' },
          { title: 'Praktischer Leitfaden für Führer', path: '/de/Praktischer_Leitfaden_Fuehrer.html' },
          { title: 'Häufig Gestellte Fragen', path: '/de/PreguntasFrecuentes.html' },
          { title: 'Gesprächsleitfaden', path: '/de/Guia_conversacion.html' }
        ],

        lastUpdated: 'Zuletzt aktualisiert',
        
        // Repository-Konfiguration
        repo: 'inner-clarity/InnerSight',
        repoLabel: 'GitHub',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Diese Seite auf GitHub bearbeiten',
        
        // Sprachkonfiguration
        selectText: 'Sprachen',
        label: 'Deutsch'
      },
      
      '/it/': {
        nav: [
          { text: 'Home', link: '/it/' },
          { text: 'Chi siamo', link: '/it/about/' },
          { text: 'Contatto', link: '/it/contact/' },
        ],
        
        sidebar: [
          '/it/',
          '/it/about/',
          '/it/contact/',
          { title: 'Fondamenti Psicologici', path: '/it/analisis_psicologico_apropiado_v2.html' },
          { title: 'Fondamento Scientifico', path: '/it/fundamento_cientifico_validacion.html' },
          { title: 'Restrizioni Coercitive', path: '/it/efectos_de_restricciones_coercitiva.html' },
          { title: 'Condizionato alla Conformità', path: '/it/chantaje_emocional.html' },
          { title: 'Natura della regolazione emotiva', path: '/it/Natura_della_Regolazione_Emotiva.html' },
          { title: 'Sicurezza Emotiva Coniugale', path: '/it/Sicurezza_Emotiva_Coniugale.html' },
          { title: 'Sacerdozio e Salute Mentale', path: '/it/sacerdocio_salud_mental_apropiado_v5.html' },
          { title: 'Proposta Istituzionale', path: '/it/propuesta_v1_esp.html' },
          { title: 'Guida Pratica per i Leader', path: '/it/Guida_Pratica_Leader.html' },
          { title: 'Domande Frequenti', path: '/it/PreguntasFrecuentes.html' },
          { title: 'Guida alla Conversazione', path: '/it/Guia_conversacion.html' }
        ],

        lastUpdated: 'Ultimo aggiornamento',
        
        // Configurazione del repository
        repo: 'inner-clarity/InnerSight',
        repoLabel: 'GitHub',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Modifica questa pagina su GitHub',
        
        // Configurazione della lingua
        selectText: 'Lingue',
        label: 'Italiano'
      },
      
      '/ru/': {
        nav: [
          { text: 'Главная', link: '/ru/' },
          { text: 'О нас', link: '/ru/about/' },
          { text: 'Контакты', link: '/ru/contact/' },
        ],
        
        sidebar: [
          '/ru/',
          '/ru/about/',
          '/ru/contact/',
          { title: 'Психологические основы', path: '/ru/analisis_psicologico_apropiado_v2.html' },
          { title: 'Научное обоснование', path: '/ru/fundamento_cientifico_validacion.html' },
          { title: 'Принудительные ограничения', path: '/ru/efectos_de_restricciones_coercitiva.html' },
          { title: 'Условная любовь', path: '/ru/chantaje_emocional.html' },
          { title: 'Природа эмоциональной регуляции', path: '/ru/Priroda_Emotionalnoy_Regulyatsii.html' },
          { title: 'Эмоциональная супружеская безопасность', path: '/ru/Emotsionalnaya_Supruzheskaya_Bezopasnost.html' },
          { title: 'Священство и психическое здоровье', path: '/ru/sacerdocio_salud_mental_apropiado_v5.html' },
          { title: 'Институциональное предложение', path: '/ru/propuesta_v1_esp.html' },
          { title: 'Практическое руководство для лидеров', path: '/ru/Prakticheskoe_Rukovodstvo_Liderov.html' },
          { title: 'Часто задаваемые вопросы', path: '/ru/PreguntasFrecuentes.html' },
          { title: 'Руководство по разговорам', path: '/ru/Guia_conversacion.html' }
        ],

        lastUpdated: 'Последнее обновление',
        
        // Конфигурация репозитория
        repo: 'inner-clarity/InnerSight',
        repoLabel: 'GitHub',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Редактировать эту страницу на GitHub',
        
        // Конфигурация языка
        selectText: 'Языки',
        label: 'Русский'
      },
      
      '/ko/': {
        nav: [
          { text: '홈', link: '/ko/' },
          { text: '소개', link: '/ko/about/' },
          { text: '연락처', link: '/ko/contact/' },
        ],
        
        sidebar: [
          '/ko/',
          '/ko/about/',
          '/ko/contact/',
          { title: '심리학적 기초', path: '/ko/analisis_psicologico_apropiado_v2.html' },
          { title: '과학적 근거', path: '/ko/fundamento_cientifico_validacion.html' },
          { title: '강제적 제한의 효과', path: '/ko/efectos_de_restricciones_coercitiva.html' },
          { title: '조건부 사랑', path: '/ko/chantaje_emocional.html' },
          { title: '감정 조절의 본질', path: '/ko/Jeongseo_Johyeol_Ui_Bonjil.html' },
          { title: '감정적 부부 안전', path: '/ko/Gamjeongjeok_Bubu_Anjeon.html' },
          { title: '성역과 정신 건강', path: '/ko/sacerdocio_salud_mental_apropiado_v5.html' },
          { title: '기관적 제안', path: '/ko/propuesta_v1_esp.html' },
          { title: '지도자를 위한 실용 가이드', path: '/ko/Silyong_Gaijeu_Jidoja.html' },
          { title: '자주 묻는 질문', path: '/ko/PreguntasFrecuentes.html' },
          { title: '대화 가이드', path: '/ko/Guia_conversacion.html' }
        ],

        lastUpdated: '마지막 업데이트',
        
        // 저장소 설정
        repo: 'inner-clarity/InnerSight',
        repoLabel: 'GitHub',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'GitHub에서 이 페이지 편집',
        
        // 언어 설정
        selectText: '언어',
        label: '한국어'
      },
      
      '/ja/': {
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: '私たちについて', link: '/ja/about/' },
          { text: 'お問い合わせ', link: '/ja/contact/' },
        ],
        
        sidebar: [
          '/ja/',
          '/ja/about/',
          '/ja/contact/',
          { title: '心理学的基盤', path: '/ja/analisis_psicologico_apropiado_v2.html' },
          { title: '科学的根拠', path: '/ja/fundamento_cientifico_validacion.html' },
          { title: '強制的制限の影響', path: '/ja/efectos_de_restricciones_coercitiva.html' },
          { title: '条件付き愛', path: '/ja/chantaje_emocional.html' },
          { title: '感情的調節の本質', path: '/ja/Kanjoteki_Chosei_No_Honshitsu.html' },
          { title: '感情的夫婦安全', path: '/ja/Kanjoteki_Fufu_Anzen.html' },
          { title: '聖職と精神的健康', path: '/ja/sacerdocio_salud_mental_apropiado_v5.html' },
          { title: '制度的提案', path: '/ja/propuesta_v1_esp.html' },
          { title: '指導者のための実用ガイド', path: '/ja/Jitsuyo_Gaido_Shidousha.html' },
          { title: 'よくある質問', path: '/ja/PreguntasFrecuentes.html' },
          { title: '対話ガイド', path: '/ja/Guia_conversacion.html' }
        ],

        lastUpdated: '最終更新',
        
        // リポジトリ設定
        repo: 'inner-clarity/InnerSight',
        repoLabel: 'GitHub',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'GitHubでこのページを編集',
        
        // 言語設定
        selectText: '言語',
        label: '日本語'
      },
      
      '/zh/': {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '关于我们', link: '/zh/about/' },
          { text: '联系我们', link: '/zh/contact/' },
        ],
        
        sidebar: [
          '/zh/',
          '/zh/about/',
          '/zh/contact/',
          { title: '心理学基础', path: '/zh/analisis_psicologico_apropiado_v2.html' },
          { title: '科学依据', path: '/zh/fundamento_cientifico_validacion.html' },
          { title: '强制限制的影响', path: '/zh/efectos_de_restricciones_coercitiva.html' },
          { title: '条件性爱', path: '/zh/chantaje_emocional.html' },
          { title: '情绪调节的本质', path: '/zh/Qingxu_Tiaojie_De_Benzhi.html' },
          { title: '情感婚姻安全', path: '/zh/Qinggan_Hunyin_Anquan.html' },
          { title: '圣职与心理健康', path: '/zh/sacerdocio_salud_mental_apropiado_v5.html' },
          { title: '机构提案', path: '/zh/propuesta_v1_esp.html' },
          { title: '领导者实用指南', path: '/zh/Lingdaozhe_Shiyong_Zhinan.html' },
          { title: '常见问题', path: '/zh/PreguntasFrecuentes.html' },
          { title: '对话指南', path: '/zh/Guia_conversacion.html' }
        ],

        lastUpdated: '最后更新',
        
        // 存储库配置
        repo: 'inner-clarity/InnerSight',
        repoLabel: 'GitHub',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: '在GitHub上编辑此页面',
        
        // 语言配置
        selectText: '语言',
        label: '中文'
      },
      
      '/hi/': {
        nav: [
          { text: 'होम', link: '/hi/' },
          { text: 'हमारे बारे में', link: '/hi/about/' },
          { text: 'संपर्क', link: '/hi/contact/' },
        ],
        
        sidebar: [
          '/hi/',
          '/hi/about/',
          '/hi/contact/',
          { title: 'मनोवैज्ञानिक नींव', path: '/hi/analisis_psicologico_apropiado_v2.html' },
          { title: 'वैज्ञानिक आधार', path: '/hi/fundamento_cientifico_validacion.html' },
          { title: 'बाध्यकारी प्रतिबंधों के प्रभाव', path: '/hi/efectos_de_restricciones_coercitiva.html' },
          { title: 'अनुपालन के लिए सशर्त', path: '/hi/chantaje_emocional.html' },
          { title: 'भावनात्मक नियमन की प्रकृति', path: '/hi/Bhavnatmak_Niyaman_Ki_Prakriti.html' },
          { title: 'भावनात्मक वैवाहिक सुरक्षा', path: '/hi/Bhavnatmak_Vaivahik_Suraksha.html' },
          { title: 'पुजारीपन और मानसिक स्वास्थ्य', path: '/hi/sacerdocio_salud_mental_apropiado_v5.html' },
          { title: 'संस्थागत प्रस्ताव', path: '/hi/propuesta_v1_esp.html' },
          { title: 'नेताओं के लिए व्यावहारिक मार्गदर्शिका', path: '/hi/Netao_Ke_Liye_Vyavaharik_Margdarshika.html' },
          { title: 'अक्सर पूछे जाने वाले प्रश्न', path: '/hi/PreguntasFrecuentes.html' },
          { title: 'बातचीत मार्गदर्शिका', path: '/hi/Guia_conversacion.html' }
        ],

        lastUpdated: 'अंतिम अपडेट',
        
        // रिपॉजिटरी कॉन्फ़िगरेशन
        repo: 'inner-clarity/InnerSight',
        repoLabel: 'GitHub',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'GitHub पर इस पेज को संपादित करें',
        
        // भाषा कॉन्फ़िगरेशन
        selectText: 'भाषाएं',
        label: 'हिन्दी'
      }
    }
  },
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: '/fixed-page-nav.css' }],
    ['script', { src: '/locale-detector.js' }],
    ['script', { src: '/geo-detector.js' }],
    // ['script', { src: '/language-selector.js' }], // Desactivado para evitar conflictos visuales
    ['script', { src: '/debug-detector.js' }],
    ['script', { src: '/page-nav-enhancer.js' }],
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
