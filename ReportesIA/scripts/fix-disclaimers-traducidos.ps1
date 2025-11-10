# Script para corregir disclaimers con traducciones apropiadas - InnerSight
# UTF-8 encoding

$ErrorActionPreference = "Stop"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

# Definir disclaimers por idioma
$disclaimers = @{
    'es' = @"

---

::: tip Bienvenido
Nota: InnerSight es un recurso educativo independiente, creado por miembros fieles para apoyar a lideres, familias y profesionales. No esta afiliado ni oficialmente respaldado por La Iglesia de Jesucristo de los Santos de los Ultimos Dias.

Cada viaje interior comienza con un primer paso. El tuyo comienza aqui.
:::
"@
    'en' = @"

---

::: tip Welcome
Note: InnerSight is an independent educational resource, created by faithful members to support leaders, families, and professionals. It is not affiliated with or officially endorsed by The Church of Jesus Christ of Latter-day Saints.

Every inner journey begins with a first step. Yours starts here.
:::
"@
    'pt' = @"

---

::: tip Bem-vindo
Nota: InnerSight e um recurso educacional independente, criado por membros fieis para apoiar lideres, familias e profissionais. Nao e afiliado nem oficialmente endossado pela Igreja de Jesus Cristo dos Santos dos Ultimos Dias.

Cada jornada interior comeca com um primeiro passo. A sua comeca aqui.
:::
"@
    'de' = @"

---

::: tip Willkommen
Hinweis: InnerSight ist eine unabhangige Bildungsressource, die von treuen Mitgliedern erstellt wurde, um Fuhrungskrafte, Familien und Fachleute zu unterstutzen. Sie ist nicht mit der Kirche Jesu Christi der Heiligen der Letzten Tage verbunden oder wird von dieser offiziell unterstutzt.

Jede innere Reise beginnt mit einem ersten Schritt. Deine beginnt hier.
:::
"@
    'fr' = @"

---

::: tip Bienvenue
Note: InnerSight est une ressource educative independante, creee par des membres fideles pour soutenir les dirigeants, les familles et les professionnels. Elle nest pas affiliee ni officiellement approuvee par lEglise de Jesus-Christ des Saints des Derniers Jours.

Chaque voyage interieur commence par un premier pas. Le votre commence ici.
:::
"@
    'it' = @"

---

::: tip Benvenuto
Nota: InnerSight e una risorsa educativa indipendente, creata da membri fedeli per supportare leader, famiglie e professionisti. Non e affiliata ne ufficialmente approvata dalla Chiesa di Gesu Cristo dei Santi degli Ultimi Giorni.

Ogni viaggio interiore inizia con un primo passo. Il tuo inizia qui.
:::
"@
}

Write-Host "Corrigiendo disclaimers en InnerSight..." -ForegroundColor Cyan
Write-Host ""

$totalProcesados = 0
$totalCorregidos = 0

foreach ($lang in $disclaimers.Keys) {
    $langPath = "docs\$lang"
    
    if (-not (Test-Path $langPath)) {
        Write-Host "Idioma $lang no existe, saltando..." -ForegroundColor Yellow
        continue
    }
    
    Write-Host "Procesando: $lang" -ForegroundColor Green
    
    $archivos = Get-ChildItem -Path $langPath -Filter "*.md" -Recurse
    
    foreach ($archivo in $archivos) {
        $totalProcesados++
        $contenido = Get-Content $archivo.FullName -Raw -Encoding UTF8
        
        # Eliminar disclaimer genérico si existe
        $contenido = $contenido -replace "---\s*::: tip\s*Disclaimer pending translation\s*:::", ""
        
        # Verificar si ya tiene el disclaimer correcto
        if ($contenido -notmatch "independent educational resource|recurso educativo independiente|risorsa educativa indipendente") {
            # Agregar disclaimer traducido al final
            $nuevoContenido = $contenido.TrimEnd() + $disclaimers[$lang]
            [System.IO.File]::WriteAllText($archivo.FullName, $nuevoContenido, [System.Text.Encoding]::UTF8)
            $totalCorregidos++
        }
    }
}

Write-Host ""
Write-Host "=== Resumen ===" -ForegroundColor Cyan
Write-Host "Archivos procesados: $totalProcesados" -ForegroundColor White
Write-Host "Archivos corregidos: $totalCorregidos" -ForegroundColor Green
Write-Host "Completado!" -ForegroundColor Green


