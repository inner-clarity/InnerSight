# Script de PowerShell para iniciar VitePress
Write-Host "🚀 Iniciando InnerSight con VitePress..." -ForegroundColor Green

# Verificar que Node.js esté instalado
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js no está instalado. Por favor instala Node.js 18+ desde https://nodejs.org/" -ForegroundColor Red
    exit 1
}

# Verificar que npm esté disponible
try {
    $npmVersion = npm --version
    Write-Host "✅ npm version: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm no está disponible" -ForegroundColor Red
    exit 1
}

# Instalar dependencias si no existen
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Instalando dependencias..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Error instalando dependencias" -ForegroundColor Red
        exit 1
    }
}

# Iniciar servidor de desarrollo
Write-Host "🌐 Iniciando servidor de desarrollo..." -ForegroundColor Green
Write-Host "📍 El sitio estará disponible en: http://localhost:5173/InnerSight/" -ForegroundColor Cyan
Write-Host "📍 Presiona Ctrl+C para detener el servidor" -ForegroundColor Cyan
Write-Host ""

npm run dev
