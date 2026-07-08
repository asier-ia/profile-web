import { motion, type HTMLMotionProps } from 'motion/react'
import { type ReactNode } from 'react'
import { fadeUp } from '@/lib/motion'

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  delay?: number
  y?: number
}

export function ScrollReveal({
  children,
  delay = 0,
  y = 32,
  ...rest
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export function ScrollRevealGroup({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      {children}
    </motion.div>
  )
}
