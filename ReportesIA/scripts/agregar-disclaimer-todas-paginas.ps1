# Script para agregar disclaimer en todas las páginas de InnerSight
# UTF-8 encoding

$disclaimers = @{
    'en' = @"

---

::: tip Welcome!
Note: InnerSight is an independent educational resource, created by faithful members to support leaders, families, and professionals. It is not affiliated with or officially endorsed by The Church of Jesus Christ of Latter-day Saints.

Every inner journey begins with a first step. Yours starts here.
:::
"@
    'es' = @"

---

::: tip ¡Bienvenido!
Nota: InnerSight es un recurso educativo independiente, creado por miembros fieles para apoyar a líderes, familias y profesionales. No está afiliado ni oficialmente respaldado por La Iglesia de Jesucristo de los Santos de los Últimos Días.

Cada viaje interior comienza con un primer paso. El tuyo comienza aquí.
:::
"@
    'pt' = @"

---

::: tip Bem-vindo!
Nota: InnerSight é um recurso educacional independente, criado por membros fiéis para apoiar líderes, famílias e profissionais. Não é afiliado nem oficialmente endossado pela Igreja de Jesus Cristo dos Santos dos Últimos Dias.

Cada jornada interior começa com um primeiro passo. A sua começa aqui.
:::
"@
    'de' = @"

---

::: tip Willkommen!
Hinweis: InnerSight ist eine unabhängige Bildungsressource, die von treuen Mitgliedern erstellt wurde, um Führungskräfte, Familien und Fachleute zu unterstützen. Sie ist nicht mit der Kirche Jesu Christi der Heiligen der Letzten Tage verbunden oder wird von dieser offiziell unterstützt.

Jede innere Reise beginnt mit einem ersten Schritt. Deine beginnt hier.
:::
"@
    'fr' = @"

---

::: tip Bienvenue!
Note: InnerSight est une ressource éducative indépendante, créée par des membres fidèles pour soutenir les dirigeants, les familles et les professionnels. Elle n'est pas affiliée ni officiellement approuvée par l'Église de Jésus-Christ des Saints des Derniers Jours.

Chaque voyage intérieur commence par un premier pas. Le vôtre commence ici.
:::
"@
    'it' = @"

---

::: tip Benvenuto!
Nota: InnerSight è una risorsa educativa indipendente, creata da membri fedeli per supportare leader, famiglie e professionisti. Non è affiliata né ufficialmente approvata dalla Chiesa di Gesù Cristo dei Santi degli Ultimi Giorni.

Ogni viaggio interiore inizia con un primo passo. Il tuo inizia qui.
:::
"@
}

Write-Host "=== Agregando disclaimer a todas las páginas de InnerSight ===" -ForegroundColor Cyan
Write-Host ""

$totalFiles = 0
$updatedFiles = 0

foreach ($lang in $disclaimers.Keys) {
    $langPath = "docs\$lang"
    
    if (-not (Test-Path $langPath)) {
        Write-Host "Idioma $lang no existe, saltando..." -ForegroundColor Yellow
        continue
    }
    
    Write-Host "Procesando idioma: $lang" -ForegroundColor Green
    
    $mdFiles = Get-ChildItem -Path $langPath -Filter "*.md" -Recurse
    
    foreach ($file in $mdFiles) {
        $totalFiles++
        $content = Get-Content $file.FullName -Raw -Encoding UTF8
        
        # Verificar si ya tiene el disclaimer
        if ($content -notmatch "independent educational resource") {
            # Agregar al final
            $newContent = $content.TrimEnd() + "`n" + $disclaimers[$lang]
            Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8 -NoNewline
            $updatedFiles++
            Write-Host "  ✓ $($file.Name)" -ForegroundColor Gray
        }
        else {
            Write-Host "  - $($file.Name) (ya tiene disclaimer)" -ForegroundColor DarkGray
        }
    }
}

Write-Host ""
Write-Host "=== Resumen ===" -ForegroundColor Cyan
Write-Host "Archivos procesados: $totalFiles" -ForegroundColor White
Write-Host "Archivos actualizados: $updatedFiles" -ForegroundColor Green
Write-Host "¡Completado!" -ForegroundColor Green

