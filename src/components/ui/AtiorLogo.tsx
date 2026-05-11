import Image from "next/image";

type AtiorLogoProps = {
  className?: string;
};

export default function AtiorLogo({ className = "" }: AtiorLogoProps) {
  return (
    <div className={`relative overflow-hidden text-white ${className}`} aria-label="Atior logo" role="img">
      <Image
        src="/atior-logo.png"
        alt="Atior logo"
        width={160}
        height={160}
        sizes="(max-width: 640px) 64px, 96px"
        className="object-contain"
        loading="lazy"
      />
    </div>
  );
}
