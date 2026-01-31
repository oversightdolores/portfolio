import Image from 'next/image'
import { technologies } from '@/lib/data'
import { withBasePath } from '@/lib/paths'
import SectionHeader from './SectionHeader'

export default function StackSection() {
  return (
    <section id="stack" className="section-anchor min-h-screen py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeader title="Stack y herramientas" subtitle="Tecnologías" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-background-color)] px-4 py-4 text-sm font-medium text-[var(--text-primary)] transition hover:border-[var(--primary-color)]"
            >
              <div className="flex items-center gap-3">
                {tech.logo ? (
                  <Image
                    src={withBasePath(tech.logo)}
                    alt={`${tech.name} logo`}
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                ) : (
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--surface-muted)] text-[10px] font-semibold text-[var(--text-primary)]">
                    {(tech.short ?? tech.name.slice(0, 2)).toUpperCase()}
                  </div>
                )}
                <span>{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
