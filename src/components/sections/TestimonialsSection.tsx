import { testimonials } from '@/lib/data'
import SectionHeader from './SectionHeader'

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="section-anchor min-h-screen py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeader title="Testimonios" subtitle="Lo que dicen" />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.quote}
              className="rounded-3xl border border-[var(--border-color)] bg-[var(--card-background-color)] p-6"
            >
              <blockquote className="text-base text-[var(--text-secondary)]">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-medium text-[var(--text-primary)]">
                {testimonial.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
