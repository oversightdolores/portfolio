import { projects } from '@/lib/data'

export default function ProjectsPage() {
  return (
    <section className="space-y-6 py-10">
      <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.title}
            className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
            <div className="p-4 space-y-2">
              <h3 className="text-2xl font-semibold">{p.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
