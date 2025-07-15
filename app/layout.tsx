import './globals.css'
import { ReactNode } from 'react'
import Head from 'next/head'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-slate-50 text-gray-900">
        <header className="bg-slate-800 text-slate-100 p-4">
          <nav aria-label="Main navigation">
            <ul className="flex space-x-4">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main className="p-4">
          {children}
          <section id="contact" className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <form aria-label="contact form" className="space-y-2">
              <div>
                <label htmlFor="name" className="block">Name</label>
                <input id="name" type="text" className="border border-slate-300 p-2 w-full" />
              </div>
              <div>
                <label htmlFor="email" className="block">Email</label>
                <input id="email" type="email" className="border border-slate-300 p-2 w-full" />
              </div>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2">Submit</button>
            </form>
          </section>
        </main>
        <footer className="bg-slate-800 text-slate-100 p-4 text-center">&copy; 2023</footer>
      </body>
    </html>
  )
}
