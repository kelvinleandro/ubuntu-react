"use client"
import React from 'react'
import {dockIcons} from '@public/data'
import Image from 'next/image'
import { DockWrapper } from './index.style'

const Dock = () => {
  return (
    <DockWrapper>
      {dockIcons.map((icon, index) => {
        return <div key={index} className='dock-icon'>
          <Image
            src={icon.img}
            alt={icon.name}
            width={50}
            height={50}
          />
        </div>
      })}
    </DockWrapper>
  )
}

export default Dock