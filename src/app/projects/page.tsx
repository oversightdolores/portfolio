import { projects } from '@/lib/data'

export default function ProjectsPage() {
  return (
    <section className="space-y-4 p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-xl">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <ul className="list-disc pl-4">
        {projects.map((p) => (
          <li key={p.title} className="mb-2">
            <strong>{p.title}:</strong> {p.description}
          </li>
        ))}
      </ul>
    </section>
  )
}
