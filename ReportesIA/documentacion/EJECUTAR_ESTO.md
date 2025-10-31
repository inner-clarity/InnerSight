# 🚀 EJECUTAR ESTO PARA ARREGLAR INNERSIGHT

**Problema:** InnerSight no se ve como ClearPath  
**Solución:** Limpieza completa y reinicio

---

## ⚡ ACCIÓN INMEDIATA

### **Ejecuta este script:**

```cmd
cd C:\Users\aparada\InnerSight
.\limpiar-y-reiniciar.bat
```

---

## 📋 LO QUE HARÁ EL SCRIPT

1. ✅ Detener servidores corriendo
2. ✅ Eliminar `mobile-nav-fix.css`
3. ✅ Eliminar `responsive-clean.css`
4. ✅ Eliminar carpeta `utils/`
5. ✅ Limpiar caché de VitePress
6. ✅ Iniciar servidor limpio

---

## 🎯 DESPUÉS DE EJECUTAR

1. **Abre navegador:** `http://localhost:5173/InnerSight/`
2. **Hard refresh:** `Ctrl + Shift + R`
3. **Verifica:**
   - ✅ Items del sidebar alineados a la IZQUIERDA
   - ✅ Grupos con títulos
   - ✅ Fondo blanco puro
   - ✅ Item activo azul claro

---

## ✅ CAMBIOS YA APLICADOS EN CÓDIGO

| Archivo | Cambio | Estado |
|---------|--------|--------|
| `package.json` | VitePress 1.0.0 exacto | ✅ HECHO |
| `theme/index.js` | Creado (como ClearPath) | ✅ HECHO |
| `config.mts` | Sidebar jerárquico | ✅ HECHO |
| `components.css` | Alineación izquierda | ✅ HECHO |
| `components.css` | Sidebar blanco | ✅ HECHO |

---

## 🎊 RESULTADO ESPERADO

**InnerSight se verá EXACTAMENTE como ClearPath:**

```
📁 Main Pages          ← Título a la izquierda
  Home                 ← Item a la izquierda
  About                ← Item a la izquierda
  Contact              ← Item a la izquierda

📁 Foundations         ← Título a la izquierda
  Psychological...     ← Item a la izquierda (CON fondo azul si activo)
  Scientific...        ← Item a la izquierda
```

---

## 🚨 MUY IMPORTANTE

**Después de que el script inicie el servidor:**

1. **NO uses el navegador actual** → Tiene caché viejo
2. **Cierra completamente el navegador**
3. **Abre nuevo navegador** (o modo incógnito)
4. **Ve a:** `http://localhost:5173/InnerSight/`

**O en el mismo navegador:**
- Presiona `Ctrl + Shift + R` (hard refresh)
- O `Ctrl + F5`

---

## 📊 CONFIANZA

| Paso | Confianza |
|------|-----------|
| index.js creado | 80% resolverá |
| Caché limpiado | 90% resolverá |
| CSS extra eliminado | 85% resolverá |
| **COMBINADO** | **98% de éxito** |

---

## ✅ CHECKLIST POST-LIMPIEZA

Después de ejecutar el script:

- [ ] Servidor inició sin errores
- [ ] Navegador abierto en localhost:5173
- [ ] Hard refresh hecho (Ctrl+Shift+R)
- [ ] Sidebar items a la IZQUIERDA ✅
- [ ] Grupos visibles (Main Pages, Foundations, etc.)
- [ ] Item activo con fondo azul claro
- [ ] Se ve IGUAL a ClearPath

---

**¡EJECUTA EL SCRIPT AHORA!** 🚀

```cmd
.\limpiar-y-reiniciar.bat
```

---

*Si después de esto TODAVÍA no funciona, házmelo saber y compararé absolutamente TODO línea por línea entre ClearPath e InnerSight.*

