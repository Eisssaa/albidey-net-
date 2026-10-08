import { Mesh } from './Mesh'
import type { RouteId } from '../lib/router'

const dots =
  'radial-gradient(circle, rgba(14,116,144,0.16) 1.2px, transparent 1.6px)'

function Orb({ className, color }: { className: string; color: string }) {
  return <div className={`halo-orb ${className}`} style={{ background: color }} />
}

const hexPattern = (
  <svg className="absolute inset-0 h-full w-full opacity-60" aria-hidden>
    <defs>
      <pattern id="hex" width="56" height="97" patternUnits="userSpaceOnUse" patternTransform="scale(1.1)">
        <path
          d="M28 2 L52 16 V44 L28 58 L4 44 V16 Z M28 58 V84 M4 44 L-20 58 M52 44 L76 58"
          fill="none"
          stroke="#7dd3fc"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#hex)" />
  </svg>
)

function Rings({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden>
      {[60, 120, 180, 240, 290].map((r, i) => (
        <circle key={r} cx="300" cy="300" r={r} fill="none" stroke="#38bdf8" strokeOpacity={0.32 - i * 0.04} strokeWidth="1.2" />
      ))}
      <circle cx="300" cy="300" r="6" fill="#e11d2f" opacity="0.7" />
    </svg>
  )
}

function Waves({ colors }: { colors: [string, string] }) {
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="none" aria-hidden>
      {Array.from({ length: 9 }, (_, i) => (
        <path
          key={i}
          className="wave-line"
          d={`M-50 ${520 + i * 22} C 250 ${380 + i * 30}, 520 ${700 - i * 18}, 820 ${470 + i * 14} S 1150 ${300 + i * 26}, 1300 ${420 + i * 10}`}
          fill="none"
          stroke={i % 3 === 0 ? colors[0] : colors[1]}
          strokeOpacity={0.18 + (i % 3) * 0.06}
          strokeWidth="1.3"
          style={{ animationDuration: `${26 + i * 3}s` }}
        />
      ))}
    </svg>
  )
}

/** Fixed, per-page "halo" backdrop. Every page gets its own composition. */
export function Halo({ variant }: { variant: RouteId }) {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {variant === 'home' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#f2fbff] via-[#e8f5fb] to-white" />
          <Orb className="-right-40 -top-40 h-[640px] w-[640px]" color="rgba(56,189,248,0.42)" />
          <Orb className="-bottom-52 -left-40 h-[560px] w-[560px]" color="rgba(244,63,94,0.2)" />
          <Mesh
            seed={11}
            count={130}
            className="absolute right-0 top-0 h-[78vh] w-[78vw] max-w-[1100px] [mask-image:linear-gradient(to_left,black_45%,transparent)]"
          />
          <div className="absolute inset-0 opacity-70" style={{ backgroundImage: dots, backgroundSize: '34px 34px' }} />
        </>
      )}

      {variant === 'about' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#f4fafe] via-[#eef8fc] to-[#f8fcfe]" />
          {hexPattern}
          <Orb className="left-1/4 top-1/3 h-[520px] w-[520px]" color="rgba(59,130,246,0.22)" />
          <Orb className="-right-32 bottom-0 h-[460px] w-[460px]" color="rgba(244,63,94,0.16)" />
          <Mesh
            seed={23}
            count={110}
            className="absolute right-0 top-0 h-[70vh] w-[75vw] [mask-image:linear-gradient(to_left,black_35%,transparent_90%)]"
          />
        </>
      )}

      {variant === 'solutions' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#dff3fb] via-[#e9f7fc] to-[#f6fcfe]" />
          <Orb className="left-1/2 top-24 h-[380px] w-[900px] -translate-x-1/2" color="rgba(125,211,252,0.5)" />
          <Rings className="absolute -right-40 -top-24 h-[720px] w-[720px] opacity-90" />
          <Rings className="absolute -bottom-48 -left-48 h-[600px] w-[600px] opacity-60" />
          <div className="absolute inset-0" style={{ backgroundImage: dots, backgroundSize: '30px 30px' }} />
          <Orb className="-bottom-40 right-0 h-[420px] w-[520px]" color="rgba(244,63,94,0.14)" />
        </>
      )}

      {variant === 'news' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[#fff1f4] via-[#fdf4fb] to-[#eef6fd]" />
          <Orb className="-left-32 top-10 h-[560px] w-[560px]" color="rgba(251,113,133,0.3)" />
          <Orb className="right-0 top-1/3 h-[520px] w-[520px]" color="rgba(167,139,250,0.22)" />
          <Orb className="bottom-[-180px] left-1/3 h-[460px] w-[640px]" color="rgba(56,189,248,0.22)" />
          <Waves colors={['#e11d2f', '#8b5cf6']} />
        </>
      )}

      {variant === 'references' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#d9eef8] via-[#e6f4fa] to-[#eff8fc]" />
          <Orb className="-left-40 top-1/4 h-[600px] w-[600px]" color="rgba(14,116,144,0.2)" />
          <Orb className="right-0 top-0 h-[420px] w-[620px]" color="rgba(255,255,255,0.8)" />
          <Mesh
            seed={41}
            count={70}
            redShare={0.12}
            className="absolute inset-0 h-full w-full opacity-40"
          />
          {[
            'left-[8%] top-[22%] h-20 w-20',
            'right-[12%] top-[44%] h-28 w-28',
            'left-[42%] bottom-[12%] h-24 w-24',
          ].map((c) => (
            <div key={c} className={`absolute rounded-full border border-sky-400/30 ${c}`} />
          ))}
        </>
      )}

      {variant === 'contact' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#fff3f5] via-[#fdf2f4] to-[#f1f8fc]" />
          <Orb className="-left-40 top-0 h-[560px] w-[560px]" color="rgba(244,63,94,0.26)" />
          <Orb className="-right-40 bottom-0 h-[560px] w-[560px]" color="rgba(56,189,248,0.3)" />
          <Waves colors={['#e11d2f', '#0e7490']} />
        </>
      )}
    </div>
  )
}
