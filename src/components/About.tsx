import { profile } from "@/data/content";

export default function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24">
      <div className="flex justify-center gap-2">
        <span className="h-16 w-2 rounded-full bg-forest sm:h-20" />
        <span className="h-16 w-2 rounded-full bg-pink sm:h-20" />
      </div>
      <p className="mt-6 font-script text-3xl text-pink-deep sm:text-4xl">
        {profile.aboutEyebrow}
      </p>
      <h2 className="mt-1 font-serif text-3xl font-bold leading-tight text-forest sm:text-4xl">
        {profile.aboutHeadline}
      </h2>
      <div className="mx-auto mt-6 max-w-xl space-y-4 text-forest/80 leading-relaxed">
        {profile.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <a
        href="#proyectos"
        className="mt-8 inline-block rounded-full bg-pink px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-forest transition-colors hover:bg-pink-deep hover:text-cream-soft"
      >
        {profile.aboutCta} →
      </a>
    </section>
  );
}
