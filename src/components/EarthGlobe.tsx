import { motion } from 'framer-motion'

/** Glossy light-theme globe centred on Africa, with a floating satellite. */
export function EarthGlobe() {
  return (
    <div className="card relative overflow-hidden bg-gradient-to-br from-sky-50 to-white p-6 ring-1 ring-sky-200/60">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(56,189,248,0.35),transparent_62%)]" />
      <p className="absolute right-5 top-4 max-w-[9rem] text-right text-[10px] font-semibold uppercase leading-snug tracking-widest text-brand-teal">
        Africa connected, a stronger tomorrow
      </p>
      <p className="absolute bottom-4 left-5 max-w-[8rem] text-[10px] font-semibold uppercase leading-snug tracking-widest text-ink/70">
        Connecting people beyond borders
      </p>
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="relative mx-auto aspect-square w-full max-w-[340px]"
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'radial-gradient(circle at 32% 28%, #5aa9e6 0%, #1d5fa8 45%, #0b2c5c 100%)',
            boxShadow:
              '0 0 70px rgba(56,189,248,0.55), inset -22px -26px 60px rgba(2,12,40,0.65), inset 14px 14px 40px rgba(255,255,255,0.18)',
          }}
        />
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <clipPath id="globe-clip">
              <circle cx="50" cy="50" r="49" />
            </clipPath>
          </defs>
          <g clipPath="url(#globe-clip)">
            <motion.g
              animate={{ x: [-1.5, 1.5, -1.5] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path
                d="M36 16 L47 15 L58 17 L66 22 L70 28 L68 36 L74 42 L80 47 L74 52 L70 60 L67 70 L61 78 L55 84 L49 80 L46 68 L42 60 L36 56 L28 55 L22 49 L21 41 L26 33 L30 24 Z"
                fill="#c8a96a"
                opacity="0.92"
              />
              <path d="M40 30 L58 28 L66 38 L56 46 L44 44 Z" fill="#e2c27d" opacity="0.7" />
              <path d="M44 54 L58 56 L60 68 L50 74 L44 66 Z" fill="#4f8a4b" opacity="0.75" />
              {/* N'Djamena */}
              <circle cx="52" cy="40" r="1.6" fill="#e11d2f" />
              <circle cx="52" cy="40" r="4" fill="none" stroke="#fff" strokeOpacity="0.7" strokeWidth="0.5" />
            </motion.g>
            {/* connection arcs */}
            <path d="M52 40 Q40 20 28 30" fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="0.5" strokeDasharray="1.5 1.5" />
            <path d="M52 40 Q70 30 76 50" fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="0.5" strokeDasharray="1.5 1.5" />
          </g>
        </svg>
        <div className="absolute left-0 top-2 flex items-center gap-1 text-sky-500" aria-hidden>
          <svg viewBox="0 0 40 24" className="h-6 w-10">
            <rect x="15" y="8" width="10" height="8" rx="1.5" fill="#64748b" />
            <rect x="2" y="9" width="11" height="6" fill="#3b82f6" />
            <rect x="27" y="9" width="11" height="6" fill="#3b82f6" />
          </svg>
        </div>
      </motion.div>
    </div>
  )
}
