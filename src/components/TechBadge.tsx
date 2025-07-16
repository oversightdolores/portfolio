import { ReactNode } from 'react'

const icons: Record<string, ReactNode> = {
  TypeScript: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 5h18M3 5l9 14M21 5l-9 14"
      />
    </svg>
  ),
  React: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        stroke="currentColor"
        strokeWidth="2"
        d="M12 2a10 10 0 100 20 10 10 0 000-20z"
      />
      <path
        fill="currentColor"
        d="M12 7a5 5 0 100 10 5 5 0 000-10z"
      />
    </svg>
  ),
  'Next.js': (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 4l16 16M4 20L20 4"
      />
    </svg>
  ),
  TailwindCSS: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 15s3-6 9-6 9 6 9 6"
      />
    </svg>
  ),
}

export default function TechBadge({ name }: { name: string }) {
  return (
    <span className="flex items-center gap-1 px-2 py-1 bg-gray-200/40 dark:bg-gray-700/40 rounded">
      {icons[name]}
      <span>{name}</span>
    </span>
  )
}
