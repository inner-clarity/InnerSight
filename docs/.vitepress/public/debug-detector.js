// Script de debug para probar detección de idioma
(function() {
  'use strict';
  
  // Función para simular diferentes países
  window.simulateCountry = function(countryCode) {
    const countryMap = {
      'ES': { name: 'España', lang: 'es' },
      'MX': { name: 'México', lang: 'es' },
      'AR': { name: 'Argentina', lang: 'es' },
      'BR': { name: 'Brasil', lang: 'pt' },
      'FR': { name: 'Francia', lang: 'fr' },
      'DE': { name: 'Alemania', lang: 'de' },
      'IT': { name: 'Italia', lang: 'it' },
      'RU': { name: 'Rusia', lang: 'ru' },
      'KR': { name: 'Corea del Sur', lang: 'ko' },
      'JP': { name: 'Japón', lang: 'ja' },
      'CN': { name: 'China', lang: 'zh' },
      'TW': { name: 'Taiwán', lang: 'zh' },
      'HK': { name: 'Hong Kong', lang: 'zh' },
      'IN': { name: 'India', lang: 'hi' },
      'PH': { name: 'Filipinas', lang: 'tl' },
      'US': { name: 'Estados Unidos', lang: 'en' }
    };
    
    const country = countryMap[countryCode];
    if (country) {
      // Simular respuesta de geolocalización
      window.mockCountry = countryCode;
      console.log(`🌍 Simulando país: ${country.name} (${countryCode})`);
      console.log(`📍 Idioma esperado: ${country.lang}`);
      
      // Limpiar preferencias para probar detección
      localStorage.removeItem('innersight-language');
      sessionStorage.removeItem('innersight-visited');
      
      console.log('✅ Preferencias limpiadas. Recarga la página para probar.');
    } else {
      console.error('❌ País no válido. Usa: ES, MX, AR, BR, FR, DE, IT, RU, KR, JP, CN, TW, HK, IN, PH, US');
    }
  };
  
  // Función para simular diferentes idiomas del navegador
  window.simulateLanguage = function(langCode) {
    // Backup del idioma original
    if (!window.originalLanguage) {
      window.originalLanguage = navigator.language;
      window.originalLanguages = [...navigator.languages];
    }
    
    // Simular nuevo idioma
    Object.defineProperty(navigator, 'language', {
      writable: true,
      value: langCode
    });
    
    Object.defineProperty(navigator, 'languages', {
      writable: true,
      value: [langCode, 'en']
    });
    
    console.log(`🌐 Simulando idioma del navegador: ${langCode}`);
    console.log('📍 Navegador.language:', navigator.language);
    console.log('📍 Navegador.languages:', navigator.languages);
  };
  
  // Función para restaurar idioma original
  window.restoreLanguage = function() {
    if (window.originalLanguage) {
      Object.defineProperty(navigator, 'language', {
        writable: true,
        value: window.originalLanguage
      });
      
      Object.defineProperty(navigator, 'languages', {
        writable: true,
        value: window.originalLanguages
      });
      
      console.log('🔄 Idioma restaurado a:', window.originalLanguage);
    }
  };
  
  // Función para probar detección
  window.testDetection = function() {
    console.log('🧪 === PRUEBA DE DETECCIÓN DE IDIOMA ===');
    console.log('📍 Navegador.language:', navigator.language);
    console.log('📍 Navegador.languages:', navigator.languages);
    console.log('📍 localStorage:', localStorage.getItem('innersight-language'));
    console.log('📍 sessionStorage:', sessionStorage.getItem('innersight-visited'));
    console.log('📍 País simulado:', window.mockCountry || 'No simulado');
    
    // Simular detección de país por IP
    if (window.mockCountry) {
      console.log('🌍 Usando país simulado:', window.mockCountry);
    } else {
      console.log('🌍 Detectando país real por IP...');
      fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
          console.log('📍 País detectado por IP:', data.country_name, `(${data.country_code})`);
        })
        .catch(error => {
          console.error('❌ Error detectando país:', error);
        });
    }
  };
  
  // Función para limpiar todo y probar desde cero
  window.resetTest = function() {
    localStorage.removeItem('innersight-language');
    sessionStorage.removeItem('innersight-visited');
    delete window.mockCountry;
    window.restoreLanguage();
    console.log('🔄 Todo reseteado. Listo para nueva prueba.');
  };
  
  // Mostrar ayuda
  console.log('🧪 === HERRAMIENTAS DE PRUEBA INNERSIGHT ===');
  console.log('');
  console.log('📋 Comandos disponibles:');
  console.log('  simulateCountry("ES")  - Simular España');
  console.log('  simulateCountry("MX")  - Simular México');
  console.log('  simulateCountry("BR")  - Simular Brasil');
  console.log('  simulateCountry("FR")  - Simular Francia');
  console.log('  simulateCountry("DE")  - Simular Alemania');
  console.log('  simulateCountry("IT")  - Simular Italia');
  console.log('  simulateCountry("RU")  - Simular Rusia');
  console.log('  simulateCountry("KR")  - Simular Corea del Sur');
  console.log('  simulateCountry("JP")  - Simular Japón');
  console.log('  simulateCountry("CN")  - Simular China');
  console.log('  simulateCountry("TW")  - Simular Taiwán');
  console.log('  simulateCountry("HK")  - Simular Hong Kong');
  console.log('  simulateCountry("IN")  - Simular India');
  console.log('  simulateCountry("PH")  - Simular Filipinas');
  console.log('  simulateCountry("US")  - Simular Estados Unidos');
  console.log('');
  console.log('  simulateLanguage("es-ES") - Simular español España');
  console.log('  simulateLanguage("pt-BR") - Simular portugués Brasil');
  console.log('  simulateLanguage("fr-FR") - Simular francés Francia');
  console.log('  simulateLanguage("de-DE") - Simular alemán Alemania');
  console.log('  simulateLanguage("it-IT") - Simular italiano Italia');
  console.log('  simulateLanguage("ru-RU") - Simular ruso Rusia');
  console.log('  simulateLanguage("ko-KR") - Simular coreano Corea del Sur');
  console.log('  simulateLanguage("ja-JP") - Simular japonés Japón');
  console.log('  simulateLanguage("zh-CN") - Simular chino China');
  console.log('  simulateLanguage("zh-TW") - Simular chino Taiwán');
  console.log('  simulateLanguage("zh-HK") - Simular chino Hong Kong');
  console.log('  simulateLanguage("hi-IN") - Simular hindi India');
  console.log('  simulateLanguage("tl-PH") - Simular tagalo Filipinas');
  console.log('');
  console.log('  testDetection()  - Ver estado actual');
  console.log('  resetTest()      - Limpiar todo');
  console.log('  restoreLanguage() - Restaurar idioma original');
  console.log('');
  console.log('🚀 Para probar:');
  console.log('1. Ejecuta simulateCountry("ES") o simulateLanguage("es-ES")');
  console.log('2. Ve a http://localhost:8080/InnerSight/');
  console.log('3. Observa si te redirige automáticamente');
  
})();
