export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`relative inline-flex items-center ${className}`}>
      <svg viewBox="0 0 120 44" className="absolute -left-1 top-0 h-full w-[7.5rem]" aria-hidden>
        <path d="M6 30 C 28 2, 78 2, 114 14" fill="none" stroke="#e11d2f" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M10 36 C 40 14, 84 12, 112 22" fill="none" stroke="#e11d2f" strokeOpacity="0.55" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      <span className="relative px-1 text-[1.35rem] font-bold italic tracking-tight text-ink">
        Albidey<span className="text-brand-red">Net</span>
      </span>
    </span>
  )
}
