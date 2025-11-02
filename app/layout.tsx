import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IDOR Hunter - AI-Powered Bug Bounty Framework',
  description: 'Automated vulnerability discovery for IDOR and Authentication Bypass bugs',
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
