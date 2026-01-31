'use client'

import Link from 'next/link'
import { useState } from 'react'
import { withBasePath } from '@/lib/paths'

const navItems = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Sobre mí', href: '/#sobre-mi' },
  { label: 'Proyectos', href: '/#proyectos' },
  { label: 'Stack', href: '/#stack' },
  { label: 'Experiencia', href: '/#experiencia' },
  { label: 'Servicios', href: '/#servicios' },
 /*  { label: 'Testimonios', href: '/#testimonios' }, */
  { label: 'Contacto', href: '/#contacto' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-20 flex w-full items-center justify-between border-b border-[var(--border-color)] bg-[var(--background-color)]/80 px-6 py-4 backdrop-blur-sm md:px-10">
      <Link href="/#inicio" className="flex items-center gap-3">
        <img
          src={withBasePath('/logos/icon.svg')}
          alt="Logo NL"
          className="h-18 w-18"
          loading="eager"  
        />
        <h2 className="text-base font-semibold tracking-tight text-[var(--text-primary)] sm:text-lg">
          Nicolás Lo Giudice
        </h2>
      </Link>

      <button
        className="md:hidden text-[var(--primary-text-color)] focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <nav className="hidden items-center gap-6 md:flex">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-sm font-medium text-[var(--text-secondary)] transition hover:text-[var(--primary-color)]"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link
        href="/cv.pdf"
        className="hidden h-10 items-center justify-center rounded-full bg-[var(--primary-color)] px-5 text-sm font-semibold text-white transition hover:brightness-110 md:flex"
      >
        Descargar CV
      </Link>

      {menuOpen && (
        <div className="absolute left-0 top-full z-10 flex w-full flex-col items-start space-y-4 bg-[var(--background-color)] px-6 py-4 shadow-md md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/cv.pdf"
            onClick={() => setMenuOpen(false)}
            className="mt-2 w-full rounded-full bg-[var(--primary-color)] px-4 py-2 text-center text-sm font-semibold text-white"
          >
            Descargar CV
          </Link>
        </div>
      )}
    </header>
  )
}
