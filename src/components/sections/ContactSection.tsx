'use client'

import { useState } from 'react'
import { links } from '@/lib/data'
import SectionHeader from './SectionHeader'

export default function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const subject = encodeURIComponent('Nuevo contacto desde el portfolio')
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`
    )
    window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <section
      id="contacto"
      className="section-anchor min-h-screen bg-[var(--surface-muted)] py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeader title="Contacto" subtitle="Hablemos" />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-[var(--border-color)] bg-[var(--card-background-color)] p-6"
          >
            <div className="grid gap-4">
              <label className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
                Nombre
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Tu nombre"
                  className="mt-2 w-full rounded-2xl border border-[var(--border-color)] bg-transparent px-4 py-3 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--primary-color)]"
                  required
                />
              </label>
              <label className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="tucorreo@ejemplo.com"
                  className="mt-2 w-full rounded-2xl border border-[var(--border-color)] bg-transparent px-4 py-3 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--primary-color)]"
                  required
                />
              </label>
              <label className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
                Mensaje
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Contame sobre tu idea o proyecto"
                  className="mt-2 h-32 w-full resize-none rounded-2xl border border-[var(--border-color)] bg-transparent px-4 py-3 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--primary-color)]"
                  required
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--primary-color)] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Enviar mensaje
            </button>
            {status === 'sent' && (
              <p
                className="mt-4 text-xs text-[var(--text-muted)]"
                role="status"
                aria-live="polite"
              >
                Se abrirá tu cliente de correo con el mensaje listo para enviar.
              </p>
            )}
          </form>
          <div className="space-y-4">
            <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--card-background-color)] p-6">
              <h3 className="text-base font-semibold text-[var(--text-primary)]">
                Canales directos
              </h3>
              <div className="mt-4 space-y-3 text-sm text-[var(--text-secondary)]">
                <p>
                  Email:{' '}
                  <a
                    href={`mailto:${links.email}`}
                    className="font-medium text-[var(--text-primary)] hover:text-[var(--primary-color)]"
                  >
                    {links.email}
                  </a>
                </p>
                <p>
                  WhatsApp:{' '}
                  <a
                    href={links.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--text-primary)] hover:text-[var(--primary-color)]"
                  >
                    {links.whatsapp}
                  </a>
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--card-background-color)] p-6">
              <h3 className="text-base font-semibold text-[var(--text-primary)]">
                Redes profesionales
              </h3>
              <div className="mt-4 flex flex-col gap-3 text-sm">
                {[
                  { label: 'LinkedIn', href: links.linkedin },
                  { label: 'GitHub', href: links.github },
                  { label: 'WhatsApp', href: links.whatsappLink },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between rounded-full border border-[var(--border-color)] px-4 py-2 text-[var(--text-secondary)] hover:border-[var(--primary-color)] hover:text-[var(--primary-color)]"
                  >
                    {item.label}
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 17L17 7M8 7h9v9"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
