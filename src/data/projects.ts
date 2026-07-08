import type { Lang, Project, RawProject } from '@/types'

const rawProjects: RawProject[] = [
  {
    slug: 'den-den-ai',
    year: 2026,
    stack: ['Qdrant', 'Python', 'LangGraph', 'FastAPI', 'PostgreSQL', 'React', 'Tailwind CSS', 'Vite'],
    featured: true,
    liveUrl: 'https://asier-ia.github.io/TFG-GBL-THESIS-PUBLIC/',
    i18n: {
      es: {
        title: 'DenDenAI',
        category: 'SaaS Multi-Tenant · IA',
        role: 'Backend & AI Engineer',
        summary:
          'SaaS de IA multi-tenant para clientes externos, con RAG escalable y widget de chatbot integrable.',
        description:
          'DenDenAI es una plataforma SaaS de IA multi-tenant diseñada para clientes externos. Incluye pipelines RAG escalables con Python (FastAPI) y Qdrant, con web scraping automatizado, chunking semántico y memoria contextual. En el frontend, un widget de chatbot integrable que permite a cada cliente desplegar su propio asistente de IA.',
      },
      en: {
        title: 'DenDenAI',
        category: 'Multi-Tenant SaaS · AI',
        role: 'Backend & AI Engineer',
        summary:
          'Multi-tenant AI SaaS for external clients, with scalable RAG and an embeddable chatbot widget.',
        description:
          'DenDenAI is a multi-tenant AI SaaS platform built for external clients. It ships scalable RAG pipelines using Python (FastAPI) and Qdrant, with automated web scraping, semantic chunking and contextual memory. On the frontend, an embeddable chatbot widget lets every customer deploy their own AI assistant.',
      },
      eu: {
        title: 'DenDenAI',
        category: 'Multi-Tenant SaaS · IA',
        role: 'Backend & AI Ingeniaria',
        summary:
          'Kanpoko bezeroentzako multi-tenant IA SaaS, RAG eskalagarriarekin eta txatbot widget txertagarriarekin.',
        description:
          'DenDenAI kanpoko bezeroentzat sortutako multi-tenant IA SaaS plataforma bat da. Python (FastAPI) eta Qdrant erabiliz RAG pipeline eskalagarriak, web scraping automatizatua, chunking semantikoa eta memoria kontextuala eskaintzen ditu. Frontendean, txatbot widget txertagarri batekin bezero bakoitzak bere IA laguntzailea zabaltzeko aukera du.',
      },
    },
  },
  {
    slug: 'las-ai',
    year: 2026,
    stack: ['Qdrant', 'Python', 'LangGraph', 'FastAPI', 'PostgreSQL', 'React', 'Tailwind CSS', 'Vite', 'Odoo'],
    featured: true,
    liveUrl: 'https://asier-ia.github.io/TFG-GBL-THESIS-PUBLIC/',
    i18n: {
      es: {
        title: 'LasAI',
        category: 'Multi-Agente · Operaciones',
        role: 'AI Engineer',
        summary:
          'Agente interno multi-agente para automatizar flujos de la empresa: ERP, datos en tiempo real e informes PDF.',
        description:
          'LasAI es un agente interno multi-agente que orquesta flujos de trabajo operativos en CodeSyntax. Sobre LangGraph y LLMs (Google Gemini y modelos locales Ollama), consulta datos en tiempo real del ERP (Odoo), genera informes PDF automatizados y expone herramientas internas. Diseñado para ejecutarse en contenedores Docker y ser extendido con nuevas habilidades.',
      },
      en: {
        title: 'LasAI',
        category: 'Multi-Agent · Operations',
        role: 'AI Engineer',
        summary:
          'Internal multi-agent tool that automates company workflows: ERP, real-time data and PDF reporting.',
        description:
          'LasAI is an internal multi-agent tool that orchestrates operational workflows at CodeSyntax. Built on LangGraph and LLMs (Google Gemini and local Ollama models), it queries real-time ERP (Odoo) data, generates automated PDF reports and exposes internal tools. Containerised with Docker and designed to be extended with new skills.',
      },
      eu: {
        title: 'LasAI',
        category: 'Multi-Agente · Eragiketak',
        role: 'AI Ingeniaria',
        summary:
          'Barneko multi-agente tresna enpresako workflowak automatizatzeko: ERP, denbora errealeko datuak eta PDF txostenak.',
        description:
          'LasAI CodeSyntax-eko workflow operatiboak orkestratzen dituen barneko multi-agente tresna bat da. LangGraph eta LLM-ak (Google Gemini eta tokiko Ollama modeloak) erabiliz, denbora errealeko ERP (Odoo) datuak kontsultatzen ditu, PDF txosten automatikoak sortzen ditu eta barneko tresnak eskaintzen ditu. Docker-ekin ontziratua eta gaitasun berriekin hedatzeko prest.',
      },
    },
  },
  {
    slug: 'hospital-triage-ai',
    year: 2025,
    stack: ['Java', 'SQL', 'Machine Learning', 'Concurrency'],
    featured: true,
    i18n: {
      es: {
        title: 'AI Hospital Triage Simulator',
        category: 'PBL · IA + Backend',
        role: 'Backend & ML Engineer',
        summary:
          'Simulador de triaje hospitalario con IA: clasificación de urgencia, rutas por especialidad y concurrencia en Java.',
        description:
          'Proyecto PBL (Project-Based Learning) para optimizar el triaje hospitalario y la asignación de recursos. Incluye un clasificador ML para predecir la urgencia del paciente y derivar a la especialidad correcta, un simulador backend en Java con monitores y semáforos para modelar concurrencia y workflows complejos, y una base de datos SQL diseñada con foco en IA responsable y supervisión humana (human-in-the-loop).',
      },
      en: {
        title: 'AI Hospital Triage Simulator',
        category: 'PBL · AI + Backend',
        role: 'Backend & ML Engineer',
        summary:
          'AI hospital triage simulator: urgency classification, specialty routing and Java concurrency.',
        description:
          'Project-Based Learning project to optimise hospital triage and resource allocation. It includes an ML classifier that predicts patient urgency and routes to the right specialty, a Java backend simulator using monitors and semaphores to model complex concurrency and workflows, and a SQL database designed with a focus on responsible AI and human-in-the-loop oversight.',
      },
      eu: {
        title: 'AI Hospital Triage Simulagailua',
        category: 'PBL · IA + Backend',
        role: 'Backend & ML Ingeniaria',
        summary:
          'AI bidezko ospitale triaje simulagailua: urgentzia sailkapena, espezialitate bideraketa eta Java konkurrentzia.',
        description:
          'Project-Based Learning proiektua, ospitaleko triajea eta baliabideen esleipena optimizatzeko. ML sailkatzaile bat pazientearen urgentzia iragartzeko eta espezialitate egokira bideratzeko, Java backend simulagailu bat monitore eta semaforoekin konkurrentzia konplexua modelatzeko, eta SQL datu-base bat IA erantzukizuntsua eta gizakiaren gainbegiratzea (human-in-the-loop) oinarritzat hartuta diseinatua.',
      },
    },
  },
  {
    slug: 'cartoon-landing',
    year: 2026,
    stack: ['Docker Compose', 'React', 'Vite', 'Tailwind', 'FastAPI', 'PostgreSQL'],
    featured: false,
    demoUrls: [
      { label: 'Galletas', url: 'https://asier-ia.github.io/landing-cartoon-pack/galletas/' },
      { label: 'Helados', url: 'https://asier-ia.github.io/landing-cartoon-pack/helados/' },
      { label: 'Tortillas', url: 'https://asier-ia.github.io/landing-cartoon-pack/tortillas/' },
    ],
    i18n: {
      es: {
        title: 'Cartoon Landing Page',
        category: 'Landing Page · Prototipo',
        role: 'Full-Stack Developer',
        summary:
          'Landing page estilo cartoon para tiendas locales. Mini-eventos para promocionar productos con lotería de golden tickets.',
        description:
          'Prototipo de landing page con estilo cartoon diseñada para tiendas locales que quieren lanzar nuevos sabores o productos mediante mini-eventos. Incluye una sección interactiva de lotería con golden tickets para gamificar la promoción. Construida con Docker Compose, React y Vite en el frontend, FastAPI y PostgreSQL en el backend.',
      },
      en: {
        title: 'Cartoon Landing Page',
        category: 'Landing Page · Prototype',
        role: 'Full-Stack Developer',
        summary:
          'Cartoon-style landing page for local stores. Mini-events to promote products with a golden ticket lottery.',
        description:
          'A cartoon-style landing page prototype built for local stores looking to launch new flavours or products through mini-events. Includes an interactive golden ticket lottery section to gamify promotions. Built with Docker Compose, React and Vite on the frontend, FastAPI and PostgreSQL on the backend.',
      },
      eu: {
        title: 'Cartoon Landing Page',
        category: 'Landing Page · Prototipoa',
        role: 'Full-Stack Garatzailea',
        summary:
          'Cartoon estiloko landing page tokiko dendetarako. Produktuak sustatzeko mini-ekitaldiak golden ticket loteriarekin.',
        description:
          'Cartoon estiloko landing page prototipoa, produktu edo zapore berriak mini-ekitaldien bidez sustatu nahi dituzten tokiko dendentzat. Golden ticket loteria sekzio interaktiboa barne hartzen du promozioak gamifikatzeko. Docker Compose, React eta Vite-rekin eraikia frontendean, FastAPI eta PostgreSQL-ekin backend-ean.',
      },
    },
  },
  {
    slug: 'uztargi-porra',
    year: 2026,
    stack: ['Docker Compose', 'React', 'Vite', 'Tailwind', 'FastAPI', 'Stripe'],
    featured: true,
    liveUrl: 'https://asier-ia.github.io/porrauztargi/',
    i18n: {
      es: {
        title: 'Uztargi Porra',
        category: 'Web · Full-Stack',
        role: 'Full-Stack Developer',
        summary:
          'Web para la porra del Mundial del Bar Uztargi. Automatiza puntos y ranking en tiempo real. Benéfica para AFAGI.',
        description:
          'Aplicación web desarrollada voluntariamente para el Bar Uztargi con el objetivo de automatizar la gestión de su porra del Mundial. Sustituye el sistema manual de papel y boli por un ranking digital en tiempo real. Iniciativa benéfica: parte de la recaudación se dona a la asociación AFAGI. Integra pagos con Stripe y está desplegada con Docker Compose.',
      },
      en: {
        title: 'Uztargi Porra',
        category: 'Web · Full-Stack',
        role: 'Full-Stack Developer',
        summary:
          'Web app for Uztargi Bar World Cup betting pool. Real-time points and rankings. Charitable for AFAGI.',
        description:
          'A volunteer-built web app for Uztargi Bar to automate their World Cup betting pool management. Replaces the manual paper-and-pen system with a real-time digital ranking. Charitable initiative: part of the proceeds are donated to the AFAGI association. Integrates Stripe payments and is deployed with Docker Compose.',
      },
      eu: {
        title: 'Uztargi Porra',
        category: 'Web · Full-Stack',
        role: 'Full-Stack Garatzailea',
        summary:
          'Uztargi Barreko Munduko Kopako porrarako web-a. Puntu eta ranking denbora errealean. AFAGIrentzat onuragarria.',
        description:
          'Uztargi Barrarentzat borondatez garatutako web aplikazioa, Munduko Kopako porraren kudeaketa automatizatzeko. Paper eta boligrafo sistema tradizionala ranking digital denbora errealarekin ordezkatzen du. Ekimen solidarioa: bildutakoaren zati bat AFAGI elkarteari ematen zaio. Stripe bidezko ordainketak integratzen ditu eta Docker Compose-rekin zabaltzen da.',
      },
    },
  },
]

export const getProjects = (lang: Lang): Project[] =>
  rawProjects.map((p) => ({
    ...p,
    ...p.i18n[lang],
  }))
