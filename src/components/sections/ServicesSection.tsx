import { services } from '@/lib/data'
import SectionHeader from './SectionHeader'

export default function ServicesSection() {
  const valueProps = [
    {
      title: 'Ejecución end-to-end',
      description:
        'Desde la idea y el diseño hasta el despliegue y la mejora continua.',
    },
    {
      title: 'Velocidad con calidad',
      description:
        'Entrega rápida sin sacrificar estabilidad, seguridad o performance.',
    },
    {
      title: 'Visión de negocio',
      description:
        'Soluciones pensadas para generar impacto real y resultados medibles.',
    },
  ]

  return (
    <section
      id="servicios"
      className="section-anchor min-h-screen bg-[var(--surface-muted)] py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeader title="Servicios" subtitle="Qué puedo hacer" />
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-[var(--text-secondary)]">
              Trabajo con equipos y empresas que necesitan construir productos
              digitales confiables, escalables y listos para operar en el mundo
              real. Me adapto al alcance del proyecto, desde MVPs hasta
              plataformas complejas.
            </p>
            <div className="grid gap-4">
              {valueProps.map((item) => (
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
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-[var(--primary-color)] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Agendar una llamada
            </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-[var(--border-color)] bg-[var(--card-background-color)] px-6 py-6"
              >
                <h3 className="text-base font-semibold text-[var(--text-primary)]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--text-secondary)]">
                  {service.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.includes.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border-color)] px-3 py-1 text-xs text-[var(--text-secondary)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
