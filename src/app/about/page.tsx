import { profile } from '@/lib/data'

export default function AboutPage() {
  return (
    <section className="space-y-6 py-10 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
      <div className="flex flex-col items-center gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/profile.svg"
          alt={profile.name}
          className="w-32 h-32 rounded-full border border-gray-300 dark:border-gray-700"
        />
        <p className="max-w-prose text-center text-gray-700 dark:text-gray-300">
          {profile.bio}
        </p>
      </div>
    </section>
  )
}
