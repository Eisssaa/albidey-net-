import { motion } from 'framer-motion'
import { Wifi } from 'lucide-react'
import { EarthGlobe } from '../components/EarthGlobe'
import { Reveal, Section, StatBand, Title, CtaStrip } from '../components/ui'

export function About() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-6 pt-14 lg:pt-20">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-red/25 bg-white/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-brand-red">
            <Wifi className="h-3.5 w-3.5" /> Since 2005 · 21 years of expertise
          </span>
          <Title as="h1" accent="connecting Chad to the world" className="mt-5 text-4xl leading-tight md:text-5xl">
            More than two decades
          </Title>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink/70 md:text-base">
            Since 2005, AlbideyNet has supported Chad's digital transformation with Internet, telecom and IT solutions
            that are reliable, high-performing and built for local realities. Our ambition is simple: connectivity
            without compromise.
          </p>
        </motion.div>
      </section>

      <Section className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="eyebrow">Our story</div>
          <Title accent="trust and innovation" className="mt-3 text-3xl">
            A venture built on
          </Title>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink/70">
            <p>AlbideyNet was born from a firm conviction: quality Internet access should no longer be a privilege reserved for a few.</p>
            <p>At a time when digital infrastructure remained limited, we chose to invest in robust technology, local expertise and a long-term vision.</p>
            <p>Over the years, AlbideyNet has established itself as a reference in Chad's digital sector, serving banks, international NGOs, embassies, industry, hotels and public institutions.</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <EarthGlobe />
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <div className="eyebrow mb-4">Key figures</div>
          <StatBand variant="band" />
        </Reveal>
      </Section>

      <Section className="pb-24">
        <Reveal>
          <CtaStrip title="Let's build your network together" text="Talk to our team about your sites and requirements." />
        </Reveal>
      </Section>
    </>
  )
}
