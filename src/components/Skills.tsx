import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section id="habilidades" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="text-center">
        <p className="font-script text-3xl text-pink-deep sm:text-4xl">Mis</p>
        <h2 className="mt-1 font-serif text-3xl font-bold text-forest sm:text-4xl">
          HABILIDADES
        </h2>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-forest/15 bg-cream-soft p-5"
          >
            <h3 className="font-serif text-sm font-bold uppercase tracking-wide text-pink-deep">
              {group.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-forest/15 bg-cream px-3 py-1 text-xs text-forest/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
