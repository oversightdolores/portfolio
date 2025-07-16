import { technologies } from '@/lib/data'
import TechBadge from '@/components/TechBadge'

export default function TechnologiesPage() {
  return (
    <section className="space-y-6 py-10">
      <h2 className="text-4xl font-bold mb-4">Technologies</h2>
      <ul className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <li key={tech}>
            <TechBadge name={tech} />
          </li>
        ))}
      </ul>
    </section>
  )
}
