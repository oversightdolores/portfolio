import { projects } from '@/lib/data'

export default function ProjectsPage() {
  return (
    <section className="space-y-6 py-10">
      <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <ul className="list-disc pl-5 space-y-2">
        {projects.map((p) => (
          <li key={p.title} className="mb-2">
            <strong>{p.title}:</strong> {p.description}
          </li>
        ))}
      </ul>
    </section>
  )
}
