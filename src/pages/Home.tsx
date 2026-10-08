import { ArrowRight, Check, Headset, Wifi } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from '../lib/router'
import { connections } from '../data'
import { Reveal, Section, StatBand, Title, CtaStrip } from '../components/ui'

export function Home() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-10 pt-14 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-lg border border-brand-red/20 bg-brand-red/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-brand-red">
            <Wifi className="h-3.5 w-3.5" /> Since 2005
          </span>
          <Title as="h1" accent="of reference" className="mt-6 text-5xl leading-[1.05] md:text-6xl lg:text-[4.2rem]">
            The Internet partner
          </Title>
          <p className="mt-2 text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-[4.2rem]">in Chad</p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/70 md:text-lg">
            We connect businesses, institutions and individuals with high-availability Internet, Cloud and Security
            solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="contact" className="btn-red">
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="contact" className="btn-ghost">
              Talk to an expert <Headset className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      <Section className="!pt-4">
        <Reveal>
          <StatBand variant="card" />
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <div className="eyebrow">Our connectivity</div>
          <Title accent="Connection" className="mt-3 text-3xl md:text-4xl">
            Choose Your
          </Title>
          <p className="mt-3 max-w-xl text-sm text-ink/65">
            A complete range of technologies, selected to match your sites, your constraints and your ambitions.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {connections.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.07}>
              <article className="card card-accent card-hover flex h-full flex-col p-6">
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span className="chip">{c.tag}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{c.text}</p>
                <ul className="mt-4 space-y-2 border-t border-ink/10 pt-4 text-xs text-ink/75">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 shrink-0 text-brand-teal" /> {p}
                    </li>
                  ))}
                </ul>
                <Link to="contact" className="mt-auto inline-flex items-center gap-1 pt-5 text-xs font-semibold text-brand-red">
                  Request a quote <ArrowRight className="h-3 w-3" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pb-24">
        <Reveal>
          <div className="card card-accent p-8 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">
              Ready to connect <span className="text-brand-red">your business?</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-ink/65">
              Tell us about your sites and constraints — our engineers will recommend the right solution.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="contact" className="btn-red">Request a quote</Link>
              <Link to="solutions" className="btn-ghost">Explore solutions</Link>
            </div>
          </div>
        </Reveal>
        <Reveal className="mt-6">
          <CtaStrip title="Join the organisations that trust us" text="See who relies on AlbideyNet every day." to="references" label="See references" />
        </Reveal>
      </Section>
    </>
  )
}
