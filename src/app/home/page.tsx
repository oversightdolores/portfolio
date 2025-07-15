import { profile } from '@/lib/data'

export default function LandingPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 text-center py-20">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Hi, I'm {profile.name}
      </h1>
      <p className="text-2xl text-gray-700 dark:text-gray-300">{profile.role}</p>
      <p className="max-w-prose text-lg text-gray-600 dark:text-gray-400">{profile.bio}</p>
    </section>
  )
}
