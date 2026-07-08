import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { SkillsMarquee } from '@/components/sections/SkillsMarquee'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { TechStack } from '@/components/sections/TechStack'
import { Contact } from '@/components/sections/Contact'
import { useLenis } from '@/hooks/useLenis'

export function Home() {
  const location = useLocation()
  const lenis = useLenis()

  useEffect(() => {
    const target = (location.state as { scrollTo?: string })?.scrollTo
    if (target && lenis.current) {
      requestAnimationFrame(() => {
        lenis.current?.scrollTo(target, { offset: -80, immediate: false })
      })
    }
  }, [location.state, lenis])

  return (
    <>
      <Hero />
      <Stats />
      <SkillsMarquee />
      <Projects />
      <Experience />
      <TechStack />
      <Contact />
    </>
  )
}
