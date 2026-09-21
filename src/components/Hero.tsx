import { profile } from "@/data/content";
import PhotoFrame from "./PhotoFrame";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 sm:pt-12">
      <div className="stripe-frame rounded-[28px] p-3 sm:p-4">
        <div className="rounded-[22px] bg-cream-soft p-4 sm:p-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="relative">
              <PhotoFrame
                src={profile.heroImage}
                alt={profile.name}
                initials={profile.initials}
                className="aspect-[4/5] w-full rounded-2xl sm:aspect-[5/4]"
              />
              <span className="pointer-events-none absolute bottom-6 left-6 font-script text-3xl text-cream-soft drop-shadow sm:text-4xl">
                {profile.name}
              </span>
            </div>

            <div className="px-1 sm:px-4">
              <p className="font-script text-3xl text-pink-deep sm:text-4xl">
                {profile.heroEyebrow}
              </p>
              <h1 className="mt-2 font-serif text-4xl font-bold leading-[1.05] tracking-tight text-forest sm:text-5xl">
                {profile.heroHeadline}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-forest/15 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest/60">
                  {profile.heroByline}
                  {profile.location && (
                    <span className="text-forest/40"> · {profile.location}</span>
                  )}
                </p>
                <a
                  href="#sobre-mi"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-deep underline underline-offset-4 hover:text-forest"
                >
                  {profile.heroCta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
