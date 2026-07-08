interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === 'center' ? 'items-center text-center' : 'items-start'
      }`}
    >
      {eyebrow && (
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.3em] text-muted">
          <span className="h-px w-8 bg-muted" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-muted md:text-lg">{description}</p>
      )}
    </div>
  )
}
