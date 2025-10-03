// Selector de idioma discreto para InnerSight
(function() {
  'use strict';
  
  // Solo agregar el selector si no existe ya uno de VuePress
  if (document.querySelector('.dropdown-wrapper') || document.querySelector('.nav-links .dropdown-title')) {
    return; // Ya existe selector de idioma de VuePress
  }
  
  // Configuración de idiomas
  const languages = {
    'en': { name: 'English', flag: '🇺🇸', path: '/' },
    'es': { name: 'Español', flag: '🇪🇸', path: '/es/' },
    'pt': { name: 'Português', flag: '🇧🇷', path: '/pt/' },
    'fr': { name: 'Français', flag: '🇫🇷', path: '/fr/' },
    'tl': { name: 'Tagalog', flag: '🇵🇭', path: '/tl/' }
  };
  
  // Crear selector de idioma discreto
  function createLanguageSelector() {
    const currentPath = window.location.pathname;
    let currentLang = 'en';
    
    // Determinar idioma actual
    if (currentPath.includes('/es/')) currentLang = 'es';
    else if (currentPath.includes('/pt/')) currentLang = 'pt';
    else if (currentPath.includes('/fr/')) currentLang = 'fr';
    else if (currentPath.includes('/tl/')) currentLang = 'tl';
    
    // Crear contenedor discreto
    const container = document.createElement('div');
    container.id = 'language-selector';
    container.innerHTML = `
      <div class="language-dropdown">
        <button class="language-button" id="language-btn" title="Cambiar idioma">
          <span class="flag">${languages[currentLang].flag}</span>
        </button>
        <div class="language-menu" id="language-menu">
          ${Object.entries(languages).map(([code, lang]) => `
            <a href="${lang.path}" class="language-option ${code === currentLang ? 'active' : ''}" title="${lang.name}">
              <span class="flag">${lang.flag}</span>
              <span class="language-name">${lang.name}</span>
            </a>
          `).join('')}
        </div>
      </div>
    `;
    
    // Agregar estilos
    const style = document.createElement('style');
    style.textContent = `
      #language-selector {
        position: fixed;
        top: 15px;
        right: 15px;
        z-index: 1000;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      
      .language-dropdown {
        position: relative;
        display: inline-block;
      }
      
      .language-button {
        background: transparent;
        border: none;
        border-radius: 4px;
        padding: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        transition: all 0.2s ease;
        width: 32px;
        height: 32px;
      }
      
      .language-button:hover {
        background: rgba(0, 0, 0, 0.05);
        transform: scale(1.1);
      }
      
      .language-menu {
        position: absolute;
        top: 100%;
        right: 0;
        background: rgba(255, 255, 255, 0.95);
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        min-width: 140px;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);
        transition: all 0.2s ease;
        z-index: 1001;
        backdrop-filter: blur(10px);
      }
      
      .language-dropdown.open .language-menu {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
      
      .language-option {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 12px;
        text-decoration: none;
        color: #2d3748;
        transition: background-color 0.2s ease;
        border-bottom: 1px solid #f7fafc;
      }
      
      .language-option:last-child {
        border-bottom: none;
        border-radius: 0 0 6px 6px;
      }
      
      .language-option:first-child {
        border-radius: 6px 6px 0 0;
      }
      
      .language-option:hover {
        background-color: #f7fafc;
      }
      
      .language-option.active {
        background-color: #ebf8ff;
        color: #2b6cb0;
      }
      
      .flag {
        font-size: 16px;
      }
      
      .language-name {
        font-weight: 500;
      }
      
      .dropdown-arrow {
        font-size: 10px;
        transition: transform 0.2s ease;
      }
      
      .language-dropdown.open .dropdown-arrow {
        transform: rotate(180deg);
      }
      
      @media (max-width: 768px) {
        #language-selector {
          top: 10px;
          right: 10px;
        }
        
        .language-button {
          padding: 6px 10px;
          font-size: 12px;
        }
        
        .language-menu {
          min-width: 120px;
        }
      }
    `;
    
    document.head.appendChild(style);
    
    // Agregar funcionalidad
    const button = container.querySelector('#language-btn');
    const menu = container.querySelector('#language-menu');
    const dropdown = container.querySelector('.language-dropdown');
    
    button.addEventListener('click', (e) => {
      e.preventDefault();
      dropdown.classList.toggle('open');
    });
    
    // Cerrar al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (!container.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });
    
    return container;
  }
  
  // Agregar selector cuando el DOM esté listo
  function addLanguageSelector() {
    if (document.getElementById('language-selector')) {
      return; // Ya existe
    }
    
    const selector = createLanguageSelector();
    document.body.appendChild(selector);
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addLanguageSelector);
  } else {
    addLanguageSelector();
  }
  
})();
