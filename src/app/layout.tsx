import { Manrope, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ThemeToggle from '../components/ThemeToggle'

const bodyFont = Manrope({ subsets: ['latin'], variable: '--font-body' })
const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata = {
  title: 'Nicolás Lo Giudice - Portfolio',
  description:
    'Desarrollador Full-Stack, Founder y arquitecto de soluciones IT en Buenos Aires.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="bg-[var(--background-color)] text-[var(--primary-text-color)]">
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <ThemeToggle />
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
