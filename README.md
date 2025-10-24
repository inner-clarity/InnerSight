# InnerSight

Un sitio estático creado con VitePress para la exploración interior y el autoconocimiento.

## 🌟 Características

- **Sitio estático** generado con VitePress
- **Deploy automático** a GitHub Pages
- **Diseño responsivo** y moderno
- **Fácil de extender** con nuevas páginas y contenido
- **Optimizado** para SEO y rendimiento
- **Soporte i18n** para 12 idiomas

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/InnerSight.git
cd InnerSight
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### Construcción para producción

```bash
npm run build
```

Los archivos generados estarán en `docs/.vitepress/dist/`

## 📁 Estructura del Proyecto

```
InnerSight/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts         # Configuración de VitePress
│   │   ├── theme/             # Tema personalizado
│   │   │   ├── components/    # Componentes Vue personalizados
│   │   │   ├── index.ts       # Registro de componentes
│   │   │   └── style.css      # Estilos personalizados
│   │   ├── public/            # Assets estáticos
│   │   └── dist/              # Archivos generados (después del build)
│   ├── en/                    # Contenido en inglés
│   ├── es/                    # Contenido en español
│   ├── pt/                    # Contenido en portugués
│   ├── fr/                    # Contenido en francés
│   ├── de/                    # Contenido en alemán
│   ├── it/                    # Contenido en italiano
│   ├── ru/                    # Contenido en ruso
│   ├── ko/                    # Contenido en coreano
│   ├── ja/                    # Contenido en japonés
│   ├── zh/                    # Contenido en chino
│   ├── hi/                    # Contenido en hindi
│   ├── tl/                    # Contenido en tagalo
│   ├── about/
│   │   └── README.md          # Página "Acerca de"
│   ├── contact/
│   │   └── README.md          # Página de contacto
│   └── README.md              # Página de inicio
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions para deploy
├── package.json
└── README.md                  # Este archivo
```

## ✏️ Añadir Nuevas Páginas

Para añadir una nueva página:

1. Crea un nuevo directorio en `docs/`:
```bash
mkdir docs/nueva-seccion
```

2. Crea un archivo `README.md` en el nuevo directorio:
```bash
touch docs/nueva-seccion/README.md
```

3. Añade el contenido en formato Markdown

4. Actualiza la navegación en `docs/.vitepress/config.mts`:
```typescript
nav: [
  { text: 'Inicio', link: '/' },
  { text: 'Nueva Sección', link: '/nueva-seccion/' },
  // ... otras páginas
]
```

## 🚀 Deploy a GitHub Pages

El deploy se realiza automáticamente mediante GitHub Actions cuando haces push a la rama `main`.

### Configuración manual (si prefieres):

1. Construye el sitio:
```bash
npm run build
```

2. Deploy usando gh-pages:
```bash
npm run deploy
```

## 🛠️ Personalización

### Cambiar el tema y colores

Edita `docs/.vitepress/config.mts` para personalizar:
- Título y descripción
- Navegación
- Configuración del tema por idioma
- Metadatos
- Soporte i18n

### Añadir componentes personalizados

Crea componentes Vue en `docs/.vitepress/theme/components/` y regístralos en `docs/.vitepress/theme/index.ts`

## 📝 Contribuir

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Soporte

Si tienes preguntas o necesitas ayuda:
- Abre un [issue](https://github.com/tu-usuario/InnerSight/issues)
- Visita la [página de contacto](https://tu-usuario.github.io/InnerSight/contact/)

---

Hecho con ❤️ para el crecimiento personal
