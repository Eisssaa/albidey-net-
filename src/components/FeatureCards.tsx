import { motion } from 'framer-motion'
import { Wifi, Headphones, Shield, Plus } from 'lucide-react'
export function FeatureCards() {
  const cardVariants = {
    hover: {
      y: -4,
      boxShadow: '0 10px 30px -10px rgba(34, 211, 238, 0.15)',
      borderColor: 'rgba(34, 211, 238, 0.3)',
    },
  }
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Card 1 */}
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/90 text-white">
          <Wifi className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-heading text-sm font-semibold text-white">
            Connectivity
          </h3>
          <p className="mt-1 text-xs text-gray-400">Fiber, 4G, VSAT, Radio</p>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/90 text-white">
          <Headphones className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-heading text-sm font-semibold text-white">
            Support 24/7
          </h3>
          <p className="mt-1 text-xs text-gray-400">On-site in 15-25 minutes</p>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="col-span-2 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500/90 text-white">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold text-white">
              Enterprise WiFi Solutions
            </h3>
            <p className="mt-1 text-xs text-gray-400">
              Scalable, secure, and reliable networks
            </p>
          </div>
        </div>
        <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10">
          <Plus className="h-4 w-4" />
        </button>
      </motion.div>
    </div>
  )
}
