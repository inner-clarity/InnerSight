@echo off
echo ==========================================
echo    ⚡ Actualización rápida de InnerSight
echo ==========================================

echo.
echo 📦 Construyendo y desplegando...
call npm run build && call npm run deploy && git add . && git commit -m "Actualización rápida de contenido" && git push

if %errorlevel% neq 0 (
    echo ❌ Hubo un error en el proceso
    pause
    exit /b 1
)

echo.
echo ✅ ¡Actualización completada!
echo 🌐 Sitio: https://inner-clarity.github.io/InnerSight/
echo.
pause
