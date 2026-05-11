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

const siteUrl = 'https://crazedev04.github.io/nicolaslogiudice'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Nicolás Lo Giudice | Full-Stack Developer',
  description:
    'Desarrollo apps web y mobile listas para producción: Next.js, React Native, APIs, tiempo real, infraestructura y automatización.',
  keywords: [
    'Nicolás Lo Giudice',
    'Full-Stack Developer',
    'React Native',
    'Next.js',
    'Software Argentina',
    'Desarrollo web',
    'Desarrollo mobile',
  ],
  authors: [{ name: 'Nicolás Lo Giudice' }],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: `${siteUrl}/logos/icon.svg`,
    shortcut: `${siteUrl}/logos/icon.svg`,
    apple: `${siteUrl}/logos/icon.svg`,
  },
  openGraph: {
    url: siteUrl,
    siteName: 'Nicolás Lo Giudice Portfolio',
    title: 'Nicolás Lo Giudice | Full-Stack Developer',
    description:
      'Productos digitales web y mobile listos para producción, con foco en seguridad, tiempo real y resultados de negocio.',
    type: 'website',
    locale: 'es_AR',
    images: ['https://crazedev04.github.io/nicolaslogiudice/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nicolás Lo Giudice | Full-Stack Developer',
    description:
      'Apps web y mobile listas para producción: rápidas, seguras y pensadas para negocios reales.',
    images: ['https://crazedev04.github.io/nicolaslogiudice/og-image.png'],
  },
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
