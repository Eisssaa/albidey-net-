import { useState, type FormEvent } from 'react'
import { AlertTriangle, Headset, Mail, MapPin, Phone, Send, Clock } from 'lucide-react'
import { site } from '../config'
import { Reveal, Section, Title } from '../components/ui'

const field =
  'w-full rounded-lg border border-brand-red/25 bg-white/80 px-4 py-3 text-sm outline-none transition placeholder:text-ink/35 focus:border-brand-red focus:ring-2 focus:ring-brand-red/15'

export function Contact() {
  const [note, setNote] = useState('')

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    if (!site.email) {
      setNote(`The online form isn't connected yet — please call us on ${site.phone}.`)
      return
    }
    const body = `${d.get('message')}\n\n— ${d.get('name')} (${d.get('email')})`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Quote request — ' + d.get('name'))}&body=${encodeURIComponent(body)}`
  }

  const info = [
    { icon: MapPin, label: 'Address', value: site.address || "N'Djamena, Chad" },
    { icon: Phone, label: 'Phone', value: site.phone, href: site.phoneHref },
    ...(site.email ? [{ icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` }] : []),
    ...(site.hours ? [{ icon: Clock, label: 'Opening hours', value: site.hours }] : []),
  ]

  return (
    <Section className="pb-24 pt-16">
      <Reveal>
        <div className="eyebrow">Contact</div>
        <Title as="h1" accent="Your Project" className="mt-3 text-4xl md:text-5xl">
          Let's Talk About
        </Title>
        <p className="mt-3 max-w-xl text-sm text-ink/65">A question or a project? Our team will get back to you as soon as possible.</p>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <form onSubmit={submit} className="card card-accent space-y-4 p-7">
            <label className="block text-xs font-semibold">
              Full name
              <input name="name" required className={`${field} mt-1.5 font-normal`} placeholder="Your name" />
            </label>
            <label className="block text-xs font-semibold">
              Email
              <input name="email" type="email" required className={`${field} mt-1.5 font-normal`} placeholder="you@company.com" />
            </label>
            <label className="block text-xs font-semibold">
              Message
              <textarea name="message" required rows={5} className={`${field} mt-1.5 font-normal`} placeholder="Describe your connectivity needs" />
            </label>
            <button type="submit" className="btn-red w-full">
              <Send className="h-4 w-4" /> Send message
            </button>
            {note && (
              <p role="status" className="rounded-lg bg-amber-50 px-4 py-3 text-xs text-amber-800">
                {note}
              </p>
            )}
          </form>
        </Reveal>

        <Reveal delay={0.1} className="space-y-5">
          <div className="card divide-y divide-ink/5">
            {info.map((i) => (
              <div key={i.label} className="flex items-start gap-4 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <i.icon className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-ink/50">{i.label}</div>
                  {'href' in i && i.href ? (
                    <a href={i.href} className="mt-0.5 block text-sm font-semibold hover:text-brand-red">{i.value}</a>
                  ) : (
                    <div className="mt-0.5 text-sm font-semibold">{i.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="card flex items-center gap-4 p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
              <Headset className="h-4 w-4" />
            </span>
            <div>
              <div className="font-semibold">Technical support</div>
              <div className="text-xs text-ink/60">Available 24/7 for our clients</div>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-8">
        <div className="card flex flex-col items-start justify-between gap-4 border-l-4 border-brand-red p-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-brand-red" />
            <div>
              <div className="text-sm font-bold uppercase tracking-wide">Network emergency?</div>
              <div className="text-xs text-ink/60">Our technical team is reachable around the clock.</div>
            </div>
          </div>
          <a href={site.phoneHref} className="btn-red shrink-0">
            <Phone className="h-4 w-4" /> {site.phone}
          </a>
        </div>
      </Reveal>
    </Section>
  )
}
