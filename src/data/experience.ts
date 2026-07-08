import type { Experience, Lang, RawExperience } from '@/types'

const rawExperience: RawExperience[] = [
  {
    company: 'CodeSyntax',
    period: 'Oct. 2024 — Jul. 2025 · Feb. 2026 — Present',
    i18n: {
      es: {
        role: 'Backend & AI Software Engineer',
        description:
          'Diseñé y desplegué dos plataformas de IA en producción: una herramienta multi-agente interna para automatizar flujos de la empresa y un SaaS multi-tenant para clientes externos. Construí pipelines RAG escalables con Python (FastAPI) y Qdrant (scraping automatizado, chunking semántico, memoria contextual). Orquesté agentes con LangGraph y LLMs (Gemini y Ollama local) para extraer datos de Odoo en tiempo real y generar informes PDF. Integré el frontend con React, Vite y Tailwind, incluyendo un widget de chatbot integrable.',
      },
      en: {
        role: 'Backend & AI Software Engineer',
        description:
          'Designed and deployed two production AI platforms: an internal multi-agent tool to automate company workflows and a commercial multi-tenant AI SaaS for external clients. Engineered scalable RAG pipelines with Python (FastAPI) and Qdrant (automated web scraping, semantic chunking, contextual memory). Orchestrated agents with LangGraph and LLMs (Gemini and local Ollama) to extract real-time Odoo ERP data and generate automated PDF reports. Shipped frontend integrations with React, Vite and Tailwind, including an embeddable chatbot widget.',
      },
      eu: {
        role: 'Backend & AI Software Ingeniaria',
        description:
          'Bi IA plataforma diseinatu eta produkzioan jarri nituen: barneko multi-agente tresna bat enpresako workflowak automatizatzeko eta kanpoko bezeroentzako multi-tenant IA SaaS bat. RAG pipeline eskalagarriak eraiki nituen Python (FastAPI) eta Qdrant erabiliz (web scraping automatizatua, chunking semantikoa, memoria kontextuala). LangGraph eta LLM-ekin (Gemini eta tokiko Ollama) agenteak orkestratu nituen Odoo ERP datuak denbora errealean eskuratzeko eta PDF txosten automatikoak sortzeko. Frontend integrazioak React, Vite eta Tailwind-ekin, txatbot widget txertagarria barne.',
      },
    },
  },
]

export const getExperience = (lang: Lang): Experience[] =>
  rawExperience.map((e) => ({
    ...e,
    ...e.i18n[lang],
  }))
