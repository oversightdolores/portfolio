'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="flex w-full items-center justify-between border-b border-[var(--border-color)] px-6 md:px-10 py-4 fixed top-0 left-0 right-0 bg-[var(--background-color)] bg-opacity-80 backdrop-blur-sm z-20">
      <div className="flex items-center gap-3">
        <svg className="size-6 text-[var(--accent-color)]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l6-5-6-5v10z" />
        </svg>
        <h2 className="text-xl font-bold tracking-tighter">NicolásDev</h2>
      </div>

      {/* Botón hamburguesa mobile */}
      <button
        className="md:hidden text-[var(--primary-text-color)] focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Navegación desktop */}
      <nav className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-[var(--secondary-text-color)] hover:text-[var(--primary-text-color)] text-sm font-medium">Inicio</Link>
        <Link href="/projects" className="text-[var(--secondary-text-color)] hover:text-[var(--primary-text-color)] text-sm font-medium">Proyectos</Link>
        <Link href="/about" className="text-[var(--primary-text-color)] text-sm font-bold">Sobre Mí</Link>
        <Link href="/contact" className="text-[var(--secondary-text-color)] hover:text-[var(--primary-text-color)] text-sm font-medium">Contacto</Link>
        <Link href="/technologies" className="text-[var(--secondary-text-color)] hover:text-[var(--primary-text-color)] text-sm font-medium">Tecnologías</Link>
      </nav>

      {/* Botón CV desktop */}
      <button className="hidden md:flex ml-4 items-center justify-center rounded-lg h-10 px-5 bg-[var(--accent-color)] text-white text-sm font-bold hover:bg-blue-600 transition-colors">
        Descargar CV
      </button>

      {/* Menú mobile */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[var(--background-color)] shadow-md md:hidden flex flex-col items-start px-6 py-4 space-y-4 z-10">
          <Link href="/" className="text-[var(--secondary-text-color)] hover:text-[var(--primary-text-color)] text-sm font-medium">Inicio</Link>
          <Link href="/projects" className="text-[var(--secondary-text-color)] hover:text-[var(--primary-text-color)] text-sm font-medium">Proyectos</Link>
          <Link href="/about" className="text-[var(--primary-text-color)] text-sm font-bold">Sobre Mí</Link>
          <Link href="/contact" className="text-[var(--secondary-text-color)] hover:text-[var(--primary-text-color)] text-sm font-medium">Contacto</Link>
          <Link href="/technologies" className="text-[var(--secondary-text-color)] hover:text-[var(--primary-text-color)] text-sm font-medium">Tecnologías</Link>
          <button className="w-full text-left mt-4 px-4 py-2 rounded bg-[var(--accent-color)] text-white text-sm font-bold hover:bg-blue-600 transition-colors">
            Descargar CV
          </button>
        </div>
      )}
    </header>
  )
}
