import { profile } from '@/lib/data'

export default function AboutPage() {
  return (
    <section className="space-y-4 p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-xl">
      <h2 className="text-3xl font-semibold">About Me</h2>
      <p>{profile.bio}</p>
    </section>
  )
}
