@echo off
echo ==========================================
echo   ORGANIZANDO PROYECTO INNERSIGHT
echo   Moviendo archivos a ReportesIA/
echo ==========================================

cd /d %~dp0

echo.
echo Creando estructura en ReportesIA...
mkdir ReportesIA\documentacion 2>nul
mkdir ReportesIA\scripts 2>nul
mkdir ReportesIA\archivos-impresos 2>nul
mkdir ReportesIA\carpetas-error 2>nul

echo.
echo Paso 1: Moviendo archivos .md de documentacion...
move /Y CAMBIO_A_VITEPRESS_1.0.0.md ReportesIA\documentacion\ 2>nul
move /Y EJECUTAR_ESTO.md ReportesIA\documentacion\ 2>nul
move /Y FIX_TRANSICION_RESPONSIVE.md ReportesIA\documentacion\ 2>nul
move /Y INSTRUCCIONES_CORRECTAS.md ReportesIA\documentacion\ 2>nul
move /Y LOGO-DOCUMENTATION.md ReportesIA\documentacion\ 2>nul
move /Y MEJORAS_DISENO_INNERSIGHT.md ReportesIA\documentacion\ 2>nul
move /Y MEJORAS_MENU_MOVIL_APLICADAS.md ReportesIA\documentacion\ 2>nul
move /Y MEJORAS_MODO_OSCURO.md ReportesIA\documentacion\ 2>nul
move /Y MEJORAS_RESPONSIVO_INNERSIGHT.md ReportesIA\documentacion\ 2>nul
move /Y MIGRACION_VITEPRESS.md ReportesIA\documentacion\ 2>nul
move /Y SOLUCION_404.md ReportesIA\documentacion\ 2>nul
move /Y SOLUCION_ERROR_HTML.md ReportesIA\documentacion\ 2>nul
move /Y SOLUCION_URL_INCORRECTA.md ReportesIA\documentacion\ 2>nul
echo OK - Archivos .md movidos

echo.
echo Paso 2: Moviendo scripts .ps1...
move /Y fix-html-tags-simple.ps1 ReportesIA\scripts\ 2>nul
move /Y fix-html-tags.ps1 ReportesIA\scripts\ 2>nul
move /Y start-dev.ps1 ReportesIA\scripts\ 2>nul
echo OK - Scripts .ps1 movidos

echo.
echo Paso 3: Moviendo scripts .bat auxiliares...
move /Y limpiar-y-reiniciar.bat ReportesIA\scripts\ 2>nul
move /Y quick-update.bat ReportesIA\scripts\ 2>nul
move /Y reinstalar-vitepress-1.0.0.bat ReportesIA\scripts\ 2>nul
move /Y start-dev.bat ReportesIA\scripts\ 2>nul
echo OK - Scripts .bat movidos

echo.
echo Paso 4: Moviendo script .sh...
move /Y update-site.sh ReportesIA\scripts\ 2>nul
echo OK - Script .sh movido

echo.
echo Paso 5: Moviendo carpeta PrintedDocs...
move /Y PrintedDocs ReportesIA\archivos-impresos\ 2>nul
echo OK - PrintedDocs movido

echo.
echo Paso 6: Eliminando carpetas con errores de nombre...
rmdir /s /q docs.vuepresscomponents 2>nul
rmdir /s /q docses 2>nul
rmdir /s /q docses.vuepress 2>nul
rmdir /s /q docses.vuepresscomponents 2>nul
rmdir /s /q docsesabout 2>nul
rmdir /s /q docsescontact 2>nul
rmdir /s /q docsfr 2>nul
rmdir /s /q docsfrabout 2>nul
rmdir /s /q docsfrcontact 2>nul
rmdir /s /q docspt 2>nul
rmdir /s /q docsptabout 2>nul
rmdir /s /q docsptcontact 2>nul
rmdir /s /q docstl 2>nul
rmdir /s /q docstlabout 2>nul
rmdir /s /q docstlcontact 2>nul
echo OK - Carpetas error eliminadas

echo.
echo ==========================================
echo   ORGANIZACION COMPLETA
echo ==========================================
echo.
echo Estructura final en raiz:
echo   - package.json
echo   - package-lock.json
echo   - update-site.bat (deployment)
echo   - docs/ (sitio web)
echo   - node_modules/
echo   - ReportesIA/ (documentacion y scripts)
echo.
echo Todo lo demas movido a ReportesIA/
echo.
pause

