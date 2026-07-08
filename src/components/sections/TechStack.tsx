import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useTools } from '@/hooks/useLocalizedData'
import { BrandIcon } from '@/components/ui/BrandIcon'
import type { TechIconKey } from '@/data/tools'

export function TechStack() {
  const { t } = useTranslation()
  const tools = useTools()
  return (
    <section id="tools" className="border-t border-border/40 px-6 py-28 md:py-40">
      <ScrollReveal>
        <SectionHeading
          eyebrow={t('tools.eyebrow')}
          title={t('tools.title')}
          description={t('tools.description')}
        />
      </ScrollReveal>

      <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:mt-16 md:grid-cols-6">
        {tools.map((tool, i) => {
          const iconKey = tool.icon as TechIconKey
          return (
            <motion.li
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-500 hover:border-text/40"
            >
              <div
                aria-hidden
                className="absolute inset-0 grid place-items-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-10"
              >
                <BrandIcon
                  name={iconKey}
                  brandColor
                  size={48}
                  className="h-12 w-12 md:h-14 md:w-14"
                />
              </div>

              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 right-3 flex items-center translate-x-3 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100"
              >
                <span className="font-mono text-sm font-medium tracking-tight whitespace-nowrap md:text-base text-text">
                  {tool.name}
                </span>
              </div>
            </motion.li>
          )
        })}
      </ul>
    </section>
  )
}
