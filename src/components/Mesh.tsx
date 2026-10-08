import { useMemo } from 'react'

// Deterministic PRNG so the mesh doesn't reshuffle on every render
function rng(seed: number) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296
    return s / 4294967296
  }
}

type Props = {
  seed?: number
  count?: number
  className?: string
  /** 0..1, share of nodes drawn red instead of blue */
  redShare?: number
}

/** Glowing blue/red network of nodes and links, like the reference hero. */
export function Mesh({ seed = 7, count = 90, className, redShare = 0.28 }: Props) {
  const { nodes, links } = useMemo(() => {
    const r = rng(seed)
    const nodes = Array.from({ length: count }, (_, i) => ({
      x: r() * 800,
      y: r() * 500,
      r: 0.9 + r() * 2.1,
      red: r() < redShare,
      delay: (i % 9) * 0.4,
      pulse: r() < 0.3,
    }))
    const links: { a: number; b: number; red: boolean }[] = []
    nodes.forEach((n, i) => {
      nodes
        .map((m, j) => ({ j, d: Math.hypot(n.x - m.x, n.y - m.y) }))
        .filter((o) => o.j !== i)
        .sort((p, q) => p.d - q.d)
        .slice(0, 4)
        .forEach((o) => {
          if (o.d < 120 && i < o.j) links.push({ a: i, b: o.j, red: n.red && nodes[o.j].red })
        })
    })
    return { nodes, links }
  }, [seed, count, redShare])

  return (
    <svg viewBox="0 0 800 500" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <radialGradient id={`glow-b-${seed}`}>
          <stop offset="0" stopColor="#38bdf8" stopOpacity="0.9" />
          <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`glow-r-${seed}`}>
          <stop offset="0" stopColor="#f43f5e" stopOpacity="0.9" />
          <stop offset="1" stopColor="#f43f5e" stopOpacity="0" />
        </radialGradient>
      </defs>
      {links.map((l, i) => (
        <line
          key={i}
          x1={nodes[l.a].x}
          y1={nodes[l.a].y}
          x2={nodes[l.b].x}
          y2={nodes[l.b].y}
          stroke={l.red ? '#fb7185' : '#60a5fa'}
          strokeOpacity={l.red ? 0.55 : 0.4}
          strokeWidth="0.6"
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={n.r * 5} fill={`url(#glow-${n.red ? 'r' : 'b'}-${seed})`} opacity="0.55" />
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={n.red ? '#e11d2f' : '#2563eb'}
            className={n.pulse ? 'mesh-node' : undefined}
            style={n.pulse ? { animationDelay: `${n.delay}s` } : undefined}
          />
          <circle cx={n.x - n.r * 0.3} cy={n.y - n.r * 0.3} r={n.r * 0.35} fill="#fff" opacity="0.9" />
        </g>
      ))}
    </svg>
  )
}
