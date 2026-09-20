"use client";

import { useState } from "react";
import { faq, faqIntro, profile } from "@/data/content";
import PhotoFrame from "./PhotoFrame";

function FaqList({ items, offset }: { items: typeof faq; offset: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(offset === 0 ? 0 : null);

  return (
    <div className="space-y-1">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="border-b border-forest/15">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-4 text-left"
            >
              <span className="font-serif font-semibold text-forest">
                {item.question}
              </span>
              <span
                className={`shrink-0 text-forest/50 transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="pb-4 text-sm leading-relaxed text-forest/70">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Faq() {
  const mid = Math.ceil(faq.length / 2);
  const left = faq.slice(0, mid);
  const right = faq.slice(mid);

  return (
    <section id="faq" className="stripe-frame-thin py-3">
      <div className="bg-pink py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
            <FaqList items={left} offset={0} />

            <div className="mx-auto">
              <div className="polaroid-frame w-56 rotate-[-3deg] sm:w-64">
                <PhotoFrame
                  src={profile.faqImage}
                  alt={profile.name}
                  initials={profile.initials}
                  tone="pink"
                  className="aspect-square w-full"
                />
                <p className="mt-3 text-center font-script text-2xl text-forest">
                  ¡Hablemos!
                </p>
              </div>
              <div className="mt-8 text-center">
                <p className="font-script text-3xl text-forest">{faqIntro.eyebrow}</p>
                <h2 className="font-serif text-2xl font-bold text-forest">
                  {faqIntro.headline}
                </h2>
              </div>
            </div>

            <FaqList items={right} offset={mid} />
          </div>
        </div>
      </div>
    </section>
  );
}
