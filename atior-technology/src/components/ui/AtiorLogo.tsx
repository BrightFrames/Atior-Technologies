type AtiorLogoProps = {
  className?: string;
};

export default function AtiorLogo({ className = "" }: AtiorLogoProps) {
  return (
    <div
      className={`relative isolate overflow-hidden border border-[#d9dee7]/20 bg-black/22 px-3 pb-2 pt-1.5 backdrop-blur-[0.8px] ${className}`}
      aria-label="Atior logo"
      role="img"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_10%,rgba(255,255,255,0.05),transparent_30%),repeating-linear-gradient(135deg,rgba(255,255,255,0.02)_0px,rgba(255,255,255,0.02)_2px,transparent_2px,transparent_9px),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.24))]" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#eef2f9]/10" />
      <svg
        viewBox="0 0 64 44"
        className="relative z-10 mx-auto h-8 w-12 text-[#f4f6fa]"
        aria-hidden="true"
      >
        <circle cx="32" cy="15" r="13" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <line x1="32" y1="4" x2="32" y2="27" stroke="currentColor" strokeWidth="1.8" />
        <line x1="22" y1="8" x2="22" y2="27" stroke="currentColor" strokeWidth="1.8" />
        <line x1="42" y1="8" x2="42" y2="27" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 34 C25 25, 39 25, 52 34" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="20" cy="35" r="1.8" fill="currentColor" />
        <circle cx="44" cy="35" r="1.8" fill="currentColor" />
      </svg>
      <p className="relative z-10 -mt-0.5 text-center font-serif text-[18px] leading-none tracking-[0.04em] text-[#f4f6fa]">
        ATIOR
      </p>
    </div>
  );
}
