import { profile } from '@/lib/data'

export default function AboutPage() {
  return (
    <section className="space-y-6 py-10">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="max-w-prose text-gray-700 dark:text-gray-300">{profile.bio}</p>
    </section>
  )
}
