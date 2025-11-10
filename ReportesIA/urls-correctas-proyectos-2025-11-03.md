# URLs Correctas - Proyectos GitHub Pages

**Fecha**: 2025-11-03  
**Proyectos**: InnerSight y ClearPath

---

## 🚨 Problema Común: Case Sensitivity

GitHub Pages es **case-sensitive** (distingue mayúsculas de minúsculas). Usar la URL incorrecta resulta en error 404.

---

## 📋 InnerSight

### Repositorio
- **GitHub**: `https://github.com/inner-clarity/InnerSight`
- **Base path**: `/InnerSight/` (con I y S mayúsculas)

### URLs Correctas ✅

**URL Principal**:
```
https://inner-clarity.github.io/InnerSight/
```

**URLs por Idioma**:
- Español: `https://inner-clarity.github.io/InnerSight/es/`
- English: `https://inner-clarity.github.io/InnerSight/en/`
- Português: `https://inner-clarity.github.io/InnerSight/pt/`
- Français: `https://inner-clarity.github.io/InnerSight/fr/`
- Deutsch: `https://inner-clarity.github.io/InnerSight/de/`
- Italiano: `https://inner-clarity.github.io/InnerSight/it/`
- Русский: `https://inner-clarity.github.io/InnerSight/ru/`
- 한국어: `https://inner-clarity.github.io/InnerSight/ko/`
- 日本語: `https://inner-clarity.github.io/InnerSight/ja/`
- 中文: `https://inner-clarity.github.io/InnerSight/zh/`
- हिन्दी: `https://inner-clarity.github.io/InnerSight/hi/`
- Tagalog: `https://inner-clarity.github.io/InnerSight/tl/`

### URLs Incorrectas ❌

```
❌ inner-clarity.github.io/innersight    (minúsculas)
❌ inner-clarity.github.io/Innersight    (solo I mayúscula)
❌ inner-clarity.github.io/es            (sin repositorio)
❌ inner-clarity.github.io/              (sin repositorio)
✅ inner-clarity.github.io/InnerSight/   (CORRECTO)
```

---

## 📋 ClearPath

### Repositorio
- **GitHub**: `https://github.com/inner-clarity/ClearPath`
- **Base path**: `/ClearPath/` (con C y P mayúsculas)

### URLs Correctas ✅

**URL Principal**:
```
https://inner-clarity.github.io/ClearPath/
```

**URLs por Idioma**:
- Español: `https://inner-clarity.github.io/ClearPath/es/`
- English: `https://inner-clarity.github.io/ClearPath/en/`
- Português: `https://inner-clarity.github.io/ClearPath/pt/`
- Français: `https://inner-clarity.github.io/ClearPath/fr/`
- Deutsch: `https://inner-clarity.github.io/ClearPath/de/`
- Italiano: `https://inner-clarity.github.io/ClearPath/it/`
- Русский: `https://inner-clarity.github.io/ClearPath/ru/`

### URLs Incorrectas ❌

```
❌ inner-clarity.github.io/clearpath     (minúsculas)
❌ inner-clarity.github.io/Clearpath     (solo C mayúscula)
❌ inner-clarity.github.io/clearPath     (P minúscula)
✅ inner-clarity.github.io/ClearPath/    (CORRECTO)
```

---

## 🔧 Configuración Técnica

### InnerSight - config.mts
```typescript
export default defineConfig({
  base: '/InnerSight/',  // ← Con I y S mayúsculas
  // ...
})
```

### ClearPath - config.mts
```typescript
export default defineConfig({
  base: '/ClearPath/',  // ← Con C y P mayúsculas
  // ...
})
```

---

## 📝 Reglas para URLs en GitHub Pages

1. **Case-sensitive**: `/InnerSight/` ≠ `/innersight/`
2. **Debe coincidir con el nombre del repositorio**
3. **Incluir barra final**: `/InnerSight/` (recomendado)
4. **HTTPS obligatorio**: `https://` no `http://`
5. **Subdirectorio obligatorio para repositorios de proyecto**: No usar solo `inner-clarity.github.io/`

---

## 🌐 Comparación de Ambos Proyectos

| Aspecto | InnerSight | ClearPath |
|---------|-----------|-----------|
| **Repositorio** | `inner-clarity/InnerSight` | `inner-clarity/ClearPath` |
| **Base Path** | `/InnerSight/` | `/ClearPath/` |
| **URL Principal** | `...io/InnerSight/` | `...io/ClearPath/` |
| **Idiomas** | 12 idiomas | 7 idiomas |
| **Configurado** | ✅ Sí | ✅ Sí |
| **Desplegado** | ⏳ Pendiente | ⏳ Pendiente |

---

## 🚀 Estado de Despliegues

### InnerSight
- **Configuración**: ✅ Corregida (2025-11-03)
- **Build nuevo**: ⏳ Pendiente
- **Deploy**: ⏳ Pendiente
- **Archivo .nojekyll**: ✅ Creado

### ClearPath
- **Configuración**: ✅ Corregida (2025-11-03)
- **Build nuevo**: ⏳ Pendiente
- **Deploy**: ⏳ Pendiente
- **Archivo .nojekyll**: ✅ Creado

---

## ✅ Checklist para Deploy

### Antes de Acceder al Sitio

- [ ] Ejecutar `npm run build` en el proyecto
- [ ] Ejecutar `npm run deploy` en el proyecto
- [ ] Esperar 1-2 minutos para propagación de GitHub Pages
- [ ] Limpiar caché del navegador (Ctrl + Shift + R)
- [ ] Usar la URL **EXACTA** con mayúsculas correctas
- [ ] Incluir barra final en la URL

---

## 🔗 URLs Rápidas (Bookmarks Recomendados)

### InnerSight
```
Principal: https://inner-clarity.github.io/InnerSight/
Español:   https://inner-clarity.github.io/InnerSight/es/
English:   https://inner-clarity.github.io/InnerSight/en/
```

### ClearPath
```
Principal: https://inner-clarity.github.io/ClearPath/
Español:   https://inner-clarity.github.io/ClearPath/es/
English:   https://inner-clarity.github.io/ClearPath/en/
```

---

## 📞 Solución de Problemas

### Si recibes 404:

1. **Verifica mayúsculas**: ¿Usas `/InnerSight/` o `/ClearPath/` exactamente?
2. **Verifica barra final**: Agrega `/` al final de la URL
3. **Limpia caché**: Presiona Ctrl + Shift + R (Windows) o Cmd + Shift + R (Mac)
4. **Verifica deploy**: ¿Se ejecutó `npm run deploy` exitosamente?
5. **Espera propagación**: GitHub Pages puede tardar 1-2 minutos en actualizar
6. **Verifica rama gh-pages**: `git branch -a` debe mostrar `remotes/origin/gh-pages`

### Si los estilos no cargan:

1. **Verifica base path**: Debe estar en `config.mts` como `/NombreRepo/`
2. **Verifica .nojekyll**: Debe existir `docs/public/.nojekyll`
3. **Rebuild**: Ejecuta `npm run build` nuevamente
4. **Redeploy**: Ejecuta `npm run deploy` nuevamente

---

## 📚 Referencias

- **Documentación GitHub Pages**: https://docs.github.com/en/pages
- **VitePress Base Path**: https://vitepress.dev/reference/site-config#base
- **Solución Estilos**: Ver `ReportesIA/solucion-estilos-github-pages-2025-11-03.md`

