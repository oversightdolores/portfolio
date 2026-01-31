import Image from 'next/image'
import { links, profile } from '@/lib/data'

const highlights = [
  'Productos en producción',
  'Sistemas en tiempo real',
  'Arquitecturas escalables',
  'Infraestructura y seguridad',
]

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="section-anchor relative flex min-h-screen items-center overflow-hidden py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-400/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--card-background-color)] px-4 py-1 text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
            Full-Stack · Founder · IT Solutions
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-[var(--text-primary)]">
            {profile.name}
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">{profile.role}</p>
          <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
            {profile.heroSummary ?? profile.bio}
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-[var(--text-secondary)]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] px-3 py-1">
              <svg
                aria-hidden="true"
                className="h-4 w-4 text-[var(--primary-color)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11z"
                />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {profile.location}
            </div>
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-transparent bg-[var(--surface-muted)] px-3 py-1 text-xs text-[var(--text-secondary)]"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-[var(--primary-color)] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Hablemos de tu proyecto
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-color)] px-6 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--primary-color)] hover:text-[var(--primary-color)]"
            >
              Ver proyectos
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-[var(--text-secondary)]">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[var(--primary-color)]"
            >
              GitHub
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.74.5.1.68-.23.68-.5v-1.72c-2.78.62-3.37-1.2-3.37-1.2-.46-1.2-1.12-1.52-1.12-1.52-.92-.65.07-.64.07-.64 1.02.07 1.56 1.07 1.56 1.07.9 1.58 2.36 1.12 2.94.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.13-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .85-.28 2.78 1.05a9.47 9.47 0 012.53-.35c.86 0 1.72.12 2.53.35 1.93-1.33 2.78-1.05 2.78-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.79-4.58 5.05.36.32.68.94.68 1.9v2.82c0 .28.18.6.69.5A10.03 10.03 0 0022 12.26C22 6.58 17.52 2 12 2z" />
              </svg>
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[var(--primary-color)]"
            >
              LinkedIn
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.68H9.33V9h3.41v1.56h.05c.47-.88 1.63-1.8 3.36-1.8 3.6 0 4.26 2.37 4.26 5.45v6.24zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zm-1.78 13.02h3.56V9H3.56v11.45zM22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z" />
              </svg>
            </a>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${links.email}`}
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-color)] px-5 py-2 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--primary-color)] hover:text-[var(--primary-color)]"
            >
              Email directo
            </a>
            <a
              href={links.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[var(--primary-color)] px-5 py-2 text-sm font-semibold text-white transition hover:brightness-110"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 lg:ml-auto lg:max-w-md lg:self-center">
          {profile.photo && (
            <div className="relative flex h-96 w-full max-w-sm items-center justify-center overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--surface-muted)]/70 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.5)]">
              <div className="pointer-events-none absolute -top-10 right-6 h-32 w-32 rounded-full bg-sky-400/30 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-12 left-4 h-40 w-40 rounded-full bg-indigo-500/20 blur-2xl" />
              <Image
                src={profile.photo}
                alt={profile.photoAlt ?? profile.name}
                width={520}
                height={700}
                className="h-full w-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          )}
        </div>
      </div>

      <a
        href="#sobre-mi"
        aria-label="Ir a sobre mí"
        className="absolute bottom-6 left-1/2 inline-flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--card-background-color)] text-[var(--text-primary)] shadow-sm transition hover:border-[var(--primary-color)] hover:text-[var(--primary-color)]"
      >
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  )
}
