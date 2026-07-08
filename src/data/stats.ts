import type { Lang, RawStat, Stat } from '@/types'

const rawStats: RawStat[] = [
  {
    value: 2,
    suffix: '+',
    i18n: {
      es: { label: 'Años en', caption: 'Desarrollo de IA' },
      en: { label: 'Years in', caption: 'AI Development' },
      eu: { label: 'Urte', caption: 'IA Garapenean' },
    },
  },
  {
    value: 5,
    suffix: '',
    i18n: {
      es: { label: 'Proyectos', caption: 'Destacados' },
      en: { label: 'Featured', caption: 'Projects' },
      eu: { label: 'Nabarmendutako', caption: 'Proiektuak' },
    },
  },
  {
    value: 3,
    suffix: '+',
    i18n: {
      es: { label: 'Años con', caption: 'Python' },
      en: { label: 'Years with', caption: 'Python' },
      eu: { label: 'Urte', caption: 'Python-ekin' },
    },
  },
]

export const getStats = (lang: Lang): Stat[] =>
  rawStats.map((s) => ({
    ...s,
    ...s.i18n[lang],
  }))
