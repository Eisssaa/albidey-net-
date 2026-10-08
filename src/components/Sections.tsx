import { motion } from 'framer-motion'

const sections = [
  {
    id: 'services',
    eyebrow: '02 — Services',
    title: 'Connectivity that fits your site',
    body: 'Fiber optic, 4G LTE, VSAT and radio loop links, plus enterprise WiFi for NGOs, embassies, banks, hotels, SMEs and institutions.',
  },
  {
    id: 'devices',
    eyebrow: '03 — Devices',
    title: 'Equipment, installed and supported',
    body: 'Routers, access points and last-mile equipment for every link type. Details coming soon.',
  },
  {
    id: 'coverage',
    eyebrow: '04 — Coverage',
    title: 'Serving N’Djamena',
    body: 'Our network covers the capital’s institutions and businesses. Coverage map coming soon.',
  },
  {
    id: 'support',
    eyebrow: '05 — Support',
    title: 'Support 24/7',
    body: 'On-site response in 15–25 minutes, around the clock.',
  },
  {
    id: 'about-us',
    eyebrow: '06 — About Us',
    title: 'Reliability since 2009',
    body: '“We imagined Chad without borders — and built it.”',
  },
  {
    id: 'contact',
    eyebrow: '07 — Contact',
    title: 'Join our network',
    body: 'Contact details coming soon.',
  },
]

export function Sections() {
  return (
    <>
      {sections.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className="scroll-mt-20 border-t border-white/5 py-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-7xl px-6"
          >
            <div className="font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              {s.eyebrow}
            </div>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight md:text-4xl">
              {s.title}
            </h2>
            <p className="mt-4 max-w-2xl text-gray-400">{s.body}</p>
          </motion.div>
        </section>
      ))}
    </>
  )
}
