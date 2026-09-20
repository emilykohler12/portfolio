import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section id="contacto" className="bg-forest py-16 text-center text-cream-soft sm:py-24">
      <div className="mx-auto max-w-2xl px-6">
        <p className="font-script text-3xl text-pink sm:text-4xl">¿Charlamos de tu</p>
        <h2 className="mt-1 font-serif text-3xl font-bold sm:text-4xl">
          PRÓXIMO PROYECTO?
        </h2>
        <p className="mt-4 text-cream-soft/75">
          Escribime y te cuento cómo puedo ayudarte a construirlo.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block rounded-full bg-pink px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-forest transition-colors hover:bg-pink-deep hover:text-cream-soft"
        >
          {profile.email}
        </a>

        {(profile.github || profile.linkedin) && (
          <div className="mt-6 flex justify-center gap-6 text-xs font-semibold uppercase tracking-[0.15em] text-cream-soft/70">
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-cream-soft">
                GitHub
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-cream-soft">
                LinkedIn
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
