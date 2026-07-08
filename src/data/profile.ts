import type { Lang, Profile, RawProfile } from '@/types'

const rawProfile: RawProfile = {
  name: 'Asier Iglesias Alconero',
  shortName: 'Asier IA',
  email: 'asier.ia04@gmail.com',
  avatar: `${import.meta.env.BASE_URL}profile.JPG`,
  socials: [
    { label: 'GitHub', href: 'https://github.com/asier-ia', icon: 'github' },
    { label: 'Instagram', href: 'https://www.instagram.com/asier_iglesias21', icon: 'instagram' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/asier-iglesias-alconero-2aa323300',
      icon: 'linkedin',
    },
  ],
  i18n: {
    es: {
      role: 'AI & Backend Engineer',
      specialty: 'Ingeniero informático especializado en IA',
      cardName: 'Asier Iglesias',
      tagline: 'Construyendo el futuro, un commit a la vez.',
      intro:
        'Graduado en Ingeniería Informática  y futuro estudiante de un Máster en IA aplicada al software (octubre 2026). Diseño y entrego arquitecturas backend escalables y plataformas de IA listas para producción, con experiencia probada en SaaS multi-tenant, pipelines RAG y sistemas multi-agente.',
      location: 'Mendaro, Gipuzkoa · Abierto a reubicación / remoto',
      languages: [
        { label: 'Español', level: 'Nativo' },
        { label: 'Euskera', level: 'Nativo' },
        { label: 'Inglés', level: 'Avanzado' },
      ],
    },
    en: {
      role: 'AI & Backend Engineer',
      specialty: 'Computer Engineer specialized in AI',
      cardName: 'Asier Iglesias',
      tagline: 'Building the future, one commit at a time.',
      intro:
        'Computer Engineering graduate and incoming AI Master’s student (October 2026). I design and ship scalable backend architectures and production-ready AI platforms, with proven experience in multi-tenant SaaS, RAG pipelines and multi-agent systems.',
      location: 'Mendaro, Gipuzkoa · Open to relocation / remote',
      languages: [
        { label: 'Spanish', level: 'Native' },
        { label: 'Basque', level: 'Native' },
        { label: 'English', level: 'Advanced' },
      ],
    },
    eu: {
      role: 'AI & Backend Engineer',
      specialty: 'Informatika ingeniari aditua IA-n',
      cardName: 'Asier Iglesias',
      tagline: 'Etorkizuna eraikitzen, commit bat aldi berean.',
      intro:
        'Informatika Ingeniaritzako graduatua eta IA Masterreko etorkizuneko ikaslea (2026ko urria). Backend arkitektura eskalagarriak eta produkziorako prest dauden IA plataformak diseinatzen eta entregatzen ditut, SaaS multi-tenant, RAG pipeline eta multi-agente sistemen esperientziarekin.',
      location: 'Mendaro, Gipuzkoa · Errelokaziora / urrunera irekia',
      languages: [
        { label: 'Gaztelania', level: 'Jatorrizkoa' },
        { label: 'Euskara', level: 'Jatorrizkoa' },
        { label: 'Ingelesa', level: 'Aurreratua' },
      ],
    },
  },
}

export const getProfile = (lang: Lang): Profile => ({
  ...rawProfile,
  ...rawProfile.i18n[lang],
})
