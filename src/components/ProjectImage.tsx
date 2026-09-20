import Image from "next/image";

type ProjectImageProps = {
  src?: string;
  alt: string;
  name: string;
  className?: string;
};

export default function ProjectImage({
  src,
  alt,
  name,
  className = "",
}: ProjectImageProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden bg-cream-soft/10 text-center ${className}`}
    >
      <span className="font-serif text-2xl font-bold text-cream-soft/40 sm:text-3xl">
        {name}
      </span>
      <span className="rounded-full bg-black/20 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-cream-soft/70">
        Agregá una captura acá
      </span>
    </div>
  );
}
