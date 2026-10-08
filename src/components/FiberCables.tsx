import { motion } from 'framer-motion'
type Cable = {
  id: string
  d: string
  family: 'warm' | 'cool'
  pulseDuration: number
  pulseDelay: number
  connector?: {
    x: number
    y: number
    angle: number
  }
}
const WARM = {
  outer: '#ff6b1a',
  body: '#ff3d00',
  led: '#ff8a3d',
}
const COOL = {
  outer: '#0066ff',
  body: '#00d4ff',
  led: '#5ee9ff',
}
// 8 cables, weaving from top-left → bottom-left, exiting both edges
const cables: Cable[] = [
  {
    id: 'c1',
    family: 'warm',
    d: 'M -80 -40 C 120 80, 60 240, 280 360 S 220 620, 420 760 L 460 900',
    pulseDuration: 3.2,
    pulseDelay: 0,
    connector: {
      x: 280,
      y: 360,
      angle: 32,
    },
  },
  {
    id: 'c2',
    family: 'cool',
    d: 'M -100 60 C 160 160, 80 340, 320 460 S 200 720, 380 880',
    pulseDuration: 2.8,
    pulseDelay: 0.4,
  },
  {
    id: 'c3',
    family: 'warm',
    d: 'M -60 160 C 100 240, 40 420, 220 540 S 160 800, 340 940',
    pulseDuration: 3.6,
    pulseDelay: 0.9,
  },
  {
    id: 'c4',
    family: 'cool',
    d: 'M -80 260 C 200 320, 120 500, 360 600 S 280 820, 480 980',
    pulseDuration: 2.5,
    pulseDelay: 0.2,
    connector: {
      x: 360,
      y: 600,
      angle: 28,
    },
  },
  {
    id: 'c5',
    family: 'warm',
    d: 'M -120 380 C 80 440, 20 600, 180 700 S 100 900, 260 1020',
    pulseDuration: 3.9,
    pulseDelay: 1.3,
  },
  {
    id: 'c6',
    family: 'cool',
    d: 'M -60 500 C 140 540, 60 680, 260 780 S 200 940, 420 1080',
    pulseDuration: 3.0,
    pulseDelay: 0.7,
  },
  {
    id: 'c7',
    family: 'warm',
    d: 'M -100 -100 C 60 60, 20 200, 160 320 S 100 540, 220 700',
    pulseDuration: 2.6,
    pulseDelay: 1.6,
    connector: {
      x: 220,
      y: 700,
      angle: 38,
    },
  },
  {
    id: 'c8',
    family: 'cool',
    d: 'M -80 720 C 180 760, 100 880, 340 980 L 400 1100',
    pulseDuration: 3.4,
    pulseDelay: 1.0,
  },
]
function RJ45Connector({
  x,
  y,
  angle,
  ledColor,
  pulseDuration,
  pulseDelay,
}: {
  x: number
  y: number
  angle: number
  ledColor: string
  pulseDuration: number
  pulseDelay: number
}) {
  return (
    <g
      transform={`translate(${x}, ${y}) rotate(${angle})`}
      filter="url(#connector-shadow)"
    >
      {/* Strain relief boot */}
      <rect
        x="-32"
        y="-9"
        width="14"
        height="18"
        rx="3"
        fill="#1a1a1a"
        stroke="#0a0a0a"
        strokeWidth="0.5"
      />
      <rect x="-30" y="-7" width="2" height="14" fill="#0a0a0a" opacity="0.6" />
      <rect x="-26" y="-7" width="2" height="14" fill="#0a0a0a" opacity="0.6" />
      <rect x="-22" y="-7" width="2" height="14" fill="#0a0a0a" opacity="0.6" />

      {/* Crystal housing - main body */}
      <rect
        x="-18"
        y="-11"
        width="36"
        height="22"
        rx="2"
        fill="url(#crystal-grad)"
        stroke="#4a5568"
        strokeWidth="0.5"
      />

      {/* Locking tab on top */}
      <path
        d="M -10 -11 L -10 -15 L 4 -15 L 6 -11 Z"
        fill="url(#crystal-grad)"
        stroke="#4a5568"
        strokeWidth="0.5"
      />

      {/* LED indicator on top */}
      <motion.circle
        cx="-3"
        cy="-13"
        r="1.6"
        fill={ledColor}
        animate={{
          opacity: [0.7, 1, 0.7],
          r: [1.4, 1.8, 1.4],
        }}
        transition={{
          duration: pulseDuration,
          delay: pulseDelay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          filter: `drop-shadow(0 0 4px ${ledColor})`,
        }}
      />

      {/* Gold pin contacts - 8 pins */}
      {Array.from({
        length: 8,
      }).map((_, i) => (
        <rect
          key={i}
          x={-14 + i * 3.6}
          y="-9"
          width="1"
          height="14"
          fill="#d4a017"
          opacity="0.95"
        />
      ))}

      {/* Pin highlights */}
      {Array.from({
        length: 8,
      }).map((_, i) => (
        <rect
          key={`h-${i}`}
          x={-14 + i * 3.6}
          y="-9"
          width="0.3"
          height="14"
          fill="#fce181"
          opacity="0.7"
        />
      ))}

      {/* Top highlight reflection */}
      <rect
        x="-17"
        y="-10"
        width="34"
        height="2"
        rx="1"
        fill="white"
        opacity="0.18"
      />

      {/* Side highlight */}
      <rect
        x="-17"
        y="-10"
        width="1.5"
        height="20"
        rx="0.5"
        fill="white"
        opacity="0.12"
      />
    </g>
  )
}
export function FiberCables() {
  return (
    <div className="pointer-events-none absolute inset-y-0 left-0 z-0 h-full w-full max-w-[42%] overflow-visible">
      <motion.div
        animate={{
          y: [-4, 4, -4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="h-full w-full"
      >
        <svg
          viewBox="0 0 500 1000"
          preserveAspectRatio="xMinYMid slice"
          className="absolute inset-0 h-full w-full"
          style={{
            overflow: 'visible',
          }}
        >
          <defs>
            {/* Heavy blur for outer halo */}
            <filter id="halo-blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" />
            </filter>
            {/* Medium blur for outer glow */}
            <filter id="glow-blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" />
            </filter>
            {/* Slight blur for hot core */}
            <filter id="core-blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="0.5" />
            </filter>
            {/* Connector drop shadow */}
            <filter
              id="connector-shadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
              <feOffset dx="0" dy="2" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.5" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Crystal housing gradient */}
            <linearGradient id="crystal-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2a3441" />
              <stop offset="50%" stopColor="#1a2330" />
              <stop offset="100%" stopColor="#0f1820" />
            </linearGradient>
          </defs>

          {/* Render each cable with 4 stacked layers */}
          {cables.map((cable) => {
            const colors = cable.family === 'warm' ? WARM : COOL
            return (
              <g key={cable.id}>
                {/* Layer 1: Outer halo (ambient glow) */}
                <path
                  d={cable.d}
                  stroke={colors.outer}
                  strokeWidth="24"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.15"
                  filter="url(#halo-blur)"
                />
                {/* Layer 2: Outer glow */}
                <path
                  d={cable.d}
                  stroke={colors.outer}
                  strokeWidth="12"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.4"
                  filter="url(#glow-blur)"
                />
                {/* Layer 3: Cable body */}
                <path
                  d={cable.d}
                  stroke={colors.body}
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Layer 4: Hot white core (animated) */}
                <motion.path
                  d={cable.d}
                  stroke="#ffffff"
                  strokeWidth="1"
                  strokeLinecap="round"
                  fill="none"
                  filter="url(#core-blur)"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: cable.pulseDuration,
                    delay: cable.pulseDelay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </g>
            )
          })}

          {/* Render connectors on top of all cables */}
          {cables.map((cable) => {
            if (!cable.connector) return null
            const colors = cable.family === 'warm' ? WARM : COOL
            return (
              <RJ45Connector
                key={`conn-${cable.id}`}
                x={cable.connector.x}
                y={cable.connector.y}
                angle={cable.connector.angle}
                ledColor={colors.led}
                pulseDuration={cable.pulseDuration}
                pulseDelay={cable.pulseDelay}
              />
            )
          })}
        </svg>
      </motion.div>
    </div>
  )
}
