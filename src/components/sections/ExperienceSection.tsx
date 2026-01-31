import { experience } from '@/lib/data'
import SectionHeader from './SectionHeader'

export default function ExperienceSection() {
  const focusAreas = [
    'Producto digital',
    'Tiempo real',
    'Arquitectura escalable',
    'Automatización',
    'Infraestructura',
    'Seguridad',
  ]

  const outcomes = [
    'Implementaciones listas para producción y mantenimiento continuo.',
    'Sistemas preparados para escalar a más usuarios y nuevas ciudades.',
    'Procesos claros para soporte, monitoreo y continuidad operativa.',
  ]

  return (
    <section id="experiencia" className="section-anchor min-h-screen py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeader title="Experiencia" subtitle="Trayectoria" />
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-[var(--text-secondary)]">
              He liderado y ejecutado proyectos end-to-end para empresas y
              organismos públicos, con foco en soluciones estables, seguras y
              alineadas a objetivos de negocio.
            </p>
            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-background-color)] px-5 py-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                Áreas de impacto
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-[var(--border-color)] px-3 py-1 text-xs text-[var(--text-secondary)]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-background-color)] px-5 py-4">
              <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                Resultados típicos
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-[var(--text-secondary)]">
                {outcomes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--primary-color)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-color)] px-6 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--primary-color)] hover:text-[var(--primary-color)]"
            >
              Ver disponibilidad
            </a>
          </div>
          <div className="grid gap-6">
            {experience.map((item) => (
              <article
                key={`${item.role}-${item.company}`}
                className="rounded-3xl border border-[var(--border-color)] bg-[var(--card-background-color)] p-6"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
                  {item.period}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[var(--text-primary)]">
                  {item.role}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {item.company}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--text-secondary)]">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--primary-color)]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
