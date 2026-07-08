import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight } from 'lucide-react'
import { AnimatedText } from '@/components/ui/AnimatedText'
import { useProfile } from '@/hooks/useLocalizedData'
import { BrandIcon, type IconKey } from '@/components/ui/BrandIcon'

const socialIcons: Record<string, IconKey> = {
  github: 'github',
  instagram: 'instagram',
  linkedin: 'linkedin',
}

const linkedinUrl = 'https://www.linkedin.com/in/asier-iglesias-alconero-2aa323300'

export function Contact() {
  const { t } = useTranslation()
  const profile = useProfile()

  return (
    <section
      id="contact"
      className="border-t border-border/40 px-6 py-28 md:py-40"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
          {t('contact.eyebrow')}
        </p>

        <AnimatedText
          as="h2"
          text={t('contact.title')}
          className="max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
          stagger={0.04}
        />

        <motion.a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          data-umami-event="social-link"
          data-umami-event-platform="LinkedIn"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="group inline-flex items-center gap-2 rounded-full bg-text px-6 py-3 text-sm font-medium text-bg transition-transform hover:scale-[1.03]"
        >
          {t('contact.linkedinCta')}
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden
          />
        </motion.a>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
          {profile.socials.map((s) => {
            const iconKey = socialIcons[s.icon]
            if (!iconKey) return null
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                data-umami-event="social-link"
                data-umami-event-platform={s.label}
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted transition-colors hover:border-text hover:text-text"
              >
                <BrandIcon name={iconKey} size={14} />
                <span>{s.label}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
