"use client";

import { useState } from "react";
import { projects, projectsIntro } from "@/data/content";
import ProjectImage from "./ProjectImage";

export default function Projects() {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const goTo = (next: number) => {
    setIndex(((next % projects.length) + projects.length) % projects.length);
  };

  return (
    <section id="proyectos" className="bg-forest py-16 text-cream-soft sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="font-script text-3xl text-pink sm:text-4xl">
            {projectsIntro.eyebrow}
          </p>
          <h2 className="mt-1 font-serif text-3xl font-bold sm:text-4xl">
            {projectsIntro.headline}
          </h2>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-3xl border border-cream-soft/15 lg:grid-cols-[1.1fr_1fr]">
          <ProjectImage
            src={project.image}
            alt={project.name}
            name={project.name}
            className="aspect-[4/3] w-full lg:aspect-auto lg:min-h-[420px]"
          />

          <div className="grid bg-cream-soft/5">
            {projects.map((p, i) => (
              <div
                key={p.name}
                aria-hidden={i !== index}
                className={`col-start-1 row-start-1 flex flex-col justify-center p-6 sm:p-10 ${
                  i === index ? "" : "invisible"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream-soft/10 font-serif text-base font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-bold sm:text-3xl">
                      {p.name}
                    </h3>
                    {p.status && (
                      <span className="text-xs uppercase tracking-wide text-pink/80">
                        {p.status}
                      </span>
                    )}
                  </div>
                </div>

                <p className="mt-4 text-base text-cream-soft/80">{p.description}</p>

                {p.highlights.length > 0 && (
                  <ul className="mt-4 space-y-2 text-base text-cream-soft/70">
                    {p.highlights.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {p.stack.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-cream-soft/20 px-3 py-1 text-sm text-cream-soft/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {(p.link || p.repo) && (
                  <div className="mt-6 flex gap-5 text-sm font-semibold uppercase tracking-[0.15em]">
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        tabIndex={i === index ? undefined : -1}
                        className="text-pink underline underline-offset-4 hover:text-cream-soft"
                      >
                        {p.linkLabel ?? "Ver sitio ↗"}
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        tabIndex={i === index ? undefined : -1}
                        className="text-pink underline underline-offset-4 hover:text-cream-soft"
                      >
                        Código ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Proyecto anterior"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-soft/20 text-lg transition-colors hover:bg-cream-soft/10"
          >
            ←
          </button>

          <div className="flex gap-2">
            {projects.map((p, i) => (
              <button
                key={p.name}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ver ${p.name}`}
                aria-current={i === index}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === index ? "bg-pink" : "bg-cream-soft/25"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Siguiente proyecto"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-soft/20 text-lg transition-colors hover:bg-cream-soft/10"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
