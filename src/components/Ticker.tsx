type TickerProps = {
  text: string;
  className?: string;
};

export default function Ticker({ text, className = "" }: TickerProps) {
  const item = (
    <span className="flex shrink-0 items-center gap-3 px-3 text-xs font-semibold uppercase tracking-[0.2em]">
      {text}
      <span aria-hidden>✕</span>
    </span>
  );

  return (
    <div
      className={`overflow-hidden border-y border-black/10 bg-forest py-2.5 text-cream-soft ${className}`}
    >
      <div className="ticker-track">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
