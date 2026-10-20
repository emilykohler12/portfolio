---
name: nuevo-proyecto
description: Agrega un proyecto nuevo al portfolio (entrada en src/data/content.ts, captura en public/projects/ y verificación con build). Usalo cuando Emily pida sumar, agregar o cargar un proyecto a la sección Proyectos.
disable-model-invocation: true
---

Agregá un proyecto nuevo a la sección Proyectos, siguiendo cómo se sumaron LexSearch y Kologic.

## 1. Pedí los datos (no inventes nada)

Antes de tocar archivos, pedile a Emily lo que falte de esta lista y esperá su respuesta:

- **Nombre** del proyecto.
- **Descripción**: 1–2 frases, en español rioplatense con voseo, primera persona si habla de su trabajo.
- **Highlights**: 4–5 puntos concretos (qué hace, qué resuelve). Cifras como "107 tests" solo si ella las da.
- **Stack**: lista de tecnologías.
- **Estado** (`status`): por ejemplo "Demo en vivo", "Proyecto personal", "Proyecto de mi empresa".
- **Link** a la demo y **repo** de GitHub, si existen. Si no hay demo, preguntá y no pongas link.
- **Captura**: ruta del archivo de imagen que ella tiene.

Si un dato no existe, déjalo fuera; no lo rellenes con suposiciones.

## 2. Imagen en `public/projects/`

- Nombre en minúsculas, sin espacios: `<nombre>.webp` (por ejemplo `kologic.webp`).
- Formato recomendado: **webp**. Los `.png` más viejos también funcionan.
- Tamaño de referencia (los existentes): captura de ~1900×950 px, entre 50 y 150 KB. `ProjectImage` usa `object-contain`, así que no se recorta; conviene una captura horizontal completa, sin bordes ni barras del navegador sobrantes.
- Si Emily da un PNG pesado, ofrecé convertirlo a webp antes de guardarlo (no instales dependencias para eso sin avisarle).
- Si todavía no hay captura, omití `image` (o dejalo vacío): el carrusel muestra un placeholder con el nombre.

## 3. Entrada en `src/data/content.ts`

Agregá un objeto al array `projects`, **antes de "Hidden Memories"** (los proyectos de software van primero; el videojuego queda al final), con el tipo `Project`:

```ts
{
  name: "...",                       // obligatorio
  description: "...",                // obligatorio
  highlights: ["...", "..."],        // obligatorio
  stack: ["...", "..."],             // obligatorio
  status: "...",                     // opcional
  link: "https://...",               // opcional: solo si hay demo
  linkLabel: "Ver proyecto ↗",       // opcional: reemplaza "Ver sitio ↗"
  repo: "https://github.com/...",    // opcional
  image: "/projects/<archivo>.webp", // opcional
},
```

Proyecto **sin demo**: omití `link` (y `linkLabel`). `Projects.tsx` solo muestra los enlaces que existen; si tampoco hay `repo`, no muestra ninguno. No dejes `link: ""` ni URLs inventadas (el commit "Quitar link inexistente de Kologic" corrigió justo eso).

## 4. Verificar

1. `npm run lint`
2. `npm run build` (también valida tipos)
3. Opcional: `npm run dev` y revisar el carrusel en el navegador (imagen, texto, enlaces).

## 5. README

Los commits anteriores también agregaron una sección `### Nombre` con un resumen corto en `README.md`, que es el perfil público de GitHub de Emily. No lo edites por defecto: preguntale si quiere que sumes esa sección.

No hagas commit salvo que Emily lo pida.
