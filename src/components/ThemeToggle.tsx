'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  if (!mounted) return null

  const toggle = () => {
    console.log('toggle', toggle)
    const isDark = document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggle}
      className="fixed bottom-20 right-4 p-2 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-full"
      aria-label="Toggle Theme"
    >
      🌗
    </button>
  )
}
