import Image from "next/image";

type PhotoFrameProps = {
  src?: string;
  alt: string;
  initials: string;
  className?: string;
  tone?: "forest" | "pink";
};

export default function PhotoFrame({
  src,
  alt,
  initials,
  className = "",
  tone = "forest",
}: PhotoFrameProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    );
  }

  const toneClasses =
    tone === "forest"
      ? "bg-forest text-cream-soft"
      : "bg-pink-soft text-forest";

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${toneClasses} ${className}`}
    >
      <span
        aria-hidden
        className="font-script text-[5rem] leading-none opacity-90 sm:text-[7rem]"
      >
        {initials}
      </span>
      <span className="absolute bottom-3 right-3 rounded-full bg-black/20 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide">
        Tu foto acá
      </span>
    </div>
  );
}
