import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { useProjects } from '@/hooks/useLocalizedData'
import { NotFound } from './NotFound'

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { t } = useTranslation()
  const projects = useProjects()

  const project = useMemo(
    () => projects.find((p) => p.slug === slug),
    [slug, projects],
  )

  if (!project) return <NotFound />

  const currentIndex = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <>
      <Helmet>
        <title>{project.title} — Asier Iglesias Alconero</title>
        <meta name="description" content={project.summary} />
      </Helmet>

      <article className="pt-32">
        <header className="mx-auto flex max-w-7xl flex-col gap-6 px-6 pb-12">
          <Link
            to="/"
            state={{ scrollTo: '#work' }}
            className="inline-flex w-fit items-center gap-2 text-sm text-muted transition-colors hover:text-text"
          >
            <span aria-hidden>←</span> {t('project.back')}
          </Link>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono uppercase tracking-[0.3em] text-accent"
          >
            {project.category} · {project.year}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl font-semibold leading-[1] tracking-tight md:text-7xl"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-2xl text-lg text-muted md:text-xl"
          >
            {project.summary}
          </motion.p>
        </header>

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-12">
          <div className="mx-auto max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs font-mono uppercase tracking-[0.3em] text-muted"
            >
              {project.role} · {project.year}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 text-xl leading-relaxed text-text md:text-2xl"
            >
              {project.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-10"
            >
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted">
                {t('project.stack')}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-sm"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {project.demoUrls && project.demoUrls.length > 0 && (
          <section className="mx-auto max-w-7xl px-6 pb-24">
            <p className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-muted">
              {t('project.demos')}
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {project.demoUrls.map((d, i) => {
                const accents = [
                  'bg-amber-500/80',
                  'bg-sky-500/80',
                  'bg-emerald-500/80',
                ]
                return (
                  <motion.a
                    key={d.label}
                    href={d.url}
                    target="_blank"
                    rel="noreferrer"
                    data-umami-event="live-demo"
                    data-umami-event-slug={project.slug}
                    data-umami-event-label={d.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="group block rounded-2xl border border-border bg-surface p-6 transition-all hover:scale-[1.02] hover:border-text/40"
                  >
                    <div className={`mb-5 h-1.5 w-12 rounded-full ${accents[i]}`} />
                    <p className="text-2xl font-semibold tracking-tight text-text">
                      {d.label}
                    </p>
                    <p className="mt-3 text-sm text-muted transition-colors group-hover:text-text">
                      {t('project.viewDemo')} →
                    </p>
                  </motion.a>
                )
              })}
            </div>
          </section>
        )}

        {project.liveUrl && !project.demoUrls?.length && (
          <section className="mx-auto max-w-7xl px-6 pb-24">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              data-umami-event="live-demo"
              data-umami-event-slug={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group block rounded-2xl border border-border bg-surface p-8 transition-all hover:scale-[1.01] hover:border-text/40"
            >
              <div className="mb-5 h-1.5 w-16 rounded-full bg-accent" />
              <p className="text-2xl font-semibold tracking-tight text-text">
                {t('project.viewProject')}
              </p>
              <p className="mt-3 text-sm text-muted transition-colors group-hover:text-text">
                {t('project.viewLive')} ↗
              </p>
            </motion.a>
          </section>
        )}

        {project.repoUrl && (
          <div className="mx-auto max-w-7xl px-6 pb-24">
            <motion.a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              data-umami-event="source-link"
              data-umami-event-slug={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium transition-colors hover:border-text"
            >
              {t('project.source')}
            </motion.a>
          </div>
        )}

        {next && (
          <section className="mx-auto max-w-7xl px-6 pb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-4 text-xs font-mono uppercase tracking-[0.3em] text-muted">
                {t('project.next')}
              </p>
              <Link
                to={`/project/${next.slug}`}
                data-umami-event="project-card"
                data-umami-event-slug={next.slug}
                className="group block rounded-2xl border border-border bg-surface p-6 transition-all hover:scale-[1.01] hover:border-text/40"
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="flex-1">
                    <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted">
                      {next.category}
                    </p>
                    <p className="mt-1.5 text-2xl font-semibold tracking-tight text-text md:text-3xl">
                      {next.title}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {next.stack.slice(0, 4).map((s) => (
                        <li
                          key={s}
                          className="rounded-full border border-border bg-bg px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-muted"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span
                    aria-hidden
                    className="shrink-0 text-3xl text-muted transition-all group-hover:translate-x-1 group-hover:text-text"
                  >
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          </section>
        )}
      </article>
    </>
  )
}
