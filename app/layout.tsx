import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lexora - The Agentic Reasoning Framework | Mentox Labs',
  description: 'Makes Business Logic Survive Systems, Vendors And Time',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
