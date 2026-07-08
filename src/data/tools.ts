import type { Lang, RawTool, Tool } from '@/types'
import type { IconKey } from '@/components/ui/BrandIcon'

export type TechIconKey = IconKey

type ToolDef = {
  name: string
  icon: TechIconKey
  url: string
  i18n: Record<Lang, string>
}

const rawTools: ToolDef[] = [
  {
    name: 'Python',
    icon: 'python',
    url: 'https://www.python.org/',
    i18n: {
      es: 'Lenguaje principal de IA & backend',
      en: 'Primary language for AI & backend',
      eu: 'IA eta backend-eko lengoaia nagusia',
    },
  },
  {
    name: 'Java',
    icon: 'java',
    url: 'https://www.java.com/',
    i18n: {
      es: 'Lenguaje robusto para backend y sistemas',
      en: 'Robust language for backend and systems',
      eu: 'Backend eta sistemetarako hizkuntza sendoa',
    },
  },
  {
    name: 'React',
    icon: 'react',
    url: 'https://react.dev/',
    i18n: {
      es: 'Biblioteca para interfaces de usuario',
      en: 'Library for user interfaces',
      eu: 'Erabiltzaile interfazeetarako liburutegia',
    },
  },
  {
    name: 'Vite',
    icon: 'vite',
    url: 'https://vite.dev/',
    i18n: {
      es: 'Herramienta de build rápida para frontend',
      en: 'Fast build tool for frontend',
      eu: 'Frontend-erako build tresna azkarra',
    },
  },
  {
    name: 'LangChain',
    icon: 'langchain',
    url: 'https://www.langchain.com/',
    i18n: {
      es: 'Frameworks para RAG y agentes',
      en: 'Frameworks for RAG and agents',
      eu: 'RAG eta agenteentzako framework-ak',
    },
  },
  {
    name: 'Qdrant',
    icon: 'qdrant',
    url: 'https://qdrant.tech/',
    i18n: {
      es: 'Base de datos vectorial para búsqueda semántica',
      en: 'Vector database for semantic search',
      eu: 'Datu-base bektoriala bilaketa semantikorako',
    },
  },
  {
    name: 'Ollama',
    icon: 'ollama',
    url: 'https://ollama.com/',
    i18n: {
      es: 'Ejecución local de modelos LLM',
      en: 'Local LLM model runner',
      eu: 'LLM modeloak lokalean exekutatzeko',
    },
  },
  {
    name: 'LangGraph',
    icon: 'langgraph',
    url: 'https://langchain-ai.github.io/langgraph/',
    i18n: {
      es: 'Framework para agentes y flujos con LLM',
      en: 'Framework for agents and LLM workflows',
      eu: 'Agente eta LLM lan-fluxuetarako framework-a',
    },
  },
  {
    name: 'Docker',
    icon: 'docker',
    url: 'https://www.docker.com/',
    i18n: {
      es: 'Contenedores y despliegue reproducible',
      en: 'Containers and reproducible deployment',
      eu: 'Kontenedoreak eta deploy erreproduziblea',
    },
  },
]

const enriched: RawTool[] = rawTools.map((t) => ({
  name: t.name,
  icon: t.icon,
  url: t.url,
  i18n: {
    es: { description: t.i18n.es },
    en: { description: t.i18n.en },
    eu: { description: t.i18n.eu },
  },
}))

export const getTools = (lang: Lang): Tool[] =>
  enriched.map((t) => ({
    ...t,
    ...t.i18n[lang],
  }))
