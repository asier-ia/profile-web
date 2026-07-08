import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { useProfile } from '@/hooks/useLocalizedData'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { useLenis } from '@/hooks/useLenis'

export function Navbar() {
  const { t } = useTranslation()
  const p = useProfile()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const onHome = location.pathname === '/'
  const lenis = useLenis()

  const links = [
    { label: t('nav.work'), href: '#work' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.tools'), href: '#tools' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleAnchor = (href: string) => {
    setOpen(false)
    if (onHome) {
      lenis.current?.scrollTo(href, { offset: -80 })
    } else {
      navigate('/', { state: { scrollTo: href } })
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-border bg-bg/70 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20">
        <Link
          to="/"
          className="group flex items-center text-sm font-semibold tracking-tight"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span>{p.shortName}</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleAnchor(link.href)
                }}
                className="group relative text-sm text-muted transition-colors hover:text-text"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-text transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleAnchor('#contact')
            }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium transition-colors hover:border-text hover:bg-text hover:text-bg"
          >
            {t('nav.cta')}
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="relative z-50 grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="flex h-3 w-5 flex-col justify-between">
            <span
              className={`h-px w-full bg-text transition-transform ${
                open ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`h-px w-full bg-text transition-opacity ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-px w-full bg-text transition-transform ${
                open ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden"
          >
            <ul className="flex flex-col gap-1 border-t border-border bg-bg/95 px-6 py-6 backdrop-blur-xl">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleAnchor(link.href)
                    }}
                    className="block py-3 text-2xl font-semibold tracking-tight"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs text-muted">Language</span>
                <LanguageSwitcher />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
