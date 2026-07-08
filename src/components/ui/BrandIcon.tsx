import type { SVGProps } from 'react'
import {
  siPython,
  siPytorch,
  siLangchain,
  siHuggingface,
  siDocker,
  siFastapi,
  siQdrant,
  siReact,
  siTailwindcss,
  siPostgresql,
  siThreedotjs,
  siOllama,
  siGooglegemini,
  siOdoo,
  siLanggraph,
  siGithub,
  siInstagram,
  siVite,
  type SimpleIcon,
} from 'simple-icons'

const openaiFallback: SimpleIcon = {
  title: 'OpenAI',
  slug: 'openai',
  hex: '412991',
  source: 'https://simpleicons.org/icons/openai.svg',
  path: 'M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z',
  get svg() {
    return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>${this.title}</title><path d="${this.path}"/></svg>`
  },
}

const linkedinFallback: SimpleIcon = {
  title: 'LinkedIn',
  slug: 'linkedin',
  hex: '0A66C2',
  source: 'https://simpleicons.org/icons/linkedin.svg',
  path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  get svg() {
    return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>${this.title}</title><path d="${this.path}"/></svg>`
  },
}

const javaFallback: SimpleIcon = {
  title: 'Java',
  slug: 'java',
  hex: 'ED8B00',
  source: 'https://simpleicons.org/icons/java.svg',
  path: 'M8.851 18.56s-.817.534.581.714c1.695.216 2.56.185 4.426-.187 0 0 .491.307 1.176.573-4.179 1.79-9.447-.106-6.183-1.1zm-.504-2.455s-.917.679.483.823c1.807.186 3.234.202 5.703-.274 0 0 .342.346.88.535-5.055 1.477-10.67.12-7.066-1.084zm10.22 5.012s.604.498-.665.883c-2.415.728-10.044.947-12.165.027-.761-.332.667-.793 1.116-.89.45-.098.707.081.707.081-.813-.572-5.252 1.124-2.255 1.607 8.153 1.317 14.862-.592 13.262-1.708zM11.99 0s5.276 2.747 2.004 6.996c-.96 1.25-2.26 2.348-2.26 2.348s.569-.532 1.08-1.18c1.788-2.266 1.04-3.886 1.04-3.886-2.656 3.465-5.51 4.912-5.51 4.912s.858-.466 1.922-1.232c2.59-1.867 3.498-3.648 3.498-3.648s-4.18 2.288-8.416 3.068c4.614-1.054 6.642-3.414 6.642-3.414C11.584 3.856 11.99 0 11.99 0zM7.382 19.887s3.896.23 6.349-.344c0 0 .345.275.573.428-3.426.916-11.48.814-6.922-.084z',
  get svg() {
    return `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>${this.title}</title><path d="${this.path}"/></svg>`
  },
}

export type IconKey =
  | 'python'
  | 'pytorch'
  | 'openai'
  | 'langchain'
  | 'huggingface'
  | 'docker'
  | 'fastapi'
  | 'qdrant'
  | 'react'
  | 'tailwindcss'
  | 'postgresql'
  | 'threedotjs'
  | 'ollama'
  | 'googlegemini'
  | 'odoo'
  | 'langgraph'
  | 'vite'
  | 'java'
  | 'github'
  | 'instagram'
  | 'linkedin'

const iconMap = {
  python: siPython,
  pytorch: siPytorch,
  openai: openaiFallback,
  langchain: siLangchain,
  huggingface: siHuggingface,
  docker: siDocker,
  fastapi: siFastapi,
  qdrant: siQdrant,
  react: siReact,
  tailwindcss: siTailwindcss,
  postgresql: siPostgresql,
  threedotjs: siThreedotjs,
  ollama: siOllama,
  googlegemini: siGooglegemini,
  odoo: siOdoo,
  langgraph: siLanggraph,
  vite: siVite,
  java: javaFallback,
  github: siGithub,
  instagram: siInstagram,
  linkedin: linkedinFallback,
} as const satisfies Record<IconKey, SimpleIcon>

interface BrandIconProps extends Omit<SVGProps<SVGSVGElement>, 'color' | 'title'> {
  name: IconKey
  size?: number
  brandColor?: boolean
  title?: string
}

export function BrandIcon({
  name,
  size = 16,
  brandColor = false,
  title,
  ...rest
}: BrandIconProps) {
  const icon = iconMap[name]
  const fill = brandColor ? `#${icon.hex}` : 'currentColor'
  return (
    <svg
      role="img"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      aria-label={title ?? icon.title}
      {...rest}
    >
      <title>{title ?? icon.title}</title>
      <path d={icon.path} />
    </svg>
  )
}
