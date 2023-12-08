import type { Metadata } from 'next'
import './globals.css'
import Panel from './components/Panel'

export const metadata: Metadata = {
  title: 'Ubuntu React',
  description: 'Ubuntu home recreated with React',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Panel/>
        {children}
      </body>
    </html>
  )
}
