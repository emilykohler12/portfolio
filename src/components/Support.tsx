import { supportIntro, supportItems } from "@/data/content";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6 shrink-0 text-pink"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M7.5 12.5l3 3 6-6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Support() {
  return (
    <section id="acompanamiento" className="bg-forest py-16 text-cream-soft sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-script text-3xl text-pink sm:text-4xl">
              {supportIntro.eyebrow}
            </p>
            <h2 className="mt-1 font-serif text-3xl font-bold sm:text-4xl">
              {supportIntro.headline}
            </h2>
            <p className="mt-4 max-w-md text-cream-soft/75 leading-relaxed">
              {supportIntro.description}
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {supportItems.map((item) => (
              <div key={item.title} className="flex gap-3">
                <CheckIcon />
                <div>
                  <h3 className="font-serif text-base font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-cream-soft/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
