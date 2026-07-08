import { useTranslation } from 'react-i18next'
import type { Lang } from '@/types'
import { supportedLngs } from '@/i18n'

const labels: Record<Lang, string> = {
  es: 'ES',
  en: 'EN',
  eu: 'EU',
}

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { i18n } = useTranslation()
  const current = (i18n.resolvedLanguage ?? i18n.language ?? 'en') as Lang

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center gap-1 rounded-full border border-border bg-surface/80 p-1 text-xs font-medium ${
        compact ? 'text-[11px]' : ''
      }`}
    >
      {supportedLngs.map((lng) => {
        const active = lng === current
        return (
          <button
            key={lng}
            type="button"
            onClick={() => {
              void i18n.changeLanguage(lng)
            }}
            aria-pressed={active}
            aria-label={`Switch language to ${labels[lng]}`}
            className={`min-w-7 rounded-full px-2.5 py-1 transition-colors ${
              active
                ? 'bg-accent text-accent-fg'
                : 'text-muted hover:text-text'
            }`}
          >
            {labels[lng]}
          </button>
        )
      })}
    </div>
  )
}
