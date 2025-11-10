# Solución: URLs Incorrectas y Errores 404

**Fecha**: 2025-11-03  
**Problema**: El usuario está intentando acceder a URLs incorrectas que resultan en errores 404

---

## 🚨 Problema Identificado

El usuario está intentando acceder a:
```
❌ inner-clarity.github.io/es
❌ inner-clarity.github.io/clearpath
```

Estas URLs son **INCORRECTAS** y resultan en error 404 porque:

1. **Falta el nombre del repositorio**: GitHub Pages para repositorios de proyecto requiere el nombre del repositorio en la ruta
2. **Case-sensitivity**: GitHub es case-sensitive (`clearpath` ≠ `ClearPath`)
3. **Los sitios aún no se han desplegado** con las correcciones aplicadas

---

## ✅ URLs Correctas

### Para InnerSight:
```
✅ https://inner-clarity.github.io/InnerSight/
✅ https://inner-clarity.github.io/InnerSight/es/
✅ https://inner-clarity.github.io/InnerSight/en/
```

### Para ClearPath:
```
✅ https://inner-clarity.github.io/ClearPath/
✅ https://inner-clarity.github.io/ClearPath/es/
✅ https://inner-clarity.github.io/ClearPath/en/
```

---

## 🔧 Correcciones Aplicadas

### 1. Limpieza de Referencias a Archivos Inexistentes

**InnerSight - config.mts**

Se eliminaron referencias a archivos que no existen:
- ❌ `locale-detector.js` (no existe)
- ❌ `geo-detector.js` (no existe)
- ❌ `debug-detector.js` (no existe)
- ❌ `page-nav-enhancer.js` (no existe)
- ❌ `fixed-page-nav.css` (no existe)
- ❌ `favicon.ico` (no existe)

Estas referencias causaban errores 404 en el navegador pero no deberían causar redirecciones incorrectas.

### 2. Base Path Corregido

**Ambos proyectos**:
- ✅ InnerSight: `base: '/InnerSight/'`
- ✅ ClearPath: `base: '/ClearPath/'`

### 3. Archivo .nojekyll Creado

**Ambos proyectos**:
- ✅ `docs/public/.nojekyll` creado

---

## 📋 Estructura Correcta de URLs en GitHub Pages

### Para Repositorios de Proyecto

GitHub Pages para repositorios de proyecto (no user/organization pages) **SIEMPRE** requiere el nombre del repositorio en la ruta:

```
https://[usuario].github.io/[repositorio]/
```

**Ejemplos válidos**:
```
✅ inner-clarity.github.io/InnerSight/
✅ inner-clarity.github.io/ClearPath/
```

**Ejemplos inválidos**:
```
❌ inner-clarity.github.io/          (sin repositorio)
❌ inner-clarity.github.io/es/       (sin repositorio)
❌ inner-clarity.github.io/clearpath (minúsculas incorrectas)
```

---

## 🔍 Por Qué el Usuario Ve Estos Errores

### Causa 1: URL Incompleta
Intentar acceder a `inner-clarity.github.io/es` sin especificar el repositorio (`InnerSight` o `ClearPath`).

### Causa 2: Case Sensitivity
GitHub Pages es case-sensitive. `/clearpath` no es lo mismo que `/ClearPath`.

### Causa 3: Sitio No Desplegado
Aunque hemos corregido la configuración, los sitios **NO se han reconstruido ni desplegado** con las correcciones.

### Causa 4: Caché del Navegador
El navegador puede estar sirviendo versiones antiguas del sitio o redireccionando a URLs incorrectas guardadas en caché.

---

## 🚀 Solución Paso a Paso

### Paso 1: Reconstruir InnerSight
```cmd
cd C:\Users\aparada\InnerSight
npm run build
npm run deploy
```

### Paso 2: Reconstruir ClearPath
```cmd
cd C:\Users\aparada\ClearPath
npm run build
npm run deploy
```

### Paso 3: Esperar Propagación
Después del deploy, GitHub Pages tarda **1-2 minutos** en actualizar.

### Paso 4: Limpiar Caché del Navegador
- **Windows**: Ctrl + Shift + R
- **Mac**: Cmd + Shift + R
- O usar modo incógnito para probar

### Paso 5: Usar URLs Correctas
Acceder a las URLs completas con el nombre del repositorio:
- InnerSight: `https://inner-clarity.github.io/InnerSight/`
- ClearPath: `https://inner-clarity.github.io/ClearPath/`

---

## 📝 Estructura de URLs para Cada Proyecto

### InnerSight (12 idiomas)

```
Base:      https://inner-clarity.github.io/InnerSight/
Español:   https://inner-clarity.github.io/InnerSight/es/
English:   https://inner-clarity.github.io/InnerSight/en/
Português: https://inner-clarity.github.io/InnerSight/pt/
Français:  https://inner-clarity.github.io/InnerSight/fr/
Deutsch:   https://inner-clarity.github.io/InnerSight/de/
Italiano:  https://inner-clarity.github.io/InnerSight/it/
Русский:   https://inner-clarity.github.io/InnerSight/ru/
한국어:    https://inner-clarity.github.io/InnerSight/ko/
日本語:    https://inner-clarity.github.io/InnerSight/ja/
中文:      https://inner-clarity.github.io/InnerSight/zh/
हिन्दी:    https://inner-clarity.github.io/InnerSight/hi/
Tagalog:   https://inner-clarity.github.io/InnerSight/tl/
```

### ClearPath (7 idiomas)

```
Base:      https://inner-clarity.github.io/ClearPath/
Español:   https://inner-clarity.github.io/ClearPath/es/
English:   https://inner-clarity.github.io/ClearPath/en/
Português: https://inner-clarity.github.io/ClearPath/pt/
Français:  https://inner-clarity.github.io/ClearPath/fr/
Deutsch:   https://inner-clarity.github.io/ClearPath/de/
Italiano:  https://inner-clarity.github.io/ClearPath/it/
Русский:   https://inner-clarity.github.io/ClearPath/ru/
```

---

## 🛠️ Archivos Limpiados

### InnerSight - config.mts (head section)

**ANTES** (con referencias a archivos inexistentes):
```typescript
head: [
  ['link', { rel: 'icon', href: '/InnerSight/favicon.ico' }],
  ['link', { rel: 'stylesheet', href: '/InnerSight/fixed-page-nav.css' }],
  ['script', { src: '/InnerSight/locale-detector.js' }],
  ['script', { src: '/InnerSight/geo-detector.js' }],
  ['script', { src: '/InnerSight/debug-detector.js' }],
  ['script', { src: '/InnerSight/page-nav-enhancer.js' }],
  // ... metadatos
]
```

**DESPUÉS** (limpio, solo elementos esenciales):
```typescript
head: [
  ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
  ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
  ['meta', { name: 'theme-color', content: '#2c5aa0' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['meta', { name: 'msapplication-TileColor', content: '#2c5aa0' }]
]
```

---

## 📊 Estado Actual de los Proyectos

| Aspecto | InnerSight | ClearPath |
|---------|-----------|-----------|
| **Base path** | ✅ `/InnerSight/` | ✅ `/ClearPath/` |
| **Archivo .nojekyll** | ✅ Creado | ✅ Creado |
| **Referencias limpias** | ✅ Sí | ⏳ Pendiente verificar |
| **Build actualizado** | ⏳ Pendiente | ⏳ Pendiente |
| **Deploy actualizado** | ⏳ Pendiente | ⏳ Pendiente |

---

## ⚠️ Advertencias Importantes

### 1. No Existe Sitio Root
`inner-clarity.github.io/` (sin nombre de repositorio) **NO ES UN SITIO VÁLIDO**.

Para tener un sitio en esa URL, necesitarías crear un repositorio especial llamado exactamente `inner-clarity.github.io`.

### 2. GitHub Pages es Case-Sensitive
- `/InnerSight/` ≠ `/innersight/`
- `/ClearPath/` ≠ `/clearpath/`

### 3. VitePress Requiere Base Path Correcto
Si el `base` en `config.mts` no coincide con la URL real, los estilos no cargarán.

### 4. El Archivo .nojekyll es Obligatorio
Sin este archivo, GitHub Pages (que usa Jekyll) ignorará las carpetas que empiezan con `_`, incluyendo `_vitepress/`.

---

## 🎯 Resumen Ejecutivo

**Problema**: URLs incorrectas causando errores 404
**Causa raíz**:
1. URLs incompletas (falta nombre del repositorio)
2. Case sensitivity (minúsculas vs mayúsculas)
3. Sitios no desplegados con correcciones
4. Referencias a archivos inexistentes en configuración

**Soluciones aplicadas**:
1. ✅ Base path corregido en ambos proyectos
2. ✅ Archivo .nojekyll creado en ambos proyectos
3. ✅ Referencias a archivos inexistentes eliminadas (InnerSight)
4. ⏳ Pendiente: Build y deploy de ambos proyectos

**Acción requerida**:
1. Ejecutar `npm run build && npm run deploy` en InnerSight
2. Ejecutar `npm run build && npm run deploy` en ClearPath
3. Esperar 1-2 minutos
4. Acceder a URLs correctas con mayúsculas y nombre de repositorio

**URLs correctas**:
- InnerSight: `https://inner-clarity.github.io/InnerSight/`
- ClearPath: `https://inner-clarity.github.io/ClearPath/`

---

## 📚 Referencias

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [VitePress Base Configuration](https://vitepress.dev/reference/site-config#base)
- [Jekyll and GitHub Pages](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)

