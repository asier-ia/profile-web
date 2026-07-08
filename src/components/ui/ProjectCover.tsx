interface ProjectCoverData {
  slug: string
  category: string
  title: string
  stack: string[]
}

interface ProjectCoverProps extends ProjectCoverData {
  variant?: 'card' | 'hero'
}

const palettes: Record<string, string> = {
  'den-den-ai': '#1A2D24',
  'las-ai': '#2A1F2A',
  'hospital-triage-ai': '#1F2429',
}

const defaultPalette = '#1A2D24'

export function ProjectCover({
  slug,
  category,
  title,
  stack,
  variant = 'card',
}: ProjectCoverProps) {
  const bg = palettes[slug] ?? defaultPalette
  const isHero = variant === 'hero'

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: isHero ? '16 / 10' : '4 / 3',
        backgroundColor: bg,
      }}
      aria-hidden
    >
      <div
        className={`relative flex h-full flex-col justify-between ${
          isHero ? 'p-9 md:p-12' : 'p-6 md:p-7'
        }`}
      >
        <p
          className={`font-mono uppercase tracking-[0.25em] ${
            isHero ? 'text-xs md:text-sm' : 'text-[10px] md:text-xs'
          }`}
          style={{ color: 'rgba(236, 242, 237, 0.45)' }}
        >
          {category}
        </p>

        <h3
          className={`font-semibold tracking-tight text-white ${
            isHero
              ? 'text-3xl md:text-5xl lg:text-6xl'
              : 'text-2xl md:text-3xl'
          }`}
        >
          {title}
        </h3>

        <ul className="flex flex-wrap gap-1.5">
          {stack.slice(0, 3).map((s) => (
            <li
              key={s}
              className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-white/70 backdrop-blur-sm"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
