# Solución: Estilos No Cargan en GitHub Pages

**Fecha**: 2025-11-03  
**Proyecto**: InnerSight  
**Problema**: Los estilos CSS no se cargan al visitar https://inner-clarity.github.io/InnerSight/

---

## Diagnóstico

### Problema Principal

El sitio InnerSight está desplegado en GitHub Pages en la ruta `/InnerSight/`, pero la configuración de VitePress tenía `base: '/'`, lo que causaba que todos los assets (CSS, JavaScript) se generaran con rutas incorrectas.

### Síntomas Observados

1. La página cargaba solo HTML sin estilos
2. Elementos visibles en HTML plano con formato de navegador por defecto
3. Los enlaces a CSS y JS apuntaban a rutas incorrectas (ej. `/assets/style.css` en lugar de `/InnerSight/assets/style.css`)

### Análisis Técnico

Cuando VitePress genera el sitio con `base: '/'`:
- Assets: `/assets/style-abc123.css`
- Scripts: `/assets/app-def456.js`

Pero en GitHub Pages con subdirectorio `/InnerSight/`, las rutas correctas deben ser:
- Assets: `/InnerSight/assets/style-abc123.css`
- Scripts: `/InnerSight/assets/app-def456.js`

---

## Soluciones Aplicadas

### 1. Corrección de Base Path

**Archivo**: `docs/.vitepress/config.mts`

**Cambio realizado**:
```typescript
// ANTES
base: '/',

// DESPUÉS
base: '/InnerSight/',
```

Esta configuración hace que VitePress genere todas las rutas de assets con el prefijo correcto para GitHub Pages.

### 2. Creación de Archivo .nojekyll

**Archivo creado**: `docs/public/.nojekyll`

**Propósito**: GitHub Pages usa Jekyll por defecto, que ignora directorios que comienzan con guión bajo (`_`). VitePress genera archivos en `_vitepress/`, por lo que el archivo `.nojekyll` es necesario para deshabitar Jekyll y permitir que GitHub Pages sirva todos los archivos correctamente.

**Ubicación**: El archivo se coloca en `docs/public/` porque VitePress copia automáticamente el contenido de `public/` al directorio de salida (`dist/`) durante el build.

---

## Verificación de Configuración Existente

La configuración ya tenía algunas referencias correctas a `/InnerSight/` en el head:

```typescript
head: [
  ['link', { rel: 'icon', href: '/InnerSight/favicon.ico' }],
  ['link', { rel: 'stylesheet', href: '/InnerSight/fixed-page-nav.css' }],
  ['script', { src: '/InnerSight/locale-detector.js' }],
  // ... más scripts
]
```

Esto confirmó que el base path correcto debía ser `/InnerSight/`.

---

## Próximos Pasos

### Para Desplegar los Cambios

1. **Rebuild del sitio**:
   ```bash
   npm run build
   ```

2. **Deploy a GitHub Pages**:
   ```bash
   npm run deploy
   ```
   
3. **Verificar en producción**:
   - Visitar: https://inner-clarity.github.io/InnerSight/
   - Verificar que los estilos carguen correctamente
   - Probar navegación entre idiomas
   - Verificar responsive en diferentes dispositivos

### Verificación Técnica Post-Deploy

- [ ] Inspeccionar en DevTools que las rutas de CSS sean `/InnerSight/assets/...`
- [ ] Verificar que no hay errores 404 en Network tab
- [ ] Confirmar que el tema oscuro/claro funciona
- [ ] Probar búsqueda local
- [ ] Verificar navegación multiidioma

---

## Notas Técnicas

### Modo Desarrollo vs Producción

**Desarrollo local** (`npm run dev`):
- El servidor de desarrollo de VitePress maneja las rutas automáticamente
- Funciona correctamente independientemente del `base` configurado
- Se puede acceder en `http://localhost:5173/`

**Producción en GitHub Pages**:
- Requiere `base: '/InnerSight/'` porque el sitio está en un subdirectorio
- GitHub Pages sirve desde `https://inner-clarity.github.io/InnerSight/`
- El archivo `.nojekyll` es esencial

### Buenas Prácticas Aplicadas

1. **Base path configurable**: El comentario en config indica claramente cuándo usar cada valor
2. **Assets en public/**: Archivos como `.nojekyll` se colocan en `public/` para que se copien automáticamente
3. **Documentación**: Este reporte queda como referencia para futuros deploys

---

## Resumen

**Problema**: Estilos no cargan en GitHub Pages  
**Causa**: `base: '/'` incorrecto para subdirectorio de GitHub Pages  
**Solución**: 
1. Cambiar a `base: '/InnerSight/'`
2. Crear archivo `.nojekyll` en `docs/public/`

**Estado**: ✅ Correcciones aplicadas, listo para rebuild y deploy

