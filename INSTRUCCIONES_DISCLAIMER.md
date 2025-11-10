# 📝 INSTRUCCIONES: Agregar Disclaimer en Todas las Páginas

**Proyecto:** InnerSight  
**Objetivo:** Agregar disclaimer en TODAS las páginas .md de TODOS los idiomas  
**Idiomas:** English, Español, Português, Deutsch, Français, Italiano, y otros

---

## 🚀 PASO A EJECUTAR

Abre PowerShell en la carpeta InnerSight y ejecuta:

```powershell
cd C:\Users\aparada\InnerSight
.\ReportesIA\scripts\agregar-disclaimer-todas-paginas.ps1
```

---

## 📋 DISCLAIMER POR IDIOMA

### **English:**
```markdown
::: tip Welcome!
Note: InnerSight is an independent educational resource, created by faithful members to support leaders, families, and professionals. It is not affiliated with or officially endorsed by The Church of Jesus Christ of Latter-day Saints.

Every inner journey begins with a first step. Yours starts here.
:::
```

### **Español:**
```markdown
::: tip ¡Bienvenido!
Nota: InnerSight es un recurso educativo independiente, creado por miembros fieles para apoyar a líderes, familias y profesionales. No está afiliado ni oficialmente respaldado por La Iglesia de Jesucristo de los Santos de los Últimos Días.

Cada viaje interior comienza con un primer paso. El tuyo comienza aquí.
:::
```

(Y así para cada idioma: pt, de, fr, it)

---

## ✅ VERIFICACIÓN

Después de ejecutar el script:

```powershell
# Verificar un archivo
Get-Content docs\es\index.md -Tail 10
```

Debe mostrar el disclaimer al final.

---

## 📊 RESULTADO ESPERADO

Todas las páginas .md en todos los idiomas tendrán el disclaimer al final, traducido a su idioma correspondiente.

---

**¡Ejecuta el script ahora!** 🚀

```powershell
.\ReportesIA\scripts\agregar-disclaimer-todas-paginas.ps1
```

