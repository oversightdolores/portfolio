import { testimonials } from '@/lib/data'

export default function TestimonialsPage() {
  return (
    <section className="space-y-4 p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-xl">
      <h2 className="text-3xl font-semibold">Testimonials</h2>
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
