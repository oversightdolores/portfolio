interface Props {
  titulo: string
  descripcion: string
  tags: string[]
}

export default function ProjectCard({ titulo, descripcion, tags }: Props) {
  return (
    <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-background-color)] p-5">
      <h2 className="text-lg font-semibold text-[var(--text-primary)]">
        {titulo}
      </h2>
      <p className="mt-2 text-sm text-[var(--text-secondary)]">{descripcion}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[var(--border-color)] px-3 py-1 text-xs text-[var(--text-secondary)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
