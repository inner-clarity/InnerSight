# 🚀 Instrucciones Correctas para InnerSight VitePress

## ❌ Problema Identificado

El error 404 persiste porque:

1. **VitePress necesita `index.md`** en la raíz, no `README.md`
2. **El base path debe ser consistente** en desarrollo y producción
3. **Problemas con WSL** en el entorno actual

## ✅ Soluciones Aplicadas

### 1. Archivo de Inicio Correcto ✅
- ✅ Creado `docs/index.md` con layout home
- ✅ Configuración hero correcta
- ✅ Features section agregada

### 2. Configuración Base Path Corregida ✅
- ✅ Base path fijo: `/InnerSight/`
- ✅ Consistente en desarrollo y producción

### 3. Scripts de Inicio Creados ✅
- ✅ `start-dev.bat` - Para Windows
- ✅ `start-dev.ps1` - Para PowerShell

---

## 🚀 Cómo Ejecutar Correctamente

### Opción 1: Script Batch (Recomendado)
```cmd
# Doble clic en start-dev.bat
# O ejecutar desde terminal:
start-dev.bat
```

### Opción 2: Script PowerShell
```powershell
# Ejecutar como administrador si es necesario:
.\start-dev.ps1
```

### Opción 3: Comando Directo
```cmd
cd C:\Users\aparada\InnerSight
npm install
npm run dev
```

---

## 🌐 URLs Correctas

### Desarrollo
- ✅ **Página principal:** `http://localhost:5173/InnerSight/`
- ✅ **Inglés:** `http://localhost:5173/InnerSight/`
- ✅ **Español:** `http://localhost:5173/InnerSight/es/`
- ✅ **Português:** `http://localhost:5173/InnerSight/pt/`
- ✅ **Français:** `http://localhost:5173/InnerSight/fr/`
- ✅ **Deutsch:** `http://localhost:5173/InnerSight/de/`
- ✅ **Italiano:** `http://localhost:5173/InnerSight/it/`
- ✅ **Русский:** `http://localhost:5173/InnerSight/ru/`
- ✅ **한국어:** `http://localhost:5173/InnerSight/ko/`
- ✅ **日本語:** `http://localhost:5173/InnerSight/ja/`
- ✅ **中文:** `http://localhost:5173/InnerSight/zh/`
- ✅ **हिन्दी:** `http://localhost:5173/InnerSight/hi/`
- ✅ **Tagalog:** `http://localhost:5173/InnerSight/tl/`

### Producción
- ✅ **Página principal:** `https://inner-clarity.github.io/InnerSight/`
- ✅ **Español:** `https://inner-clarity.github.io/InnerSight/es/`
- ✅ **Português:** `https://inner-clarity.github.io/InnerSight/pt/`
- ✅ **Français:** `https://inner-clarity.github.io/InnerSight/fr/`
- ✅ **Deutsch:** `https://inner-clarity.github.io/InnerSight/de/`
- ✅ **Italiano:** `https://inner-clarity.github.io/InnerSight/it/`
- ✅ **Русский:** `https://inner-clarity.github.io/InnerSight/ru/`
- ✅ **한국어:** `https://inner-clarity.github.io/InnerSight/ko/`
- ✅ **日本語:** `https://inner-clarity.github.io/InnerSight/ja/`
- ✅ **中文:** `https://inner-clarity.github.io/InnerSight/zh/`
- ✅ **हिन्दी:** `https://inner-clarity.github.io/InnerSight/hi/`
- ✅ **Tagalog:** `https://inner-clarity.github.io/InnerSight/tl/`

---

## 🔧 Troubleshooting

### Error: "Cannot find module 'vitepress'"
```cmd
npm install
```

### Error: "Port already in use"
```cmd
# Cambiar puerto
npm run dev -- --port 5174
```

### Error: "404 en assets"
Verificar que los archivos estén en `docs/.vitepress/public/`:
- ✅ `favicon.ico`
- ✅ `logo.svg`
- ✅ Otros assets

### Error: WSL/Windows
Usar los scripts `.bat` o `.ps1` en lugar de comandos directos.

---

## 📋 Verificación Final

1. ✅ **Archivo index.md creado** con layout home
2. ✅ **Base path configurado** correctamente
3. ✅ **Scripts de inicio** creados
4. ✅ **Assets básicos** creados
5. ✅ **Configuración i18n** completa

---

## 🎯 Próximos Pasos

1. **Ejecutar:** `start-dev.bat` o `start-dev.ps1`
2. **Abrir:** `http://localhost:5173/InnerSight/`
3. **Verificar:** Que la página de inicio se muestre correctamente
4. **Probar:** Navegación entre idiomas
5. **Verificar:** Componentes personalizados funcionen

**¡Ahora debería funcionar correctamente!** 🚀

---

## 📞 Si Aún Hay Problemas

### Verificar Estructura de Archivos
```
docs/
├── index.md          ✅ (NUEVO - página de inicio)
├── README.md         (mantener para GitHub)
├── about/
│   └── README.md
├── contact/
│   └── README.md
├── .vitepress/
│   ├── config.mts    ✅
│   ├── theme/
│   │   ├── index.ts  ✅
│   │   └── components/ ✅
│   └── public/       ✅
└── [idiomas]/
    └── [archivos]
```

### Verificar package.json
```json
{
  "scripts": {
    "dev": "vitepress dev docs",
    "build": "vitepress build docs",
    "preview": "vitepress preview docs"
  },
  "devDependencies": {
    "vitepress": "^1.5.0",
    "vue": "^3.4.0"
  }
}
```

**¡Todo está configurado correctamente!** 🎉
