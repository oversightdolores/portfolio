export default function ContactPage() {
  return (
    <section className="space-y-6 py-10 max-w-prose mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-center">Contact</h2>
      <p className="text-gray-700 dark:text-gray-300 text-center">
        Feel free to reach out via email at{' '}
        <a href="mailto:you@example.com" className="underline text-blue-600 dark:text-blue-400">
          you@example.com
        </a>
        . You can also find me on{' '}
        <a href="https://linkedin.com" className="underline text-blue-600 dark:text-blue-400">
          LinkedIn
        </a>
        .
      </p>
    </section>
  )
}
