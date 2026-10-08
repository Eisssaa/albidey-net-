import { Phone } from 'lucide-react'
import { routes, Link } from '../lib/router'
import { site } from '../config'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/70 bg-white/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo />
          <p className="mt-2 max-w-xs text-xs text-ink/60">
            Internet, telecom and IT solutions for institutions and businesses in Chad since 2005.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/70" aria-label="Footer">
          {routes.map((r) => (
            <Link key={r.id} to={r.id} className="hover:text-brand-red">
              {r.label}
            </Link>
          ))}
        </nav>
        <a href={site.phoneHref} className="flex items-center gap-2 text-sm font-semibold">
          <Phone className="h-4 w-4 text-brand-red" /> {site.phone}
        </a>
      </div>
      <div className="border-t border-ink/5 py-4 text-center text-[11px] text-ink/50">
        © {new Date().getFullYear()} AlbideyNet · N'Djamena, Chad
      </div>
    </footer>
  )
}
