import { technologies } from '@/lib/data'

export default function TechnologiesPage() {
  return (
    <section className="space-y-4 p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-xl">
      <h2 className="text-3xl font-semibold">Technologies</h2>
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
