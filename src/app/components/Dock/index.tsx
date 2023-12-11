"use client"
import React from 'react'
import {dockIcons} from '@public/data'
import Image from 'next/image'
import { DockWrapper, DockItem } from './index.style'

const Dock = () => {
  return (
    <DockWrapper>
      {dockIcons.map((icon, index) => {
        return <DockItem key={index}>
          <Image
            src={icon.img}
            alt={icon.name}
            width={50}
            height={50}
          />
        </DockItem>
      })}
    </DockWrapper>
  )
}

export default Dock