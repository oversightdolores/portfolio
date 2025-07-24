// 9. src/components/ProjectCard.tsx
interface Props {
    titulo: string
    descripcion: string
    tags: string[]
  }
  
  export default function ProjectCard({ titulo, descripcion, tags }: Props) {
    return (
      <div className="bg-card p-5 rounded-xl border border-border">
        <h2 className="text-xl font-semibold mb-2">{titulo}</h2>
        <p className="text-secondary mb-2">{descripcion}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="bg-background text-accent px-3 py-1 text-xs rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    )
  }
  