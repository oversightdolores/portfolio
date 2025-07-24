'use client'

import Image from 'next/image'
import Projects from './projects/page'
import Technologies from './technologies/page'
import Contacto from './contact/page'
import About from './about/page'
import Home from './home/page'

export default function App() {
  return (
    <main className="bg-[var(--background-color)] text-[var(--text-primary)] scroll-smooth">
      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24">
       <Home />
      </section>

      {/* Sobre Mí */}
      <section id="sobre-mi" className="flex flex-col md:flex-row gap-10 px-6 py-20 items-center text-blue-500 dark:text-gray-100 max-w-6xl mx-auto">
        <div className="flex-1">
         <About />
        </div>
       
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="px-6 py-20 bg-[var(--accent-color)]">
        
        <Projects/>
      </section>

      {/* Stack & Herramientas */}
      <section id="stack" className="px-6 py-20">
        <Technologies />
      </section>

      {/* Contacto (opcional) */}
      <section id="contacto" className="px-6 py-20 bg-[var(--accent-color)] text-center">
        <Contacto />
      </section>
    </main>
  )
}
