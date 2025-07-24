// 3. src/app/layout.tsx
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ThemeToggle from '../components/ThemeToggle'

export const metadata = {
  title: 'Nicolás Lo Giudice - Portfolio',
  description: 'Desarrollador Full Stack y mobile',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[var(--background-color)] text-[var(--primary-text-color)] font-sans">
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
        <ThemeToggle />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}