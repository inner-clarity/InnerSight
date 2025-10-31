@echo off
echo ==========================================
echo   Reinstalando VitePress 1.0.0 (exacto)
echo ==========================================

cd /d %~dp0

echo.
echo Paso 1: Eliminando node_modules...
if exist node_modules (
    rmdir /s /q node_modules
    echo OK - node_modules eliminado
) else (
    echo OK - node_modules no existe
)

echo.
echo Paso 2: Eliminando package-lock.json...
if exist package-lock.json (
    del /f /q package-lock.json
    echo OK - package-lock.json eliminado
) else (
    echo OK - package-lock.json no existe
)

echo.
echo Paso 3: Limpiando cache de VitePress...
if exist docs\.vitepress\cache (
    rmdir /s /q docs\.vitepress\cache
    echo OK - cache eliminado
) else (
    echo OK - cache no existe
)

if exist docs\.vitepress\dist (
    rmdir /s /q docs\.vitepress\dist
    echo OK - dist eliminado
) else (
    echo OK - dist no existe
)

echo.
echo Paso 4: Instalando VitePress 1.0.0...
call npm install

if %errorlevel% neq 0 (
    echo.
    echo ERROR en npm install
    pause
    exit /b 1
)

echo.
echo Paso 5: Verificando version instalada...
echo.
type node_modules\vitepress\package.json | findstr /C:"version"

echo.
echo ==========================================
echo   Instalacion completa!
echo ==========================================
echo.
echo Ahora ejecuta: npm run dev
echo.
pause

