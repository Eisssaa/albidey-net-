import { useEffect, useRef, useState, type ReactNode } from 'react'
import { animate, motion, useInView } from 'framer-motion'
import { Award, Building2, Gauge, Headset, ShieldCheck, ArrowRight } from 'lucide-react'
import { Link, type RouteId } from '../lib/router'

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

/** "Choose Your <Connection>" style title: dark words with a teal highlight. */
export function Title({
  children,
  accent,
  className = '',
  as: Tag = 'h2',
}: {
  children?: ReactNode
  accent: string
  className?: string
  as?: 'h1' | 'h2'
}) {
  return (
    <Tag className={`font-bold tracking-tight text-ink ${className}`}>
      {children} <span className={`grad-text ${Tag === 'h1' ? 'block' : ''}`}>{accent}</span>
    </Tag>
  )
}

export function Section({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-7xl px-6 py-14 ${className}`}>{children}</section>
}

function CountUp({ to, decimals = 0, prefix = '', suffix = '' }: { to: number; decimals?: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.4, ease: 'easeOut', onUpdate: setV })
    return () => c.stop()
  }, [inView, to])
  return (
    <span ref={ref}>
      {prefix}
      {v.toFixed(decimals)}
      {suffix}
    </span>
  )
}

const stats = [
  { icon: Award, label: 'Years of expertise', node: <CountUp to={21} suffix="+" /> },
  { icon: Building2, label: 'Business clients', node: <CountUp to={420} suffix="+" /> },
  { icon: ShieldCheck, label: 'Network availability', node: <CountUp to={99.9} decimals={1} suffix="%" /> },
  { icon: Gauge, label: 'Average latency', node: <CountUp to={90} prefix="<" suffix=" ms" /> },
  { icon: Headset, label: 'Technical support', node: <span>24/7</span> },
]

/** variant "card": white card with coloured numbers. variant "band": red gradient band. */
export function StatBand({ variant }: { variant: 'card' | 'band' }) {
  if (variant === 'band') {
    return (
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#d41f30] via-[#b9141f] to-[#8f0e19] shadow-[0_24px_50px_-20px_rgba(168,15,29,0.7)]">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-white/0 via-sky-300 to-white/0" />
        <div className="grid grid-cols-2 divide-white/15 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-3 px-4 py-8 text-center text-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-red">
                <s.icon className="h-5 w-5" />
              </span>
              <span className="text-4xl font-bold tracking-tight">{s.node}</span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-white/80">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return (
    <div className="card card-accent">
      <div className="grid grid-cols-2 gap-y-6 px-4 py-8 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-ink/10">
        {stats.map((s, i) => (
          <div key={s.label} className="flex flex-col items-center gap-2.5 px-3 text-center">
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                i % 2 ? 'bg-brand-teal/10 text-brand-teal' : 'bg-brand-red/10 text-brand-red'
              }`}
            >
              <s.icon className="h-5 w-5" />
            </span>
            <span className={`text-3xl font-extrabold tracking-tight ${i % 2 ? 'text-brand-teal' : 'text-brand-red'}`}>
              {s.node}
            </span>
            <span className="text-sm font-semibold text-ink">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function CtaStrip({
  title,
  text,
  to = 'contact',
  label = 'Request a consultation',
}: {
  title: string
  text: string
  to?: RouteId
  label?: string
}) {
  return (
    <div className="card card-accent flex flex-col items-start justify-between gap-5 p-6 sm:flex-row sm:items-center">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
          <Headset className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-semibold text-ink">{title}</h3>
          <p className="mt-1 text-sm text-ink/60">{text}</p>
        </div>
      </div>
      <Link to={to} className="btn-red shrink-0">
        {label} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
