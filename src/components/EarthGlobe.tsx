import { motion } from 'framer-motion'
export function EarthGlobe() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[500px]">
      <motion.div
        animate={{
          y: [-8, 8, -8],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative h-full w-full rounded-full"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, #1a2a3a 0%, #05060a 70%)',
          boxShadow:
            '0 0 100px rgba(34, 211, 238, 0.3), inset -20px -20px 60px rgba(0,0,0,0.8)',
        }}
      >
        {/* Atmospheric rim */}
        <div className="absolute inset-0 rounded-full border border-cyan-400/20 shadow-[0_0_40px_rgba(34,211,238,0.2)_inset]" />

        {/* Highlight overlay rotating */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 rounded-full opacity-30"
          style={{
            background:
              'conic-gradient(from 0deg, transparent 0%, rgba(34,211,238,0.1) 20%, transparent 40%)',
          }}
        />

        {/* Simplified Africa Silhouette (SVG Path) */}
        <svg
          viewBox="0 0 100 100"
          className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 opacity-80"
          fill="#1e3246"
        >
          <path d="M25,30 C30,20 45,15 55,20 C65,25 70,35 75,45 C80,55 75,70 65,80 C55,90 45,85 40,75 C35,65 30,55 25,45 C20,35 20,40 25,30 Z" />
          <path
            d="M55,20 C60,25 65,30 70,40 C75,50 70,60 65,70 C60,80 50,85 45,75 C40,65 45,55 50,45 C55,35 50,25 55,20 Z"
            fill="#243b53"
          />
        </svg>

        {/* City Lights */}
        <div className="absolute left-[45%] top-[40%] h-1 w-1 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
        <div className="absolute left-[55%] top-[35%] h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.8)]" />
        <div className="absolute left-[50%] top-[55%] h-1 w-1 rounded-full bg-yellow-300 shadow-[0_0_6px_rgba(253,224,71,0.8)]" />
        <div className="absolute left-[65%] top-[45%] h-1 w-1 rounded-full bg-orange-300 shadow-[0_0_8px_rgba(253,186,116,0.8)]" />
        <div className="absolute left-[40%] top-[60%] h-1 w-1 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
      </motion.div>
    </div>
  )
}
