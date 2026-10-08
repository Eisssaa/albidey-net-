import { ArrowRight, Check, Cloud, Lock, Wifi } from 'lucide-react'
import { Link } from '../lib/router'
import { connections, hardware } from '../data'
import { Reveal, Section, Title, CtaStrip } from '../components/ui'

const extras = [
  { icon: Wifi, name: 'Enterprise WiFi', text: 'Scalable, secure and reliable wireless networks for offices, hotels and campuses.' },
  { icon: Cloud, name: 'Cloud', text: 'Cloud services hosted for high availability and easy growth.' },
  { icon: Lock, name: 'Security', text: 'Network security and LAN separation for sensitive institutional environments.' },
]

export function Solutions() {
  return (
    <>
      <Section className="pt-16">
        <Reveal>
          <div className="eyebrow">Our solutions</div>
          <Title as="h1" accent="Connection" className="mt-3 text-4xl md:text-5xl">
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
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span className="chip">{c.tag}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{c.text}</p>
                <ul className="mt-4 space-y-2 border-t border-ink/10 pt-4 text-xs text-ink/75">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 shrink-0 text-brand-red" /> {p}
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

      <Section>
        <Reveal>
          <div className="eyebrow">Equipment</div>
          <Title accent="Hardware" className="mt-3 text-3xl md:text-4xl">
            Certified
          </Title>
          <p className="mt-3 max-w-xl text-sm text-ink/65">Installed, configured and supported by our engineers.</p>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {hardware.map((h, i) => (
            <Reveal key={h.name} delay={i * 0.07}>
              <article className="card card-hover h-full p-6">
                <div className="flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                    <h.icon className="h-5 w-5" />
                  </span>
                  <span className="chip !bg-brand-red">{h.tag}</span>
                </div>
                <h3 className="mt-4 font-bold">{h.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink/65">{h.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {extras.map((e, i) => (
            <Reveal key={e.name} delay={i * 0.07}>
              <div className="card flex h-full gap-4 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
                  <e.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold">{e.name}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink/65">{e.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pb-24">
        <Reveal>
          <CtaStrip title="A technology partner you can trust" text="From first assessment to 24/7 support, our team stays by your side." />
        </Reveal>
      </Section>
    </>
  )
}
