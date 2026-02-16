import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lexora - The Agentic Reasoning Framework | Mentox Labs',
  description: 'Makes Business Logic Survive Systems, Vendors And Time',
  icons: {
    icon: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1771236911/MentoxLabs_ayezzd.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}