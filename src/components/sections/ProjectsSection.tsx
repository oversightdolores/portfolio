import Image from 'next/image'
import { projects } from '@/lib/data'
import { withBasePath } from '@/lib/paths'
import SectionHeader from './SectionHeader'

const getImpact = (project: (typeof projects)[number]) =>
  'impact' in project ? project.impact ?? [] : []

const renderProjectLinks = (project: (typeof projects)[number], primary = false) => (
  <div className="mt-auto flex flex-wrap gap-3">
    {project.links.map((link, index) =>
      link.href === '#' ? (
        <span
          key={link.label}
          className="inline-flex items-center rounded-full border border-dashed border-[var(--border-color)] px-4 py-2 text-xs text-[var(--text-muted)]"
        >
          {link.label}
        </span>
      ) : (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={
            primary && index === 0
              ? 'inline-flex items-center rounded-full bg-[var(--primary-color)] px-5 py-2.5 text-xs font-semibold text-white transition hover:brightness-110'
              : 'inline-flex items-center rounded-full border border-[var(--border-color)] px-4 py-2 text-xs font-semibold text-[var(--text-primary)] transition hover:border-[var(--primary-color)] hover:text-[var(--primary-color)]'
          }
        >
          {index === 0 && primary ? 'Abrir proyecto' : link.label}
          <svg
            aria-hidden="true"
            className="ml-2 h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M8 7h9v9" />
          </svg>
        </a>
      )
    )}
  </div>
)

export default function ProjectsSection() {
  const [featuredProject, ...secondaryProjects] = projects
  const featuredImpact = getImpact(featuredProject)

  return (
    <section id="proyectos" className="section-anchor min-h-screen py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader title="Proyectos destacados" subtitle="Casos reales" />
          <p className="max-w-sm text-sm leading-relaxed text-[var(--text-secondary)]">
            Productos propios y soluciones para clientes, con foco en publicación,
            operación real y crecimiento.
          </p>
        </div>

        {featuredProject ? (
          <article className="mt-10 overflow-hidden rounded-[2rem] border border-[var(--border-color)] bg-[var(--card-background-color)] shadow-[0_30px_80px_-55px_rgba(15,23,42,0.75)]">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[360px] overflow-hidden bg-slate-950 p-5 sm:min-h-[430px]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.26),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(99,102,241,0.22),transparent_35%)]" />
                <div className="relative grid h-full grid-cols-2 gap-4">
                  {featuredProject.images.slice(0, 2).map((image, index) => (
                    <div
                      key={`${featuredProject.title}-${index}`}
                      className={`relative overflow-hidden rounded-[1.5rem] border border-white/10 shadow-2xl ${
                        index === 0 ? 'translate-y-6' : '-translate-y-3'
                      }`}
                    >
                      <Image
                        src={withBasePath(image)}
                        alt={`Mockup ${index + 1} de ${featuredProject.title}`}
                        fill
                        sizes="(min-width: 1024px) 28vw, 50vw"
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur">
                  Proyecto principal
                </div>
              </div>

              <div className="flex flex-col gap-7 p-7 sm:p-9 lg:p-10">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
                    Caso destacado
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
                    {featuredProject.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                    {featuredProject.description}
                  </p>
                </div>

                {featuredImpact.length ? (
                  <div className="grid gap-3 sm:grid-cols-3">
                    {featuredImpact.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-muted)] px-4 py-3"
                      >
                        <span className="block h-1.5 w-8 rounded-full bg-[var(--primary-color)]" />
                        <p className="mt-3 text-xs font-semibold text-[var(--text-primary)]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className="flex flex-wrap gap-2">
                  {featuredProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--border-color)] px-3 py-1 text-xs text-[var(--text-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {renderProjectLinks(featuredProject, true)}
              </div>
            </div>
          </article>
        ) : null}

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {secondaryProjects.map((project, projectIndex) => {
            const impact = getImpact(project)
            return (
              <article
                key={project.title}
                className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--card-background-color)] transition duration-300 hover:-translate-y-1 hover:border-[var(--primary-color)] hover:shadow-[0_24px_60px_-40px_rgba(15,23,42,0.75)] ${
                  projectIndex === 0 ? 'md:col-span-2 xl:col-span-1' : ''
                }`}
              >
                <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                  <Image
                    src={withBasePath(project.images[0])}
                    alt={`Mockup de ${project.title}`}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/65">
                      Producto
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="flex h-full flex-col gap-5 p-6">
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {project.description}
                  </p>

                  {impact.length ? (
                    <div className="grid gap-2">
                      {impact.slice(0, 3).map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-xs font-medium text-[var(--text-primary)]"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary-color)]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[var(--border-color)] px-3 py-1 text-xs text-[var(--text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {renderProjectLinks(project)}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
