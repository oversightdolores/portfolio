import { education, profile } from '@/lib/data'
import SectionHeader from './SectionHeader'

const strengths = [
  {
    title: 'Visión de producto',
    description:
      'Defino el alcance y las prioridades con foco en impacto y resultados.',
  },
  {
    title: 'Experiencia mobile & web',
    description:
      'Construyo interfaces rápidas, claras y optimizadas para uso real.',
  },
  {
    title: 'Sistemas críticos',
    description:
      'Arquitecturas seguras, escalables y listas para producción.',
  },
  {
    title: 'Operación continua',
    description:
      'Infraestructura, monitoreo y automatización para operar sin fricción.',
  },
]

const values = [
  'Proactividad y autonomía',
  'Comunicación clara con equipos',
  'Calidad técnica y detalle',
  'Orientación a negocio',
]

export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="section-anchor min-h-screen bg-[var(--surface-muted)] py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeader title="Sobre mí" subtitle="Perfil" />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
              {profile.bio}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {strengths.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-background-color)] px-5 py-4"
                >
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {values.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border-color)] px-3 py-1 text-xs text-[var(--text-secondary)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--card-background-color)] p-6">
              <h3 className="text-base font-semibold text-[var(--text-primary)]">
                Educación y formación
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-[var(--text-secondary)]">
                {education.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--primary-color)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--card-background-color)] p-6">
              <h3 className="text-base font-semibold text-[var(--text-primary)]">
                Enfoque de trabajo
              </h3>
              <p className="mt-3 text-sm text-[var(--text-secondary)]">
                Trabajo con foco en estabilidad, seguridad y visión de negocio,
                acompañando a clientes y equipos para llevar ideas a producción.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Producto real', 'Iteración rápida', 'Calidad continua'].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border-color)] px-3 py-1 text-xs text-[var(--text-secondary)]"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
