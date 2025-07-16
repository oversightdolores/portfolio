import { testimonials } from '@/lib/data'

export default function TestimonialsPage() {
  return (
    <section className="space-y-6 py-10 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-center">Testimonials</h2>
      <ul className="space-y-2">
        {testimonials.map((t) => (
          <li key={t.author} className="border-l-4 border-blue-500 pl-4">
            <p className="italic">"{t.quote}"</p>
            <p className="text-sm text-right">- {t.author}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
