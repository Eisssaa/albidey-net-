import { Newspaper } from 'lucide-react'
import { Reveal, Section, Title } from '../components/ui'

const posts = [
  { tag: 'Company', title: 'Article coming soon' },
  { tag: 'Network', title: 'Article coming soon' },
  { tag: 'Industry', title: 'Article coming soon' },
]

export function News() {
  return (
    <Section className="pb-24 pt-16">
      <Reveal>
        <div className="eyebrow">News</div>
        <Title as="h1" accent="from AlbideyNet" className="mt-3 text-4xl md:text-5xl">
          Latest updates
        </Title>
        <p className="mt-3 max-w-xl text-sm text-ink/65">Network announcements, projects and company news will be published here.</p>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {posts.map((p, i) => (
          <Reveal key={p.tag} delay={i * 0.08}>
            <article className="card card-accent card-hover h-full">
              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-rose-100 via-white to-sky-100">
                <Newspaper className="h-10 w-10 text-brand-red/40" />
              </div>
              <div className="p-6">
                <span className="chip">{p.tag}</span>
                <h3 className="mt-3 font-bold">{p.title}</h3>
                <div className="mt-3 space-y-2">
                  <div className="h-2 w-full rounded bg-ink/5" />
                  <div className="h-2 w-4/5 rounded bg-ink/5" />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
