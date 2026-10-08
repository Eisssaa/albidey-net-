import { motion } from 'framer-motion'
import { Facebook, Music2, Menu } from 'lucide-react'
export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center">
            {/* Atom orbits */}
            <div
              className="absolute inset-0"
              style={{
                transform: 'rotateX(70deg) rotateY(0deg)',
              }}
            >
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="h-full w-full rounded-full border border-orange-500/80"
              />
            </div>
            <div
              className="absolute inset-0"
              style={{
                transform: 'rotateX(70deg) rotateY(60deg)',
              }}
            >
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="h-full w-full rounded-full border border-red-500/80"
              />
            </div>
            <div
              className="absolute inset-0"
              style={{
                transform: 'rotateX(70deg) rotateY(120deg)',
              }}
            >
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="h-full w-full rounded-full border border-orange-400/80"
              />
            </div>
            {/* Center dot */}
            <div className="h-2 w-2 rounded-full bg-gradient-to-tr from-orange-500 to-red-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
          </div>
          <span className="font-heading text-xl font-bold tracking-tight text-white">
            AlbideyNet
          </span>
        </div>

        {/* Center Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {[
            'Home',
            'Services',
            'Devices',
            'Coverage',
            'Support',
            'About Us',
            'Contact',
          ].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="group relative text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              {link}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-cyan-400 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 md:flex">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </button>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="TikTok"
            >
              <Music2 className="h-4 w-4" />
            </button>
          </div>
          <button className="hidden rounded-full border border-white/20 bg-transparent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 md:block">
            Account
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 lg:hidden"
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  )
}
