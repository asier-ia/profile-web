import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { Briefcase, Code2, Rocket } from 'lucide-react'
import { useStats } from '@/hooks/useLocalizedData'

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(to * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

const cardStyles = [
  {
    bg: '#88c9a1',
    fg: '#0d1310',
    Icon: Briefcase,
    pattern: 'dots',
  },
  {
    bg: '#FCD34D',
    fg: '#0d1310',
    Icon: Rocket,
    pattern: 'lines',
  },
  {
    bg: '#818cf8',
    fg: '#0d1310',
    Icon: Code2,
    pattern: 'dots',
  },
] as const

function Pattern({ kind }: { kind: 'dots' | 'lines' }) {
  if (kind === 'dots') {
    return (
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="statsDots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.4" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#statsDots)" />
      </svg>
    )
  }
  return (
    <svg
      aria-hidden
      className="absolute inset-0 h-full w-full opacity-[0.18]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="statsLines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 40 L40 0" stroke="currentColor" strokeWidth="1.2" />
          <path d="M-10 10 L10 -10" stroke="currentColor" strokeWidth="1.2" />
          <path d="M30 50 L50 30" stroke="currentColor" strokeWidth="1.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#statsLines)" />
    </svg>
  )
}

export function Stats() {
  const stats = useStats()
  return (
    <section className="border-y border-border/40 bg-bg-soft">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-3 px-6 py-10 md:grid-cols-3">
        {stats.map((s, i) => {
          const style = cardStyles[i] ?? cardStyles[0]
          const { bg, fg, Icon, pattern } = style
          return (
            <motion.div
              key={`${s.label}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-[1/1] overflow-hidden rounded-3xl p-4 transition-transform duration-500 hover:-translate-y-1 md:p-4"
              style={{ backgroundColor: bg, color: fg }}
            >
              <Pattern kind={pattern} />

              {/* Icon top-left */}
              <div
                aria-hidden
                className="relative z-10 grid h-8 w-8 place-items-center rounded-xl"
                style={{ color: fg }}
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </div>

              {/* Big text */}
              <div className="relative z-10 mt-2 flex h-[calc(100%-4.5rem)] flex-col justify-end">
                <div className="text-2xl font-extrabold leading-none tracking-tight md:text-3xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <div
                  className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] md:text-[11px]"
                  style={{ opacity: 0.75 }}
                >
                  {s.label} {s.caption}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
