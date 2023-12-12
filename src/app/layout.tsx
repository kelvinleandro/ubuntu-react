"use client"
import '@/globals.css'
import Panel from '@components/Panel'
import Dock from '@components/Dock'
import { useState } from 'react'
import ControlPanel from '@components/ControlPanel'
import NotificationCenter from '@components/NotificationCenter'
import { HandleFunction } from '@public/types'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [isControlVisible, setIsControlVisible] = useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const handleControlPanel:HandleFunction = () => {
    setIsControlVisible(!isControlVisible)
  }
  
  const handleNotificationCenter:HandleFunction = () => {
    setIsNotificationVisible(!isNotificationVisible)
  }

  return (
    <html lang="en">
      <head>
        <title>Ubuntu React</title>
      </head>
      <body>
        <Panel
          handleControlVisibility={handleControlPanel}
          handleNotificationVisibility={handleNotificationCenter}
        />
        <main className='relative h-[95vh] w-screen'>
          <Dock />
          {children}
          {isControlVisible && !isNotificationVisible ? <ControlPanel />: null}
          {isNotificationVisible && !isControlVisible ? <NotificationCenter />: null}
        </main>
      </body>
    </html>
  )
}