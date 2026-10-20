Seguí las reglas de @AGENTS.md: leé la documentación local de Next en `node_modules/next/dist/docs/` antes de escribir código de Next y no asumas APIs de versiones anteriores (Next 16, React 19, Tailwind 4).

# Portfolio de Emily Kohler

Sitio de una sola página, sin backend ni base de datos. App Router, TypeScript estricto, alias `@/*` → `src/*`.

## Estructura

- `src/data/content.ts`: todo el contenido (perfil, habilidades, servicios, proceso, proyectos, FAQ). Los textos se editan acá, no en los componentes.
- `src/components/`: una sección por componente (`Hero`, `About`, `Services`, `Projects`, `Process`, `Support`, `Skills`, `Faq`, `Contact`, `Footer`...). `src/app/page.tsx` las ensambla en orden.
- `public/projects/`: capturas de los proyectos. `public/` también tiene las fotos `emi1.jpg` y `emi2.jpg`.

## Comandos

- `npm run dev`: servidor de desarrollo (regenera `AGENTS.md`, no lo edites).
- `npm run lint`: ESLint (`eslint-config-next` con core-web-vitals y typescript).
- `npm run build`: build de producción; también valida tipos.

No hay tests.

## Convenciones

- **Idioma:** todo el texto del sitio y los comentarios de `content.ts` están en español rioplatense con voseo ("Editá", "escribime", "CONOCÉ MÁS"). Mantené ese tono.
- **Proyectos:** se tipan con `Project` en `content.ts` (`name`, `description`, `highlights`, `stack` obligatorios; `link`, `linkLabel`, `repo`, `status`, `image` opcionales). `Projects.tsx` los muestra en un carrusel; `link` y `repo` solo se renderizan si existen, y `linkLabel` reemplaza el texto por defecto "Ver sitio ↗".
- **Imágenes de proyectos:** se referencian como `/projects/<archivo>` en `image` y se muestran con `ProjectImage` (`next/image` con `fill` y `object-contain`). Si `image` está vacío, muestra un placeholder con el nombre. Los archivos existentes son `.webp` y `.png`.
- **Tailwind 4:** clases utilitarias en el JSX, sin `tailwind.config`. Los colores y fuentes de marca están definidos en `src/app/globals.css` (`@theme inline`): `cream`, `cream-soft`, `forest`, `forest-deep`, `pink`, `pink-soft`, `pink-deep`, `ink`, y `font-serif`, `font-script`, `font-sans`.
- **Metadatos y SEO:** `src/app/layout.tsx` define `metadata` (title y description), `lang="es"` y las fuentes de `next/font/google` (Playfair Display, Parisienne, Jost) como variables CSS. El ícono es `src/app/icon.svg`.

## Antes de dar algo por terminado

Correr `npm run lint` y `npm run build`.
