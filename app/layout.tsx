import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Paylock',
  description: 'The most trusted escrow API for platforms and marketplaces. Secure transactions with condition-based releases.',
  generator: 'Paylock',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
