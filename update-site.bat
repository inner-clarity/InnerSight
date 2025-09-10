@echo off
echo ==========================================
echo    🚀 Actualizando sitio InnerSight
echo ==========================================

echo.
echo 📦 Paso 1: Construyendo el sitio...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Error en el build
    pause
    exit /b 1
)

echo.
echo 🌐 Paso 2: Desplegando en GitHub Pages...
call npm run deploy
if %errorlevel% neq 0 (
    echo ❌ Error en el deploy
    pause
    exit /b 1
)

echo.
echo 📝 Paso 3: Agregando archivos al repositorio...
git add .

echo.
echo 💾 Paso 4: Haciendo commit...
set /p commit_msg="Ingresa el mensaje del commit (o presiona Enter para usar mensaje por defecto): "
if "%commit_msg%"=="" set commit_msg=Actualización de contenido del sitio

git commit -m "%commit_msg%"
if %errorlevel% neq 0 (
    echo ⚠️  No hay cambios para commitear o error en commit
)

echo.
echo ⬆️  Paso 5: Subiendo cambios a GitHub...
git push
if %errorlevel% neq 0 (
    echo ❌ Error en el push
    pause
    exit /b 1
)

echo.
echo ✅ ¡Sitio actualizado exitosamente!
echo 🌐 Tu sitio está disponible en: https://inner-clarity.github.io/InnerSight/
echo.
pause
