# Portafolio — Emily Kohler

Sitio de portafolio personal, hecho con Next.js + TypeScript + Tailwind CSS.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Editar el contenido

Todo el texto (nombre, bio, habilidades, proyectos, preguntas frecuentes y
datos de contacto) vive en un solo archivo:

[`src/data/content.ts`](src/data/content.ts)

No hace falta tocar los componentes para actualizar textos, agregar un
proyecto nuevo o sumar una pregunta al FAQ — solo editá ese archivo.

Antes de publicar, completá en `profile`:
- `email`, `github` y `linkedin` (ya cargados)
- `location` (opcional)
- `heroImage` / `faqImage`: tu foto. Guardala en `public/` (ej. `public/yo.jpg`)
  y escribí la ruta ahí (ej. `"/yo.jpg"`). Vacío muestra un marco con tus
  iniciales.

### Capturas de pantalla de los proyectos

Cada proyecto en `projects` tiene un campo `image`. Para agregar la
captura de un proyecto (o del video del videojuego):

1. Guardá el archivo en `public/projects/` (ej. `public/projects/nexa.png`).
2. Escribí la ruta en el campo `image` de ese proyecto, ej. `"/projects/nexa.png"`.

Mientras `image` esté vacío (`""`), se muestra un marco placeholder con el
nombre del proyecto. Los proyectos se ven en un carrusel (una imagen grande
+ descripción al lado) — usá capturas apaisadas (idealmente 4:3) para que
se vean bien recortadas.

## Estructura

```
src/
  app/            layout, page principal y estilos globales
  components/     Header, Hero, About, Skills, Projects, Faq, Contact, Footer
  data/content.ts contenido editable del sitio
```

## Build de producción

```bash
npm run build
npm start
```

## Deploy

El proyecto es 100% estático/SSR estándar de Next.js, así que se puede
desplegar directo en [Vercel](https://vercel.com/new) (conectando el repo)
o en cualquier otro hosting compatible con Next.js (Render, Netlify, etc.).
