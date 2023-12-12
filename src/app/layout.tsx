"use client"
import '@/globals.css'
import Panel from '@components/Panel'
import Dock from '@components/Dock'
import { useState } from 'react'
import ControlPanel from '@components/ControlPanel'
import NotificationCenter from '@components/NotificationCenter'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [isControlVisible, setIsControlVisible] = useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Ubuntu React</title>
      </head>
      <body>
        <Panel 
          controlState={isControlVisible} 
          setControlState={setIsControlVisible}
          notificationState={isNotificationVisible}
          setNotificationState={setIsNotificationVisible} 
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