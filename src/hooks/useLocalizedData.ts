import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import type { Lang } from '@/types'
import { defaultLng, supportedLngs } from '@/i18n'
import { getProfile } from '@/data/profile'
import { getProjects } from '@/data/projects'
import { getExperience } from '@/data/experience'
import { getStats } from '@/data/stats'
import { getTools } from '@/data/tools'

const isSupported = (lng: string): lng is Lang =>
  (supportedLngs as readonly string[]).includes(lng)

function useLang(): Lang {
  const { i18n } = useTranslation()
  return useMemo(() => {
    const lng = i18n.resolvedLanguage ?? i18n.language ?? defaultLng
    return isSupported(lng) ? lng : defaultLng
  }, [i18n.resolvedLanguage, i18n.language])
}

export function useProfile() {
  const lang = useLang()
  return useMemo(() => getProfile(lang), [lang])
}

export function useProjects() {
  const lang = useLang()
  return useMemo(() => getProjects(lang), [lang])
}

export function useExperience() {
  const lang = useLang()
  return useMemo(() => getExperience(lang), [lang])
}

export function useStats() {
  const lang = useLang()
  return useMemo(() => getStats(lang), [lang])
}

export function useTools() {
  const lang = useLang()
  return useMemo(() => getTools(lang), [lang])
}
