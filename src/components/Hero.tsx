import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FiberCables } from './FiberCables'
import { EarthGlobe } from './EarthGlobe'
import { FeatureCards } from './FeatureCards'
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
    },
  },
}
export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] w-full overflow-hidden py-12 lg:py-20">
      <FiberCables />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        {/* Left Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col items-start gap-6"
        >
          <motion.div
            variants={itemVariants}
            className="font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase"
          >
            01 — Our Solutions
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-heading text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
          >
            <span className="text-white">High-Speed Internet</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-300 to-teal-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-lg text-base text-gray-400 md:text-lg"
          >
            Reliable, high-performance connectivity for NGOs, embassies, banks,
            hotels, SMEs, institutions and businesses in{' '}
            <span className="text-cyan-400">NDjamena</span>.
          </motion.p>

          <motion.div variants={itemVariants}>
            <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-7 py-3.5 font-medium text-black transition-transform hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                Explore Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              {/* Shimmer effect */}
              <motion.div
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
              />
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 pt-2"
          >
            {['Fiber Optic', '4G LTE', 'VSAT', 'Radio Loop'].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/15 px-4 py-1.5 text-xs text-gray-300 transition-colors hover:border-cyan-400/50 hover:text-cyan-300 cursor-default"
              >
                {chip}
              </span>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="w-full max-w-md pt-4">
            <div className="h-px w-full bg-white/10" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-2 pt-2"
          >
            <span className="font-mono text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              Reliability Since 2009
            </span>
            <p className="text-lg italic text-gray-300">
              "We imagined Chad without borders — and built it."
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{
            opacity: 0,
            x: 20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="relative z-10 flex flex-col gap-8"
        >
          {/* Join Card */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur shadow-[inset_0_0_20px_rgba(34,211,238,0.05)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="font-heading text-sm font-semibold text-white">
                  Join our network
                </h3>
                <p className="mt-1 text-xs text-gray-400">
                  Connect with NDjamena's leading institutions
                </p>
              </div>
              <button className="flex items-center gap-1 text-xs font-medium text-cyan-400 transition-colors hover:text-cyan-300 whitespace-nowrap">
                Get started <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>

          <EarthGlobe />
          <FeatureCards />
        </motion.div>
      </div>
    </section>
  )
}
