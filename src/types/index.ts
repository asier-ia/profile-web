export type Lang = 'es' | 'en' | 'eu'

// ---------- Profile ----------
export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'instagram' | 'linkedin'
}

export interface LanguageProficiency {
  label: string
  level: string
}

export interface ProfileI18n {
  role: string
  specialty: string
  cardName: string
  tagline: string
  intro: string
  location: string
  languages: LanguageProficiency[]
}

export interface Profile {
  name: string
  shortName: string
  email: string
  avatar: string
  socials: SocialLink[]
  role: string
  specialty: string
  cardName: string
  tagline: string
  intro: string
  location: string
  languages: LanguageProficiency[]
}

export type RawProfile = Omit<Profile, 'role' | 'specialty' | 'cardName' | 'tagline' | 'intro' | 'location' | 'languages'> & {
  i18n: Record<Lang, ProfileI18n>
}

// ---------- Stats ----------
export interface StatI18n {
  label: string
  caption: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
  caption?: string
}

export type RawStat = Omit<Stat, 'label' | 'caption'> & {
  i18n: Record<Lang, StatI18n>
}

// ---------- Skills (technical terms, not localized) ----------
export interface Skill {
  name: string
}

// ---------- Projects ----------
export interface ProjectI18n {
  title: string
  category: string
  role: string
  summary: string
  description: string
}

export interface Project {
  slug: string
  year: number
  stack: string[]
  liveUrl?: string
  repoUrl?: string
  demoUrls?: { label: string; url: string }[]
  featured?: boolean
  title: string
  category: string
  role: string
  summary: string
  description: string
}

export type RawProject = Omit<Project, 'title' | 'category' | 'role' | 'summary' | 'description'> & {
  i18n: Record<Lang, ProjectI18n>
}

// ---------- Experience ----------
export interface ExperienceI18n {
  role: string
  description: string
}

export interface Experience {
  company: string
  period: string
  url?: string
  role: string
  description: string
}

export type RawExperience = Omit<Experience, 'role' | 'description'> & {
  i18n: Record<Lang, ExperienceI18n>
}

// ---------- Tools ----------
export interface ToolI18n {
  description: string
}

export interface Tool {
  name: string
  description: string
  url: string
  icon?: string
}

export type RawTool = Omit<Tool, 'description'> & {
  i18n: Record<Lang, ToolI18n>
}
