import { services, servicesIntro } from "@/data/content";

export default function Services() {
  return (
    <section id="servicios" className="bg-pink-soft py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="font-script text-3xl text-pink-deep sm:text-4xl">
            {servicesIntro.eyebrow}
          </p>
          <h2 className="mt-1 font-serif text-3xl font-bold text-forest sm:text-4xl">
            {servicesIntro.headline}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="rounded-2xl border border-pink-deep/15 bg-cream-soft p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest font-serif text-xs font-bold text-cream-soft">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-serif text-lg font-bold text-forest">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-forest/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
