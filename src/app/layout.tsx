"use client"
import '@/globals.css'
import Panel from '@components/Panel'
import Dock from '@components/Dock'
import { useState, createContext  } from 'react'
import ControlPanel from '@components/ControlPanel'
import NotificationCenter from '@components/NotificationCenter'
import { HandleFunction, ContextProps } from '@public/types'

const defaultContext: ContextProps = {
  handleControlPanel: () => {},
  handleNotificationCenter: () => {},
};

export const Context = createContext<ContextProps>(defaultContext);

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
        <Context.Provider value={{ handleControlPanel, handleNotificationCenter }}>
          <Panel />
        </Context.Provider>
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