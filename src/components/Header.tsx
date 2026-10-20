import { profile } from "@/data/content";

const links = [
  { href: "#top", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#faq", label: "Preguntas" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-forest/15 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a
          href="#top"
          aria-label="Inicio"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-forest font-serif text-sm font-bold tracking-wide"
        >
          {profile.initials}
        </a>
        <nav
          aria-label="Principal"
          className="hidden items-center whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.1em] text-forest/80 lg:flex"
        >
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-2.5 py-1.5 transition-colors hover:text-forest ${
                index === 0 ? "bg-pink-soft text-forest" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {/* Menú móvil sin JavaScript: <details> se abre y cierra solo. */}
          <details className="group relative lg:hidden">
            <summary
              aria-label="Menú"
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-forest text-lg [&::-webkit-details-marker]:hidden"
            >
              <span aria-hidden="true" className="group-open:hidden">
                ☰
              </span>
              <span aria-hidden="true" className="hidden group-open:inline">
                ✕
              </span>
            </summary>
            <nav
              aria-label="Menú móvil"
              className="absolute right-0 top-12 flex w-52 flex-col rounded-2xl border border-forest/15 bg-cream p-2 text-xs font-semibold uppercase tracking-[0.12em] text-forest shadow-lg"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-2.5 hover:bg-pink-soft"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </details>
          <a
            href="#contacto"
            className="rounded-full border border-forest px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors hover:bg-forest hover:text-cream-soft"
          >
            Contacto
          </a>
        </div>
      </div>
    </header>
  );
}
