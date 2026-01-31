'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldUseDark = stored ? stored === 'dark' : prefersDark
    document.documentElement.classList.toggle('dark', shouldUseDark)
    setIsDark(shouldUseDark)
  }, [])

  const toggle = () => {
    const next = !isDark
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
    setIsDark(next)
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--card-background-color)] text-[var(--text-primary)] shadow-lg shadow-slate-900/10 transition hover:scale-105"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm0 16a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm10-6a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM5 12a1 1 0 01-1 1H2a1 1 0 110-2h2a1 1 0 011 1zm13.07 5.07a1 1 0 010 1.41l-1.42 1.42a1 1 0 11-1.41-1.41l1.41-1.42a1 1 0 011.42 0zM7.76 7.76a1 1 0 010 1.41L6.34 10.6a1 1 0 11-1.41-1.42l1.41-1.41a1 1 0 011.42 0zm10.6-1.41a1 1 0 010 1.41l-1.41 1.41a1 1 0 11-1.42-1.41l1.42-1.41a1 1 0 011.41 0zM7.76 16.24a1 1 0 011.41 0l1.41 1.42a1 1 0 11-1.41 1.41l-1.41-1.41a1 1 0 010-1.42zM12 7a5 5 0 100 10 5 5 0 000-10z" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 14.5A8.5 8.5 0 1110.5 4a6.5 6.5 0 0010.5 10.5z" />
        </svg>
      )}
    </button>
  )
}
