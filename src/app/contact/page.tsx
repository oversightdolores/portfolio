export default function ContactPage() {
  return (
    <section className="space-y-6 py-10">
      <h2 className="text-4xl font-bold mb-4">Contact</h2>
      <p className="max-w-prose text-gray-700 dark:text-gray-300">
        Reach me at{' '}
        <a href="mailto:you@example.com" className="underline text-blue-600 dark:text-blue-400">
          you@example.com
        </a>
      </p>
    </section>
  )
}
