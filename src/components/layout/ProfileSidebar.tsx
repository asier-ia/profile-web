import { motion } from 'motion/react'
import { useProfile } from '@/hooks/useLocalizedData'
import { BrandIcon, type IconKey } from '@/components/ui/BrandIcon'

const socialIcons: Record<string, IconKey> = {
  github: 'github',
  instagram: 'instagram',
  linkedin: 'linkedin',
}

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

export function ProfileSidebar() {
  const profile = useProfile()

  return (
    <aside className="fixed left-0 top-0 z-30 hidden h-screen w-[clamp(380px,40vw,640px)] md:flex">
      <div className="flex h-full w-full flex-col justify-center px-8 py-20 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="flex flex-col gap-7"
        >
          <img
            src={profile.avatar}
            alt={profile.name}
            className="h-60 w-60 rounded-2xl object-cover md:h-64 md:w-64 lg:h-72 lg:w-72"
          />

          <div>
            <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
              {profile.name}
            </h2>
            <p className="mt-2 text-sm text-muted md:text-base">
              {profile.role}
            </p>
          </div>

          <ul className="flex items-center gap-2 pt-2">
            {profile.socials.map((s) => {
              const iconKey = socialIcons[s.icon]
              if (!iconKey) return null
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href === '#' ? undefined : '_blank'}
                    rel="noreferrer"
                    aria-label={s.label}
                    onClick={() => window.umami?.track('social-link', { platform: s.label, location: 'sidebar' })}
                    className="group grid h-11 w-11 place-items-center rounded-full border border-border text-muted transition-all hover:scale-105 hover:border-text hover:text-text"
                  >
                    <BrandIcon name={iconKey} size={16} />
                  </a>
                </li>
              )
            })}
          </ul>
        </motion.div>
      </div>
    </aside>
  )
}
