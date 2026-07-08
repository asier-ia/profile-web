import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useProjects } from '@/hooks/useLocalizedData'

const base = import.meta.env.BASE_URL

const logoMap: Record<string, string> = {
  'den-den-ai': `${base}Dendenai.jpeg`,
  'las-ai': `${base}LasAI.jpeg`,
  'hospital-triage-ai': `${base}AI_Hospital_Triage.jpeg`,
  'cartoon-landing': `${base}CartoonLanding.jpeg`,
  'uztargi-porra': `${base}UztargiPorra.jpeg`,
}

export function Projects() {
  const { t } = useTranslation()
  const projects = useProjects()
  const featured = projects.filter((p) => p.featured).concat(
    projects.filter((p) => !p.featured),
  )

  return (
    <section id="work" className="border-t border-border/40 px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            eyebrow={t('projects.eyebrow')}
            title={t('projects.title')}
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          {featured.slice(0, 6).map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: (i % 2) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                to={`/project/${p.slug}`}
                onClick={() => window.umami?.track('project-card', { slug: p.slug })}
                className="group block overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-text/40"
              >
                <div className="flex items-center gap-6 p-6">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-semibold tracking-tight text-balance md:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[10px] font-mono uppercase tracking-[0.25em] text-muted">
                      {p.category}
                    </p>
                  </div>
                  {logoMap[p.slug] && (
                    <img
                      src={logoMap[p.slug]}
                      alt={p.title}
                      className="h-24 w-24 shrink-0 rounded-xl border border-border object-cover transition-transform group-hover:scale-105 md:h-28 md:w-28"
                    />
                  )}
                </div>
                <div className="flex items-center justify-between border-t border-border/40 px-6 py-4">
                  <span className="text-xs font-mono text-muted">{p.year}</span>
                  <span
                    aria-hidden
                    className="grid h-9 w-9 place-items-center rounded-full border border-border text-base transition-all group-hover:rotate-45 group-hover:border-text"
                  >
                    ↗
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
