import { useTranslation } from 'react-i18next'
import { Marquee } from '@/components/ui/Marquee'
import { BrandIcon, type IconKey } from '@/components/ui/BrandIcon'

type TechItem = { name: string; icon: IconKey }

const tech: TechItem[] = [
  { name: 'Python', icon: 'python' },
  { name: 'Java', icon: 'java' },
  { name: 'TypeScript', icon: 'react' },
  { name: 'LangGraph', icon: 'langgraph' },
  { name: 'FastAPI', icon: 'fastapi' },
  { name: 'Qdrant', icon: 'qdrant' },
  { name: 'React', icon: 'react' },
  { name: 'Vite', icon: 'vite' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'Docker', icon: 'docker' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'Three.js', icon: 'threedotjs' },
  { name: 'Ollama', icon: 'ollama' },
  { name: 'Gemini', icon: 'googlegemini' },
  { name: 'Odoo', icon: 'odoo' },
  { name: 'Hugging Face', icon: 'huggingface' },
]

function TechMarquee({
  items,
  direction,
  speed,
}: {
  items: TechItem[]
  direction: 'left' | 'right'
  speed: number
}) {
  return (
    <Marquee
      direction={direction}
      speed={speed}
      className="py-4"
      renderItem={(item) => (
        <div className="flex items-center gap-3 text-2xl font-medium tracking-tight text-muted md:text-3xl">
          <BrandIcon name={item.icon} size={28} className="opacity-80" />
          <span>{item.name}</span>
        </div>
      )}
    >
      {items}
    </Marquee>
  )
}

export function SkillsMarquee() {
  const { t } = useTranslation()
  const half = Math.ceil(tech.length / 2)
  const rowA = tech.slice(0, half)
  const rowB = tech.slice(half)

  return (
    <section className="relative space-y-2 border-t border-border/40 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted">
          {t('skills.eyebrow')}
        </p>
      </div>
      <TechMarquee items={rowA} direction="left" speed={50} />
      <TechMarquee items={rowB} direction="right" speed={35} />
    </section>
  )
}
