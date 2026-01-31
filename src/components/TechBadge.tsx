import { ReactNode } from 'react'

const icons: Record<string, ReactNode> = {
  TypeScript: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
    >
      <path d="M3 5h18M3 5l9 14M21 5l-9 14" />
    </svg>
  ),
  React: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" fill="#0b1220" />
    </svg>
  ),
}

export default function TechBadge({ name }: { name: string }) {
  return (
    <span className="flex items-center gap-2 rounded-full border border-[var(--border-color)] px-3 py-1 text-xs text-[var(--text-secondary)]">
      {icons[name]}
      <span>{name}</span>
    </span>
  )
}
