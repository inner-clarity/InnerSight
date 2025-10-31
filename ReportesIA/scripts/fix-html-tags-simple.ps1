# Script simple para corregir tags HTML inválidos
Write-Host "Corrigiendo tags HTML inválidos..." -ForegroundColor Green

# Buscar y reemplazar en todos los archivos .md
Get-ChildItem -Path "docs" -Recurse -Filter "*.md" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    if ($content -match "</BR>") {
        Write-Host "Corrigiendo: $($_.Name)" -ForegroundColor Yellow
        $newContent = $content -replace "</BR>", ""
        Set-Content -Path $_.FullName -Value $newContent -Encoding UTF8
        Write-Host "Corregido: $($_.Name)" -ForegroundColor Green
    }
}

Write-Host "Corrección completada!" -ForegroundColor Green
