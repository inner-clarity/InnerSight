// Detector de idioma automático para InnerSight
(function() {
  'use strict';
  
  // Mapeo de idiomas del navegador a rutas de InnerSight
  const languageMap = {
    'es': '/es/',
    'es-ES': '/es/',
    'es-MX': '/es/',
    'es-AR': '/es/',
    'es-CO': '/es/',
    'es-PE': '/es/',
    'es-VE': '/es/',
    'es-CL': '/es/',
    'es-EC': '/es/',
    'es-UY': '/es/',
    'es-PY': '/es/',
    'es-BO': '/es/',
    'es-CR': '/es/',
    'es-GT': '/es/',
    'es-HN': '/es/',
    'es-NI': '/es/',
    'es-PA': '/es/',
    'es-DO': '/es/',
    'es-CU': '/es/',
    'es-PR': '/es/',
    
    'pt': '/pt/',
    'pt-BR': '/pt/',
    'pt-PT': '/pt/',
    
    'fr': '/fr/',
    'fr-FR': '/fr/',
    'fr-CA': '/fr/',
    'fr-BE': '/fr/',
    'fr-CH': '/fr/',
    
    'de': '/de/',
    'de-DE': '/de/',
    'de-AT': '/de/',
    'de-CH': '/de/',
    'de-LI': '/de/',
    
    'it': '/it/',
    'it-IT': '/it/',
    'it-SM': '/it/',
    'it-VA': '/it/',
    
    'ru': '/ru/',
    'ru-RU': '/ru/',
    'ru-BY': '/ru/',
    'ru-KZ': '/ru/',
    'ru-KG': '/ru/',
    'ru-TJ': '/ru/',
    'ru-TM': '/ru/',
    'ru-UZ': '/ru/',
    'ru-AM': '/ru/',
    'ru-AZ': '/ru/',
    'ru-GE': '/ru/',
    'ru-MD': '/ru/',
    'ru-UA': '/ru/',
    'ru-EE': '/ru/',
    'ru-LV': '/ru/',
    'ru-LT': '/ru/',
    
    'ko': '/ko/',
    'ko-KR': '/ko/',
    'ko-KP': '/ko/',
    
    'ja': '/ja/',
    'ja-JP': '/ja/',
    
    'zh': '/zh/',
    'zh-CN': '/zh/',
    'zh-TW': '/zh/',
    'zh-HK': '/zh/',
    'zh-MO': '/zh/',
    'zh-SG': '/zh/',
    'cmn': '/zh/',
    'cmn-CN': '/zh/',
    'cmn-TW': '/zh/',
    'cmn-HK': '/zh/',
    'cmn-MO': '/zh/',
    'cmn-SG': '/zh/',
    
    'hi': '/hi/',
    'hi-IN': '/hi/',
    'hin': '/hi/',
    'hin-IN': '/hi/',
    
    'tl': '/tl/',
    'tl-PH': '/tl/',
    'fil': '/tl/',
    'fil-PH': '/tl/'
  };
  
  // Función para detectar idioma preferido del navegador
  function detectLanguage() {
    // 1. Verificar si ya hay una preferencia guardada
    const savedLanguage = localStorage.getItem('innersight-language');
    if (savedLanguage && languageMap[savedLanguage]) {
      return languageMap[savedLanguage];
    }
    
    // 2. Obtener idiomas del navegador
    const browserLanguages = navigator.languages || [navigator.language];
    
    // 3. Buscar coincidencia exacta
    for (const lang of browserLanguages) {
      if (languageMap[lang]) {
        return languageMap[lang];
      }
    }
    
    // 4. Buscar coincidencia por prefijo (ej: es-ES -> es)
    for (const lang of browserLanguages) {
      const prefix = lang.split('-')[0];
      if (languageMap[prefix]) {
        return languageMap[prefix];
      }
    }
    
    // 5. Idioma por defecto (inglés)
    return '/';
  }
  
  // Función para redirigir si es necesario
  function redirectIfNeeded() {
    const currentPath = window.location.pathname;
    const detectedLanguage = detectLanguage();
    
    // Solo redirigir si estamos en la raíz y no hay preferencia previa
    if (currentPath === '/InnerSight/' || currentPath === '/InnerSight') {
      // Verificar si ya visitó el sitio antes
      const hasVisited = sessionStorage.getItem('innersight-visited');
      
      if (!hasVisited && detectedLanguage !== '/') {
        // Marcar como visitado para esta sesión
        sessionStorage.setItem('innersight-visited', 'true');
        
        // Redirigir al idioma detectado
        window.location.href = window.location.origin + detectedLanguage;
        return;
      }
    }
    
    // Guardar el idioma actual para futuras visitas
    const currentLang = currentPath.replace('/InnerSight', '').replace('/', '') || 'en';
    localStorage.setItem('innersight-language', currentLang);
  }
  
  // Ejecutar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', redirectIfNeeded);
  } else {
    redirectIfNeeded();
  }
  
  // Función global para cambio manual de idioma
  window.InnerSight = window.InnerSight || {};
  window.InnerSight.changeLanguage = function(langCode) {
    if (languageMap[langCode]) {
      localStorage.setItem('innersight-language', langCode);
      window.location.href = window.location.origin + languageMap[langCode];
    }
  };
  
})();
