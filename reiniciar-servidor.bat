@echo off
echo ==========================================
echo   REINICIANDO SERVIDOR - InnerSight
echo ==========================================

cd /d %~dp0

echo.
echo Deteniendo procesos Node...
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul

echo.
echo Limpiando cache...
if exist docs\.vitepress\cache (
    rmdir /s /q docs\.vitepress\cache
    echo OK - Cache limpiado
)

echo.
echo Iniciando servidor con base URL correcta...
echo.
echo DESARROLLO LOCAL: http://localhost:5174/
echo (SIN /InnerSight/ en la URL)
echo.

call npm run dev

pause

