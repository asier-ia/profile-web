import { motion, useAnimationFrame, useMotionValue } from 'motion/react'
import { useRef, type ReactNode } from 'react'

interface MarqueeProps<T> {
  children: T[]
  renderItem: (item: T, index: number) => ReactNode
  direction?: 'left' | 'right'
  speed?: number
  className?: string
  itemClassName?: string
}

export function Marquee<T>({
  children: items,
  renderItem,
  direction = 'left',
  speed = 40,
  className,
  itemClassName,
}: MarqueeProps<T>) {
  const x = useMotionValue(0)
  const trackRef = useRef<HTMLDivElement>(null)

  useAnimationFrame((_, delta) => {
    if (!trackRef.current) return
    const width = trackRef.current.scrollWidth / 2
    if (width === 0) return
    const move = (speed * delta) / 1000
    if (direction === 'left') {
      x.set(x.get() - move)
      if (-x.get() >= width) x.set(0)
    } else {
      x.set(x.get() + move)
      if (x.get() >= 0) x.set(-width)
    }
  })

  const looped = [...items, ...items]

  return (
    <div className={`overflow-hidden ${className ?? ''}`}>
      <motion.div
        ref={trackRef}
        style={{ x, willChange: 'transform' }}
        className={`flex w-max items-center whitespace-nowrap ${itemClassName ?? 'gap-12'}`}
      >
        {looped.map((item, i) => (
          <div key={i} className="shrink-0">
            {renderItem(item, i)}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
