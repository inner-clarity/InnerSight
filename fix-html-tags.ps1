# Script para corregir tags HTML inválidos en archivos Markdown
Write-Host "🔧 Corrigiendo tags HTML inválidos en archivos Markdown..." -ForegroundColor Green

# Buscar todos los archivos .md que contengan </BR>
$files = Get-ChildItem -Path "docs" -Recurse -Filter "*.md" | Where-Object { (Get-Content $_.FullName -Raw) -match "</BR>" }

Write-Host "📁 Encontrados $($files.Count) archivos con tags </BR> inválidos" -ForegroundColor Yellow

$totalFixed = 0

foreach ($file in $files) {
    Write-Host "🔨 Procesando: $($file.Name)" -ForegroundColor Cyan
    
    # Leer contenido del archivo
    $content = Get-Content $file.FullName -Raw
    
    # Contar cuántos </BR> hay
    $beforeCount = ($content.ToCharArray() | Where-Object { $_ -eq '<' }).Count
    $brCount = ([regex]::Matches($content, "</BR>")).Count
    
    if ($brCount -gt 0) {
        Write-Host "  📝 Encontrados $brCount tags </BR> en $($file.Name)" -ForegroundColor Yellow
        
        # Reemplazar todos los </BR> por saltos de línea simples
        $newContent = $content -replace "</BR>", ""
        
        # Guardar el archivo corregido
        Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
        
        Write-Host "  ✅ Corregido: $($file.Name)" -ForegroundColor Green
        $totalFixed++
    }
}

Write-Host ""
Write-Host "🎉 ¡Corrección completada!" -ForegroundColor Green
Write-Host "📊 Archivos corregidos: $totalFixed" -ForegroundColor Cyan
Write-Host ""

# Verificar que no queden tags </BR>
Write-Host "🔍 Verificando que no queden tags </BR>..." -ForegroundColor Yellow
$remainingFiles = Get-ChildItem -Path "docs" -Recurse -Filter "*.md" | Where-Object { (Get-Content $_.FullName -Raw) -match "</BR>" }

if ($remainingFiles.Count -eq 0) {
    Write-Host "✅ ¡Todos los tags </BR> han sido corregidos!" -ForegroundColor Green
} else {
    Write-Host "⚠️ Aún quedan $($remainingFiles.Count) archivos con tags </BR>" -ForegroundColor Red
    foreach ($file in $remainingFiles) {
        Write-Host "  - $($file.FullName)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "🚀 Ahora puedes ejecutar: npm run dev" -ForegroundColor Green
