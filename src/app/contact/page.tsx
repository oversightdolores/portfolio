'use client'

import { useState } from 'react'

export default function Contacto() {
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTimeout(() => {
      setEnviado(true)
      setEmail('')
      setMensaje('')
    }, 1000)
  }

  return (
    <section className="min-h-screen px-6 py-20 bg-[var(--background-color)] text-[var(--primary-text-color)]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Contacto</h1>
        <p className="text-[var(--text-secondary)] text-center mb-10">
          Podés escribirme por redes o dejar tu mensaje directo. ¡Estoy abierto a colaboraciones!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
              Tu Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md border border-[var(--border-color)] bg-[var(--card-background-color)] text-[var(--primary-text-color)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              placeholder="tucorreo@ejemplo.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              className="w-full rounded-md border border-[var(--border-color)] bg-[var(--card-background-color)] text-[var(--primary-text-color)] px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              placeholder="Contame un poco sobre tu idea..."
              required
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-[var(--primary-color)] text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-[var(--primary-color)] transition-colors"
          >
            Enviar
          </button>
          {enviado && (
            <p className="text-sm text-green-400 mt-2">
              Gracias por tu mensaje. Te responderé pronto :)
            </p>
          )}
        </form>

        <div className="mt-16 text-center space-x-6">
          <a
            href="https://github.com/tuperfil"
            target="_blank"
            className="inline-block text-[var(--text-secondary)] hover:text-[var(--primary-text-color)] transition"
            rel="noopener noreferrer"
          >
            <i className="material-icons-outlined align-middle">code</i> GitHub
          </a>
          <a
            href="mailto:tucorreo@example.com"
            className="inline-block text-[var(--text-secondary)] hover:text-[var(--primary-text-color)] transition"
          >
            <i className="material-icons-outlined align-middle">mail</i> Email
          </a>
        </div>
      </div>
    </section>
  )
}
