import Image from 'next/image'
import { projects } from '@/lib/data'
import { withBasePath } from '@/lib/paths'
import SectionHeader from './SectionHeader'

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="section-anchor min-h-screen py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeader title="Proyectos destacados" subtitle="Casos reales" />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--card-background-color)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-35px_rgba(15,23,42,0.6)]"
            >
              <div className="relative h-64 w-full overflow-hidden bg-slate-900 sm:h-72">
                {project.images.length > 1 ? (
                  <div className="absolute inset-0 grid grid-cols-2 gap-2 p-3">
                    {project.images.slice(0, 2).map((image, index) => (
                      <div
                        key={`${project.title}-${index}`}
                        className="relative h-full overflow-hidden rounded-2xl"
                      >
                        <Image
                          src={withBasePath(image)}
                          alt={`Mockup ${index + 1} de ${project.title}`}
                          fill
                          sizes="(min-width: 1024px) 25vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <Image
                    src={withBasePath(project.images[0])}
                    alt={`Mockup de ${project.title}`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 z-10 bg-gradient-to-tr from-slate-900/70 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-4 left-4 z-20">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                    Proyecto
                  </p>
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="flex h-full flex-col gap-6 p-6">
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--border-color)] px-3 py-1 text-xs text-[var(--text-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-3">
                  {project.links.map((link) =>
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
                        className="inline-flex items-center rounded-full bg-[var(--primary-color)] px-4 py-2 text-xs font-semibold text-white transition hover:brightness-110"
                      >
                        {link.label}
                      </a>
                    )
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
