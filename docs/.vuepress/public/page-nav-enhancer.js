// Enhancer para el page-nav fijo
(function() {
  'use strict';
  
  // Función para mover page-edit dentro de page-nav
  function movePageEditToNav() {
    const pageEdit = document.querySelector('.page-edit');
    const pageNav = document.querySelector('.page-nav');
    
    console.log('🔍 Buscando elementos:', { pageEdit, pageNav });
    
    if (!pageEdit) {
      console.log('❌ No se encontró .page-edit');
      return;
    }
    
    if (!pageNav) {
      console.log('❌ No se encontró .page-nav');
      return;
    }
    
    console.log('✅ Ambos elementos encontrados, procediendo...');
    
    // Crear contenedor para ambos elementos
    const navContainer = document.createElement('div');
    navContainer.className = 'page-nav-container';
    navContainer.style.cssText = `
      position: fixed !important;
      bottom: 0 !important;
      left: 0 !important;
      right: 0 !important;
      z-index: 10 !important;
      background: white !important;
      border-top: 1px solid #eaecef !important;
      box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1) !important;
    `;
    
    // Ajustar estilos de page-edit para que sea parte del nav
    pageEdit.style.cssText = `
      position: relative !important;
      bottom: auto !important;
      left: auto !important;
      right: auto !important;
      z-index: auto !important;
      background: transparent !important;
      border-top: 1px solid #eaecef !important;
      box-shadow: none !important;
      padding: 1rem 2rem !important;
      margin: 0 !important;
      max-width: none !important;
    `;
    
    // Ajustar estilos de page-nav para que sea parte del contenedor
    pageNav.style.cssText = `
      position: relative !important;
      bottom: auto !important;
      left: auto !important;
      right: auto !important;
      z-index: auto !important;
      background: transparent !important;
      border-top: none !important;
      box-shadow: none !important;
      padding: 0 !important;
      margin: 0 !important;
      max-width: none !important;
    `;
    
    // Insertar el contenedor al final del body
    document.body.appendChild(navContainer);
    
    // Mover page-edit al contenedor
    navContainer.appendChild(pageEdit);
    
    // Mover page-nav al contenedor
    navContainer.appendChild(pageNav);
    
    // Ajustar el contenido principal para el nuevo contenedor
    const content = document.querySelector('.theme-default-content');
    if (content) {
      const navHeight = navContainer.offsetHeight;
      content.style.paddingBottom = `${navHeight + 20}px`;
    }
    
    console.log('✅ Page-edit movido dentro de page-nav');
    console.log('📊 Contenedor creado:', navContainer);
  }
  
  // Función para mejorar el page-nav fijo
  function enhancePageNav() {
    // Primero mover page-edit dentro de page-nav
    movePageEditToNav();
    
    const pageNav = document.querySelector('.page-nav');
    if (!pageNav) return;
    
    // Agregar clase para identificación
    pageNav.classList.add('fixed-page-nav');
    
    // Asegurar que el contenido principal tenga suficiente espacio
    const content = document.querySelector('.theme-default-content') || document.querySelector('.content');
    if (content) {
      content.classList.add('has-fixed-nav');
    }
    
    // Agregar padding al body si es necesario
    const body = document.body;
    if (body) {
      body.classList.add('has-fixed-page-nav');
    }
    
    // Mejorar accesibilidad
    pageNav.setAttribute('role', 'navigation');
    pageNav.setAttribute('aria-label', 'Navegación de página');
    
    // Agregar indicador visual de que es fijo
    const indicator = document.createElement('div');
    indicator.className = 'fixed-nav-indicator';
    indicator.innerHTML = '📍';
    indicator.title = 'Navegación fija';
    indicator.style.cssText = `
      position: fixed;
      bottom: 5px;
      right: 5px;
      background: #4299e1;
      color: white;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      z-index: 101;
      opacity: 0.7;
      cursor: help;
    `;
    
    // Solo agregar indicador en desarrollo
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      document.body.appendChild(indicator);
    }
  }
  
  // Función para ocultar/mostrar nav en scroll (opcional)
  function addScrollBehavior() {
    const pageNav = document.querySelector('.page-nav');
    if (!pageNav) return;
    
    let lastScrollTop = 0;
    let isHidden = false;
    
    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Solo ocultar si el usuario hace scroll hacia abajo y no está cerca del final
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        if (!isHidden) {
          pageNav.style.transform = 'translateY(100%)';
          isHidden = true;
        }
      } else if (scrollTop < lastScrollTop || scrollTop < 100) {
        if (isHidden) {
          pageNav.style.transform = 'translateY(0)';
          isHidden = false;
        }
      }
      
      lastScrollTop = scrollTop;
    });
  }
  
  // Función para agregar botón de scroll to top
  function addScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top-btn';
    scrollToTopBtn.title = 'Volver arriba';
    scrollToTopBtn.style.cssText = `
      position: fixed;
      bottom: 80px;
      right: 20px;
      background: #4299e1;
      color: white;
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      font-size: 18px;
      cursor: pointer;
      z-index: 99;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.3s ease;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    `;
    
    // Mostrar/ocultar botón según scroll
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.transform = 'translateY(0)';
      } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.transform = 'translateY(20px)';
      }
    });
    
    // Funcionalidad del botón
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    document.body.appendChild(scrollToTopBtn);
  }
  
  // Función para verificar y ejecutar cuando los elementos estén listos
  function waitForElements() {
    const pageEdit = document.querySelector('.page-edit');
    const pageNav = document.querySelector('.page-nav');
    
    if (pageEdit && pageNav) {
      console.log('✅ Elementos encontrados, ejecutando...');
      enhancePageNav();
      return true;
    }
    
    console.log('⏳ Esperando elementos...', { pageEdit, pageNav });
    return false;
  }
  
  // Inicializar cuando el DOM esté listo
  function init() {
    console.log('🚀 Iniciando page-nav enhancer...');
    
    // Intentar ejecutar inmediatamente
    if (waitForElements()) {
      addScrollToTop();
      return;
    }
    
    // Si no están listos, esperar con intervalos
    const interval = setInterval(() => {
      if (waitForElements()) {
        clearInterval(interval);
        addScrollToTop();
      }
    }, 100);
    
    // Timeout de seguridad después de 5 segundos
    setTimeout(() => {
      clearInterval(interval);
      console.log('⚠️ Timeout: Elementos no encontrados después de 5 segundos');
    }, 5000);
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // Función global para debug manual
  window.debugPageNav = function() {
    const pageEdit = document.querySelector('.page-edit');
    const pageNav = document.querySelector('.page-nav');
    const container = document.querySelector('.page-nav-container');
    
    console.log('🔍 DEBUG - Estado actual:');
    console.log('Page-edit:', pageEdit);
    console.log('Page-nav:', pageNav);
    console.log('Container:', container);
    
    if (pageEdit && pageNav) {
      console.log('✅ Ambos elementos existen');
      console.log('Page-edit padre:', pageEdit.parentElement);
      console.log('Page-nav padre:', pageNav.parentElement);
    } else {
      console.log('❌ Faltan elementos');
    }
    
    return { pageEdit, pageNav, container };
  };
  
  // Función global para ejecutar manualmente
  window.movePageEditNow = function() {
    console.log('🔄 Ejecutando movePageEditToNav manualmente...');
    movePageEditToNav();
  };
  
})();
