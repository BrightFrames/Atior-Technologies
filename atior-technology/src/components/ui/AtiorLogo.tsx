import Image from "next/image";

type AtiorLogoProps = {
  className?: string;
};

export default function AtiorLogo({ className = "" }: AtiorLogoProps) {
  return (
    <div className={`relative overflow-hidden text-white ${className}`} aria-label="Atior logo" role="img">
      <Image
        src="/atior-logo.svg"
        alt="Atior logo"
        fill
        sizes="(max-width: 640px) 128px, 160px"
        className="object-contain"
        priority
      />
    </div>
  );
}
