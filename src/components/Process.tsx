import { processIntro, processSteps } from "@/data/content";

export default function Process() {
  return (
    <section id="como-trabajo" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-script text-3xl text-pink-deep sm:text-4xl">
          {processIntro.eyebrow}
        </p>
        <h2 className="mt-1 font-serif text-3xl font-bold text-forest sm:text-4xl">
          {processIntro.headline}
        </h2>
        <p className="mt-4 text-forest/70 leading-relaxed">{processIntro.description}</p>
      </div>

      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step) => (
          <div
            key={step.number}
            className="border-t-2 border-pink pt-5"
          >
            <span className="font-serif text-3xl font-bold text-pink-soft">
              {step.number}
            </span>
            <h3 className="mt-2 font-serif text-lg font-bold text-forest">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-forest/70 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
