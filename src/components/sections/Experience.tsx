import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useExperience } from '@/hooks/useLocalizedData'

export function Experience() {
  const { t } = useTranslation()
  const experience = useExperience()

  return (
    <section id="experience" className="border-t border-border/40 px-6 py-28 md:py-40">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <SectionHeading
            eyebrow={t('experience.eyebrow')}
            title={t('experience.title')}
          />
        </ScrollReveal>

        <ul className="mt-16 divide-y divide-border/40">
          {experience.map((e) => (
            <li key={e.company} className="py-8 first:pt-0">
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                    {e.company}
                  </p>
                  <h3 className="mt-1 text-base font-semibold tracking-tight md:text-lg">
                    {e.role}
                  </h3>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted md:text-right md:shrink-0">
                  {e.period}
                </p>
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
                {e.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
