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

  const [isControlVisible, setIsControlVisible] = useState<boolean>(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState<boolean>(false);

  const handleControlPanel:HandleFunction = () => {
    setIsControlVisible(!isControlVisible)
    setIsNotificationVisible(false)
  }
  
  const handleNotificationCenter:HandleFunction = () => {
    setIsNotificationVisible(!isNotificationVisible)
    setIsControlVisible(false)
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
          {isControlVisible ? <ControlPanel />: null}
          {isNotificationVisible ? <NotificationCenter />: null}
        </main>
      </body>
    </html>
  )
}