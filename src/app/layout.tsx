"use client"
import type { Metadata } from 'next'
import '@/globals.css'
import Panel from '@components/Panel'
import Dock from '@components/Dock'
import { useState } from 'react'
import ControlPanel from '@components/ControlPanel'

// export const metadata: Metadata = {
//   title: 'Ubuntu React',
//   description: 'Ubuntu home recreated with React',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [isControlVisible, setIsControlVisible] = useState(false);

  return (
    <html lang="en">
      <body>
        <Panel controlState={isControlVisible} setControlState={setIsControlVisible} />
        <main className='relative h-[95vh]'>
          <Dock />
          {children}
          {isControlVisible ? <ControlPanel />: null}
        </main>
      </body>
    </html>
  )
}