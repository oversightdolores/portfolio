import { technologies } from '@/lib/data'

export default function TechnologiesPage() {
  return (
    <section className="space-y-6 py-10">
      <h2 className="text-4xl font-bold mb-4">Technologies</h2>
      <ul className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <li key={tech} className="px-2 py-1 bg-gray-200/40 dark:bg-gray-700/40 rounded">
            {tech}
          </li>
        ))}
      </ul>
    </section>
  )
}
