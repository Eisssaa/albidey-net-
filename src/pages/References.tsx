import { Quote } from 'lucide-react'
import { Reveal, Section, Title, CtaStrip } from '../components/ui'

const clients = [
  { tag: 'Public institution', name: 'African Union', text: 'A secure network infrastructure with LAN separation and dedicated connectivity for a sensitive institutional environment.' },
  { tag: 'Hospitality', name: "Radisson Blu N'Djamena", text: 'Corporate Internet solutions and service continuity delivering a high-end experience for their guests.' },
  { tag: 'Humanitarian', name: 'ICRC', text: 'Resilient high-speed connectivity to guarantee communication and coordination in the field.' },
]

export function References() {
  return (
    <Section className="pb-24 pt-16">
      <Reveal>
        <Title as="h1" accent="our commitment" className="text-3xl md:text-4xl">
          They speak about
        </Title>
        <div className="mt-2 h-[3px] w-12 rounded bg-gradient-to-r from-brand-red to-brand-teal" />
      </Reveal>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {clients.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.08}>
            <div className="border-l-2 border-brand-teal/50 pl-5">
              <span className="chip">{c.tag}</span>
              <h3 className="mt-3 text-lg font-bold">{c.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <figure className="card border-l-4 border-brand-teal p-8">
          <Quote className="h-8 w-8 text-brand-red" />
          <blockquote className="mt-4 max-w-3xl text-lg italic leading-relaxed text-ink/80">
            “AlbideyNet is a genuinely trustworthy partner. Their responsiveness, the stability of the connection and the
            quality of the support make all the difference day to day.”
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3 text-sm">
            <span className="h-px w-10 bg-brand-red" />
            <span>
              <span className="block font-semibold">IT Manager</span>
              <span className="text-xs text-ink/55">International institution</span>
            </span>
          </figcaption>
        </figure>
      </Reveal>

      <Reveal className="mt-10">
        <CtaStrip title="Join the organisations that trust us" text="Let's talk through your needs and build the solution best matched to your challenges." />
      </Reveal>
    </Section>
  )
}
