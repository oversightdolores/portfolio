import { profile } from '@/lib/data'

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 text-center p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-xl">
      <h1 className="text-4xl font-bold">Hi, I'm {profile.name}</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300">{profile.role}</p>
      <p className="max-w-prose">{profile.bio}</p>
    </section>
  )
}
