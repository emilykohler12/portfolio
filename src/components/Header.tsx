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
          className="flex h-10 w-10 items-center justify-center rounded-full border border-forest font-serif text-sm font-bold tracking-wide"
        >
          {profile.initials}
        </a>
        <nav className="hidden items-center whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.1em] text-forest/80 lg:flex">
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
        <a
          href="#contacto"
          className="rounded-full border border-forest px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors hover:bg-forest hover:text-cream-soft"
        >
          Contacto
        </a>
      </div>
    </header>
  );
}
