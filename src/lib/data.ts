export const profile = {
  name: 'Nicolás Lo Giudice',
  role: 'Full-Stack Developer · Founder · Software & IT Solutions Architect',
  location: 'Dolores, Buenos Aires, Argentina',
  photo: '/profile1.png',
  photoAlt: 'Foto de Nicolás Lo Giudice',
  heroSummary:
    'Creo productos digitales escalables en web y mobile con foco en tiempo real, seguridad y visión de negocio.',
  bio: 'Desarrollador full-stack y emprendedor tecnológico con foco en crear productos digitales reales, escalables y en producción. Experiencia en aplicaciones web y mobile, APIs modernas, sistemas en tiempo real, automatización e infraestructura. Trabajo tanto en productos propios como en soluciones IT para empresas y sector público, priorizando estabilidad, seguridad y visión de negocio.',
  cta: 'Hablemos de tu proyecto · Desarrollo · Software · IT · Consultoría',
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Técnico / Intermedio-Avanzado' },
  ],
}

export const links = {
  email: 'nicolaslogiudice04@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nicolas-lo-giudice',
  github: 'https://github.com/crazedev04',
  whatsapp: '+54 9 2241527222',
  whatsappLink: 'https://wa.me/5492241527222',
}

export const projects = [
  {
    title: 'Farma Dolores',
    description:
      'Aplicación móvil para la ciudad de Dolores enfocada en mostrar qué farmacia está de turno, con datos de farmacias, ubicación, números de servicios de emergencia y un listado de primeros auxilios.',
    stack: [
      'React Native',
      'TypeScript',
      'Firebase Auth',
      'Cloud Firestore',
      'Cloud Functions',
      'Geolocalización',
    ],
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.overcode.farmadolores',
      },
    ],
    images: ['/projects/farmadolores-1.png', '/projects/farmadolores-2.png'],
  },
  {
    title: 'La Hoguera',
    description:
      'Aplicación mobile de audio-confesiones en tiempo real con salas en vivo, autenticación segura y moderación. Arquitectura orientada a escalabilidad, baja latencia y tiempo real.',
    stack: [
      'React Native',
      'GraphQL Yoga',
      'Prisma',
      'PostgreSQL',
      'Redis',
      'LiveKit',
      'JWT',
      'Docker',
    ],
    links: [
      { label: 'Web', href: 'https://lahoguera.app/' },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.lahoguera',
      },
    ],
    images: ['/projects/lahoguera.png'],
  },
  {
    title: 'TIEMPO',
    description:
      'Web app viral que calcula el costo en tiempo de vida de hábitos y consumos. Enfoque narrativo y emocional, con resultados shareables y uso de IA para generar copy de impacto.',
    stack: ['Next.js 16', 'Node.js', 'GraphQL', 'AI (OpenAI / Gemini)', 'Vercel'],
    links: [{ label: 'Web', href: 'https://xtiempo.com' }],
    images: ['/projects/tiempo.webp'],
  },
   {
    title: 'Farty Adventure',
    description:
      'Juego mobile 2D estilo endless runner con mecánicas humorísticas, generación procedural y enfoque casual.',
    stack: ['Unity', 'C#', 'Mobile Game Development'],
    links: [{ label: 'Google Play (pronto)', href: '#' }],
    images: ['/projects/farty.png'],
  },
  {
    title: 'Aguateros',
    description:
      'Plataforma tipo SaaS + marketplace para gestión de distribución de agua: pedidos, repartidores, clientes, suscripciones y control operativo.',
    stack: [
      'Next.js',
      'GraphQL Yoga',
      'Prisma',
      'PostgreSQL',
      'Redis',
      'Docker',
    ],
    links: [{ label: 'MVP privado', href: '#' }],
    images: ['/projects/aguateros.svg'],
  },
  {
    title: 'Bits One',
    description:
      'Marca digital y e-commerce de electrónica, gadgets y productos impresos en 3D. Gestión integral de producto, precios, marketing y automatización.',
    stack: ['E-commerce', 'Marketing digital', 'Automatización'],
    links: [{ label: 'Instagram', href: 'https://www.instagram.com/b1tsone/' }],
    images: ['/projects/bitsone.svg'],
  },
]

export const experience = [
  {
    role: 'Founder & Lead Developer',
    company: 'Bela Tech S.A.S.',
    period: '2024 – Actualidad',
    highlights: [
      'Desarrollo de software a medida.',
      'Soluciones IT críticas y continuidad operativa.',
      'Infraestructura, soporte 24/7 y automatización.',
      'Proyectos para sector privado y organismos públicos (PBA).',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Proyectos Freelance',
    period: '2020 – Actualidad',
    highlights: [
      'Desarrollo web y mobile end-to-end.',
      'APIs modernas (GraphQL, JWT, tiempo real).',
      'Deploy y mantenimiento en AWS, Vercel y entornos Docker.',
    ],
  },
]

export const education = [
  'Formación autodidacta en desarrollo de software.',
  'Aprendizaje práctico basado en proyectos productivos.',
  'Capacitación continua en arquitectura, cloud e IA.',
]

export const services = [
  {
    title: 'Desarrollo Web & Mobile',
    description:
      'Aplicaciones web y mobile listas para producción, con foco en rendimiento, UX y escalabilidad.',
    includes: ['Next.js', 'React Native', 'UX/UI'],
  },
  {
    title: 'Backend & APIs',
    description:
      'APIs modernas y seguras (REST/GraphQL) con buenas prácticas, testing y documentación.',
    includes: ['Node.js', 'GraphQL', 'Prisma'],
  },
  {
    title: 'Arquitectura de sistemas',
    description:
      'Diseño de soluciones escalables, tiempo real y alta disponibilidad para productos críticos.',
    includes: ['Realtime', 'Escalabilidad', 'Seguridad'],
  },
  {
    title: 'Infraestructura & DevOps',
    description:
      'Infraestructura cloud, despliegues continuos y monitoreo para operar con estabilidad.',
    includes: ['Docker', 'AWS/Vercel', 'CI/CD'],
  },
  {
    title: 'Automatización e IT',
    description:
      'Automatización de procesos, integraciones y soporte para operaciones continuas.',
    includes: ['Integraciones', 'Workflows', 'Soporte'],
  },
  {
    title: 'Consultoría técnica',
    description:
      'Evaluación, roadmap y acompañamiento técnico para tomar decisiones con impacto.',
    includes: ['Auditoría', 'Roadmap', 'Mentoría'],
  },
]

export const technologies = [
  { name: 'React', logo: '/logos/react.svg' },
  { name: 'React Native', logo: '/logos/react.svg' },
  { name: 'Next.js', logo: '/logos/nextdotjs.svg' },
  { name: 'Node.js', logo: '/logos/nodedotjs.svg' },
  { name: 'GraphQL', logo: '/logos/graphql.svg' },
  { name: 'TypeScript', logo: '/logos/typescript.svg' },
  { name: 'Unity', logo: '/logos/unity.svg' },
  { name: 'C#', logo: '/logos/csharp.svg' },
  { name: 'Prisma', logo: '/logos/prisma.svg' },
  { name: 'PostgreSQL', logo: '/logos/postgresql.svg' },
  { name: 'Redis', logo: '/logos/redis.svg' },
  { name: 'LiveKit', logo: '/logos/livekit.svg' },
  { name: 'Docker', logo: '/logos/docker.svg' },
  { name: 'AWS', logo: '/logos/aws.svg' },
  { name: 'Firebase', logo: '/logos/firebase.svg' },
  { name: 'Vercel', logo: '/logos/vercel.svg' },
]

export const testimonials = [
  {
    quote:
      'Capacidad para resolver problemas complejos y entregar soluciones listas para producción.',
    author: 'Testimonio real a incorporar',
  },
  {
    quote: 'Excelente criterio técnico y visión de negocio.',
    author: 'Testimonio real a incorporar',
  },
]
