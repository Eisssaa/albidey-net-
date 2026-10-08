import { useState } from 'react'
import { Headset, Menu, X } from 'lucide-react'
import { routes, Link, type RouteId } from '../lib/router'
import { site } from '../config'
import { Logo } from './Logo'

export function Navbar({ active }: { active: RouteId }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-6 px-6">
        <Link to="home" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {routes.map((r) => (
            <Link
              key={r.id}
              to={r.id}
              className={`relative py-1 text-sm font-medium transition-colors ${
                active === r.id ? 'text-ink' : 'text-ink/65 hover:text-ink'
              }`}
            >
              {r.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-[2px] rounded bg-brand-red transition-all ${
                  active === r.id ? 'w-full' : 'w-0'
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-xl border border-white bg-white/70 px-3 py-1.5 shadow-sm md:flex"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
              <Headset className="h-4 w-4" />
            </span>
            <span className="leading-tight">
              <span className="block text-[9px] font-semibold uppercase tracking-widest text-ink/50">Support 24/7</span>
              <span className="block text-xs font-semibold">{site.phone}</span>
            </span>
          </a>
          <Link to="contact" className="btn-red hidden !px-5 !py-2.5 sm:inline-flex">
            Get a quote
          </Link>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-sm lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/60 bg-white/90 px-6 py-4 backdrop-blur-xl lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {routes.map((r) => (
              <li key={r.id} onClick={() => setOpen(false)}>
                <Link
                  to={r.id}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                    active === r.id ? 'bg-brand-red/10 text-brand-red' : 'text-ink/80'
                  }`}
                >
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
