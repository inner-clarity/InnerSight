@echo off
echo 🚀 Iniciando InnerSight con VitePress...

REM Verificar que Node.js esté instalado
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js no está instalado. Por favor instala Node.js 18+ desde https://nodejs.org/
    pause
    exit /b 1
)

REM Verificar que npm esté disponible
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm no está disponible
    pause
    exit /b 1
)

REM Instalar dependencias si no existen
if not exist "node_modules" (
    echo 📦 Instalando dependencias...
    npm install
    if %errorlevel% neq 0 (
        echo ❌ Error instalando dependencias
        pause
        exit /b 1
    )
)

REM Iniciar servidor de desarrollo
echo 🌐 Iniciando servidor de desarrollo...
echo 📍 El sitio estará disponible en: http://localhost:5173/InnerSight/
echo 📍 Presiona Ctrl+C para detener el servidor
echo.

npm run dev
