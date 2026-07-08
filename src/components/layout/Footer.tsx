import { useTranslation } from 'react-i18next'
import { useProfile } from '@/hooks/useLocalizedData'

export function Footer() {
  const { t } = useTranslation()
  const profile = useProfile()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {profile.name}. {t('footer.rights')}
        </p>
        <p className="text-xs">{t('footer.crafted')}</p>
      </div>
    </footer>
  )
}
