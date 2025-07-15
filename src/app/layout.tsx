import './globals.css'
import ThemeToggle from '@/components/ThemeToggle'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Personal portfolio site',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
        <ThemeToggle />
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  )
}
