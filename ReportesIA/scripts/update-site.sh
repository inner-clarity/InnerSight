#!/bin/bash

echo "=========================================="
echo "   🚀 Actualizando sitio InnerSight"
echo "=========================================="

echo ""
echo "📦 Paso 1: Construyendo el sitio..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Error en el build"
    exit 1
fi

echo ""
echo "🌐 Paso 2: Desplegando en GitHub Pages..."
npm run deploy
if [ $? -ne 0 ]; then
    echo "❌ Error en el deploy"
    exit 1
fi

echo ""
echo "📝 Paso 3: Agregando archivos al repositorio..."
git add .

echo ""
echo "💾 Paso 4: Haciendo commit..."
read -p "Ingresa el mensaje del commit (o presiona Enter para usar mensaje por defecto): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Actualización de contenido del sitio"
fi

git commit -m "$commit_msg"
if [ $? -ne 0 ]; then
    echo "⚠️  No hay cambios para commitear o error en commit"
fi

echo ""
echo "⬆️  Paso 5: Subiendo cambios a GitHub..."
git push
if [ $? -ne 0 ]; then
    echo "❌ Error en el push"
    exit 1
fi

echo ""
echo "✅ ¡Sitio actualizado exitosamente!"
echo "🌐 Tu sitio está disponible en: https://inner-clarity.github.io/InnerSight/"
echo ""
