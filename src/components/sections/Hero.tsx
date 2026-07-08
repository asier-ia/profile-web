import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { useProfile } from '@/hooks/useLocalizedData'
import { useLenis } from '@/hooks/useLenis'

export function Hero() {
  const { t } = useTranslation()
  const profile = useProfile()
  const { pathname } = useLocation()
  const lenis = useLenis()
  const onHome = pathname === '/'

  const handleAnchor = (href: string) => (e: React.MouseEvent) => {
    if (!onHome) return
    e.preventDefault()
    lenis.current?.scrollTo(href, { offset: -80 })
  }

  return (
    <section className="relative isolate flex min-h-[100svh] items-center pt-32">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 pb-24 md:pb-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
        >
          {profile.role}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-base leading-relaxed text-muted md:text-lg"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-3 pt-2"
        >
          <a
            href="#work"
            onClick={handleAnchor('#work')}
            className="group inline-flex items-center gap-2 rounded-full bg-text px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:scale-[1.03]"
          >
            {t('hero.viewWork')}
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href="#contact"
            onClick={handleAnchor('#contact')}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:border-text"
          >
            {t('hero.getInTouch')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
