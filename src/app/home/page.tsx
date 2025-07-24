'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 bg-[var(--background-color)] text-[var(--text-light)] relative overflow-hidden"
      style={{
        fontFamily: `'Manrope', sans-serif`,
      }}
    >
      {/* Fondo con grilla */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(var(--secondary-gray)_1px,transparent_1px)] [background-size:16px_16px]" />

      <main className="text-center w-full max-w-2xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 fade-in text-glow cursor-default">

          Nicolás Lo Giudice
        </h1>
        <p className="text-xl md:text-2xl text-[var(--text-muted)] fade-in fade-in-delay-1">
          Desarrollador Full Stack
        </p>
        <p className="mt-6 text-lg md:text-xl fade-in fade-in-delay-2">
          Creando aplicaciones móviles intuitivas y potentes con las últimas tecnologías del ecosistema moderno.
        </p>

        {/* Botones */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 fade-in fade-in-delay-3">
          <a
            href="/contact"
            className="w-full sm:w-auto px-8 py-3 rounded-md text-white bg-[var(--primary-color)] hover:bg-blue-500 transition-colors"
          >
            Contactar
          </a>
          <a
            href="https://github.com/oversightdolores"
            target="_blank"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-3 rounded-md bg-[var(--secondary-gray)] text-[var(--text-light)] hover:bg-gray-600 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477... (acortado)"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/nicolas-lo-giudice/"
            target="_blank"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-3 rounded-md bg-[var(--secondary-gray)] text-[var(--text-light)] hover:bg-gray-600 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239... (acortado)" />
            </svg>
            LinkedIn
          </a>
        </div>
      </main>
    </section>
  )
}
