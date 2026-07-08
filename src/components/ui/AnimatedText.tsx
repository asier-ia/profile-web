import { motion, type Variants } from 'motion/react'
import { easeOut } from '@/lib/motion'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  stagger: staggerVal = 0.04,
  as: Tag = 'h1',
}: AnimatedTextProps) {
  const words = text.split(' ')

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: staggerVal, delayChildren: delay },
    },
  }

  const child: Variants = {
    hidden: { y: '110%', opacity: 0 },
    show: {
      y: '0%',
      opacity: 1,
      transition: { duration: 0.7, ease: easeOut },
    },
  }

  const MotionTag = motion[Tag] as typeof motion.h1

  return (
    <MotionTag className={className} variants={container} initial="hidden" animate="show">
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-baseline"
          aria-hidden
        >
          <motion.span className="inline-block" variants={child}>
            {word}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </MotionTag>
  )
}
