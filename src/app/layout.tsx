import type { Metadata } from 'next'
import './globals.css'
import Panel from './components/Panel'
import Dock from './components/Dock'

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
        <main className='relative'>
          <Dock />
          {children}
        </main>
      </body>
    </html>
  )
}
