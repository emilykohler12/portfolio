import { supportIntro, supportItems } from "@/data/content";

export default function Support() {
  return (
    <section id="acompanamiento" className="bg-forest py-16 text-cream-soft sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-script text-3xl text-pink sm:text-4xl">
            {supportIntro.eyebrow}
          </p>
          <h2 className="mt-1 font-serif text-3xl font-bold sm:text-4xl">
            {supportIntro.headline}
          </h2>
          <p className="mt-4 text-cream-soft/75 leading-relaxed">
            {supportIntro.description}
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {supportItems.map((item) => (
            <div key={item.number} className="border-t-2 border-pink/50 pt-5">
              <span className="font-serif text-3xl font-bold text-pink">
                {item.number}
              </span>
              <h3 className="mt-2 font-serif text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-cream-soft/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
