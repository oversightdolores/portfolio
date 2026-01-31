interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
        {subtitle}
      </p>
      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold font-display text-[var(--text-primary)]">
        {title}
      </h2>
    </div>
  )
}
