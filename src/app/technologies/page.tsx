// src/app/stack/page.tsx
'use client'

const stack = [
  { nombre: 'React Native', icon: '⚛️' },
  { nombre: 'React.js', icon: '⚛️' },
  { nombre: 'Node.js', icon: '🟢' },
  { nombre: 'Express', icon: '🚂' },
  { nombre: 'Prisma', icon: '🧬' },
  { nombre: 'PostgreSQL', icon: '🐘' },
  { nombre: 'Firebase', icon: '🔥' },
  { nombre: 'Socket.IO', icon: '🔌' },
  { nombre: 'WebRTC', icon: '📡' },
  { nombre: 'Zustand', icon: '🐻' },
  { nombre: 'TailwindCSS (NativeWind)', icon: '🌬️' },
  { nombre: 'TypeScript', icon: '🔷' },
]

export default function Technologies() {
  return (
    <main className="min-h-screen bg-[var(--background-color)] text-[var(--text-primary)]">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Stack & Herramientas
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Las tecnologías y herramientas con las que doy vida a mis proyectos.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {stack.map((tech) => (
            <div
              key={tech.nombre}
              className="tech-card flex flex-col items-center justify-center gap-4 p-6 rounded-md border border-transparent transition-all duration-300 hover:border-[var(--primary-color)] hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(61,152,244,0.1),0_4px_6px_-2px_rgba(61,152,244,0.05)]"
              style={{ backgroundColor: 'var(--card-background)' }}
            >
              <div className="text-[var(--primary-color)] text-3xl">{tech.icon}</div>
              <h3 className="text-base font-semibold text-[var(--text-primary)] text-center">
                {tech.nombre}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
