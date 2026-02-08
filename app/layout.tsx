import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '株式会社tsumugite - Traditional Design Works',
  description: 'RENOVATION, SHOP DESIGN, NEWBUILD HOUSE, FURNITURE.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}