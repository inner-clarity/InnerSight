// Detector de idioma por geolocalización IP para InnerSight
(function() {
  'use strict';
  
  // Mapeo de países a idiomas
  const countryLanguageMap = {
    // Países de habla hispana
    'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'PE': 'es', 'VE': 'es',
    'CL': 'es', 'EC': 'es', 'UY': 'es', 'PY': 'es', 'BO': 'es', 'CR': 'es',
    'GT': 'es', 'HN': 'es', 'NI': 'es', 'PA': 'es', 'DO': 'es', 'CU': 'es',
    'PR': 'es', 'US': 'es', // Para usuarios hispanos en EE.UU.
    
    // Países de habla portuguesa
    'BR': 'pt', 'PT': 'pt',
    
    // Países de habla francesa
    'FR': 'fr', 'CA': 'fr', 'BE': 'fr', 'CH': 'fr',
    
    // Países de habla alemana
    'DE': 'de', 'AT': 'de', 'LI': 'de', 'CH': 'de', // Suiza puede ser alemán o francés
    
    // Países de habla italiana
    'IT': 'it', 'SM': 'it', 'VA': 'it',
    
    // Países de habla rusa
    'RU': 'ru', 'BY': 'ru', 'KZ': 'ru', 'KG': 'ru', 'TJ': 'ru', 'TM': 'ru', 'UZ': 'ru',
    'AM': 'ru', 'AZ': 'ru', 'GE': 'ru', 'MD': 'ru', 'UA': 'ru', 'EE': 'ru', 'LV': 'ru', 'LT': 'ru',
    
    // Países de habla coreana
    'KR': 'ko',
    
    // Países de habla japonesa
    'JP': 'ja',
    
    // Países de habla china
    'CN': 'zh', 'TW': 'zh', 'HK': 'zh', 'MO': 'zh', 'SG': 'zh',
    
    // Países de habla hindi
    'IN': 'hi',
    
    // Filipinas
    'PH': 'tl'
  };
  
  const languageRoutes = {
    'es': '/es/',
    'pt': '/pt/',
    'fr': '/fr/',
    'de': '/de/',
    'it': '/it/',
    'ru': '/ru/',
    'ko': '/ko/',
    'ja': '/ja/',
    'zh': '/zh/',
    'hi': '/hi/',
    'tl': '/tl/'
  };
  
  // Función para detectar país por IP
  async function detectCountryByIP() {
    try {
      // Usar servicio gratuito de geolocalización
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      return data.country_code;
    } catch (error) {
      console.log('Error detectando país por IP:', error);
      return null;
    }
  }
  
  // Función para detectar idioma por geolocalización
  async function detectLanguageByGeo() {
    const country = await detectCountryByIP();
    if (country && countryLanguageMap[country]) {
      return countryLanguageMap[country];
    }
    return null;
  }
  
  // Función principal de detección geo
  async function geoDetectAndRedirect() {
    // Solo ejecutar si estamos en la página principal
    const currentPath = window.location.pathname;
    if (currentPath !== '/InnerSight/' && currentPath !== '/InnerSight') {
      return;
    }
    
    // Verificar si ya hay preferencia guardada
    const savedLanguage = localStorage.getItem('innersight-language');
    if (savedLanguage) {
      return; // Ya tiene preferencia, no cambiar
    }
    
    // Verificar si ya visitó en esta sesión
    const hasVisited = sessionStorage.getItem('innersight-visited');
    if (hasVisited) {
      return;
    }
    
    try {
      const detectedLang = await detectLanguageByGeo();
      if (detectedLang && languageRoutes[detectedLang]) {
        // Marcar como visitado
        sessionStorage.setItem('innersight-visited', 'true');
        
        // Redirigir al idioma detectado
        window.location.href = window.location.origin + languageRoutes[detectedLang];
      }
    } catch (error) {
      console.log('Error en detección geo:', error);
    }
  }
  
  // Ejecutar detección geo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', geoDetectAndRedirect);
  } else {
    geoDetectAndRedirect();
  }
  
})();
