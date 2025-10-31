@echo off
echo ==========================================
echo   LIMPIEZA COMPLETA - InnerSight
echo   Para que funcione como ClearPath
echo ==========================================

cd /d %~dp0

echo.
echo Paso 1: Deteniendo cualquier servidor...
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul

echo.
echo Paso 2: Eliminando archivos CSS extra...
if exist docs\.vitepress\theme\styles\mobile-nav-fix.css (
    del /f /q docs\.vitepress\theme\styles\mobile-nav-fix.css
    echo OK - mobile-nav-fix.css eliminado
)

if exist docs\.vitepress\theme\styles\responsive-clean.css (
    del /f /q docs\.vitepress\theme\styles\responsive-clean.css
    echo OK - responsive-clean.css eliminado
)

if exist docs\.vitepress\theme\styles\breakpoint-fix.css (
    del /f /q docs\.vitepress\theme\styles\breakpoint-fix.css
    echo OK - breakpoint-fix.css eliminado
)

echo.
echo Paso 3: Eliminando carpeta utils...
if exist docs\.vitepress\theme\utils (
    rmdir /s /q docs\.vitepress\theme\utils
    echo OK - utils eliminado
)

echo.
echo Paso 4: Eliminando archivos public deprecados...
if exist docs\.vitepress\public\responsive-nav.css (
    del /f /q docs\.vitepress\public\responsive-nav.css
    echo OK - responsive-nav.css eliminado
)

if exist docs\.vitepress\public\fixed-page-nav.css (
    del /f /q docs\.vitepress\public\fixed-page-nav.css
    echo OK - fixed-page-nav.css eliminado
)

echo.
echo Paso 5: Limpiando cache de VitePress...
if exist docs\.vitepress\cache (
    rmdir /s /q docs\.vitepress\cache
    echo OK - cache eliminado
)

if exist docs\.vitepress\dist (
    rmdir /s /q docs\.vitepress\dist
    echo OK - dist eliminado
)

if exist node_modules\.vite (
    rmdir /s /q node_modules\.vite
    echo OK - .vite eliminado
)

echo.
echo Paso 6: Limpiando cache del navegador...
echo IMPORTANTE: En tu navegador presiona Ctrl+Shift+R
echo.

echo.
echo Paso 7: Iniciando servidor limpio...
echo.
call npm run dev

echo.
pause

